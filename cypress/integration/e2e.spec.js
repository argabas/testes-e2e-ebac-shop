/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Adicionar produtos ao carrinho', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 1, 'L', 'Green')
        cy.addProdutos('Abominable Hoodie', 1, 'L', 'Blue')
        cy.addProdutos('Aero Daily Fitness Tee', 1, 'XS', 'Black')
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 1, 'M', 'Red')
        
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('.showlogin').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-button').click()
        cy.get('#payment_method_cod').click()
        cy.get('#terms').check({force:true})
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', "Obrigado. Seu pedido foi recebido.")

    });

})