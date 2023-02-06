const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default 

module.exports = defineConfig({
  projectId: 'xm7i1s',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "**/*.feature",
  },
  
  //alto y ancho de la ventana
  "viewportWidth": 1500,
  "viewportHeight":900,

  //chromeweb security
  chromeWebSecurity: false,

  //tiempo en cargar la pagina
  "pageLoadTimeout": 9000,

  //tiempo de espera del elemento
  "defaultCommandTimeout": 15000,


});


