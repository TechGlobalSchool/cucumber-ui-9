class WikiPage {
  /* Locators */
  getSearchBar() {
    return cy.get('#searchInput')
  }

  getFirstHeading() {
    return cy.get('#firstHeading')
  }

  getLanguages() {
    return cy.get('.central-featured-lang strong')
  }

  /* Methods */
  searchFor(input) {
    this.getSearchBar().type(input + '{enter}')
  }
}

module.exports = WikiPage
