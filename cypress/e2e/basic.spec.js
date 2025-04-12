/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        /*const title = cy.title()
        console.log(title)*/

        cy.pause()  /*após executar o comando de visit, já executou o pause.
        a execução fica parada até que se acione o botão de "play" */

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo').debug() //podemos pegar mais informações da execução
    })

it('Should find and interact with an element', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.get('buttonSimple')
    .click()
    .should('have.value', 'Obrigado!')    
})
})
