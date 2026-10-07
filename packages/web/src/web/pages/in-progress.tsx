import { Link } from "wouter";
import type { Metadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "В разработке",
};

export default function InProgressPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <div
        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
        style={{
          backgroundColor: "var(--bg-card)",
          border: "2px solid var(--accent-purple)",
        }}
      >
        <span className="text-3xl">⏳</span>
      </div>
      <h1 className="font-display text-3xl font-bold mb-4">В разработке</h1>
      <p className="text-muted mb-8 leading-relaxed">
        Этот раздел библиотеки ещё наполняется. Скоро здесь появятся подробные
        описания, карты и истории.
      </p>
      <Link
        href="/"
        className="inline-block rounded-full px-6 py-2.5 text-sm font-medium no-underline"
        style={{
          backgroundColor: "var(--accent-cyan)",
          color: "#0a0a0f",
        }}
      >
        ← Вернуться на главную
      </Link>
    </div>
  );
}
