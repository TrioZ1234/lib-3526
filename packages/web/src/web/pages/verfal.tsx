import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Верфаль",
  description: "Постапокалиптическое измерение Верфаль — отголоски Второй мировой",
};

const SECTIONS = [
  {
    slug: "history",
    title: "История",
    description: "Как мир Верфаля пришёл к апокалипсису. Войны, катастрофы, выживание.",
    status: "wip" as const,
  },
  {
    slug: "factions",
    title: "Фракции и группировки",
    description: "Кто контролирует руины и что осталось от старых государств.",
    status: "wip" as const,
  },
  {
    slug: "locations",
    title: "Локации",
    description: "Ключевые точки на карте постапокалиптического мира.",
    status: "wip" as const,
  },
];

export default function VerfalPage() {
  return (
    <div className="theme-verfal mx-auto max-w-6xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:underline">Библиотека</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "var(--accent-cyan)" }}>Верфаль</span>
      </nav>

      <header className="mb-12">
        <div
          className="mb-4 h-1 w-16 rounded-full"
          style={{ backgroundColor: "var(--dim-verfal)" }}
        />
        <h1
          className="font-display text-4xl sm:text-5xl font-bold mb-4"
          style={{ color: "var(--dim-verfal)" }}
        >
          Измерение Верфаль
        </h1>
        <p className="max-w-3xl text-lg text-muted leading-relaxed">
          Постапокалиптическое измерение с отголосками Второй мировой войны.
          Руины цивилизации, выжившие группировки и тяжёлое наследие прошлого.
          Раздел активно наполняется.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((sec) => (
          <Link
            key={sec.slug}
            href="/in-progress"
            className="group relative overflow-hidden rounded-xl border border-theme p-6 transition-all hover:scale-[1.02] no-underline card-glow"
            style={{
              backgroundColor: "var(--bg-card)",
              boxShadow: "var(--shadow)",
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity"
              style={{
                background:
                  "linear-gradient(135deg, var(--dim-verfal), transparent)",
              }}
            />
            <h2 className="font-display text-xl font-semibold mb-2 relative">
              {sec.title}
            </h2>
            <p className="text-sm text-muted relative leading-relaxed">
              {sec.description}
            </p>
            <span
              className="mt-4 inline-block rounded-full px-3 py-0.5 text-xs font-medium relative"
              style={{
                backgroundColor: "var(--accent-purple)",
                color: "#fff",
                opacity: 0.9,
              }}
            >
              В разработке
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
