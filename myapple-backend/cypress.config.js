const { defineConfig } = require('cypress')

module.exports = defineConfig({
  screenshotsFolder: 'tmp/cypress_screenshots',
  videosFolder: 'tmp/cypress_videos',
  trashAssetsBeforeRuns: false,
  e2e: {
    specPattern: 'cypress/**/*.feature',
    baseUrl: 'http://localhost:3000',
    myPaymentsUrl: 'http://localhost:8080',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
