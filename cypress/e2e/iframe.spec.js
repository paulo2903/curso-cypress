/// <reference types="cypress" />

describe('Work with iFrames', () => {
    it('Deve preencher campo de texto', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#field')
                .type('funciona?')
                .should('have.value', 'funciona?')       
       
            cy.on('window:alert', msg => {           
                expect(msg).to.be.equal('Alert Simples')
            }) 
            cy.wrap(body).find('#otherButton').click()
        })
    })
})