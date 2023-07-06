const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8081',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    //possibilita executar todos os testes em modo interativo
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
})
