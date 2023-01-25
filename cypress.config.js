module.exports = {
  e2e: {
    "defaultCommandTimeout": 4000,
      "chromeWebSecurity": false,

      baseUrl: 'https://www.lojasrenner.com.br/',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};

/* 
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}); */
