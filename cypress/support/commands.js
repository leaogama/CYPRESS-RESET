// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

import HomePage from '../e2e/pages/home-page'
import ProductPage from '../e2e/pages/product-page'
import CartPage from '../e2e/pages/cart-page'

const homePage = new HomePage()
const productPage = new ProductPage()
const cartPage = new CartPage()

Cypress.Commands.add('gerarCarrinhComUmProduto', () => {

    homePage.acessar()
    homePage.detalharPrimeiroProduto()
    productPage.comprarAgora()

})

Cypress.Commands.add('limpaCarrinhoComUmProduto', () => {
    
    //cartPage.acessar()
    cartPage.removerProduto()
    cartPage.testaMensagemCarrinhoVazio()

})