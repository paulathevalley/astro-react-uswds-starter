import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "es"],
  defaultNamespace: "translation",
  load: ["server", "client"],
  i18nextServer: {
    initImmediate: false,
    debug: true,
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
      addPath: "./public/locales/{{lng}}/{{ns}}.missing.json",
    },
    // allow keys to be phrases that have `:` and `.`
    keySeparator: false,
    nsSeparator: false,
    saveMissing: true,
  },
  i18nextClient: {
    debug: true,
  },
  i18nextServerPlugins: {
    fsBackend: "i18next-fs-backend",
    "{initReactI18next}": "react-i18next",
  },
  i18nextClientPlugins: {
    "{initReactI18next}": "react-i18next",
  },
};

export default config;
