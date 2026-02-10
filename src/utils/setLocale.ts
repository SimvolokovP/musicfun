import i18n from 'i18next'

export type Locale = 'en' | 'ru'

const LOCALE_KEY = 'locale'

export const setLocale = (lng: Locale): void => {
  void i18n.changeLanguage(lng)
  localStorage.setItem(LOCALE_KEY, lng)
}
