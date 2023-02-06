Feature: Demo de cucumber

    Esto es un demo de como utilizar cucumber

    Scenario: Demo de cucumber
        Given Abrir el navegador principal
        When Cargando el nombre Sebas
        And Cargando el apellido Zapata
        Then Validar el nombre de la pagina

    Scenario Outline: Demo cucumber escenario outline
        Given Abrir el navegador principal
        When Cargando el nombre <name>
        And Cargando el apellido <lastName>
        Then Validar el nombre de la pagina
        Examples:
            | name      | lastName |
            | Sebastian | Zapata   |
            | Mateo     | Ciro     |
            | Ivan      | Duque    |
            | Estefania | Lopez    |