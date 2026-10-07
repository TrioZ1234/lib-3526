import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Дворфы",
  description: "Дворфы — раса Вельд'Эрана",
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
        <span style={{ color: "var(--accent-cyan)" }}>Дворфы</span>
      </nav>
      <header className="mb-10">
        <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "var(--dim-anteana)" }} />
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--dim-anteana)" }}>
          Дворфы
        </h1>
      </header>
      <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--fg)" }}>

        <p>В пещерах Майн&apos;Ронда часть Суббгаров мельчала и углубилась в знания о механике. Они создали два крупнейших внутригорных царства — <strong style={{ color: "var(--fg)" }}>Горидар</strong> (север) и <strong style={{ color: "var(--fg)" }}>Торигар</strong> (юг).</p>
        <p className="text-muted">Позже стали презирать прародителей с поверхности и объявили им войну. Вместе с Суббгарами и Вальгаллами составляют Ледошайскую семью.</p>

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
