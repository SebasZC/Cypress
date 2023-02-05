///<reference types='Cypress'/>

import 'cypress-file-upload'
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Navegación entre las páginas', ()=>{
    it('Back, forward', () => {
        cy.visit('https://testingqarvn.com.es/');
        cy.xpath("//a[contains(@class, 'et_pb_button_1')]").should("be.visible").click()

        cy.wait(1000)
        cy.go("back")

        cy.wait(1000)
        cy.go("forward")
    })

    it.only('reload', () => {
        cy.visit('https://testingqarvn.com.es/practicas-qa/');
        cy.xpath("//div/a[text()='Datos Personales']").click()

        cy.get('#wsf-1-field-21').type("Sebastian").tab().type("Zapata").tab().type("zapatasebastian001@gmail.com")

        cy.wait(1000)
        cy.reload()
    })

})