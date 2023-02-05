/// <reference types="Cypress"/>
//Para que funcionen los comandos

require('cypress-plugin-tab')

describe("Ejemplo de tab", ()=>{
    
    it('tab use', () => {
        cy.log("Prueba a pagina web")
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').type("Sebastian").tab().type("Zapata").tab().type("zapatasebastian001@gmail.com")
    });
})
