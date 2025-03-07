//import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"; 
import FormPage from "../pages/formPage";
import { Given, When, Then } from "@cucumber/cucumber";
import cypress from 'cypress';


const formPage = new FormPage();


Given("I open the user form page", () => {
  cy.visit('/webhp');
});

When("I fill the form with the following data:", (dataTable) => {
  //const data = dataTable.hashes(); // Convert table to array of objects
  /* data.forEach((user) => {
   formPage.fillForm(user.Name, user.Email, user.Age);
   //formPage.submitForm();
  }); */
});

Then("I should see success messages for each user", () => {
 // formPage.validateSuccessMessage();
});


