// https://nuxt.com/docs/api/configuration/nuxt-config
import {i18nConfigs} from './configs/i18n.config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
    ],


  build: {
    transpile: ['vue-toastification']
  },

  vite: {
    optimizeDeps: {
      include: ['vue-toastification']
    }
  },

  app: {
    head: {
      title: 'MMO DUYLON | Sàn Tài Nguyên Số 1 VN',
      meta: [
        { name: 'description', content: 'Mua bán BM, Via Facebook, Gmail, TikTok US uy tín.' }
      ],
      link: [
        // Font chữ: Inter & JetBrains Mono
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap' },
        // FontAwesome Icon
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ]
    }
  },

  // dark/ligt
  colorMode: {
    classSuffix: '', // Quan trọng: Để nó tạo ra class 'dark' thay vì 'dark-mode'
    preference: 'system', // Mặc định theo hệ thống
    fallback: 'light',
  },

  //supabase
  supabase: {
    redirect: false, // Tắt bắt buộc đăng nhập mặc định
  },

  // auto-import stores
  pinia: {
    storesDirs: ['./stores/**'],
  },

  // i18n config
  i18n: i18nConfigs,

  // vee-validate config
  veeValidate: {
    autoImports: true,
  }
})
