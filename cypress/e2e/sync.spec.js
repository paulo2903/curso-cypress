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

    it('Deve fazer retrys', () => {      
        cy.get('#buttonDelay').click()        
        cy.get('#novoCampo')
         //.should('not.exist') já que nesse momento ele garante que o elemento não existe, não faz sentido que retorne objeto para ser reaproveitado abaixo
            .should('exist')   
            .type('funciona')     
                   
    })
    
    it('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')        
            .find('span')  //pega um elemento DOM de um seletor específico que já foi buscado a cima
            .should('contain', 'Item 1')

        cy.get('#lista li')        
            .find('span')  
            .should('contain', 'Item 2')
    })

    it('Uso do Timeout', () => {      
        cy.get('#buttonDelay').click()        
     // cy.get('#novoCampo', {timeout: 1000}).should('exist')   //alterando o timeout para 1 segundo
             
        cy.get('#buttonListDOM').click()
        //cy.wait(5000) //é uma espera fixa
        cy.get('#Lista li span', {timeout: 30000})
            .should('contain', 'Item 2')                   
    })
    
})
