describe("Bienvenido al curso de cypress, versión 1", ()=>{
    it('Mi primer test -> Hola mundo', () => {
        cy.log("Hola mundo")
    })

    it('Mi segundo test -> campo nombre', () => {
        cy.log("Prueba a pagina web")
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.type('#login-button').click()
        cy.wait(4000)
    })
})
