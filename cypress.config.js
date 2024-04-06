const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout:20000,
    baseUrl:"https://staging-fe-v2.cutstruct.com/",
    env: {
      "MAILSLURP_API_KEY":"bc8fdb54288a9010853acd894137c71c4639e63a9ff38ae7ae1e714b46331b6c"
   },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
