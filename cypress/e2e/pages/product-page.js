class ProductPage {

    //url = 'https://cena.reset.cwi.com.br/index.php/shop/'
    btnComprar = 'button.tbay-buy-now.button'

    comprarAgora() {
    
        cy.get(this.btnComprar).click()
    }
}
export default ProductPage