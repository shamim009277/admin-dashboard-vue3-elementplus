import { createI18n } from 'vue-i18n';

// Create i18n instance
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'en', // Set default language
  fallbackLocale: 'en', // Fallback to English
  messages: {} // Start empty, load messages dynamically
});

export async function loadLocaleMessages(locale) {
  try {
    const messages = await import(`./locales/${locale}.json`);
    i18n.global.setLocaleMessage(locale, messages.default);
    i18n.global.locale.value = locale;
    localStorage.setItem('locale', locale);
  } catch (error) {
    console.error(`Could not load ${locale} language:`, error);
  }
}

export default i18n;