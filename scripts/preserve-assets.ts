// Run after Vite's default asset optimizer: preserve animation and full map detail.
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
for (const asset of ["img/wizardim.webp", "img/welderan.webp"]) {
  const destination = resolve(root, "packages/web/dist", asset);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(resolve(root, "packages/web/public", asset), destination);
}
console.log("Preserved 33-frame wizard animation and full-resolution map in production assets.");