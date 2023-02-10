/// <reference types='Cypress'/>

import 'cypress-file-upload'
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Api automation metodo dos', ()=>{
    it.only('test api get metodo dos', () => {

        let datos;

        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers:{
                accept: "application/json"
            }
        }).then(response =>{
            datos=JSON.parse(JSON.stringify(response.body))
            cy.log(datos)

            expect(datos[0]).has.property('title','json-server')
            expect(datos[0]).has.property('author','typicode')
        })
    })
})