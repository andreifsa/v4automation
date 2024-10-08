// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("productInfo", () => {
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link')
});

Cypress.Commands.add("fillMandatoryFieldsAndSubmit", (email, firstName, lastName, address, city, state, zipCode, phone) => {
    cy.get('#customer-email').type(email)
    cy.get('[name="shippingAddress.firstname"] > .label > span').type(firstName)
    cy.get('[name="shippingAddress.lastname"] > .label > span').type(lastName)
    cy.get('input[name="street[0]"]').type(address)
    cy.get('[name="shippingAddress.city"] > .label > span').type(city)
    cy.get('select[name="region_id"]').then(($select) => {
        cy.wrap($select).select(state);
      });
    cy.get('[name="shippingAddress.postcode"] > .label > span').type(zipCode)
    cy.get('[name="shippingAddress.telephone"] > label.label > span').type(phone)
    cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
    cy.get('.button').click()

});