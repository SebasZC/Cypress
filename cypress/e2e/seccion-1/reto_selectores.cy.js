/// <reference types="Cypress"/>
//Para que funcionen los comandos

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Reto automatización", ()=>{
    it('Probando aplicación', () => {
        cy.visit("https://computer-database.gatling.io/computers")

        //busando
        cy.xpath("//input[contains(@id,'searchbox')]").type("ACE")
        cy.get("#searchsubmit").should("be.visible").click()

        //agregando
        cy.get('#add').click()
        cy.get("[name='name']").should("be.visible").type("cypress pc")
        cy.get("#introduced").should("be.visible").type("2023-02-02").tab().type("2023-12-31")
        cy.get('#company').should("be.visible").select("Nokia").should("have.value","16")
        cy.get('.primary').should("be.visible").click()

        //a[text()='push buttons'] --> para econtrar por texto
    })

})
