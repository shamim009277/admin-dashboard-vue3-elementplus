import { createI18n } from 'vue-i18n';

const supportedLocales = ['en', 'bn'];

export function getStoredLocale() {
  try {
    const locale = localStorage.getItem('locale');
    return supportedLocales.includes(locale) ? locale : 'en';
  } catch (error) {
    return 'en';
  }
}

function setStoredLocale(locale) {
  try {
    localStorage.setItem('locale', locale);
  } catch (error) {
    // Storage can be unavailable in embedded previews or strict browser modes.
  }
}

// Create i18n instance
const i18n = createI18n({
  legacy: false,
  locale: getStoredLocale(),
  fallbackLocale: 'en',
  messages: {}
});

export async function loadLocaleMessages(locale) {
  const nextLocale = supportedLocales.includes(locale) ? locale : 'en';

  try {
    const messages = await import(`./locales/${nextLocale}.json`);
    i18n.global.setLocaleMessage(nextLocale, messages.default);
    i18n.global.locale.value = nextLocale;
    setStoredLocale(nextLocale);
  } catch (error) {
    console.error(`Could not load ${nextLocale} language:`, error);
  }
}

export default i18n;
