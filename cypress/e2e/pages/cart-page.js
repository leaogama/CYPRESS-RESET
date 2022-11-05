
class CartPage {

//url = 'https://cena.reset.cwi.com.br/index.php/cart/'
linkRemoverProduto = '.cart_item > .product-remove'
linkmensagemVazio =  '.cart-empty.woocommerce-info'
txtMensagemVazio = 'Seu carrinho está vazio.'
//acessar(){
//    cy.visit(url)
//}

removerProduto(){
    
    cy.get(this.linkRemoverProduto).click()
    
}

testaMensagemVazio(){
    cy.get(this.linkmensagemVazio).should('have.text', this.txtMensagemVazio)
}

}
export default CartPage