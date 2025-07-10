/// <reference types="cypress" />

describe('Work with alerts', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()  //vai recarregar a página antes de cada teste
    })

    it('Alert', () => {
        cy.get('#alert').click()
        cy.on('window:alert', msg => {     // on - pega eventos que ocorrem na nossa tela
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        }) 
    })

    it('Alert com mock', () => {
        const stub = cy.stub().as('alerta')   // o "stub" substitui uma função, armazena e permite que controle o comportamento. O "as" é pra dar um nome ao evento
        cy.on('window:alert', stub)     // o stub vai substituir o método "msg" que estávamos utilizando
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')      //getCall pega a chamada que foi feita a partir do stub. O zero vai pegar a primeira como em um array
            // calledWith('Alert Simples') verifica que uma chamada de método foi chamada com um parâmetro específico
            })           
        }) 
    })


