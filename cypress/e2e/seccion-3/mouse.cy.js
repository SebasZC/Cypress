/// <reference types="Cypress"/>
//Para que funcionen los comandos
require('@4tw/cypress-drag-drop')

describe("mouse automation", ()=>{
    it('drag sencillo', () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title().should('eq','The Internet')

        cy.wait(2000)
        cy.get("#column-a").drag("#column-b",{force:true})


    })

    it('drag otro ejemplo', () => {
        cy.visit("https://demo.automationtesting.in/Static.html")

        cy.get('#angular').drag('#droparea')
        cy.get('#mongo').drag('#droparea')
        cy.get('#node').drag('#droparea')

    })

    it('over mouseo', () => {
        cy.visit("https://ecommerce.tealiumdemo.com/")

        cy.contains('Women').trigger('mouseover')

        cy.contains("Tops & Blouses").click()

        //si quiero que la pagina no se abra en otra pestaña o para eliminar attr usar --> invoke("removeAttr","target")
    
    })
})
