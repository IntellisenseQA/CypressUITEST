class loginPage{

    visit(){
        cy.visit('/TESTURL');
    }
    createorderbutton(){
        //cy.get('#btnCreateOrder').click()
    }
    defaultorderpagetitle(){
       // cy.contains("Default (Standing) Orders: ").click()
    }
   
  }
  
  export default loginPage;