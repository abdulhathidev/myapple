// <reference types="Cypress" />

describe('Registration page test', () => {
  it('Update the registation content', () => {
    cy.visit('http://localhost:3000/#/registration')
    cy.get('input[name="name"]').type('Abdul')
    cy.get('select').select('Female')
  })
})
