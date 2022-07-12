pipeline {
    agent any

    stages {
        stage('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/argabas/testes-e2e-ebac-shop.git'
            }
        }

        stage('Instalar dependências') {
            steps {
                bat 'npm install'
            }
        }

        stage('Executar testes') {
            steps {
                bat 'npm run cy:run'
            }
        }
    }
}