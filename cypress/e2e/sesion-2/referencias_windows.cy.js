/// <reference types="Cypress"/>
//Para que funcionen los comandos

describe("Referencias a windows", ()=>{
    it('Windows charset', () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq','The Number Game')

        cy.document().should("have.property","charset").and('eq','UTF-8')
    })

    it('validar url', () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq','The Number Game')

        cy.url().should('include','random-number.html')
        cy.url().should('eq','https://testsheepnz.github.io/random-number.html')
    })

})
