/// <reference types="cypress" />

it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(2);
    expect(a).to.be.equal(1);
    expect('a').not.be.equal('b')
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(false).to.be.true;
    expect(b).to.be.null;
    expect(a).not.be.null;
    expect(c).to.be.undefined;
})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({a: 1, b: 2})  //é usado o deep para verificar se as propriedades do objeto são iguais
    expect(obj).eql({a: 1, b: 2})  //é usado o eql para verificar se as propriedades do objeto são iguais. é o mesmo que o uso do deep
    expect(obj).include({a: 1})  //include: quando o objeto é muito grande e queremos apenas verificar se alguma propriedade está dentro dele
    expect(obj).to.have.property('b')  //verifica indo diretamente na propriedade
    expect(obj).to.have.property('b', 2)  //verifica se tem a propriedade b e o valor 2
    expect(obj).to.not.be.empty  //verifica se a propriedade não está vazia
    expect({}).to.be.empty  //verifica se o objeto é vazio
})


it('Arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).to.have.members([1, 2, 3]) //verifica se o array tem os valores
    expect(arr).to.include.members([1, 3]) //verifica se o array tem esses dois valores incluídos
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})


it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15) //verifica o tamanho da string
    expect(str).to.contains('de') //verifica um trecho da string
    expect(str).to.match(/^String/) //uso do Regex: verifica se inicia com esse texto
    expect(str).to.match(/teste$/) //uso do Regex: verifica se termina com esse texto
    expect(str).to.match(/.{15}/) //uso do Regex: verifica se o tamanho é de 15 caracteres
    expect(str).to.match(/\w+/) //uso do Regex: verifica existem apenas palavras
    expect(str).to.match(/\D+/) //uso do Regex: verifica se não contém números
})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4) //verifica se é igual a 4
    expect(number).to.be.above(3) //verifica se está acima de 3
    expect(number).to.be.below(7) //verifica se está abaixo de 7

    expect(floatNumber).to.be.equal(5.2123) //verifica se o número de ponto flutuante é igual a 5.2123
    expect(floatNumber).to.be.closeTo(5.2, 0.1) //verifica se o número de ponto flutuante está próximo a 5.2 com a precisão de 0.1
    expect(floatNumber).to.be.above(5) //verifica se o número de ponto flutuante está acima de 5
})