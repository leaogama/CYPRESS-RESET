import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from '../../e2e/pages/cart-page'

const cartPage = new CartPage()

Given("que eu tenho um produto no carrinho", () => {

    cy.gerarCarrinhComUmProduto()
});

When("eu opto por remover o produto", function () {
    cartPage.removerProduto()
});

Then("eu vejo que meu carrinho está vazio", function () {
    cartPage.testaMensagemCarrinhoVazio()
    });