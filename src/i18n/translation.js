import i18n from '@/i18n'
import { nextTick } from 'vue'


const Trans = {
    get defaultLocale() {
        return import.meta.env.VITE_DEFAULT_LOCALE
    },
    get supportedLocales() {
        return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
    },
    get currentLocale() {
        return i18n.global.locale.value
    },
    set currentLocale(newLocale) {
        i18n.global.locale.value = newLocale
    },
    isLocaleSupported(locale) {
        return Trans.supportedLocales.includes(locale)
    },
    getUserLocale() {
        const locale = window.navigator.language || window.navigator.userLanguage || Trans.defaultLocale
        return {
            locale: locale,
            localeWithoutRegion: locale.split('-')[0]
        }
    },
    getPersistedLocale() {
        const persistedLocale = localStorage.getItem('user-locale')

        if (Trans.isLocaleSupported(persistedLocale)) {
            return persistedLocale
        } else {
            null
        }

    },
    guessDefaultLocale() {
        const userPersistedLocale = localStorage.getItem('user-locale')
        if (userPersistedLocale) return userPersistedLocale

        const userPreferableLocale = Trans.getUserLocale()

        if (Trans.isLocaleSupported(userPreferableLocale.locale)) {
            return userPreferableLocale.locale
        }

        if (Trans.isLocaleSupported(userPreferableLocale.localeWithoutRegion)) {
            return userPreferableLocale.localeWithoutRegion
        }

        return Trans.defaultLocale
    },
    async switchLanguage(newLocale) {
        await Trans.loadLocalMessages(newLocale)
        Trans.currentLocale = newLocale
        document.querySelector('html').setAttribute("lang", newLocale)
        localStorage.setItem('user-locale', newLocale)
    },
    async loadLocalMessages(locale) {
        if (!i18n.global.availableLocales.includes(locale)) {
            const messages = await import(`@/assets/locales/${locale}.json`)

            const { default: docs } = await import(`@/store/${locale}Docs.js`)
            i18n.global.setLocaleMessage(locale, { ...messages.default, ...docs })

        }

        return nextTick()
    },
    async routeMiddleware(to, _from, next) {
        const paramLocale = to.params.locale

        if (!Trans.isLocaleSupported(paramLocale)) {
            return next(Trans.guessDefaultLocale())
        }

        await Trans.switchLanguage(paramLocale)

        return next()
    },
    i18nRoute(to) {
        return {
            ...to,
            params: {
                locale: Trans.currentLocale,
                ...to.params
            }
        }
    }
}

export default Trans