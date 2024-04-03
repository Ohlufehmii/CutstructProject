const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout:20000,
    baseUrl:"https://staging-fe-v2.cutstruct.com/",
    env: {
      "MAILSLURP_API_KEY":"f53a1da18ea522580705ca6199318dd7e8a14f30f7339900c8f900f7f95d4ad6"
   },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
