class HomePage {

    url = 'https://cena.reset.cwi.com.br/'
    gridProdutos = '.product-block.grid'

    acessar() {
        cy.visit(this.url)
    }
    detalharPrimeiroProduto() {
        cy.get(this.gridProdutos).first().click()
    }
}
export default HomePage