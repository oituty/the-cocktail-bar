// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/storybook',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      'Open Sans': true,
      Righteous: true,
    },
    display: 'swap',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ['~/assets/css/main.css'],
});
