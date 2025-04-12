const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: ["cypress/e2e/**/*.cy.js", "cypress/e2e/**/*.spec.js"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
