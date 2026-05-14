import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// Vite config — projet en cours de migration depuis du HTML statique.
// Tant que la migration React n'est pas complète, le site live est servi
// directement par GitHub Pages depuis la racine du repo.
//
// Quand la migration sera lancée :
// 1. Les pages HTML actuelles seront converties en composants .tsx dans src/pages/
// 2. Le build Vite produira un dossier dist/ déployé sur GitHub Pages via Actions
// 3. Les refs `/public/photos/...` seront automatiquement rewriteées en `/photos/...`
//    (Vite strip le préfixe public/ au build)

export default defineConfig({
  plugins: [react()],
  // Domaine custom (bnf-consulting.fr via CNAME) → base = "/"
  base: "/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
  },
});
