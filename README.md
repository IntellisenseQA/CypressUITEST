# Cypress UIAPI Automation

## Setup

To install from the root directory install required packages.
npm init -y
npm install cypress @types/cypress cucumber @cucumber/cucumber cypress-cucumber-preprocessor typescript multiple-cucumber-html-reporter

## Configure

This application was tailored to test <https://exampletesturl> but you can run it for any other url by updating the `baseurl` in `cypress.json`.
## Project Structure
.
- cypress
  - integration
    - pageObjects
    - features
    - step_definitions
  - plugins
  - support
  - videos

## Run tests

Run All Tests - `npm run test
Run Tests with Specific Tags - cypress run --env TAGS='@test'
Run Tests in Parallel (Feature-Level) - npm run parallel
