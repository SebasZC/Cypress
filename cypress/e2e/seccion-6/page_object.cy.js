import ProyectoUno_POM from '../../support/pageObjects/Proyecto_POM/proyectoUno_POM.cy'

/// <reference types='Cypress'/>

import 'cypress-file-upload'
require('cypress-xpath')
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Page Object Model POM', ()=>{

    const master = new ProyectoUno_POM()

    master.visitHome()

    Cypress.on('uncaught:exception',(err, runnable)=>{
        return false
    })

    it('test secciones', () => {
        const ruta = 'CV_Sebastian_Zapata.pdf'
        master.seccionUno("Sebastian","Zapata","zapatasebastian001@gmail.com")
        master.seccionDos("Linux","Ubuntu","Febrero 4, 2023")
        master.seccionTres(ruta)
    })


})