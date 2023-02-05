/// <reference types="Cypress"/>
//Para que funcionen los comandos

require('cypress-xpath')

describe("Then function", ()=>{
   
    it.only('Select multiselect and function then', () => {
        cy.visit("https://www.ironspider.ca/forms/dropdowns.htm")
        cy.title().should('eq','Dropdown Menus')
        cy.get("[name='coffee2']").should("be.visible").select(["skim","whipped","honey","danish"]).then(()=>{
            cy.xpath("//a[text()='push buttons']").should("be.visible").click()
        })
    })

})