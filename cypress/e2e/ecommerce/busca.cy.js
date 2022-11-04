/// <reference types="cypress" />


describe('Busca', () => {

    beforeEach( () => {
        cy.visit('https://cena.reset.cwi.com.br/index.php/shop/')
    })

    it('Deve exibir opcao de ir ao topo acessar rolar apara o final da pagina', () => {
        //cy.visit('https://cena.reset.cwi.com.br/index.php/shop/')
        cy.scrollTo("bottom")
        cy.get('#back-to-top').should("be.visible")

        //cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        // cy.get('.cart_empty > li').first().should('have.text','You have no items in your shopping cart' )

    })
    it('Deve exibir mais de um produtro ao acessar a pagina', () => {
        cy.get('.product-block').should('have.length.greaterThan', 8)
    })

})