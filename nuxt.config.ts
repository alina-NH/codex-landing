// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
            @import "@/assets/styles/_termly.scss";
          `,
        },
      },
    },
    build: {
      cssCodeSplit: false,
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
  ],
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Codex Software Website',
        },
      ],
      script: [
        {
          src: 'https://widget.clutch.co/static/js/widget.js',
          tagPosition: 'bodyClose',
        },
        {
          src: '//js-eu1.hs-scripts.com/139720886.js',
          id: 'hs-script-loader',
          async: true,
          defer: true,
          type: 'text/javascript',
          tagPosition: 'bodyClose',
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-957998787',
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-957998787');
          `,
        },
        {
          innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K9F2T4P');
          `,
        },
        {
          type: "text/javascript",
          src: "https://app.termly.io/embed.min.js",
          'data-auto-block': "on",
          'data-website-uuid': "f77b7e8e-94e7-4c10-b63e-749b17f19603",
        },
      ],
      noscript: [
        {
          innerHTML: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K9F2T4P"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
          tagPosition: 'bodyClose',
        },
      ],
      link: [
        {
          rel: 'manifest',
          href: 'manifest.json',
        }
      ],
    },
  },
});
