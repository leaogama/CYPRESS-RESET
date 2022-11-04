/// <reference types="cypress" />


describe('empty spec', () => {

  it('Deve exibir mensagem ou exibir a lista vazia', () => {
    cy.visit('https://cena.reset.cwi.com.br/')
    cy.get(':nth-child(2) > .text-skin > .fa').click()
    cy.get('.wishlist-empty').should('have.text','No products were added to the wishlist' )
   
  })


})