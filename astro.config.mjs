import path from "path";
import { fileURLToPath } from "url";

import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import image from "@astrojs/image";
import svgr from "vite-plugin-svgr";
import astroI18next from "astro-i18next";

// In ESM, __dirname is no longer available
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    astroI18next(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
      logLevel: "debug",
      // by default transformed images are cached to `./node_modules/.astro/image`
      // cacheDir: './node_modules/.astro/image'
    }),
  ],
  // Pass additional configuration options to Vite: vitejs.dev
  vite: {
    plugins: [svgr()],
    ssr: {
      // Importing CSS files from @uswds package with file extension omitted e.g. @uswds/styles
      noExternal: ["@uswds"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: [
            path.join(__dirname, "node_modules/@uswds/uswds/packages"),
            path.join(__dirname, "src/styles"),
          ],
        },
      },
    },
  },
});
