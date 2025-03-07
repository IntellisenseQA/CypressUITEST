import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I make a POST request to {string} with payload:', (endpoint: string, dataTable: any) => {
  const payload = dataTable.rowsHash();

  cy.request({
    method: 'POST',
    url: endpoint,
    body: payload,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    cy.wrap(response).as('apiResponse');
  });
});

Then('I should see the response code {int}', (statusCode: number) => {
  cy.get('@apiResponse').then((response: any) => {
    expect(response.status).to.equal(statusCode);
  });
});

Then('I should see the response contains the user\'s details', () => {
  cy.get('@apiResponse').then((response: any) => {
    const expectedDetails = {
      name: 'John',
      email: 'john@test.com',
    };

    expect(response.body.name).to.equal(expectedDetails.name);
    expect(response.body.email).to.equal(expectedDetails.email);
  });
});
