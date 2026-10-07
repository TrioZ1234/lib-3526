import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Фракции",
  description: "Архив фракций Вельд'Эрана — каждая фракция отдельной статьёй",
};

const FACTIONS = [
  { slug: "empire", title: "Империя", desc: "Люди, Вайнтаун, династия Элтихартов." },
  { slug: "republic", title: "Республика", desc: "Второй полюс человеческой политики." },
  { slug: "silver-revolt", title: "Серебряный Мятеж", desc: "Сильмер — уголок рая после болот Вест." },
  { slug: "goridar-torigar", title: "Горидар и Торигар", desc: "Внутригорные царства Дворфов." },
  { slug: "brotherhood", title: "Братство без Бога", desc: "«Боги оставили нас» — тайные убежища." },
];

export default function FactionsIndexPage() {
  return (
    <div className="theme-anteana mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:underline">Библиотека</Link>
        <span className="mx-2">/</span>
        <Link href="/anteana" className="hover:underline">Антэана</Link>
        <span className="mx-2">/</span>
        <Link href="/anteana/weldaran" className="hover:underline">Вельд&apos;Эран</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "var(--accent-cyan)" }}>Фракции</span>
      </nav>
      <header className="mb-10">
        <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "var(--dim-anteana)" }} />
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--dim-anteana)" }}>
          Фракции
        </h1>
        <p className="text-muted">Архив — каждая фракция открывается отдельной статьёй</p>
      </header>
      <section className="space-y-3">
        {FACTIONS.map((f) => (
          <Link
            key={f.slug}
            href={`/anteana/weldaran/factions/${f.slug}`}
            className="group flex items-start gap-4 rounded-xl border border-theme p-5 transition-all hover:scale-[1.01] no-underline card-glow"
            style={{ backgroundColor: "var(--bg-card)", boxShadow: "var(--shadow)" }}
          >
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-lg font-semibold mb-0.5 group-hover:underline" style={{ color: "var(--fg)" }}>
                {f.title}
              </h2>
              <p className="text-sm text-muted">{f.desc}</p>
            </div>
            <span className="text-muted text-sm mt-1">→</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
