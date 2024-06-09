const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const WikiPage = require('../../../pages/WikiPage')

const wikiPage = new WikiPage()

When(/^user search for "([^"]*)" on Wikipedia$/, (input) => {
  wikiPage.searchFor(input)
})

Then(/^user should see "([^"]*)" in the first heading$/, (heading) => {
  wikiPage.getFirstHeading().should('have.text', heading)
})

Then(/^user should see below languages around the logo$/, (dataTable) => {
  const languages = dataTable.rawTable.flat()

  wikiPage.getLanguages().each(($el, index) => {
    cy.wrap($el).should('have.text', languages[index])
  })
})
