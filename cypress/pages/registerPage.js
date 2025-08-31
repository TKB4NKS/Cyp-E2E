//create a class
//then created an object inside the page class
//then created locators inside the object
//then created different methods
//inside the method, pass the locator names
//for the type command, pass a parameter
export class registerPage{


    weblocators={

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary'

    }

    openURL(){

        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(FName){

        cy.get(this.weblocators.firstName).type(FName)
    }
    enterLastName(LName){

        cy.get(this.weblocators.lastName).type(LName)
    }
    enterEmail(email){

        cy.get(this.weblocators.email).type(email)
    }
    enterTelephone(telephone){

        cy.get(this.weblocators.telephone).type(telephone)
    }
    enterTelephone(phoneNo){

        cy.get(this.weblocators.telephone).type(phoneNo)
    }
    enterPassword(password){

        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)
    }
    selectCheckbox(){

        cy.get(this.weblocators.policyCheckbox).check()
    }
    clickOnContinue(){

        cy.get(this.weblocators.continue).click()
    }

}