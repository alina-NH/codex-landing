// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/_fonts.scss";
            @import "@/assets/styles/_breakpoints.scss";
            @import "@/assets/styles/_variables.scss";
            @import "@/assets/styles/_colors.scss";
            @import "@/assets/styles/_typography.scss";
          `,
        },
      },
    },
  },
  app: {
    head: {
      title: "Codex Software",
    }
  },
  imports: {
    dirs: ['stores', 'types'],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ]
});
