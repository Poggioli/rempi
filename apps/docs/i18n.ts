import createMiddleware from 'next-intl/middleware';

export const locales: string[] = ['pt-BR', 'en-US']
const localesInUpperCase: string[] = locales.map(locale => locale.toUpperCase());
let locale: string = locales[0];

export default createMiddleware({
    locales: locales,
    defaultLocale: locales[0]
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};

export const setCurrentLocale = (value: string): void => {
    const isValidLocale = localesInUpperCase.includes(value.toUpperCase());
    locale = isValidLocale ? value : locales[0];
}

export const getLocaleBundle = async (): Promise<any> => {
    const messages = (await import(`./dictionaries/${locale}.json`)).default;
    return messages;
}

export const getCurrentLocale = (): string => {
    return locale;
}

export const extractAcceptedLanguage = (headers: Headers): string => {
    const acceptLanguage: string = headers.get('Accept-Language') || '';
    const preferredLanguages: string[] = acceptLanguage.replace(/;q=\d+\.*\d*/g, '').split(',');
    const mostPreferredLanguage = preferredLanguages.length ? preferredLanguages[0] : locales[0];
    setCurrentLocale(mostPreferredLanguage)

    return mostPreferredLanguage;
}