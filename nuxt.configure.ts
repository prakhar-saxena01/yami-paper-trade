export default defineNuxtConfig({
    css: ['~/assets/styles.scss'],
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    runtimeConfig: {
      public: { siteName: 'Yami Paper Trade' }
    }
  })

function defineNuxtConfig(arg0: { css: string[]; modules: string[]; runtimeConfig: { public: { siteName: string; }; }; }) {
    throw new Error("Function not implemented.");
}
