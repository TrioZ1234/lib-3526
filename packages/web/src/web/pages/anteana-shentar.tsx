import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Семь Кругов Шент'Ара",
  description: "Семь Ярусов — скрытые круги Шент'Ара внутри земной тверди",
};

export default function ShentarPage() {
  return (
    <article className="theme-anteana mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:underline">Библиотека</Link>
        <span className="mx-2">/</span>
        <Link href="/anteana" className="hover:underline">Антэана</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "var(--accent-cyan)" }}>Семь Кругов Шент&apos;Ара</span>
      </nav>

      <header className="mb-10">
        <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "var(--dim-anteana)" }} />
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--dim-anteana)" }}>
          Семь Кругов Шент&apos;Ара
        </h1>
        <p className="text-muted">Ярусы внутри земной тверди</p>
      </header>

      <div className="space-y-6 text-[15px] leading-relaxed" style={{ color: "var(--fg)" }}>
        <p>
          <strong>Шент&apos;Ар</strong> — дитя Ангелоны и Стратоса, способное воскрешать
          и контролировать умерших. Он решил внутри земной тверди спрятать «Семь Ярусов»,
          в которых творил невиданные бесчинства с попадавшими туда трупами иных существ.
        </p>
        <p className="text-muted">
          После союза с Пустотой Ситаса боги снова сражались с порождённым ими существом.
          Стратос сумел усмирить Шент&apos;Ара, навеки закопав его в одном из Семи Ярусов,
          созданных самим Шент&apos;Аром. Ангелона, пытаясь остановить своё «чадо»,
          поплатилась исчезновением в Пустоте.
        </p>
        <div className="rounded-xl border border-theme p-5" style={{ backgroundColor: "var(--bg-card)" }}>
          <h2 className="font-display text-lg font-semibold mb-2" style={{ color: "var(--dim-anteana)" }}>
            Предостережение преданий
          </h2>
          <p className="text-sm text-muted">
            Легенды народов предостерегают от спуска в глубины. В Ярусах до сих пор
            шевелятся силы, которым лучше не просыпаться. Подробные карты кругов
            и описания обитателей — в подготовке.
          </p>
        </div>
        <p className="text-sm text-muted pt-4 border-t border-theme">
          Все права защищены (c) TrioZ Entertainment.
        </p>
      </div>

      <div className="mt-10 flex gap-4">
        <Link href="/anteana" className="text-sm no-underline" style={{ color: "var(--accent-cyan)" }}>
          ← К Антэане
        </Link>
        <Link href="/anteana/weldaran/myths" className="text-sm no-underline" style={{ color: "var(--accent-cyan)" }}>
          Мифы и легенды →
        </Link>
      </div>
    </article>
  );
}
