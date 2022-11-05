
class CartPage {

//url = 'https://cena.reset.cwi.com.br/index.php/cart/'
linkRemoverProduto = '.cart_item > .product-remove'
linkTxtCarrinhVazio =  '.cart-empty.woocommerce-info'
txtCarrinhoVazio = 'Seu carrinho está vazio.'
//acessar(){
//    cy.visit(url)
//}

removerProduto(){
    
    cy.get(this.linkRemoverProduto).click()
    
}

testaMensagemCarrinhoVazio(){
    cy.get(this.linkTxtCarrinhVazio).should('have.text', this.txtCarrinhoVazio)
}

}
export default CartPage