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
    Cypress.Commands.add('loginAmazon', () => { 
        cy.get('#nav-link-accountList').click()
        .get('#ap_email').type(`${Cypress.env('usuario.amazon')}`)
        .get('#continue').click()
        .get('#ap_password').type(`${Cypress.env('senha.amazon')}`)
        .get('#signInSubmit').click();
     })
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