/// <reference types= "cypress"/>

describe ('criando cenario de teste para o site globalsqa', () => {

    it{'Caso teste: Registrando um usuário no site com sucesso', () => {
        cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('.bnt-link').click()
        cy.get('#firstName').type('inatel')
        cy.get('#Text1').type('inatel')
        cy.get('#username').type('inatel')
        cy.get('#password').type('inatel')
        cy.get('.bnt-primary').click()
        cy.get('.ng-binding').should('contain.text','Registration successful')
    })

    it.skip{'Caso teste: Registrando um usuário no site com erro', () => {
        cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('#firstName').type('inatel')
        cy.get('#Text1').type('inatel')
        cy.get('#username').type('inatel')
        cy.get('#password').type('inatel')
        cy.get('#password').clear()
        cy.get('.has-error > .help-block').shoud('have.text', 'Password is required')
        cy.get('.bnt-primary').should('be.disabled')
    })

   it('Caso de teste: Realizando login com Sucesso', () => {
   let info = criarUsuario()
   })

   let info = criarUsuario()
   cy.get(#username).type(info[0])
   cy.get(#password).type(info[1])
   cy.get('.bnt-primary').click()
   cy.get('h1.ng-binding').should('contain.text', info[0])

})

    function criarUsuario(){

    let horas = new Date().getHours.toString
    let minutos = new Date().getMinutes.toString
    let seg = new Date().getSeconds.toString
    let user = horas + minutos + seg + 'Id'
    let senha = horas + minutos + seg + 'senha'
    let userInfo = [user, senha]

 }
     cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('.bnt-link').click()
        cy.get('#firstName').type(user)
        cy.get('#Text1').type(user)
        cy.get('#username').type(user)
        cy.get('#password').type(senha)
        cy.get('.bnt-primary').click()
        cy.get('.ng-binding').should('contain.text','Registration successful')

        return userInfo
    }



