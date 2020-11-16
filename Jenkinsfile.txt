pipeline{
    agent any
    tools {nodejs "node"}
environment {
        CHROME_BIN = '/bin/google-chrome'
    }
    stages {
    stage('SCM Checkout')
    {
        steps {
            git branch: 'main', credentialsId: '45cda9b4-504d-4d8c-8290-0b9273c4c271', url: 'https://github.com/lipika-ui/Jenkins_mono_project.git'
        }
    }
stage('install dependencies')
    {
        steps{sh 'npm install'}
    }
stage('unit test')
{
    steps{sh 'npm run test'}
}
stage('build')
{
    steps{sh 'npm run build'}
}    
stage('affected') {

      when {

        expression {

          return env.previousFailedBuild == null

        }

      }

      steps {

         sh 'npm run affected:build'}
      }
    } 
    
    }
