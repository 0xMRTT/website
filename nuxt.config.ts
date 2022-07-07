import theme from "@nuxt/content-theme-docs";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default theme({
  modules: [
    '@nuxt/content',
    "@nuxtjs/color-mode",
    '@nuxtjs/tailwindcss'
  ],
  components: true,
  colorMode: {
    preference: 'dark', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
  },
})
