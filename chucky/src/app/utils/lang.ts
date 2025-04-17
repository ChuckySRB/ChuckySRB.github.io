export const DEFAULT_LANG = 'en';
export const LANG_TAG = 'chucky-lang';

/**
 * Load translations asynchronously
 */
export const getTranslations = async (lang: string): Promise<any> => {
  try {
    const response = await fetch(`assets/lang/${lang}.json`);
    if (!response.ok) {
      console.error(`Failed to load translations for ${lang}`);
      console.log(response);
      throw new Error('Failed to load translations');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading translations:', error);
    return {};
  }
};



