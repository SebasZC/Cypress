/// <reference types="Cypress"/>
//Para que funcionen los comandos

import 'cypress-file-upload';

describe("Upload imaganenes", ()=>{
    it('Cargando imgs', () => {
        cy.visit("https://testingqarvn.com.es/upload-files/")

        const ruta = 'CV_Sebastian_Zapata.pdf'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(1500)
    })

})
