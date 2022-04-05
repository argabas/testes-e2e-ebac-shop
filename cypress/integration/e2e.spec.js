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

    it('Escolher produtos e finalizar a compra', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 1, 'L', 'Green')
        cy.addProdutos('Abominable Hoodie', 1, 'XL', 'Green')
        cy.addProdutos('Aero Daily Fitness Tee', 1, 'L', 'Black')
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 1, 'M', 'Red')
        
        cy.finalizaVenda()     
        
        cy.get('.woocommerce-notice').should('contain', "Obrigado. Seu pedido foi recebido.")

    });

})