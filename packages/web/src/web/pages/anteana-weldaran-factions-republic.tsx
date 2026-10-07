import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Республика",
  description: "Республика — фракция Вельд'Эрана",
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
        <span style={{ color: "var(--accent-cyan)" }}>Республика</span>
      </nav>
      <header className="mb-10">
        <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "var(--dim-anteana)" }} />
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--dim-anteana)" }}>
          Республика
        </h1>
      </header>
      <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--fg)" }}>

        <p className="text-sm text-muted">Раса: Люди / смешанные</p>
        <p>Второй полюс человеческой силы. Конфликт с Империей на болотах Вест унёс огромное число жизней и заставил многих пересмотреть ценности.</p>
        <p className="text-muted">После сражения часть людей ушла строить Двирэн, другие — в серебряный лес (Серебряный Мятеж). Республика сохраняет влияние в центральных землях и остаётся главным соперником Империи.</p>

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
