/// <reference types="Cypress"/>
//Para que funcionen los comandos

require('cypress-xpath')

describe("Configuración y uso de los snippets", ()=>{

    it('invoke text', () => {
        cy.log("Prueba a pagina web")

        //cyv
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        
        //extenciones --> instalar snippets y ver como podemos agilizar el proceso
        
        //tambien se pueden crear, yo cree por ejemplo:
        //c_text_arg --> que me trae:
        cy.get('[arg]').should('be.visible').type('')
        cy.wait(tiempo)

        //para crear más, se debe revisar la documentación de VSCODE
    })

})