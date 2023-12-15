// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/storybook',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/image', 'nuxt-icon'
  ],
  googleFonts: {
    families: {
      'Open Sans': true,
      Righteous: true,
      'Oooh Baby': true,
    },
    display: 'swap',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ['~/assets/css/tailwind.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in', // default
    },
  },
  postcss: {
    plugins: {
      // cssnano para minificação de CSS
      cssnano: process.env.NODE_ENV === 'production' ? { preset: 'default' } : false,
    },
  },
  plugins: ['~/plugins/toast.ts'],
});
