Feature: Remover produto do carrinho

    Scenario: Remover um produto do carrinho
        Given que eu tenho um produto no carrinho
        When eu opto por remover o produto
        Then eu vejo que meu carrinho está vazio