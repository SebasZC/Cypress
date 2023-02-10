/// <reference types='Cypress'/>

import 'cypress-file-upload'
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Api automation', ()=>{

    let datos;

    it('Api consulta GET', () => {
        datos=cy.request('http://localhost:3000/posts')
        datos.its("status").should("equal",200)
    })

    it('Api consulta GET 2', () => {
        datos=cy.request('http://localhost:3000/posts')
        .should((response)=>{
            expect(response.status).to.eq(200)
        })
    })


})