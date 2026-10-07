import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Аваллы, Эльфы, Шейбаниды",
  description: "Аваллы, Эльфы, Шейбаниды — раса Вельд'Эрана",
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
        <Link href="/anteana/weldaran/races" className="hover:underline">Расы</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "var(--accent-cyan)" }}>Аваллы, Эльфы, Шейбаниды</span>
      </nav>
      <header className="mb-10">
        <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "var(--dim-anteana)" }} />
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--dim-anteana)" }}>
          Аваллы, Эльфы, Шейбаниды
        </h1>
      </header>
      <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--fg)" }}>

        <p>Аваллы разбрелись по Алдесвину (Валдесорт и Алвинд). В лесах близ Древа Мораш&apos;Эль стали практиковать магию и единение с природой — изменились внешне и разумом.</p>
        <p className="text-muted">На юге Валдесорта стали кочевниками, потеряли знания цивилизации — так появились <strong style={{ color: "var(--fg)" }}>Шейбаниды</strong>. Югошайская семья: Аваллы, Эльфы, Шейбаниды.</p>
        <p className="text-muted">Часть эльфов лишилась магической силы. Оставшиеся при силе назвали это болезнью и изгнали бессильных, назвав их <strong style={{ color: "var(--fg)" }}>Дэлионами</strong>. Эльфы разделились на Высших (<strong style={{ color: "var(--fg)" }}>Авэйны</strong>) и Низших (Дэлионы).</p>

        <p className="text-sm text-muted pt-6 border-t border-theme">
          Все права защищены (c) TrioZ Entertainment.
        </p>
      </div>
      <div className="mt-10">
        <Link href="/anteana/weldaran/races" className="text-sm no-underline" style={{ color: "var(--accent-cyan)" }}>
          ← Ко всем расам
        </Link>
      </div>
    </article>
  );
}
