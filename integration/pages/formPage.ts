class formPage{
    //Locators
private name = "#name";
private email = "#email";
private number = "#number";
    fillForm(username: string, useremail: string, usernumber: string){
        cy.get(this.name).type(username);
        cy.get(this.email).type(useremail);
        cy.get(this.number).type(usernumber);
    }
  }
  
  export default formPage;
  