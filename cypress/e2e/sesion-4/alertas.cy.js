/// <reference types="Cypress"/>
//Para que funcionen los comandos
require('cypress-xpath')

describe("Alertas automation", ()=>{
    it('Primer alerta', () => {
        cy.visit("https://www.demoblaze.com/index.html")
        cy.title().should('eq','STORE')

        cy.get('#signin2').should("have.class","nav-link").should("have.text","Sign up").click()
        
        //Esto es para una alerta JS
        //cy.on("window:alert",(str)=>{
        //    expect(str).to.equal("Sign up")
        //    return true
        //})

        cy.get('#sign-username').should('be.visible').type("zapatasebastian001@gmail.com")
        cy.get('#sign-password').should('be.visible').type("123abc")
        cy.xpath('//button[@onclick="logIn()"]').click({force: true})

    })

})
