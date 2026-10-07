import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Кор'Онос",
  description: "Космическое измерение Кор'Онос — далёкие звёзды и иные цивилизации",
};

const SECTIONS = [
  {
    slug: "systems",
    title: "Звёздные системы",
    description: "Известные системы, планеты и станции измерения Кор'Онос.",
    status: "wip" as const,
  },
  {
    slug: "civilizations",
    title: "Цивилизации",
    description: "Разумные виды и их культуры среди звёзд.",
    status: "wip" as const,
  },
  {
    slug: "technology",
    title: "Технологии и корабли",
    description: "Флоты, оружие, артефакты и научные открытия.",
    status: "wip" as const,
  },
];

export default function KoronosPage() {
  return (
    <div className="theme-koronos mx-auto max-w-6xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:underline">Библиотека</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "var(--accent-cyan)" }}>Кор&apos;Онос</span>
      </nav>

      <header className="mb-12">
        <div
          className="mb-4 h-1 w-16 rounded-full"
          style={{ backgroundColor: "var(--dim-koronos)" }}
        />
        <h1
          className="font-display text-4xl sm:text-5xl font-bold mb-4"
          style={{ color: "var(--dim-koronos)" }}
        >
          Измерение Кор&apos;Онос
        </h1>
        <p className="max-w-3xl text-lg text-muted leading-relaxed">
          Космическое измерение. Далёкие звёзды, орбитальные станции, иные
          цивилизации и великие флоты. Здесь законы физики переплетаются с
          древними силами. Раздел в разработке.
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
                  "linear-gradient(135deg, var(--dim-koronos), transparent)",
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
