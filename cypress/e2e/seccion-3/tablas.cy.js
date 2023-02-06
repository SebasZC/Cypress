/// <reference types="Cypress"/>
//Para que funcionen los comandos

describe("Tablas automation", ()=>{

    it('Capturar un elemento hijo de otro', () => {
        cy.visit("https://ecommerce.tealiumdemo.com/")
        cy.get(".block-content").children('.input-box').type("zapatasebastian001@gmail.com")
        
    })

    it('Filter', () => {
        cy.visit("https://ecommerce.tealiumdemo.com/")
        cy.get("[type='email']").filter('#newsletter').type("zapatasebastian001@gmail.com")
        
    })

    it('Find function', () => {
        cy.visit("https://ecommerce.tealiumdemo.com/")
        cy.get(".block-content").find(".input-box").type("zapatasebastian001@gmail.com")
        
    })

    it('First function', () => {
        cy.visit("https://ecommerce.tealiumdemo.com/")
        cy.get(".block-content").first().type("zapatasebastian001@gmail.com")
        
    })

    it('seleccionar comandos siguientes', () => {
        cy.visit("https://ecommerce.tealiumdemo.com/")
        cy.get("[type='button']").nextAll().should("have.length",5)
        
    })

    it('Seleccionar elemento padre', () => {
        cy.visit("https://ecommerce.tealiumdemo.com/")
        cy.get("#newsletter").parent().should("have.class","input-box")
        
    })

})
