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
    MONGO_URL: process.env.MONGO_URL,
  },
  generate: {
    routes: ["/api/register/create", "/api/login/create"],
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
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@pinia/nuxt",
  ],
  loadingIndicator: {
    name: "circle",
    color: "#3B8070",
    background: "white",
  },
  //Register nitro plugin
  nitro: {
    plugins: ["@/server/db/index.js"],
  },
  build: {
    transpile: ["vue-toastification"],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
});
