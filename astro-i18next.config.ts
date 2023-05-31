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
    updateMissing: true,
    // custom missing key handler
    // https://www.i18next.com/overview/configuration-options#missing-keys
    // missingKeyHandler: function (
    //   lngs,
    //   ns,
    //   key,
    //   fallbackValue,
    //   updateMissing,
    //   options
    //   ) {
    //   console.log('updateMissing', updateMissing, key)
    //   if (key === fallbackValue) {
    //     console.log('!!!key and fallback are equal', key)
    //     // return key;
    //   }
    //   //   console.log('key', key, 'lngs', lngs, 'options', options)
    // },
    // parseMissingKeyHandler: function (key, defaultValue) {
    //   // For 'en' the value and key are equal.
    //   // return value to display
    //   return key
    // },
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
