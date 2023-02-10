/// <reference types='Cypress'/>

import 'cypress-file-upload'
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Prueba Cypress Studio', ()=>{
    it('Primer test', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#wsf-1-field-21').clear('S');
        cy.get('#wsf-1-field-21').type('Sebastian');
        cy.get('#wsf-1-field-22').clear('Z');
        cy.get('#wsf-1-field-22').type('Zapata');
        cy.get('#wsf-1-field-23').clear('z');
        cy.get('#wsf-1-field-23').type('zapatasebastian001@gmail.com');
        cy.get('#wsf-1-field-24').clear();
        cy.get('#wsf-1-field-24').type('3505082088');
        cy.get('#wsf-1-field-27').click();
        /* ==== End Cypress Studio ==== */

        
    })
})