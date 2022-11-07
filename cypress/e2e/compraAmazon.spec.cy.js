/// <reference types="cypress" />


describe('Adicionar produtos ao carrinho - Verificar preço final', () => {

    beforeEach(() => {
        cy.visit('https://www.amazon.com.br')
        

 })

    it('Deve logar na Amazon', () => {
        cy.loginAmazon();
    })

    it('Deve adicionar múltiplos produtos ao carrinho', () => {
        cy.get('#twotabsearchtextbox').type('kindle{enter}', {force:true})
        cy.wait(6000)
        cy.get('[data-asin="B07FQK1TS9"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image', {force:true}).click()
        cy.wait(6000)
        cy.get('#add-to-cart-button', {force:true}).click()
        cy.wait(6000)
       cy.get('.a-button-close > .a-icon').click()
        //cy.get('.a-button-close')
       /cy.wait(6000)
        cy.get('input[name="proceedToRetailCheckout"]').click()
        //cy.get('#ap_email').type(`${Cypress.env('usuario.amazon')}`)
       // cy.get('#continue').click()
        //.get('#ap_password').type(`${Cypress.env('senha.amazon')}`)
        //.get('#signInSubmit').click();
       
        
    })
    
    /*it('Deve aparecer o preço do carrinho, somando todos os ítens adicionados', () => {

    })*/


})