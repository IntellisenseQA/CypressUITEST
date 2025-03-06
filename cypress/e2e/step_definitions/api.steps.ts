import { Given, Then } from "@cucumber/cucumber";
import axios from "axios";

let response: any;

Given("I make a {string} request to {string} with payload:", async (method: string, endpoint: string, dataTable) => {
  const data = dataTable.rowsHash(); // Convert table to key-value pair
  response = await axios({
    method,
    url: `https://example.com${endpoint}`,
    data,
  });
});

Then("I should see the response code {int}", (statusCode: number) => {
  expect(response.status).to.equal(statusCode);
});

Then("I should see the response contains the user's details", () => {
  expect(response.data).to.have.property("name");
  expect(response.data).to.have.property("email");
});
