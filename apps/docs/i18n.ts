import { AbstractIntlMessages } from "next-intl";

export const locales: string[] = ["pt-BR", "en-US"];
const localesInUpperCase: string[] = locales.map((locale) =>
  locale.toUpperCase()
);
let locale: string = locales[0];

export const setCurrentLocale = (value: string): void => {
  const isValidLocale = localesInUpperCase.includes(value.toUpperCase());
  locale = isValidLocale ? value : locales[0];
};

export const getMessagesBundle = async (): Promise<AbstractIntlMessages> => {
  const messages = (await import(`./dictionaries/${locale}.json`)).default;
  return messages;
};

export const getCurrentLocale = (): string => {
  return locale;
};

export const preferredLanguage = (langs: string[]): void => {
  const mostPreferredLanguage = langs.length ? langs[0] : locales[0];
  setCurrentLocale(mostPreferredLanguage);
};

export const extractAcceptedLanguage = (headers: Headers): void => {
  const acceptLanguage: string = headers.get("Accept-Language") || "";
  const preferredLanguages: string[] = acceptLanguage
    .replace(/;q=\d+\.*\d*/g, "")
    .split(",");
  preferredLanguage(preferredLanguages);
};
