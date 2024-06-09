const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')

When(/^user search for "([^"]*)"$/, (link) => {
  cy.get('[name="q"]').type(`${link}{enter}`)
})
