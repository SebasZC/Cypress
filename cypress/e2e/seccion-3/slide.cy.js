/// <reference types="Cypress"/>
//Para que funcionen los comandos
require('cypress-xpath')

describe("Slide automation invoke", ()=>{

    it('slide modificando el rango', () => {
        cy.visit("https://jqueryui.com/slider/")
        cy.wait(2000)
        cy.get("[tabindex='0']").invoke("attr","style","left:100%")
    })


})
