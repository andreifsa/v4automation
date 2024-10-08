/// <reference types="Cypress" />

describe('Luma Stpre', function() {
  beforeEach(function() {
    cy.visit('https://magento.softwaretestingboard.com/')
    
  })


  it('Should verify the application logo is displayed', function() {
    cy.get('.logo img').should('be.visible');
    cy.get('.logo').should('have.attr', 'href', 'https://magento.softwaretestingboard.com/');

  })

  it('Should verify if the search works well', function() {
    cy.get('#search').click().type("shirt{enter}")
    let productName = cy.productInfo()
    cy.get('.block > :nth-child(2) > a').click()
    cy.productInfo().then((newProductName) => {
      expect(productName).to.not.equal(newProductName) // Verify if names are different
    })
})

  it('Should verify if is possible add new items to the cart', function() {
    cy.get('#search').click().type("shirt{enter}")
    cy.productInfo().click().then(() => {
      cy.get('#option-label-size-143-item-166').click()
      cy.get('#option-label-color-93-item-50').click()
      cy.contains('span', 'Add to Cart').click()
    })
    cy.wait(2000)
    cy.get('.minicart-wrapper > .action').click()
    cy.get('#top-cart-btn-checkout').should("be.visible")
    
})

  it('Should do a checkout flow', function() {
    cy.get('#search').click().type("shirt{enter}")
    cy.productInfo().click().then(() => {
      cy.get('#option-label-size-143-item-166').click()
      cy.get('#option-label-color-93-item-50').click()
      cy.contains('span', 'Add to Cart').click()
    })
    cy.wait(2000)
    cy.get('.minicart-wrapper > .action').click()
    cy.get('#top-cart-btn-checkout').should("be.visible").click()
    cy.wait(4000)
    cy.fillMandatoryFieldsAndSubmit('joseoto@gmail.com', 'Jose', 'Oto', 'Rua lugar nenhum', 'campinas', 'Alabama',  '90210', '993483455')
})
})

