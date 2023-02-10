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
            "city": "Medellín, Colombia",
            "cursos": [
                {
                    "name": "php",
                    "description": "Lenguaje de programación"
                },
                {
                    "name": "Java",
                    "description": "Lenguaje de programación"
                },
                {
                    "name": "pyhton",
                    "description": "Lenguaje de programación"
                }
            ]
        }
        cy.log(datos.name)
        cy.log(datos.city)
        cy.log(datos.cursos)
        cy.log(datos.cursos[1])
        cy.log(datos.cursos[2].name)
    })
})