/// <reference types='Cypress'/>

import 'cypress-file-upload'
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Test API automation', () => {
    it('Test api put -> modificando un valor', () => {
        let datos;

        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/29",
            body: {
                //"id": 1,
                "title": "Modificado por SEBASTIAN",
                "author": "Sebas ha modificado esto"
            }
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    })
})