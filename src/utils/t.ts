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
        return esTranslations[key];
      } else {
        // TODO: If not found, append key to translation.missing.json
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

// TODO: How should we handle translating HTML?
// previously using the <Trans> component from "astro-i18next/components"
/* 
<Trans>
  <h1>An <strong>emphasized</strong> heading with a <a href="/">link</a></h1>
</Trans>

would output the following key, perhaps?

<0>An <1>emphasized</1> heading with a <2>link</2></0>
*/
