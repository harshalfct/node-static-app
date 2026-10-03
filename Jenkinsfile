pipeline {
    agent any


    stages {
        stage('Checkout') {
            steps {
                // Pulls the latest code from your repository
                git branch: 'main', url: 'https://github.com/harshalfct/node-static-app.git'
            }
        }

        stage('Install Node.js') {
            steps {
                // Download and install Node.js via script
                sh '''
                    sudo yum install -y nodejs
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install all project dependencies
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                // Create the production build using Vite
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Ensure PM2 is installed globally, then start or restart the app
                sh 'npm install -g pm2'
                sh 'npx pm2 start ecosystem.config.cjs'
            }
        }
    }
}
