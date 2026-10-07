"use client";

import { Link } from "wouter";

const NAV = [
  { href: "https://trioz.ru", label: "Главная" },
  { href: "https://pero.trioz.ru", label: "Перо Измерений" },
  { href: "https://trioz.ru/#contact", label: "Связаться" },
  { href: "https://trioz.ru/connect", label: "TZ.Connect" },
];

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-theme"
      style={{
        backgroundColor: "var(--header-bg)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3 no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo.webp" alt="TrioZ" className="h-8 w-auto hidden sm:block" />
          <span
            className="font-display text-xl font-bold tracking-wide"
            style={{ color: "var(--accent-cyan)" }}
          >
            TrioZ
          </span>
          <span className="text-sm text-muted hidden md:inline">Библиотека</span>
        </Link>

        <nav className="flex items-center gap-1 flex-wrap justify-end">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm rounded-md transition-colors"
              style={{ color: "var(--nav-link)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--nav-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
