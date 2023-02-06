/// <reference types="Cypress"/>
//Para que funcionen los comandos

require('cypress-xpath')

describe("invoke automation", ()=>{

    it('invoke text', () => {
        cy.log("Prueba a pagina web")
        cy.visit('https://testingqarvn.com.es/datos-personales/')

        cy.get('h2').invoke("text").should("contain","Datos Personales Básicos")

        cy.get('#wsf-1-label-21').invoke("text").as("title_name")
        cy.get("@title_name").should("contain","Nombre:").then(()=>{
            cy.get('#wsf-1-field-21').type("Sebastian")
        })
    })

    it('invoke style', () => {
        cy.log("Prueba a pagina web")
        cy.visit('https://testingqarvn.com.es/datos-personales/')

        cy.xpath("//input[contains(@class, 'nombre')]").invoke("attr","style","font-size:50px")

    })

    it('invoke ocultar y mostrar', () => {
        cy.log("Prueba a pagina web")
        cy.visit('https://testingqarvn.com.es/datos-personales/')

        cy.xpath('//*[@placeholder="Nombre:"]').invoke("hide")
        cy.wait(2000)
        cy.xpath("//*[@id='wsf-1-field-21']").invoke("show","4s")

    })
    
    it('invoke src', () => {
        cy.log("Prueba a pagina web")
        cy.visit('https://testingqarvn.com.es/datos-personales/')

        cy.get('.wp-image-230').invoke("attr","src").should("include","http://testingqarvn.com.es/wp-content/uploads/2022/01/Formularios.jpg")


    })
})