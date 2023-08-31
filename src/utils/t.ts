export const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  es: "es-US",
};
// translations
import enTranslations from "@locales/en/translation.json";
import esTranslations from "@locales/es/translation.json";

type Translations = typeof enTranslations | typeof esTranslations;

export function t(key: keyof Translations, locale?: keyof typeof locales) {
  switch (locale) {
    case "es":
      if (esTranslations[key]) {
        // console.log("es: found!", key);
        return esTranslations[key];
      } else {
        return key;
      }
    case "en":
    default:
      if (enTranslations[key]) {
        return enTranslations[key];
      } else {
        return key;
      }
  }
  return key;
}
