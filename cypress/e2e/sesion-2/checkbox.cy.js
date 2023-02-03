/// <reference types="Cypress"/>
//Para que funcionen los comandos

require('cypress-xpath')

describe("Checkbox automation", ()=>{
    it('Check todos los checkboxs', () => {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
        cy.title().should('eq','Checkboxes & Radio Buttons')
        cy.get("[type='checkbox'").check().should("be.checked")
        cy.get("[type='checkbox'").uncheck().should("not.be.checked")
    })

    it('Check por seleccion', () => {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
        cy.title().should('eq','Checkboxes & Radio Buttons')
        cy.get('[value="red"]').check().should("be.checked")
        cy.get('[value="red"]').uncheck().should("not.be.checked")
    })

    it('Check por seleccion xpath', () => {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
        cy.title().should('eq','Checkboxes & Radio Buttons')
        cy.xpath('//*[@id="Content"]/div[1]/blockquote[1]/form/input[4]').check().should("be.checked")
        cy.xpath('//*[@id="Content"]/div[1]/blockquote[1]/form/input[4]').uncheck().should("not.be.checked")
    })

    it.only('Check por click', () => {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
        cy.title().should('eq','Checkboxes & Radio Buttons')
        cy.get('[value="purple"]').click()
        cy.wait(1000)
        cy.get('[value="purple"]').click()
    })

})
