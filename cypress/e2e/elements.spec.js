/// <reference types="cypress" />

describe('Work with basic elements', () => {

    //como esses Hooks estão dentro do describe, serão aplicados para todos os testes
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    /*beforeEach(() => {
        cy.reload()  //vai recarregar a página antes de cada teste
    })*/

    it('Text', () => {        
        //cy.get('span').should('contain', 'Cuidado') essa é uma forma muito genérica
        cy.get('.facilAchar').should('contain', 'Cuidado') //boa prática
    })


    it('Links', () => {         
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')        
    })

    it('TextFields', () => {         
        cy.get('#formNome')
            .type('Paulo Henrique')
            .should('have.value', 'Paulo Henrique') //nessa aplicação o nome escrito fica no atributo "value" e não no atributo "text"

        cy.get('#elementosForm\\:sugestoes')  //são colocadas essas duas \\ antes dos dois pontos para não haver problema
            .type('Manuella é a princesinha linda de papai !!!')
            .should('have.value', 'Manuella é a princesinha linda de papai !!!') 

        cy.get('[data-cy="dataSobrenome"]')
            .type('Pai da MANUELLA LINDAAA{backspace}{backspace}') //irá apagar 2 caracteres

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('MANUELLA do papai')
            .should('have.value', 'MANUELLA do papai') 

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', { delay:100 })  //para digitar mais lento
            .should('have.value', 'acerto') 

    })


})