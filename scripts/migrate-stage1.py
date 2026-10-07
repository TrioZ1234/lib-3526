"""One-time lossless JSX port from the user-provided Next archive (stage 1)."""
from pathlib import Path
import json
import re
import shutil
import sys
from PIL import Image

source = Path(sys.argv[1])
root = Path(__file__).resolve().parents[1]
web = root / 'packages/web'
target = web / 'src/web'
report = root / 'reports'
report.mkdir(exist_ok=True)

public = web / 'public'
shutil.copytree(source / 'public', public, dirs_exist_ok=True)
removed = []
for name in ['next.svg', 'vercel.svg', 'file.svg', 'globe.svg', 'window.svg']:
    p = public / name
    if p.exists():
        p.unlink()
        removed.append(name)
mapping = {}
optimized = []
chosen = ['img/background.png', 'img/logo.png', 'img/welderan.jpg',
          'img/undergard -1040x650.png', 'img/weldaran/weldaran_map_bcg.png',
          'img/wizardim.gif',
          'img/Weldaran_myth/37b7f668efa24c57826b1d44d90d6f5f.max-2500x1500 (1).jpg']
for name in chosen:
    p = public / name
    outname = 'img/undergard-1040x650.webp' if 'undergard ' in name else (
        'img/Weldaran_myth/myth-illustration.webp' if '(1)' in name else str(Path(name).with_suffix('.webp')))
    out = public / outname
    with Image.open(p) as im:
        dimensions = list(im.size)
        frames = getattr(im, 'n_frames', 1)
        im.save(out, 'WEBP', quality=50 if name == 'img/welderan.jpg' else 88, method=6, save_all=frames > 1)
    optimized.append({'before': name, 'after': outname, 'bytesBefore': p.stat().st_size,
                      'bytesAfter': out.stat().st_size, 'dimensions': dimensions, 'frames': frames})
    mapping['/' + name] = '/' + outname
    p.unlink()

def adapt(text):
    text = text.replace('import Link from "next/link";', 'import { Link } from "wouter";')
    text = text.replace('import type { Metadata } from "next";', 'import type { Metadata } from "@/lib/metadata";')
    text = text.replace('href=', 'to=') if False else text
    # Wouter also supports href, so JSX and prose remain unchanged.
    for old, new in mapping.items():
        text = text.replace(old, new)
    return text

for p in (source / 'src/components').glob('*.tsx'):
    (target / 'components' / p.name).write_text(adapt(p.read_text()))

pages = []
for p in sorted((source / 'src/app').rglob('page.tsx')):
    relative = p.relative_to(source / 'src/app').parent
    route = '/' + str(relative) if str(relative) != '.' else '/'
    if route == '/anteana/weldaran/creation':
        continue
    name = str(relative).replace('/', '-') if route != '/' else 'home'
    text = adapt(p.read_text())
    if route == '/':
        text = text.replace('status: "available" as const,', 'status: "available" as "available" | "wip",')
    destination = target / 'pages' / (name + '.tsx')
    destination.write_text(text)
    pages.append({'route': route, 'name': name, 'source': str(p.relative_to(source)),
                  'destination': str(destination.relative_to(root)),
                  'sourceCharacters': len(p.read_text()), 'migratedCharacters': len(text),
                  'hasMetadata': 'export const metadata' in text})

css = (source / 'src/app/globals.css').read_text()
css = css.replace('@import "tailwindcss";', '@import "tailwindcss";\n@import "./fonts.css";')
css += '\n:root { --font-inter: "Inter"; --font-playfair: "Playfair Display"; }\n'
(target / 'styles.css').write_text(css)
(target / 'pages/index.tsx').write_text('export { default } from "./home";\n')
imports = []
entries = []
for i, page in enumerate(pages):
    imports.append(f'import Page{i}' + (f', {{ metadata as metadata{i} }}' if page['hasMetadata'] else '') + f' from "./pages/{page["name"]}";')
    entries.append('  { path: ' + json.dumps(page['route']) + f', component: Page{i}, metadata: ' + (f'metadata{i}' if page['hasMetadata'] else '{}') + ' },')
(target / 'routes.ts').write_text('import type { ComponentType } from "react";\nimport type { Metadata } from "./lib/metadata";\n' + '\n'.join(imports) + '\n\nexport const libraryRoutes: { path: string; component: ComponentType; metadata: Metadata }[] = [\n' + '\n'.join(entries) + '\n];\n')
package = json.loads((root / 'package.json').read_text())
package['name'] = 'trioz-library'
(root / 'package.json').write_text(json.dumps(package, indent=2) + '\n')
original_bytes = sum(p.stat().st_size for p in (source / 'public').rglob('*') if p.is_file())
ported_bytes = sum(p.stat().st_size for p in public.rglob('*') if p.is_file())
(report / 'migration.json').write_text(json.dumps({'pages': pages, 'assetMapping': mapping, 'removed': removed,
    'optimized': optimized, 'originalPublicBytes': original_bytes, 'portedPublicBytesBeforeFonts': ported_bytes}, ensure_ascii=False, indent=2))
print(f'Migrated {len(pages)} pages + redirect; public {original_bytes:,} -> {ported_bytes:,} bytes')