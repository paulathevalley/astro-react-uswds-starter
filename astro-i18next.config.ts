import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "es"],
  defaultNamespace: "translation",
  load: ["server", "client"],
  // Do not show /en/ in the URL
  showDefaultLocale: false,
  i18nextServer: {
    initImmediate: false,
    debug: true,
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
      addPath: "./public/locales/{{lng}}/{{ns}}.missing.json",
    },
    // do not load a fallback, instead use key as fallback
    // https://www.i18next.com/principles/fallback#key-fallback
    fallbackLng: false,
    // allow keys to be phrases that have `:` and `.`
    keySeparator: false,
    nsSeparator: false,
    saveMissing: true,
    // Empty string is invalid, return fallback instead of ""
    returnEmptyString: false
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
