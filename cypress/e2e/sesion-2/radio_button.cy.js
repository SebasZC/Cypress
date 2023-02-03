/// <reference types="Cypress"/>
//Para que funcionen los comandos

describe("Radio button automation", ()=>{
    it('radio button select all', () => {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
        cy.title().should('eq','Checkboxes & Radio Buttons')
        cy.get("[type='radio'").check().should("be.checked")
    })
    
    it('radio button select just one', () => {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
        cy.title().should('eq','Checkboxes & Radio Buttons')
        cy.get(':nth-child(33) > form > :nth-child(5)').click().should("be.checked")
    })
})
