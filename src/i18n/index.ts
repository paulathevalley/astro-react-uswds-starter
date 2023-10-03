import i18next from "i18next";
import Backend, { type FsBackendOptions } from 'i18next-fs-backend';

const setDebug = process.env.NODE_ENV === 'production' ? false : true

// TODO: Do not show /en/ in the URL 

// Load resources using Backend plugin: https://www.i18next.com/how-to/add-or-load-translations#load-using-a-backend-plugin
await i18next
  .use(Backend)
  .init<FsBackendOptions>({
    debug: setDebug,
    initImmediate: false,
    lng: 'en',
    supportedLngs: ['en', 'es'],
    // do not load a fallback, instead use key as fallback
    // https://www.i18next.com/principles/fallback#key-fallback
    fallbackLng: false,
    // ns: 'translation',
    // defaultNS: 'translation',
    backend: {
      loadPath: './src/locales/{{lng}}/{{ns}}.json',
      addPath: './src/locales/{{lng}}/{{ns}}.missing.json'
    },
    // allow keys to have `:`, `.`
    keySeparator: false,
    nsSeparator: false,
    // Calls save missing key function on backend if key not found.
    saveMissing: true
  });

export default i18next;