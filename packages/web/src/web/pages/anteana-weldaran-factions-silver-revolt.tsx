import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Серебряный Мятеж",
  description: "Серебряный Мятеж — фракция Вельд'Эрана",
};

export default function Page() {
  return (
    <article className="theme-anteana mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:underline">Библиотека</Link>
        <span className="mx-2">/</span>
        <Link href="/anteana" className="hover:underline">Антэана</Link>
        <span className="mx-2">/</span>
        <Link href="/anteana/weldaran" className="hover:underline">Вельд&apos;Эран</Link>
        <span className="mx-2">/</span>
        <Link href="/anteana/weldaran/factions" className="hover:underline">Фракции</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "var(--accent-cyan)" }}>Серебряный Мятеж</span>
      </nav>
      <header className="mb-10">
        <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "var(--dim-anteana)" }} />
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--dim-anteana)" }}>
          Серебряный Мятеж
        </h1>
      </header>
      <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--fg)" }}>

        <p className="text-sm text-muted">Раса: Люди · Столица: Сильмер · Потенциальный союзник: Двирэн</p>
        <p>Сражение на болоте Вест между Империей и Республикой заставило многих сложить оружие. Часть ушла в деревушку, ставшую городом Двирэн. Остальные обогнули горный хребет и попали в лес, который в полдень заливается серебряным светом.</p>
        <p className="text-muted">Когда нашли источник горной воды и удобное место, основали город-королевство Сильмер — «уголок рая» для тех, кто не желает сражаться в чужих войнах.</p>
        <p className="text-muted italic">«Сильмер обязан стать прибежищем для всех, кто не желает сражаться в чужих войнах.»</p>

        <p className="text-sm text-muted pt-6 border-t border-theme">
          Все права защищены (c) TrioZ Entertainment.
        </p>
      </div>
      <div className="mt-10">
        <Link href="/anteana/weldaran/factions" className="text-sm no-underline" style={{ color: "var(--accent-cyan)" }}>
          ← Ко всем фракциям
        </Link>
      </div>
    </article>
  );
}
