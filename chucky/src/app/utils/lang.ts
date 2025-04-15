

const TRANSLATIONS = ['en', 'srb'];
const TRANSLATIONS_PATH = 'assets/lang/';

export const DEFAULT_LANG = 'en';

export const getTranslationPath = (lang: string) => {
    const translations = TRANSLATIONS.find(t => t === lang);
    if (!translations) {
        throw new Error(`Language ${lang} not found`);
    }
    return TRANSLATIONS_PATH + lang + '.json';
}

export const getTranslations = (lang: string) => {
    const path = getTranslationPath(lang);
    const translations = require(path);
    return translations;
}


