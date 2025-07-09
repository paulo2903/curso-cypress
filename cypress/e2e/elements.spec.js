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

    it('Radiobutton', () => { 
        cy.get('#formSexoFem')
            .check()  //poderia ser o click(); mas o check() é o mais aconselhável
            .should('be.checked')
        
        cy.get('#formSexoMasc')            
            .should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2) //valida se existem as duas radio de sexo
        //em formSexo as aspas não são obrigatórias já que o nome do elemento não tem espaço
    })

    it('CheckBox', () => { 
       cy.get('#formComidaPizza')
            .check()
            .should('be.checked')         
    })

    it('CheckBox marcar todos', () => {  
        cy.get('[name=formComidaFavorita]')         
            .click({multiple: true})  //parâmetro do click() para selecionar todos

        //validando se todos foram selecionados
        cy.get('#formComidaCarne').should('be.checked')
        cy.get('#formComidaFrango').should('be.checked')
        cy.get('#formComidaPizza').should('be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')        
     })

     it('ComboBox', () => {  
        cy.get('[data-test="dataEscolaridade"]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')  //para verificação precisa ser pelo "value"

            
        cy.get('[data-test="dataEscolaridade"]')
            .select('1graucomp')
            .should('have.value', '1graucomp')  

        cy.get('[data-test="dataEscolaridade"] option')
            .should('have.length', 8)  //validação da quantidade de opções da combo
         cy.get('[data-test="dataEscolaridade"] option').then($arr => {  //array que irá receber os valores da combo
            const values = []
            $arr.each(function(){
                values.push(this.innerHTML)
            })
            expect(values).to.include.members(["1o grau incompleto", "1o grau completo", "2o grau incompleto", "2o grau completo", "Superior", "Especializacao", "Mestrado", "Doutorado"])   //as opções que queremos validar se existem na combo
         })          
     })

     it('ComboBox multiplo', () => {       
        cy.get('[data-testid="dataEsportes"]')
            .select(['natacao', 'Corrida', 'nada'])  //no combo múltiplo precisamos enviar os valores do atributo value

        cy.get('[data-testid="dataEsportes"]').then($el => {
            expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
            expect($el.val()).to.have.length(3)
        })

        cy.get('[data-testid="dataEsportes"]')
            .invoke('val')
            .should('eql', ['natacao', 'Corrida', 'nada'])         
     })
})