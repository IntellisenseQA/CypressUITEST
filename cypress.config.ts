import { defineConfig } from "cypress";

const cucumber = require('cypress-cucumber-preprocessor').default;

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: "cypress/e2e/features/*.feature",
  },
});
