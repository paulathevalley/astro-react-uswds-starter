import { locales } from '../../astro.config.mjs'

// translations
import enTranslations from "@locales/en/translation.json";
import esTranslations from "@locales/es/translation.json";

export function t(key: string, locale?: keyof typeof locales ) {
  switch (locale) {
    case "es":
      if (esTranslations[key]) {
        console.log("es: found!", key);
        return esTranslations[key];
      } else {
        return key;
      }
    case "en":
    default:
      if (enTranslations[key]) {
        console.log("en: found!", key);
        return enTranslations[key];
      } else {
        return key;
      }
  }
  return key;
}