const { Then } = require('@badeball/cypress-cucumber-preprocessor')
const NorthwesternPage = require('../../../pages/NorthwesternPage')

const northwesternPage = new NorthwesternPage()

// Then(
//   /^user should see NavBar items  "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" and "([^"]*)"$/,
//   (args1, args2, args3, args4, args5, args6) => {
//     const arr = [args1, args2, args3, args4, args5, args6]

//     northwesternPage.getNavbarItems().each(($el, index) => {
//       cy.wrap($el).should('contain', arr[index])
//     })
//     // console.log(args1, args2, args3, args4, args5, args6)
//     // return true
//   },
// )

Then(/^user should see below NavBar items$/, (dataTable) => {
  const arr = dataTable.rawTable.flat()

  northwesternPage.getNavbarItems().each(($el, index) => {
    cy.wrap($el).should('contain', arr[index])
  })

  arr.forEach((input) => {
    cy.log(input)
  })
})

Then(/^user should fill the form as key-value pairs$/, (dataTable) => {
  const keyValue = dataTable.rowsHash()

  for (const key in keyValue) {
    cy.log(key)
    cy.log(keyValue[key])
  }
})
