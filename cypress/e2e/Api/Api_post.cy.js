/// <reference types='Cypress'/>

import 'cypress-file-upload'
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Test API automation', () => {
    it('Test api post', () => {
        let datos;

        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                "title": "Cypress curso (post)",
                "author": "Sebastian Zapata (post)"
            }
        }).then(response => {
            expect(response.status).to.eql(201)
        })
    })

    it('Test api post multiple', () => {
        let datos;
        for (let i = 0; i < 10; i++) {
            let tx = Math.random().toString(10)
            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts",
                body: {
                    "title": "Cypress curso (post): " + tx,
                    "author": "Sebastian Zapata (post) " + tx
                }
            }).then(response => {
                expect(response.status).to.eql(201)
            })
        }

    })
})