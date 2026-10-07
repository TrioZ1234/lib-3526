import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Расы и народы",
  description: "Архив рас Вельд'Эрана — каждая раса отдельной статьёй",
};

const RACES = [
  { slug: "subbgary", title: "Суббгары", desc: "Горная империя, воздушные корабли, князь Коргран." },
  { slug: "valgally", title: "Вальгаллы", desc: "Высокие потомки Суббгаров с юго-запада Нортвинда." },
  { slug: "dwarves", title: "Дворфы", desc: "Горидар и Торигар — внутригорные царства механиков." },
  { slug: "avally", title: "Аваллы, Эльфы, Шейбаниды", desc: "Югошайская семья: магия, кочевники, Авэйны и Дэлионы." },
  { slug: "trolls-humans", title: "Тролли и Люди", desc: "От архипелагов до горы Аралонд и рождения людей." },
  { slug: "alkortsy", title: "Алкорцы", desc: "Народ морского дна северного океана." },
];

export default function RacesIndexPage() {
  return (
    <div className="theme-anteana mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:underline">Библиотека</Link>
        <span className="mx-2">/</span>
        <Link href="/anteana" className="hover:underline">Антэана</Link>
        <span className="mx-2">/</span>
        <Link href="/anteana/weldaran" className="hover:underline">Вельд&apos;Эран</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "var(--accent-cyan)" }}>Расы и народы</span>
      </nav>
      <header className="mb-10">
        <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "var(--dim-anteana)" }} />
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--dim-anteana)" }}>
          Расы и народы
        </h1>
        <p className="text-muted">Архив — каждая раса открывается отдельной статьёй</p>
      </header>
      <section className="space-y-3">
        {RACES.map((r) => (
          <Link
            key={r.slug}
            href={`/anteana/weldaran/races/${r.slug}`}
            className="group flex items-start gap-4 rounded-xl border border-theme p-5 transition-all hover:scale-[1.01] no-underline card-glow"
            style={{ backgroundColor: "var(--bg-card)", boxShadow: "var(--shadow)" }}
          >
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-lg font-semibold mb-0.5 group-hover:underline" style={{ color: "var(--fg)" }}>
                {r.title}
              </h2>
              <p className="text-sm text-muted">{r.desc}</p>
            </div>
            <span className="text-muted text-sm mt-1">→</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
