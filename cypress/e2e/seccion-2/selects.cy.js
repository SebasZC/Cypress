/// <reference types="Cypress"/>
//Para que funcionen los comandos

require('cypress-xpath')

describe("Select automation", ()=>{
    it('Select simple', () => {
        cy.visit("https://www.ironspider.ca/forms/dropdowns.htm")
        cy.title().should('eq','Dropdown Menus')
        cy.get("[name='coffee']").should("be.visible").select("With cream & sugar").should("have.value","regular")
        cy.wait(1500)
        cy.get("[name='coffee']").should("be.visible").select("With cream").should("have.value","cream")
    })

    it('Select with enter in google', () => {
        cy.visit("www.google.com")
        cy.title().should('eq','Google')
        cy.get("[name='q']").type("Flash").type("{enter}")
        
    })

    it.only('Select multiselect', () => {
        cy.visit("https://www.ironspider.ca/forms/dropdowns.htm")
        cy.title().should('eq','Dropdown Menus')
        cy.get("[name='coffee2']").should("be.visible").select(["skim","whipped","honey","danish"])
    })

})
