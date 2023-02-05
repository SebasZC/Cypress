/// <reference types='Cypress'/>

import 'cypress-file-upload'
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Hooks', ()=>{

    before(() => {
        cy.log("######## Principio de todo #######")
    });

    beforeEach(() => {
        cy.log("Esto se repite en cada uno de los test")
    });

    afterEach(() => {
        cy.log("Esto se hace al final de todos los test")
    });

    after(() => {
        cy.log("####### final de todo #########")
    });

    it('test 1', () => {
        cy.log('111')
    })

    it('test 2', () => {
        cy.log('222')
    });

    it('test 3', () => {
        cy.log('333')
    });
})