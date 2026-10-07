import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Суббгары",
  description: "Суббгары — раса Вельд'Эрана",
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
        <span style={{ color: "var(--accent-cyan)" }}>Суббгары</span>
      </nav>
      <header className="mb-10">
        <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "var(--dim-anteana)" }} />
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--dim-anteana)" }}>
          Суббгары
        </h1>
      </header>
      <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--fg)" }}>

        <p className="text-sm text-muted">Столица: Этлас · Города: Истфорд, Вестфорд · Союзники: Империя, Авэйны · Родственные: Вальгаллы, Дворфы</p>
        <p>Фьорды и горные массивы удобны для построения «воздушных портов», принимающих множество летающих кораблей Суббгаров — подобных нет ни у одной другой расы.</p>
        <p className="text-muted"><strong style={{ color: "var(--fg)" }}>Внешний вид:</strong> от двух до трёх метров роста, мускулистые. В сражениях — топоры и мечи со щитами. Кожаные доспехи с деревянными элементами. Лидер: князь Коргран Великий. Магия: шаманизм Антэгриза.</p>
        <p className="text-muted">В давние времена Суббгары были одной из главенствующих рас. Они покорили весь юг Нортвинда и горные массивы Майн&apos;Ронда. Под руководством князя Корграна и верховного шамана Фордрана стали конструировать воздушные суда для связи с родичами в Майн&apos;Ронде.</p>

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
