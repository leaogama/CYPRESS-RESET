/// <reference types="cypress" />

beforeEach(() => {
  cy.viewport(1280, 720)

})


describe('empty spec', () => {

  it('Deve exibir mensagem de carrinho vazio ao acessar icone carrinho', () => {
    cy.visit('https://cena.reset.cwi.com.br/index.php/shop/')
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('.cart_empty > li').first().should('have.text', 'You have no items in your shopping cart')

  })

  it('Remover produto do carrinho', () => {
    cy.gerarCarrinhComUmProduto()  // ver commands.js
    cy.limpaCarrinhoComUmProduto()
   // cy.get('.cart-empty.woocommerce-info').should('have.text', 'Seu carrinho está vazio.')

  })

})