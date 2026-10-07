import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Империя",
  description: "Империя — фракция Вельд'Эрана",
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
        <Link href="/anteana/weldaran/factions" className="hover:underline">Фракции</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "var(--accent-cyan)" }}>Империя</span>
      </nav>
      <header className="mb-10">
        <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "var(--dim-anteana)" }} />
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--dim-anteana)" }}>
          Империя
        </h1>
      </header>
      <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--fg)" }}>

        <p className="text-sm text-muted">Раса: Люди · Столица: Вайнтаун · Династия: Элтихарты</p>
        <p>С горы Аралонд сошёл полубог Вланэрольд Элтихарт. Он прибыл к людям на юге материка, помог победить Троллей, но часть людей не признала его лидером. По велению отца Антэгриза Вланэрольд ушёл с частью людей на север и основал Империю.</p>
        <p className="text-muted">Под руководством Фаарина Хартраса возведён город Прокнайт на севере «Залива Баталис». Легионы столкнулись с Вальгаллами; после трёхлетней войны имперцы вытеснили их с полуострова и основали Вьошир. Венец перешёл Антэрольду Элтихарту — основаны Весттаун и другие колонии.</p>
        <p className="text-muted">Империя — один из двух «гигантов» человеческой политики наряду с Республикой.</p>

        <p className="text-sm text-muted pt-6 border-t border-theme">
          Все права защищены (c) TrioZ Entertainment.
        </p>
      </div>
      <div className="mt-10">
        <Link href="/anteana/weldaran/factions" className="text-sm no-underline" style={{ color: "var(--accent-cyan)" }}>
          ← Ко всем фракциям
        </Link>
      </div>
    </article>
  );
}
