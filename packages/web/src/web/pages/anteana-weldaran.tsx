import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Вельд'Эран",
  description: "Мир Вельд'Эран — архив статей: расы, фракции, мифы, карта",
};

const ARTICLES = [
  {
    href: "/anteana/creation",
    title: "Сотворение мира",
    description: "Вторжение Богов, Война Аспектов, рождение миров.",
    tag: "Миф",
  },
  {
    href: "/anteana/weldaran/races",
    title: "Расы и народы",
    description: "Суббгары, Аваллы, Тролли, Алкорцы и их потомки.",
    tag: "Справочник",
  },
  {
    href: "/anteana/weldaran/factions",
    title: "Фракции",
    description: "Империя, Республики, Серебряный Мятеж и другие силы.",
    tag: "Справочник",
  },
  {
    href: "/anteana/weldaran/myths",
    title: "Мифы и легенды",
    description: "Предания народов Вельд'Эрана.",
    tag: "Миф",
  },
];

export default function WeldaranPage() {
  return (
    <div className="theme-anteana mx-auto max-w-6xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:underline">Библиотека</Link>
        <span className="mx-2">/</span>
        <Link href="/anteana" className="hover:underline">Антэана</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "var(--accent-cyan)" }}>Вельд&apos;Эран</span>
      </nav>

      <header className="mb-10">
        <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "var(--dim-anteana)" }} />
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4" style={{ color: "var(--dim-anteana)" }}>
          Вельд&apos;Эран
        </h1>
        <p className="max-w-3xl text-lg text-muted leading-relaxed">
          Основной мир измерения Антэана. Архив статей — каждая открывается
          отдельной страницей с полным текстом.
        </p>
      </header>

      {/* Map CTA */}
      <a
        href="https://int-veld.trioz.ru"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-12 block relative overflow-hidden rounded-xl border border-theme p-8 text-center no-underline transition-all hover:scale-[1.01] card-glow"
        style={{ backgroundColor: "var(--bg-card)", boxShadow: "var(--shadow)" }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{ background: "linear-gradient(135deg, var(--dim-anteana), var(--accent-purple))" }}
        />
        <h2 className="font-display text-2xl font-semibold relative mb-2">Интерактивная карта</h2>
        <p className="text-muted relative mb-4">Открыть атлас мира Вельд&apos;Эран</p>
        <span
          className="inline-block rounded-full px-5 py-2 text-sm font-medium relative"
          style={{ backgroundColor: "var(--dim-anteana)", color: "#0a0a0f" }}
        >
          Открыть атлас →
        </span>
      </a>

      <h2 className="font-display text-xl font-semibold mb-4">Статьи архива</h2>
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
