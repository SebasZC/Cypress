const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  //alto y ancho de la ventana
  "viewportWidth": 1500,
  "viewportHeight":900,

  //chromeweb security
  chromeWebSecurity: false,

  //tiempo en cargar la pagina
  "pageLoadTimeout": 9000,

  //tiempo de espera del elemento
  "defaultCommandTimeout": 15000
});
