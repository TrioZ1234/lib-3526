import { useEffect } from "react";
import { Link, Redirect, useLocation } from "wouter";
import { libraryRoutes } from "../routes";

const DEFAULT_DESCRIPTION = "Библиотека проекта TrioZ — описания измерений, миров, фракций, мифов и историй вселенной T.Р.И.О.Z";

export function Library() {
  const [location] = useLocation();
  const path = location === "/" ? "/" : location.replace(/\/+$/, "");
  const route = libraryRoutes.find((candidate) => candidate.path === path);

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = route?.metadata.title;
    document.title = title ? `${title} · Библиотека TrioZ` : route ? "Библиотека TrioZ" : "Страница не найдена · Библиотека TrioZ";
    const description = route?.metadata.description ?? DEFAULT_DESCRIPTION;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [path, route]);

  if (path === "/anteana/weldaran/creation") return <Redirect to="/anteana/creation" replace />;
  if (route) {
    const Page = route.component;
    return <Page />;
  }
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-muted mb-4">404</p>
      <h1 className="font-display text-3xl font-bold mb-4">Страница не найдена</h1>
      <p className="text-muted mb-8">Такой страницы нет в библиотеке.</p>
      <Link href="/" className="text-sm">← Вернуться на главную</Link>
    </section>
  );
}