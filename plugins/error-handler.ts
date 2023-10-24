export default defineNuxtPlugin((nuxtApp) => {
  // Errors can be handled here and sent to a service.
  nuxtApp.vueApp.config.errorHandler = () => {};
  nuxtApp.hook("vue:error", () => {});
});
