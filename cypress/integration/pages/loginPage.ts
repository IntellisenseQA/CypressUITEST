class loginPage{

    visit(){
        cy.visit('/webhp');
    }
    createorderbutton(){
        //cy.get('#btnCreateOrder').click()
    }
    defaultorderpagetitle(){
       // cy.contains("Default (Standing) Orders: ").click()
    }
   
  }
  
  export default loginPage;