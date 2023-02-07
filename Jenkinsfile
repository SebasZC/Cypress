pipeline {
    agent any

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent_001"
                    }
                    steps {
                        git url: 'https://github.com/SebasZC/Cypress_Automation.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 35c07ea2-7fd0-4862-b102-4431bc652c40'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent_002"
                    }
                    steps {
                        git url: 'https://github.com/SebasZC/Cypress_Automation.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 35c07ea2-7fd0-4862-b102-4431bc652c40'
                    
                    }
                }
            }
    
        }

    }
            
}