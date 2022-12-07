const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com",
    specPattern: "cypress/e2e",
    supportFile: "cypress/support/index.js",
    chromeWebSecurity: false,
    videoUploadOnPasses: false,
  },
  env: {
    "validData": {
      "firstName": "Dwija",
      "lastName": "N",
      "address": "Jl. Pulau Saelus II",
      "city": "Denpasar",
      "state": "Bali",
      "zipCode": "80221",
      "phone": "0817353691",
      "ssn": "19700624",
      "username": "dwija",
      "password": "sanber39"
    },
    "invalidData": {
      "firstName": "dwija",
      "lastName": "N",
      "address": "Jl. Pulau dadu",
      "city": "Gianyar",
      "state": "Bali",
      "zipCode": "80771",
      "phone": "081777777",
      "ssn": "19700896",
      "username": "dwijan",
      "password": "1666"
    }
  }
});