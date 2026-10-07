from pathlib import Path
import re
import httpx
from fontTools.ttLib import TTFont

root = Path(__file__).resolve().parents[1]
directory = root / 'packages/web/public/fonts'
directory.mkdir(exist_ok=True)
url = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap'
with httpx.Client(follow_redirects=True, timeout=60) as client:
    response = client.get(url, headers={'User-Agent': 'Mozilla/5.0'})
    response.raise_for_status()
    css = response.text
    for i, remote in enumerate(dict.fromkeys(re.findall(r'url\((https://[^)]+)\)', css))):
        extension = '.woff2' if '.woff2' in remote else '.ttf'
        name = f'trioz-font-{i}{extension}'
        result = client.get(remote)
        result.raise_for_status()
        (directory / name).write_bytes(result.content)
        if extension == '.ttf':
            font = TTFont(directory / name)
            font.flavor = 'woff2'
            converted = Path(name).with_suffix('.woff2').name
            font.save(directory / converted)
            (directory / name).unlink()
            name = converted
        css = css.replace(remote, '/fonts/' + name)
    css = css.replace("format('truetype')", "format('woff2')")
    (root / 'packages/web/src/web/fonts.css').write_text(css)
    print(f'Downloaded {i + 1} font files')