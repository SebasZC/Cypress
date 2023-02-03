/// <reference types="Cypress"/>

describe("Seccion 1 / validando el titulo", ()=>{
    it('Test validar titulo', () => {
        cy.visit('https://example.cypress.io/todo')
        cy.title().should('eq','Cypress.io: Kitchen Sink')

        cy.log("ok, la funciòn title está bien")
    })

})
