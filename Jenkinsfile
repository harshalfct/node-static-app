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
            environment {
                JENKINS_NODE_COOKIE = 'dontKillMe'
            }
            steps {
                // Serve the 'dist' folder (production build) on port 3000 and bind to all IPs
                sh 'sudo npm install -g pm2'
                sh 'npx pm2 delete node-static-app || true'
                sh 'npx pm2 serve dist 3000 --name "node-static-app" --spa'
            }
        }
    }
}
