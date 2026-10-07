import { useTheme, type Theme } from "./ThemeProvider";

export function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <footer
      className="mt-auto border-t border-theme py-8"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm text-muted">
          Сайт является частью{" "}
          <span style={{ color: "var(--accent-cyan)" }}>TZ.System®</span>
        </p>
        <p className="mt-1 text-xs text-muted">
          Все права защищены. © {new Date().getFullYear()} TrioZ Entertainment
        </p>
        <label className="mt-4 inline-flex items-center gap-2 text-xs text-muted">
          Тема
          <select
            aria-label="Тема оформления"
            value={theme}
            onChange={(event) => setTheme(event.target.value as Theme)}
            className="rounded-md border border-theme px-2 py-1"
            style={{ backgroundColor: "var(--bg-card)", color: "var(--fg)" }}
          >
            <option value="dark">Тёмная</option>
            <option value="light">Светлая</option>
            <option value="mono">Монохромная тёмная</option>
            <option value="mono-lite">Монохромная светлая</option>
          </select>
        </label>
      </div>
    </footer>
  );
}
