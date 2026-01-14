// config/i18n.ts
import type { NuxtI18nOptions } from '@nuxtjs/i18n'

export const i18nConfigs: NuxtI18nOptions = {
    langDir: 'locales',

    locales: [
        {
            code: 'vi',
            iso: 'vi-VN',
            name: 'Tiếng Việt',
            file: 'vi/index.ts'
        },
        {
            code: 'en',
            iso: 'en-US',
            name: 'English',
            file: 'en/index.ts'
        }
    ],

    defaultLocale: 'vi',
    strategy: 'prefix_except_default',

    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root',
    }
}