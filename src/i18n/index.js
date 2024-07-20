import { createI18n } from "vue-i18n";
import en from '@/assets/locales/en.json'
import ru from '@/assets/locales/ru.json'


export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: 'en',
    globalInjection: true,
    legacy: false,
    messages: {
        en, ru
    }
})



// export default createI18n

// import en from './en.json'
// import ru from './ru.json'


// export const defaultLocale = 'en'


// export const languages = {
//     en, ru
// }