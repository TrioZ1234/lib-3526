import type { ComponentType } from "react";
import type { Metadata } from "./lib/metadata";
import Page0, { metadata as metadata0 } from "./pages/anteana-andergard";
import Page1, { metadata as metadata1 } from "./pages/anteana-creation";
import Page2, { metadata as metadata2 } from "./pages/anteana";
import Page3, { metadata as metadata3 } from "./pages/anteana-shentar";
import Page4, { metadata as metadata4 } from "./pages/anteana-weldaran-factions-brotherhood";
import Page5, { metadata as metadata5 } from "./pages/anteana-weldaran-factions-empire";
import Page6, { metadata as metadata6 } from "./pages/anteana-weldaran-factions-goridar-torigar";
import Page7, { metadata as metadata7 } from "./pages/anteana-weldaran-factions";
import Page8, { metadata as metadata8 } from "./pages/anteana-weldaran-factions-republic";
import Page9, { metadata as metadata9 } from "./pages/anteana-weldaran-factions-silver-revolt";
import Page10, { metadata as metadata10 } from "./pages/anteana-weldaran-myths";
import Page11, { metadata as metadata11 } from "./pages/anteana-weldaran";
import Page12, { metadata as metadata12 } from "./pages/anteana-weldaran-races-alkortsy";
import Page13, { metadata as metadata13 } from "./pages/anteana-weldaran-races-avally";
import Page14, { metadata as metadata14 } from "./pages/anteana-weldaran-races-dwarves";
import Page15, { metadata as metadata15 } from "./pages/anteana-weldaran-races";
import Page16, { metadata as metadata16 } from "./pages/anteana-weldaran-races-subbgary";
import Page17, { metadata as metadata17 } from "./pages/anteana-weldaran-races-trolls-humans";
import Page18, { metadata as metadata18 } from "./pages/anteana-weldaran-races-valgally";
import Page19, { metadata as metadata19 } from "./pages/in-progress";
import Page20, { metadata as metadata20 } from "./pages/koronos";
import Page21 from "./pages/home";
import Page22, { metadata as metadata22 } from "./pages/verfal";

export const libraryRoutes: { path: string; component: ComponentType; metadata: Metadata }[] = [
  { path: "/anteana/andergard", component: Page0, metadata: metadata0 },
  { path: "/anteana/creation", component: Page1, metadata: metadata1 },
  { path: "/anteana", component: Page2, metadata: metadata2 },
  { path: "/anteana/shentar", component: Page3, metadata: metadata3 },
  { path: "/anteana/weldaran/factions/brotherhood", component: Page4, metadata: metadata4 },
  { path: "/anteana/weldaran/factions/empire", component: Page5, metadata: metadata5 },
  { path: "/anteana/weldaran/factions/goridar-torigar", component: Page6, metadata: metadata6 },
  { path: "/anteana/weldaran/factions", component: Page7, metadata: metadata7 },
  { path: "/anteana/weldaran/factions/republic", component: Page8, metadata: metadata8 },
  { path: "/anteana/weldaran/factions/silver-revolt", component: Page9, metadata: metadata9 },
  { path: "/anteana/weldaran/myths", component: Page10, metadata: metadata10 },
  { path: "/anteana/weldaran", component: Page11, metadata: metadata11 },
  { path: "/anteana/weldaran/races/alkortsy", component: Page12, metadata: metadata12 },
  { path: "/anteana/weldaran/races/avally", component: Page13, metadata: metadata13 },
  { path: "/anteana/weldaran/races/dwarves", component: Page14, metadata: metadata14 },
  { path: "/anteana/weldaran/races", component: Page15, metadata: metadata15 },
  { path: "/anteana/weldaran/races/subbgary", component: Page16, metadata: metadata16 },
  { path: "/anteana/weldaran/races/trolls-humans", component: Page17, metadata: metadata17 },
  { path: "/anteana/weldaran/races/valgally", component: Page18, metadata: metadata18 },
  { path: "/in-progress", component: Page19, metadata: metadata19 },
  { path: "/koronos", component: Page20, metadata: metadata20 },
  { path: "/", component: Page21, metadata: {} },
  { path: "/verfal", component: Page22, metadata: metadata22 },
];
