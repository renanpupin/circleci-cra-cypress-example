CircleCI Cypress Cucumber Create React App 

npx create-react-app app
cd app
npm i
npm i --save cypress cypress-cucumber-preprocessor

Copy from https://github.com/TheBrainFamily/cypress-cucumber-example/

Configure plugin at:
cypress/plugins/index.js
cypress/support/step_definitions/shared.js
cypress.json

cypress/integration/App.feature
