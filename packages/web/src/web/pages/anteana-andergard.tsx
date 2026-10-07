import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Андэргард",
  description: "Мир Андэргард — суровые земли, созданные Стратосом и Сифарисом",
};

export default function AndergardPage() {
  return (
    <article className="theme-anteana mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:underline">Библиотека</Link>
        <span className="mx-2">/</span>
        <Link href="/anteana" className="hover:underline">Антэана</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "var(--accent-cyan)" }}>Андэргард</span>
      </nav>

      <header className="mb-10">
        <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "var(--dim-anteana)" }} />
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--dim-anteana)" }}>
          Андэргард
        </h1>
        <p className="text-muted">Мир внутри планеты · Стратос и Сифарис</p>
      </header>

      <div className="space-y-6 text-[15px] leading-relaxed" style={{ color: "var(--fg)" }}>
        <p>
          Пока Антэгриз находился в гипнотическом сне, планета преобразовывалась.
          <strong> Стратос</strong> и <strong>Сифарис</strong> создали мир Андэргард —
          им была по душе сухость внутри планеты и её суровость.
        </p>
        <p className="text-muted">
          Это земли внутренней пустоты: камень, жар огня Стратоса и пустоши Сифариса.
          Здесь иные законы и иные обитатели, чем на поверхности Вельд&apos;Эрана.
        </p>
        <div className="rounded-xl border border-theme p-5" style={{ backgroundColor: "var(--bg-card)" }}>
          <h2 className="font-display text-lg font-semibold mb-2" style={{ color: "var(--dim-anteana)" }}>
            Статус раздела
          </h2>
          <p className="text-sm text-muted">
            Подробные описания локаций, рас и истории Андэргарда будут добавлены
            по мере подготовки материалов. Базовый миф о создании уже изложен
            в разделе «Сотворение мира» Вельд&apos;Эрана.
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
        <Link href="/anteana/weldaran/creation" className="text-sm no-underline" style={{ color: "var(--accent-cyan)" }}>
          Сотворение мира →
        </Link>
      </div>
    </article>
  );
}
