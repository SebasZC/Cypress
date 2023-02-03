/// <reference types="Cypress"/>
//Para que funcionen los comandos

describe("Funciones para Type", ()=>{

    it('Type --> Enter', () => {
        cy.visit("www.google.com")
        cy.title().should('eq','Google')
        cy.get("[name='q']").type("Crypress io {enter}")
        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > a > h3").click()
    })

})
