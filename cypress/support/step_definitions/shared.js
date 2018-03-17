/* global cy given then */

given('I open the app', () => {
  cy.visit('')
})

then(`I see {string}`, (title) => {
  cy.contains(title)
})
