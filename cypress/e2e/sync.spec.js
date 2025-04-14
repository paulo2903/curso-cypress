/// <reference types="cypress" />

describe('Esperas...', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it.only('Deve fazer retrys', () => {      
        cy.get('#buttonDelay').click()        
        cy.get('#novoCampo')
         //.should('not.exist') já que nesse momento ele garante que o elemento não existe, não faz sentido que retorne objeto para ser reaproveitado abaixo
            .should('exist')   
            .type('funciona')     
                   
    })
    
})
