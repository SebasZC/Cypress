describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1600, 749)
    
       cy.visit('https://testingqarvn.com.es/datos-personales/')
    
       cy.get('#wsf-1-sections-4 > #wsf-1-section-5 > #wsf-1-fields-5 > #wsf-1-field-wrapper-21 > #wsf-1-field-21').click()
    
       cy.get('#wsf-1-sections-4 > #wsf-1-section-5 > #wsf-1-fields-5 > #wsf-1-field-wrapper-21 > #wsf-1-field-21').type('Sebastian')
    
       cy.get('#wsf-1-sections-4 > #wsf-1-section-5 > #wsf-1-fields-5 > #wsf-1-field-wrapper-22 > #wsf-1-field-22').click()
    
       cy.get('#wsf-1-sections-4 > #wsf-1-section-5 > #wsf-1-fields-5 > #wsf-1-field-wrapper-22 > #wsf-1-field-22').type('Zapata')
    
       cy.get('#wsf-1-sections-4 > #wsf-1-section-5 > #wsf-1-fields-5 > #wsf-1-field-wrapper-23 > #wsf-1-field-23').click()
    
       cy.get('#wsf-1-sections-4 > #wsf-1-section-5 > #wsf-1-fields-5 > #wsf-1-field-wrapper-23 > #wsf-1-field-23').type('Zapata@gmail.com')
    
       cy.get('#wsf-1-sections-4 > #wsf-1-section-5 > #wsf-1-fields-5 > #wsf-1-field-wrapper-27 > #wsf-1-field-27').click()
    
       cy.get('#et-top-navigation > #top-menu-nav > #top-menu > #menu-item-179 > a').click()
    
       cy.visit('https://testingqarvn.com.es/practicas-qa/')
    
       cy.get('.et_pb_section > .et_pb_row:nth-child(5) > .et_pb_column:nth-child(3) > .et_pb_button_module_wrapper > .et_pb_button').click()
    
       cy.visit('https://testingqarvn.com.es/campos-requeridos/')
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-95 > #wsf-1-field-95').click()
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-95 > #wsf-1-field-95').type('Sebastian')
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-96 > #wsf-1-field-96').click()
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-96 > #wsf-1-field-96').type('Zapata')
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-97 > #wsf-1-field-97').click()
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-97 > #wsf-1-field-97').type('Zpata@gmail.com')
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-98 > #wsf-1-field-98').type('35050852088')
    
       cy.get('#wsf-1-fields-12 > #wsf-1-field-wrapper-100 > div > div > #wsf-1-label-100-row-2').click()
    
       cy.get('#wsf-1-fields-12 > #wsf-1-field-wrapper-100 > div > div > #wsf-1-field-100-row-2').check('PYTHON')
    
       cy.get('#wsf-1-fields-12 > #wsf-1-field-wrapper-101 > div > div > #wsf-1-label-101-row-3').click()
    
       cy.get('#wsf-1-fields-12 > #wsf-1-field-wrapper-101 > div > div > #wsf-1-field-101-row-3').type('Selenium')
    
       cy.get('#wsf-1-fields-12 > #wsf-1-field-wrapper-100 > div > div > #wsf-1-label-100-row-1').click()
    
       cy.get('#wsf-1-fields-12 > #wsf-1-field-wrapper-100 > div > div > #wsf-1-field-100-row-1').check('PHP')
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-102 > #wsf-1-field-102').click()
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-102 > #wsf-1-field-102').select('Linux')
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-102 > #wsf-1-field-102').click()
    
       cy.get('.et_pb_module_inner > #ws-form-1 > #wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12').click()
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-104 > #wsf-1-field-104').click()
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-104 > #wsf-1-field-104').select('Debian')
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-104 > #wsf-1-field-104').click()
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-106 > #wsf-1-field-106').click()
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-107 > #wsf-1-field-107').click()
    
       cy.get('.xdsoft_datetimepicker:nth-child(26) > .xdsoft_datepicker > .xdsoft_calendar > table > tbody > tr:nth-child(1) > .xdsoft_date:nth-child(4) > div').click()
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-108 > #wsf-1-field-108').click()
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-108 > #wsf-1-field-108').type('C:\fakepath\ti manuela.png')
    
       cy.get('#wsf-1-sections-11 > #wsf-1-section-12 > #wsf-1-fields-12 > #wsf-1-field-wrapper-109 > #wsf-1-field-109').click()
    
    })
   
   })
   