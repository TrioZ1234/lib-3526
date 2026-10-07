from pathlib import Path
import json
import zipfile

root = Path(__file__).resolve().parents[1]
report_dir = root / 'stage1.report'
report_dir.mkdir(exist_ok=True)
migration_path = root / 'reports/migration.json'
data = json.loads(migration_path.read_text())
public_size = sum(p.stat().st_size for p in (root / 'packages/web/public').rglob('*') if p.is_file())
data['finalPublicBytesIncludingLocalFonts'] = public_size
data['reductionPercent'] = round(100 * (1 - public_size / data['originalPublicBytes']), 1)
migration_path.write_text(json.dumps(data, ensure_ascii=False, indent=2))

lines = [
    '# Библиотека TrioZ — результат этапа 1', '',
    '**Этап 1 завершён на согласованном стеке Runable.** Сохранены 23 страницы и старый URL-редирект; тела JSX всех страниц сравнены с исходниками и совпадают дословно. Исходный архив и RTF не изменялись.', '',
    f'Вес `public/`: **{data["originalPublicBytes"] / 1048576:.2f} → {public_size / 1048576:.2f} МиБ**, сокращение **{data["reductionPercent"]}%**, включая добавленные локальные шрифты.', '',
    '## Проверено', '',
    '- `bun install --frozen-lockfile` — успешно.',
    '- `bun run build`, `bun run lint`, `bun run typecheck` — успешно.',
    '- 23 страницы проверены браузером и на dev-сервере, и на production-сборке: все загрузились, изображений с ошибками нет, внутренних ссылок на неизвестные страницы нет.',
    '- 23 страницы при ширине 390px — без горизонтального переполнения.',
    '- Четыре темы меняются и сохраняются после перезагрузки.',
    '- Редирект `/anteana/weldaran/creation` открывает `/anteana/creation`.',
    '- Атлас: `https://int-veld.trioz.ru`, новая вкладка, `noopener noreferrer`.',
    '- Inter и Playfair Display загружаются локально; браузерных JS-ошибок нет.',
    '- В production проверены анимация wizardim (33 кадра, 658×658) и большая карта (10157×7205).', '',
    '## Изменения файлов', '',
    '### Вместо исходных Next.js-файлов', '',
    '| Исходный файл | Новый файл |', '|---|---|',
]
for page in data['pages']:
    lines.append(f'| `{page["source"]}` | `{page["destination"]}` |')
lines += [
    '| `src/app/anteana/weldaran/creation/page.tsx` | Редирект в `packages/web/src/web/components/library.tsx` |',
    '| `src/app/layout.tsx` | `packages/web/src/web/app.tsx` + `packages/web/index.html` |',
    '| `src/app/globals.css` | `packages/web/src/web/styles.css` |',
    '| `src/components/Header.tsx` | `packages/web/src/web/components/Header.tsx` (Link Wouter, новый путь логотипа) |',
    '| `src/components/Footer.tsx` | `packages/web/src/web/components/Footer.tsx` (+ переключатель тем) |',
    '| `src/components/ThemeProvider.tsx` | `packages/web/src/web/components/ThemeProvider.tsx` (без изменения логики) |', '',
    '### Дополнено в управляемом шаблоне', '',
    '- `package.json` — имя `trioz-library`; `build:web` сохраняет анимацию и карту.',
    '- `packages/web/package.json` — обязательный post-build `preserve-assets.ts`.',
    '- `.gitignore` — проектные скрипты не исключаются из git.',
    '- `packages/web/src/web/app.tsx` — исходные шапка/подвал/темы и маршруты.',
    '- `packages/web/src/web/pages/index.tsx` — только реэкспорт главной страницы.',
    '- `packages/web/index.html` — русский язык, название, favicon и базовые метаданные.',
    '- `packages/web/public/favicon.ico` — иконка из исходного проекта; стандартный `og-image.png` шаблона удалён.', '',
    '### Добавлено', '',
    '- `packages/web/src/web/routes.ts` — существующие URL и страницы.',
    '- `packages/web/src/web/lib/metadata.ts` — тип метаданных без Next.js.',
    '- `packages/web/src/web/components/library.tsx` — выбор страницы, клиентские метаданные, прокрутка, редирект, 404-экран.',
    '- `packages/web/src/web/fonts.css` и `packages/web/public/fonts/trioz-font-0.woff2` … `trioz-font-7.woff2` — локальные шрифты.',
    '- `scripts/migrate-stage1.py`, `download-fonts.py`, `verify-stage1.py`, `preserve-assets.ts`, `package-stage1.py`.',
    '- `README.md`, `design.md`, `task.md`, `reports/migration.json`, `verification.json`, `verification-development.json`, `verification-production.json`, `home-desktop.png`, `home-mobile.png`, этот отчёт.', '',
    '### Изображения', '',
    '| Исходный путь в public | Новый путь | До → после, КиБ |', '|---|---|---|',
]
for image in data['optimized']:
    lines.append(f'| `{image["before"]}` | `{image["after"]}` | {image["bytesBefore"] / 1024:.0f} → {image["bytesAfter"] / 1024:.0f} |')
lines += [
    '', 'Удалены `public/next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`. Файлы с пробелами/скобками переименованы; карта соответствий сохранена в `reports/migration.json`. Остальные исходные изображения сохранены.', '',
    '## Что проверить руками', '',
    '1. Главная → Антэана → Вельд\'Эран → Расы / Фракции / Мифы; открыть каждую статью.',
    '2. Открыть Сотворение мира, Шент\'Ар, Андэргард; сверить тексты с архивом.',
    '3. Проверить шапку, логотип, карточки и glow; сравнить с прежним сайтом.',
    '4. Переключить четыре темы в подвале, перезагрузить; повторить на телефоне.',
    '5. Нажать «Открыть атлас» — новая вкладка `int-veld.trioz.ru`.',
    '6. Ввести старый `/anteana/weldaran/creation`; проверить переход к Сотворению мира.',
    '7. Проверить Верфаль и Кор\'Онос (сохранён исходный контент), экран `/in-progress` и несуществующий URL.',
    '8. При визуальной приёмке отдельно оценить качество WebP большой карты; сохранено полное разрешение, сжатие с потерями.', '',
    '## Ограничения и отличие от исходного ТЗ', '',
    '- Это не Next.js/Prisma-проект. Команды `npm run dev/build`, Prisma и исходная схема nginx/порт 3000 не сохранены. Используются Bun/Vite/Hono и порт управляемого проекта 4200.',
    '- На этом этапе база и админка отсутствуют; RTF не импортировался. Тексты пока в коде, не в базе.',
    '- Метаданные обновляются клиентом. Редирект клиентский (не HTTP 301), 404 — экран в SPA (HTML-оболочка возвращает HTTP 200). Серверное SEO — отдельная задача следующих этапов.',
    '- Цвет Антэаны сохранён из архива: `#5ec8d8`, не `#00f0ff` из текстового ТЗ.',
    '- Единственное дополнение исходного UI — переключатель тем. Также присутствует штатный бейдж Runable.',
    '- Vite предупреждает о JS-чанке 613 kB (168 kB gzip), Node — о deprecated `module.register()`. Ошибок сборки нет; предупреждения не скрыты.',
    '- Production проверялся локально; публикация на `lib.trioz.ru` и настройка вашего сервера не выполнялись.', '',
    '## Протоколы', '',
    'Первичные источники: приложенный ZIP, `reports/migration.json`, браузерные протоколы `reports/verification-development.json` и `reports/verification-production.json`. Метод проверки текста — точное сравнение тела функции страницы, включая JSX, со старым исходником; скрипт не переписывает лор.', '',
    'Архив содержит управляемый проект и протоколы. Исключены зависимости, build output, файлы базы и `.env`/секреты. Для запуска см. `README.md`. Следующий этап не начат.',
]
(report_dir / 'content.md').write_text('\n'.join(lines) + '\n')

archive = root.parent / 'trioz-library-stage1.zip'
skip_parts = {'node_modules', '.next', 'dist', 'dist-electron', '.turbo', '.git', '.expo', '.cache'}
skip_suffixes = {'.db', '.sqlite', '.sqlite3', '.tsbuildinfo', '.log', '.pem', '.key'}
with zipfile.ZipFile(archive, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=6) as z:
    for p in sorted(root.rglob('*')):
        if not p.is_file():
            continue
        relative = p.relative_to(root)
        if any(part in skip_parts for part in relative.parts):
            continue
        if p.name.startswith('.env') or p.suffix in skip_suffixes or p.name.endswith(('-wal', '-shm')):
            continue
        z.write(p, 'trioz-library/' + str(relative))
with zipfile.ZipFile(archive) as z:
    assert z.testzip() is None
    assert not any('/node_modules/' in name or '/.env' in name or name.endswith('.db') for name in z.namelist())
    assert 'trioz-library/scripts/preserve-assets.ts' in z.namelist()
    assert 'trioz-library/.runable/ports.json' in z.namelist()
    print(f'ZIP verified: {len(z.namelist())} files, {archive.stat().st_size:,} bytes')
print(f'public: {data["originalPublicBytes"]:,} -> {public_size:,} bytes; {data["reductionPercent"]}% smaller')