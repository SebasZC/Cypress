/// <reference types='Cypress'/>

require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Carga por fixture muchos datos', ()=>{

    it('cargando desde json (muchos datos)', () => {
        

        cy.fixture("datos_array").then(testdata => {
            testdata.forEach(data => {
                const d_name = data.name
                const d_lastName = data.lastName
                const d_email = data.email
                const d_phone = data.phone

                cy.visit("https://testingqarvn.com.es/datos-personales/")

                cy.get('#wsf-1-field-21').should("be.visible").type(d_name)
                cy.get('#wsf-1-field-22').should("be.visible").type(d_lastName)
                cy.get('#wsf-1-field-23').should("be.visible").type(d_email)
                cy.get('#wsf-1-field-24').should("be.visible").type(d_phone)
                cy.get('#wsf-1-field-27').should("be.visible").click()

            });
        })

    })
})