describe("Bienvenido al curso de cypress, versión 1", ()=>{
    it('Mi primer test -> Hola mundo', () => {
        cy.log("Hola mundo")
    })

    it('Mi segundo test -> campo nombre', () => {
        cy.log("Prueba a pagina web")
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').type("Sebastian")
        cy.get('#wsf-1-field-22').type("Zapata")
        cy.get('#wsf-1-field-23').type("zapatasebastian001@gmail.com")
    })
})
