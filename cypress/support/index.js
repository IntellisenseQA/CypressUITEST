const report = require("multiple-cucumber-html-reporter");

module.exports = (on, config) => {
  on("after:run", () => {
    report.generate({
      jsonDir: "cypress/reports/cucumber-json", // Path to JSON reports
      reportPath: "cypress/reports/html",
      metadata: {
        browser: {
          name: "chrome",
          version: "94",
        },
        device: "Local Test Machine",
        platform: {
          name: "macOS",
          version: "11.2.3",
        },
      },
    });
  });
};
