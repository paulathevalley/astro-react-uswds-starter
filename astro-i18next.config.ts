import type { AstroI18nextConfig } from "astro-i18next";

/** @type {import('astro-i18next').AstroI18nextConfig} */
const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "es"],
  defaultNamespace: "translation",
  i18nextServer: {
    initImmediate: true,
    debug: false,
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
      addPath: "./public/locales/{{lng}}/{{ns}}.missing.json",
    },
    // allow keys to be phrases having `:`, `.`
    keySeparator: false,
    nsSeparator: false,
    saveMissing: true,
  },
  i18nextPlugins: { fsBackend: "i18next-fs-backend" },
};

export default config;
