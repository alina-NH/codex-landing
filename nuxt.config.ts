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
            @import "@/assets/styles/_mixins.scss";
          `,
        },
      },
    },
  },
  runtimeConfig: {
    NODEMAILER_USER: process.env.NODEMAILER_USER,
    NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD,
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
