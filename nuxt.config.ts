import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  runtimeConfig: {
    API_KEY: process.env.API_KEY,
  },

  css: [
    "~/assets/css/main.css",
    "~/assets/css/global.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // Auto import components: https://go.nuxtjs.dev/config-components

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@pinia/nuxt",
  ],
  loading: "~/components/loadingBar.vue",
  loadingIndicator: {
    name: "circle",
    color: "#3B8070",
    background: "white",
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
});
