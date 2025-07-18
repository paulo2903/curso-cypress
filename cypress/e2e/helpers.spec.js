/// <reference types="cypress" />

describe('Helpers...', () => {
    it('Wrap', () => {
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //cy.get('#ForNome').then($el => {

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })    
            

        cy.get('#buttonSimple').then(() => {
            console.log('Encontrei primeiro botão')
        })

        cy.wrap(promise).then(ret => {
            console.log(ret) // Deve imprimir 10
        })

        cy.get('#buttonList').then(() => {
            console.log('Encontrei o segundo botão')
        })

    })




    it('Its...', () => {
        const obj = {nome: 'User', idade: 20}
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User')

        const obj2 = {nome: 'User', idade: 20, endereco: {rua: 'dos bobos'}}
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bobos')
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos')

         cy.visit('https://wcaquino.me/cypress/componentes.html')
         cy.title().its('length').should('be.equal', 20)
    })

    it('Invoke...', () => {
        const getValue = () => 1;
        const soma = (a, b) => a + b;

        //criando a função "fn" e usando o getValue como referência para a mesma
        cy.wrap({ fn:getValue}).invoke('fn').should('be.equal', 1)  //quando invocado o 'fn', será exibido o resultado do getValue que é '1'.
        cy.wrap({ fn:soma}).invoke('fn', 2, 5).should('be.equal', 7) 

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val', 'Texto via invoke')
        cy.window().invoke('alert', 'Dá pra ver?')
        cy.get('#resultado')
            .invoke('html', '<input type="button" value="hached!"/>')
    })



    })