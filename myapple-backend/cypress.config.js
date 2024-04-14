const { defineConfig } = require('cypress')

module.exports = defineConfig({
  screenshotsFolder: 'tmp/cypress_screenshots',
  videosFolder: 'tmp/cypress_videos',
  trashAssetsBeforeRuns: false,
  e2e: {
    specPattern: 'cypress/**/*.{feature,cy.js,js}',
    baseUrl: 'http://localhost:3001',
    myPaymentsUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
