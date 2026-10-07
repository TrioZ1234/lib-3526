import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Антэана",
  description: "Измерение Антэана — миры, статьи и архив лора",
};

const WORLDS = [
  {
    href: "/anteana/weldaran",
    title: "Вельд'Эран",
    description: "Основной мир. Расы, фракции, история, интерактивная карта.",
  },
  {
    href: "/anteana/andergard",
    title: "Андэргард",
    description: "Суровые земли внутри планеты. Стратос и Сифарис.",
  },
  {
    href: "/anteana/shentar",
    title: "Семь Кругов Шент'Ара",
    description: "Ярусы внутри тверди. Шент'Ар и предания о глубинах.",
  },
];

const ARTICLES = [
  {
    href: "/anteana/creation",
    title: "Сотворение мира",
    description: "Вторжение Богов, Война Аспектов, рождение трёх миров.",
    tag: "Миф",
  },
  {
    href: "/anteana/weldaran/races",
    title: "Расы и народы",
    description: "Суббгары, Вальгаллы, Эльфы, Тролли, Люди, Алкорцы.",
    tag: "Справочник",
  },
  {
    href: "/anteana/weldaran/factions",
    title: "Фракции",
    description: "Империя, Республика, Серебряный Мятеж, Горидар и другие.",
    tag: "Справочник",
  },
  {
    href: "/anteana/weldaran/myths",
    title: "Мифы и легенды",
    description: "Пирамида Майгар, Братство без Бога, Серебряный лес.",
    tag: "Миф",
  },
];

export default function AnteanaPage() {
  return (
    <div className="theme-anteana mx-auto max-w-6xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:underline">Библиотека</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "var(--accent-cyan)" }}>Антэана</span>
      </nav>

      <header className="mb-12">
        <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "var(--dim-anteana)" }} />
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4" style={{ color: "var(--dim-anteana)" }}>
          Измерение Антэана
        </h1>
        <p className="max-w-3xl text-lg text-muted leading-relaxed">
          Фэнтезийное измерение, рождённое из Пустоты Ситаса. Архив миров,
          статей и преданий — каждая запись открывается отдельной страницей.
        </p>
      </header>

      {/* Worlds */}
      <h2 className="font-display text-xl font-semibold mb-4" style={{ color: "var(--fg)" }}>
        Миры
      </h2>
      <section className="grid gap-5 sm:grid-cols-3 mb-14">
        {WORLDS.map((w) => (
          <Link
            key={w.href}
            href={w.href}
            className="group relative overflow-hidden rounded-xl border border-theme p-5 transition-all hover:scale-[1.02] no-underline card-glow"
            style={{ backgroundColor: "var(--bg-card)", boxShadow: "var(--shadow)" }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-12 transition-opacity"
              style={{ background: "linear-gradient(135deg, var(--dim-anteana), transparent)" }}
            />
            <h3 className="font-display text-lg font-semibold mb-1 relative">{w.title}</h3>
            <p className="text-sm text-muted relative leading-relaxed">{w.description}</p>
          </Link>
        ))}
      </section>

      {/* Articles archive */}
      <h2 className="font-display text-xl font-semibold mb-4" style={{ color: "var(--fg)" }}>
        Статьи архива
      </h2>
      <section className="space-y-3">
        {ARTICLES.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="group flex items-start gap-4 rounded-xl border border-theme p-5 transition-all hover:scale-[1.01] no-underline card-glow"
            style={{ backgroundColor: "var(--bg-card)", boxShadow: "var(--shadow)" }}
          >
            <span
              className="mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium"
              style={{
                backgroundColor: "var(--nav-hover)",
                color: "var(--accent-cyan)",
                border: "1px solid var(--border)",
              }}
            >
              {a.tag}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-lg font-semibold mb-0.5 group-hover:underline" style={{ color: "var(--fg)" }}>
                {a.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{a.description}</p>
            </div>
            <span className="shrink-0 text-muted text-sm mt-1">→</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
