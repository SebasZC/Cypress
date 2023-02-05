/// <reference types="Cypress"/>
//Para que funcionen los comandos

describe("Funciona alias", ()=>{

    it('Alias como variables', () => {
        cy.log("Prueba a pagina web")
        cy.visit('https://testingqarvn.com.es/datos-personales/')

        cy.get('#wsf-1-field-21').as("nom")

        cy.get('@nom').type("Sebastian")

    })
})