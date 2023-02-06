/// <reference types="Cypress"/>
//Para que funcionen los comandos

describe("Ejemplo de type pageUp, pageDown", ()=>{
    
    it('Page up', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)
        cy.get('#wsf-1-field-21').type("{pageup}")
    });

    it('Page up', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)
        cy.get('#wsf-1-field-21').type("{pagedown}")
    });

    it('Page up', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)
        cy.get('#wsf-1-field-21').type("{pagedown}")
    });

})
