/// <reference types="Cypress"/>
//Para que funcionen los comandos

describe("Asserts on Cypress", ()=>{
    it('assert contains', () => {
        cy.visit("https://www.demoblaze.com/")
        cy.title().should('eq','STORE')
        cy.get('.list-group').contains("Laptops").click()
    })

    it('assert contain, eq', () => {
        cy.visit("https://www.demoblaze.com/")
        cy.title().should('eq','STORE')
        cy.get("#tbodyid").find(".card").eq(5).click()
    })

    it('assert contain, eq ->Validando que incluye impuestos y su precio', () => {
        cy.visit("https://www.demoblaze.com/")
        cy.title().should('eq','STORE')
        cy.get("#tbodyid").find(".card-title").eq(6).click()
        
        cy.get('strong').then((e)=>{
            let title = e.text()
            if(title=="Product description"){
                cy.log("El articulo incluye descripcion")
            }
        })

        cy.get(".price-container").then((e)=>{
            let price = e.text().split(' ')
            price=price[0].slice(1)
            if(price>600){
                cy.log("El producto se sale de nuestro presupuesto")
            }else{
                cy.log("Podemos adquirirlo, continúa con la compra")
                cy.get('.col-sm-12 > .btn').click()
            }
        })
    })

    it('Assert contain.text y have.text', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').type("Sebastian")
        cy.get('#wsf-1-field-22').type("Zapata")
        cy.get('#wsf-1-field-23').type("zapatasebastian001@gmail.com")
        cy.get('#wsf-1-field-24').type("+57 3505082088")
        cy.get('#wsf-1-field-28').type("Medellín, Colombia")
        cy.get('#wsf-1-field-27').should("be.visible").click()
        cy.get('p').should("have.text","Gracias por tu encuesta.")
        cy.get('#footer-info').should("contain.text","Rodrigo")
    })

    it('Assert contain.text y have.text', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').type("Sebastian")
        cy.get('#wsf-1-field-22').type("Zapata")
        cy.get('#wsf-1-field-23').type("zapatasebastian001@gmail.com")
        cy.get('#wsf-1-field-24').type("+57 3505082088")
        cy.get('#wsf-1-field-28').type("Medellín, Colombia")
        cy.get('#wsf-1-field-27').should("be.visible").click()
        cy.get('p').should("have.text","Gracias por tu encuesta.")
        cy.get('#footer-info').should("contain.text","Rodrigo")
    })

    it('Assert have.class', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').should("have.class","wsf-field").then(()=>{
            cy.get('#wsf-1-field-21').type("Sebastian")
        })
    })

    it('Assert have.class and function (and)', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').and("have.class","wsf-field").then(()=>{
            cy.get('#wsf-1-field-21').type("Sebastian")
        })
    })
    
    it('Assert have.length and have.css', () => {
        cy.visit('https://mdbootstrap.com/docs/b4/jquery/tables/pagination/')
        cy.get("#dtBasicExample tr td").should("have.length",60).should("have.css","padding","17.6px 12px 16px")
    })

    it('Assert contain desde el inicio and clear', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').type("Sebastian")
        cy.get('#wsf-1-field-22').type("Zapata")
        cy.get('#wsf-1-field-23').type("zapatasebastian001@gmail.com")
        cy.get('#wsf-1-field-21').clear()
        cy.contains("[type='submit']","Submit").should("be.visible").click()
    })

    it('Assert invoque', () => {
        let name = "Sebas"
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').invoke("attr","placeholder").should("contain","Nombre:").then(()=>{
            cy.get('#wsf-1-field-21').type(name)
            cy.get('#wsf-1-field-21').invoke("attr","style","color:red")
        })
    })

})
