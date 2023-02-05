class ProyectoUno_POM{
    visitHome(){
        before(() => {
            cy.visit('https://testingqarvn.com.es/campos-requeridos/');
        });
    }

    seccionUno(name, lastName, email){
        cy.get('#wsf-1-field-95').type(name)
        cy.get('#wsf-1-field-96').type(lastName)
        cy.get('#wsf-1-field-97').type(email)
    }

    seccionDos(so, opcSo, date){
        cy.get('#wsf-1-label-100-row-1').click()
        cy.get('#wsf-1-label-101-row-2').click()
        cy.get('#wsf-1-field-102').select(so)
        cy.get('#wsf-1-field-104').select(opcSo)
        cy.get('#wsf-1-field-107').type(date)
    }

    seccionTres(ruta){
        cy.get('[type="file"]').attachFile(ruta)
        cy.get('#wsf-1-field-109').click({force: true})
    }
}

export default ProyectoUno_POM