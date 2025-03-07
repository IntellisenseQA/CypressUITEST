
import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature", // Path to feature files
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)], // Using esbuild plugin for preprocessor
      });

      // Attach the bundler to Cypress
      on('file:preprocessor', bundler);

      // Add Cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
        // Setting the base URL (replace with your application's URL)
        baseUrl: "http://google.co.uk",
  },
});
