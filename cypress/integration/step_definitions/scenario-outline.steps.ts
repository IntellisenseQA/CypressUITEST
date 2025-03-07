import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage  from '../pages/loginPage';
//import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
//import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const loginPage = new LoginPage();

/* Given("I navigate to the login page", () => {
  loginPage.visit();
}); */

Given('I navigate to the login page', function () {
  //loginPage.visit();
});

When("I enter {string} and {string}", (username: string, password: string) => {
 // loginPage.login(username, password);
});

Then("I should see a {string}", (message: string) => {
  //loginPage.validateMessage(message);
});
