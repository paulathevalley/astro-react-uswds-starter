import path from "path";
import { fileURLToPath } from "url";

import { defineConfig } from "astro/config";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import svgr from "vite-plugin-svgr";

// In ESM, __dirname is no longer available
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const defaultLocale = "en";
export const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  es: "es-US",
};

// https://astro.build/config
export default defineConfig({
  site: "https://example.com/",
  base: "/build_with_base_path/",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  output: "static",
  integrations: [
    react(),
    i18n({
      locales,
      defaultLocale,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ],
  // Pass additional configuration options to Vite: vitejs.dev
  vite: {
    plugins: [
      svgr({
        svgrOptions: {
          // https://react-svgr.com/docs/options/#ref
          ref: true,
        },
      }),
    ],
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
