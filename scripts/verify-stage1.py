from pathlib import Path
import asyncio
import json
import re
from playwright.async_api import async_playwright

root = Path(__file__).resolve().parents[1]
report = json.loads((root / 'reports/migration.json').read_text())
source = Path('/home/user/trioz-original')

def jsx_body(text):
    return text[text.index('export default function'):]

async def main():
    results = []
    errors = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
        page = await browser.new_page(viewport={'width': 1440, 'height': 1000})
        page.on('pageerror', lambda error: errors.append(str(error)))
        for item in report['pages']:
            original = jsx_body((source / item['source']).read_text())
            migrated = jsx_body((root / item['destination']).read_text())
            assert original == migrated, f'JSX body changed: {item["route"]}'
            response = await page.goto('http://localhost:4200' + item['route'], wait_until='networkidle')
            await page.locator('main h1').wait_for()
            heading = await page.locator('main h1').inner_text()
            assert response.status == 200
            assert await page.locator('main').inner_text()
            broken = await page.locator('img').evaluate_all('(images) => images.filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src)')
            assert not broken, broken
            links = await page.locator('main a').evaluate_all('(links) => links.map(a => a.getAttribute("href")).filter(h => h?.startsWith("/"))')
            known = {item['route'] for item in report['pages']} | {'/anteana/weldaran/creation'}
            assert all(link in known for link in links), links
            results.append({'route': item['route'], 'status': response.status, 'heading': heading,
                            'jsxBodyUnchanged': True, 'jsxCharacters': len(original),
                            'visibleMainCharacters': len(await page.locator('main').inner_text())})
        await page.goto('http://localhost:4200/anteana/weldaran/creation', wait_until='networkidle')
        await page.wait_for_url('**/anteana/creation')
        redirect = page.url
        await page.goto('http://localhost:4200/anteana/weldaran', wait_until='networkidle')
        atlas = page.locator('a[href="https://int-veld.trioz.ru"]')
        assert await atlas.get_attribute('target') == '_blank'
        assert 'noopener' in await atlas.get_attribute('rel')
        await page.goto('http://localhost:4200/', wait_until='networkidle')
        await page.screenshot(path=str(root / 'reports/home-desktop.png'), full_page=True)
        themes = []
        for theme in ['dark', 'light', 'mono', 'mono-lite']:
            await page.get_by_label('Тема оформления').select_option(theme)
            assert await page.evaluate('document.documentElement.className') == theme
            await page.reload(wait_until='networkidle')
            assert await page.get_by_label('Тема оформления').input_value() == theme
            themes.append({'theme': theme, 'persistsAfterReload': True,
                           'background': await page.evaluate('getComputedStyle(document.body).backgroundColor')})
        await page.get_by_label('Тема оформления').select_option('dark')
        await page.set_viewport_size({'width': 390, 'height': 844})
        mobile = []
        for item in report['pages']:
            await page.goto('http://localhost:4200' + item['route'], wait_until='networkidle')
            assert await page.evaluate('document.documentElement.scrollWidth <= innerWidth'), item['route']
            mobile.append(item['route'])
        await page.goto('http://localhost:4200/', wait_until='networkidle')
        await page.screenshot(path=str(root / 'reports/home-mobile.png'), full_page=True)
        await page.goto('http://localhost:4200/no-such-world', wait_until='networkidle')
        assert await page.locator('main h1').inner_text() == 'Страница не найдена'
        fonts = await page.evaluate('document.fonts.ready.then(() => ({inter:document.fonts.check("400 16px Inter"),playfair:document.fonts.check("700 24px \'Playfair Display\'")}))')
        assert fonts['inter'] and fonts['playfair'], fonts
        await browser.close()
    assert not errors, errors
    output = {'routes': results, 'redirect': redirect, 'themes': themes, 'mobileNoOverflow': mobile,
              'atlas': {'href': 'https://int-veld.trioz.ru', 'target': '_blank'},
              'fonts': fonts, 'browserErrors': errors, 'notFoundView': True}
    (root / 'reports/verification.json').write_text(json.dumps(output, ensure_ascii=False, indent=2))
    print(f'PASS: {len(results)} pages unchanged, redirect, atlas, 4 persistent themes, {len(mobile)} mobile routes, fonts, 404 view; no browser errors')

asyncio.run(main())