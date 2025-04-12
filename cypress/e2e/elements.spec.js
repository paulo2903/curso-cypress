/// <reference types="cypress" />

describe('Work with basic elements', () => {
    it('Text', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //cy.get('span').should('contain', 'Cuidado') essa é uma forma muito genérica
        cy.get('.facilAchar').should('contain', 'Cuidado') //boa prática
    })
})