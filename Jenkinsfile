pipeline {
    agent any

    environment {
        PROJECT_ID = 'ruchira-490405'
        REGION = 'us-central1'
        REPO = 'my-repo'
        IMAGE = 'full-stack-app'
        SERVICE_NAME = 'full-stack-service'
    }

    stages {
        stage('Checkout') {
            steps {
                deleteDir()
                git branch: 'main', url: 'https://github.com/ruchira2424/full-stack-app'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t full-stack-app:latest .'
            }
        }

        stage('Push Image') {
            steps {
                sh '''
                docker tag full-stack-app:latest us-central1-docker.pkg.dev/ruchira-490405/my-repo/full-stack-app:latest
                docker push us-central1-docker.pkg.dev/ruchira-490405/my-repo/full-stack-app:latest
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                gcloud run deploy full-stack-service \
                --image us-central1-docker.pkg.dev/ruchira-490405/my-repo/full-stack-app:latest \
                --platform managed \
                --region us-central1 \
                --allow-unauthenticated \
                --quiet
                '''
            }
        }
    }
}
