/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        /*const title = cy.title()
        console.log(title)*/

        /*cy.pause()  após executar o comando de visit, já executou o pause.
        a execução fica parada até que se acione o botão de "play" */

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

            
        let syncTitle

        cy.title().then(title => {
            console.log(title)

            cy.get('#formNome').type(title)

            syncTitle = title
        })

        cy.get('[data-cy="dataSobrenome"]').then($el => {
            $el.val(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($el => {   //onde há 2 pontos precisamos colocar 2 barras
            $el.val(syncTitle)
        })        
    })

it('Should find and interact with an element', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.get('buttonSimple')
    .click()
    .should('have.value', 'Obrigado!')    
    })
})
