/// <reference types="Cypress"/>
//Para que funcionen los comandos

describe("Introducción a los asserts", ()=>{
    it('Demo de los asserts', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.get('#wsf-1-field-21').should("be.visible").type("Sebastian")
        cy.get('#wsf-1-field-22').should("be.visible").type("Zapata")
        cy.get('#wsf-1-field-23').should("be.visible").should("be.enabled").type("zapatasebastian001@gmail.com")
    })

})
