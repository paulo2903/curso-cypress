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
    
    it('Confirm', () => {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {           
            expect(msg).to.be.equal('Confirm Simples')
        }) 
        cy.on('window:alert', msg => {           
            expect(msg).to.be.equal('Confirmado')
        })
    }) 

        
    it('Deny', () => {        
        cy.on('window:confirm', msg => {           
            expect(msg).to.be.equal('Confirm Simples')
            return false
        }) 
        cy.on('window:alert', msg => {           
            expect(msg).to.be.equal('Negado')
        }) 
        cy.get('#confirm').click()        
    })

    it('Prompt', () => {
        //iremos mockar o evento prompt dentro do window
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
        })

        cy.on('window:prompt', msg => {           
            expect(msg).to.be.equal('Era 42?')
            return false
        }) 
        cy.on('window:alert', msg => {           
            expect(msg).to.be.equal(':D')
        })
        cy.get('#prompt').click()        
    })
})