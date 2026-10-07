import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Мифы и легенды",
  description: "Предания народов Вельд'Эрана — пирамида Майгар, Братство без Бога и другие",
};

export default function MythsPage() {
  return (
    <article className="theme-anteana mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:underline">Библиотека</Link>
        <span className="mx-2">/</span>
        <Link href="/anteana" className="hover:underline">Антэана</Link>
        <span className="mx-2">/</span>
        <Link href="/anteana/weldaran" className="hover:underline">Вельд&apos;Эран</Link>
        <span className="mx-2">/</span>
        <span style={{ color: "var(--accent-cyan)" }}>Мифы и легенды</span>
      </nav>

      <header className="mb-10">
        <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: "var(--dim-anteana)" }} />
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--dim-anteana)" }}>
          Мифы и легенды
        </h1>
        <p className="text-muted">Предания народов Вельд&apos;Эрана</p>
      </header>

      <div className="space-y-10 text-[15px] leading-relaxed" style={{ color: "var(--fg)" }}>
        <section className="rounded-xl border border-theme p-6" style={{ backgroundColor: "var(--bg-card)" }}>
          <h2 className="font-display text-xl font-semibold mb-3" style={{ color: "var(--dim-anteana)" }}>
            Пирамида Майгар
          </h2>
          <p className="text-muted mb-3">
            В центре одного из древних городов возвышается внушающее пирамидальное строение.
            По преданию, внутри сокрыта некая бездна — источник силы почти всего мира.
            Известна как пирамида Майгар.
          </p>
          <p className="text-muted">
            Вход стерегут четыре статуи: нижние — вероятно, животные облики богов, сверху
            восседают два гуманоидальных существа в традиционном авалльском стиле.
            Не менее известно здание коллегии магов на возвышении у края города,
            освещающее окрестности синеватым светом.
          </p>
        </section>

        <section className="rounded-xl border border-theme p-6" style={{ backgroundColor: "var(--bg-card)" }}>
          <h2 className="font-display text-xl font-semibold mb-3" style={{ color: "var(--dim-anteana)" }}>
            Братство без Бога
          </h2>
          <p className="text-muted mb-3">
            «Боги оставили нас» — так в далёком прошлом говорили люди, принадлежавшие
            «Братству без Бога», основанному в центральной Республике.
          </p>
          <p className="text-muted mb-3">
            Братство создало множество тайных убежищ по стране, в которых хранилось
            и хранится до сих пор неведанное оружие исключительного и тайного предназначения.
          </p>
          <p className="text-muted">
            В осмыслении мира для людей Братства была единственная важная установка:
            боги оставили нас. Эта идея определила их путь и отношение к империям,
            храмам и любым силам, претендующим на божественный мандат.
          </p>
        </section>

        <section className="rounded-xl border border-theme p-6" style={{ backgroundColor: "var(--bg-card)" }}>
          <h2 className="font-display text-xl font-semibold mb-3" style={{ color: "var(--dim-anteana)" }}>
            Семь Ярусов и Шент&apos;Ар
          </h2>
          <p className="text-muted mb-3">
            Согласно преданиям о сотворении, Шент&apos;Ар — дитя Ангелоны и Стратоса —
            спрятал внутри земной тверди «Семь Ярусов». Там он творил невиданные
            бесчинства с попадавшими туда трупами.
          </p>
          <p className="text-muted">
            После союза с Пустотой Ситаса Шент&apos;Ар был навеки закопан Стратосом
            в одном из собственных Ярусов. Легенды народов предостерегают от
            спуска в глубины — там до сих пор шевелятся силы, которым лучше
            не просыпаться.
          </p>
        </section>

        <section className="rounded-xl border border-theme p-6" style={{ backgroundColor: "var(--bg-card)" }}>
          <h2 className="font-display text-xl font-semibold mb-3" style={{ color: "var(--dim-anteana)" }}>
            Серебряный лес
          </h2>
          <p className="text-muted">
            Ровно в полдень один из лесов на севере от болот Вест заливается
            нежным серебряным светом. Это удивительное явление легло в основу
            названия и самой фракции Серебряного Мятежа. Местные считают свет
            знаком покровительства — или предупреждением не нарушать покой рощи.
          </p>
        </section>

        <p className="text-sm text-muted pt-4 border-t border-theme">
          Все права защищены (c) TrioZ Entertainment. Контент может изменяться по нуждам Компании.
        </p>
      </div>

      <div className="mt-10">
        <Link href="/anteana/weldaran" className="text-sm no-underline" style={{ color: "var(--accent-cyan)" }}>
          ← К архиву Вельд&apos;Эрана
        </Link>
      </div>
    </article>
  );
}
