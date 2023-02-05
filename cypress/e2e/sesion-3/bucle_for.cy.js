/// <reference types="Cypress"/>
//Para que funcionen los comandos

describe("Uso del ciclo for en preubas", ()=>{

    it('Captura de nombre de los productos', () => {
        cy.visit("https://www.demoblaze.com/")
        cy.title().should('eq','STORE')
        cy.get("#tbodyid").find(".card-title").each(($el,index,$list)=>{
            let articulo = $el.text()
            cy.log(articulo)
        })
        
    })

    it.only('each y wrap para indicar que se va a seleccionaar uno encontrado', () => {
        cy.visit("https://www.demoblaze.com/")
        cy.title().should('eq','STORE')
        cy.get("#tbodyid").find(".card-title").each(($el,index,$list)=>{
            let articulo = $el.text()
            if(articulo.includes("Iphone 6 32gb")){
                cy.wrap($el).click({force:true})
            }
        })
        
    })

})
