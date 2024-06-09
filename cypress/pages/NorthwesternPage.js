class NorthwesternPage {
  getNavbarItems() {
    return cy.get('#top-nav > div > ul > li > a')
  }

  // getFirstName() {
  //   return cy.get('#top-nav > div > ul > li > a')
  // }

  // getLasttName() {
  //   return cy.get('#top-nav > div > ul > li > a')
  // }

  // getFrom() {
  //   return cy.get('#top-nav > div > ul > li > a')
  // }

  // getLive() {
  //   return cy.get('#top-nav > div > ul > li > a')
  // }

  // form_handler(label, input) {
  //   switch (label) {
  //     case 'First Name':
  //       return this.getFirstName().type(input)
  //     case 'Last Name':
  //       return this.getLasttName().type(input)
  //     case 'From':
  //       return this.getFrom().type(input)
  //     case 'Live':
  //       return this.getLive().type(input)
  //     default:
  //       throw new Error('qweqwewq')
  //   }
  // }
}

module.exports = NorthwesternPage
