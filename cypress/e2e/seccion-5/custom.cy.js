/// <reference types='Cypress'/>

import 'cypress-file-upload'
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Comandos personalizados', ()=>{
    before(() => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
    });
    it('Demo one', () => {
        cy.Text_visible("#wsf-1-field-21","Sebastian")
    })
})