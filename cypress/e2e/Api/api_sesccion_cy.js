/// <reference types='Cypress'/>

import 'cypress-file-upload'
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Demo de una API rest', () => {
    it('Test uno', () => {
        const datos = {
            "name": "Sebastian",
            "lastName": "Zapata",
            "email": "zapatasebastian001@gmail.com",
            "phone": "+57 3505082088",
            "city": "Medellín, Colombia"
        }

        cy.log(datos["name"])
        cy.log(datos["lastName"])
        cy.log(datos["email"])
        cy.log(datos["phone"])
        cy.log(datos["city"])
    })
})