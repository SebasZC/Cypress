/// <reference types="Cypress"/>
//Para que funcionen los comandos

describe("Opciones de clicks", ()=>{
    it('Click sencillo', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.get('#wsf-1-field-21').type("Sebastian")
        cy.get('#wsf-1-field-22').type("Zapata")
        cy.get('#wsf-1-field-23').type("zapatasebastian001@gmail.com")
        cy.get('#wsf-1-field-24').type("+57 3505082088")
        cy.get('#wsf-1-field-28').type("Medellín, Colombia")
        cy.get('#wsf-1-field-27').should("be.visible").click()
    })


    //Cuando se interrumpe el boton y necesitamos que si o si de click
    it('Click Dorce true', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.get('#wsf-1-field-21').type("Sebastian")
        cy.get('#wsf-1-field-22').type("Zapata")
        cy.get('#wsf-1-field-23').type("zapatasebastian001@gmail.com")
        cy.get('#wsf-1-field-24').type("+57 3505082088")
        cy.get('#wsf-1-field-28').type("Medellín, Colombia")
        cy.get('#wsf-1-field-27').should("be.visible").click({force: true})
    })

    it.only('Click por coordenadas (x,y)', () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.get('#wsf-1-field-21').type("Sebastian")
        cy.get('#wsf-1-field-22').type("Zapata")
        cy.get('#wsf-1-field-23').type("zapatasebastian001@gmail.com")
        cy.get('#wsf-1-field-24').type("+57 3505082088")
        cy.get('#wsf-1-field-28').type("Medellín, Colombia")
        cy.get('.logo_container').should("be.visible").click(50,15)
        cy.get('#logo').should("be.visible").click(100,5)
    })

})