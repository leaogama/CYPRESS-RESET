/// <reference types="cypress" />


describe('empty spec', () => {

    it('Deve exibir mensagem ou exibir a lista vazia', () => {
      cy.visit('https://cena.reset.cwi.com.br/index.php/shop/')
      cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
      cy.get('.cart_empty > li').first().should('have.text','You have no items in your shopping cart' )
     
    })
  
  
  })