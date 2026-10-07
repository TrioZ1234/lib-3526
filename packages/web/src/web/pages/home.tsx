import { Link } from "wouter";

const DIMENSIONS = [
  {
    slug: "anteana",
    title: "Антэана",
    description:
      "Фэнтезийное измерение. Миры Вельд'Эран, Андэргард и Семь Кругов Шент'Ара. Распри богов, живые воплощения стихий.",
    accent: "var(--dim-anteana)",
    status: "available" as "available" | "wip",
  },
  {
    slug: "verfal",
    title: "Верфаль",
    description:
      "Постапокалиптическое измерение с отголосками Второй мировой. Раздел в разработке.",
    accent: "var(--dim-verfal)",
    status: "available" as "available" | "wip",
  },
  {
    slug: "koronos",
    title: "Кор'Онос",
    description:
      "Космическое измерение. Далёкие звёзды и иные цивилизации. Раздел в разработке.",
    accent: "var(--dim-koronos)",
    status: "available" as "available" | "wip",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="mb-16 text-center">
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          style={{ color: "var(--accent-cyan)" }}
        >
          Библиотека проекта TrioZ
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted leading-relaxed">
          Добро пожаловать в библиотеку проекта TrioZ! Здесь вы найдёте
          подробные описания всех измерений и их обитателей, карты местности, а
          также художественные рассказы по нашей вселенной.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DIMENSIONS.map((dim) => (
          <Link
            key={dim.slug}
            href={`/${dim.slug}`}
            className="group relative overflow-hidden rounded-xl border border-theme p-6 transition-all hover:scale-[1.02] no-underline card-glow"
            style={{
              backgroundColor: "var(--bg-card)",
              boxShadow: "var(--shadow)",
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity"
              style={{
                background: `linear-gradient(135deg, ${dim.accent}, transparent)`,
              }}
            />
            <div
              className="mb-3 h-1 w-12 rounded-full"
              style={{ backgroundColor: dim.accent }}
            />
            <h2
              className="font-display text-2xl font-semibold mb-2 relative"
              style={{ color: "var(--fg)" }}
            >
              {dim.title}
            </h2>
            <p className="text-sm text-muted relative leading-relaxed">
              {dim.description}
            </p>
            {dim.status === "wip" && (
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
            )}
          </Link>
        ))}
      </section>
    </div>
  );
}
