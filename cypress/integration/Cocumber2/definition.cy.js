const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

Given('Abrir el navegador principal',()=>{
    cy.visit('https://testingqarvn.com.es/datos-personales/')
})

When('Cargando el nombre {word}',(Name)=>{
    cy.get('#wsf-1-field-21').type(Name)
})

And('Cargando el apellido {word}',(Lastname)=>{
    cy.get('#wsf-1-field-22').type(Lastname)
})

Then('Validar el nombre de la pagina',()=>{
    cy.title().should('eq','Datos Personales | TestingQaRvn')
})