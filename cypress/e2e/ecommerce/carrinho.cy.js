/// <reference types="cypress" />


describe('empty spec', () => {

    it('Deve exibir mensagem ou exibir a lista vazia', () => {
      cy.visit('https://cena.reset.cwi.com.br/index.php/shop/')
      cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
      cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .cart_empty > :nth-child(1)').should('have.text','You have no items in your shopping cart' )
     
    })
  
  
  })