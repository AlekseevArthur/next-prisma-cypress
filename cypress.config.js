const { defineConfig } = require("cypress");
const clean = require("./cypress/tasks/clean");
const createTestBook = require("./cypress/tasks/createTestBook");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3001",
    setupNodeEvents(on, config) {
      on("task", {
        clean,
        createTestBook,
      });
    },
  },
});
