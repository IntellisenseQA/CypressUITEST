import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage  from '../../integration/pages/loginPage';

const loginPage = new LoginPage();

Given("I navigate to the login page", () => {
  loginPage.visit();
});

When("I enter {string} and {string}", (username: string, password: string) => {
 // loginPage.login(username, password);
});

Then("I should see a {string}", (message: string) => {
  //loginPage.validateMessage(message);
});
