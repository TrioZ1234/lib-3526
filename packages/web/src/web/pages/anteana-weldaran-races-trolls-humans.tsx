import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Тролли и Люди",
  description: "Тролли и Люди — раса Вельд'Эрана",
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
        <span style={{ color: "var(--accent-cyan)" }}>Тролли и Люди</span>
      </nav>
      <header className="mb-10">
        <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "var(--dim-anteana)" }} />
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--dim-anteana)" }}>
          Тролли и Люди
        </h1>
      </header>
      <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--fg)" }}>

        <p>Троллей изменения коснулись слабо — менялся лишь цвет кожи в зависимости от биома. Одно племя на материке Вайн&apos;Вудделт ушло к горе Аралонд и не вернулось.</p>
        <p className="text-muted">На горе Аралонд тролли настолько изменились от контакта с богами, что стали зваться <strong style={{ color: "var(--fg)" }}>Людьми</strong>. Они покинули богов, ушли на юг материка и основали поселения и города.</p>
        <p className="text-muted">Пока цивилизация людей зарождалась, Империя Троллей приходила в упадок: войны на всех фронтах губили связь между племенами. В конце Империя осталась лишь словом. Тролли разобщились.</p>

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
