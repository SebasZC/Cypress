/// <reference types='Cypress'/>

import 'cypress-file-upload'
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Test API automation', () => {
    it('Teste DELETE -> elimiando un valor', () => {
        let datos;

        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/25",

        }).then(response => {
            expect(response.status).to.eql(200)
        })
    })

    it('eliminando varios valores', () => {
        //eliminando del id 30 al 40
        for (let i = 30; i <= 40; i++) {
            cy.request({
                method: "DELETE",
                url: "http://localhost:3000/posts/"+i,

            }).then(response => {
                expect(response.status).to.eql(200)
            })
        }
    });
})
