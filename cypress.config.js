const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com",
    specPattern: "cypress/e2e",
    supportFile: "cypress/support/index.js",
    chromeWebSecurity: false,
    videoUploadOnPasses: false,
  }
});