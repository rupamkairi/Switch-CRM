export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/strapi",
    "@formkit/nuxt",
    "@nuxt/devtools",
  ],
  strapi: {
    auth: {
      // fields: {}
      populate: "*",
    },
  },
});
