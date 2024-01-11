export class registeruser{
    weblocators={
        "firstName":"#firstname",
        "lastName":"#lastname",
        "checkbox":"#is_subscribed",
        "alternateid":"#alternate_email",
        "dateofbirth":"#form-validate > fieldset.fieldset.create.info > div.field.date.field-birth_date > div",
        "maritalstatus":"#marital_status",
        "assistanceallowedcheckbox":"#assistance_allowed_checkbox",
        "emailid":"#email_address",
        "password":'#password',
        "confirmPassword":"#password-confirmation",
        "showpassword":"#show-password",
        "mobilenumber":"#mobilenumber"
    }

   
    OpenURL(){
        cy.visit(Cypress.env('URL'))
    }

    EnterFirstName(fname){
       cy.get(this.weblocators.firstName).type(fname)
    }

    EnterLastName(lname){
        cy.get(this.weblocators.lastName).type(lname)
    }

    Clickcheckbox(){
        cy.get(this.weblocators.checkbox).click()
    }

    Enteralternateid(Email){
        cy.get(this.weblocators.alternateid).type(Email)
    }

    EnterDateofbirth(datepicker){
        cy.get(this.weblocators.dateofbirth).clear().type(datepicker)
    }
    
    EnterMartialStatus(status){
        cy.get(this.weblocators.maritalstatus).select(status)
    }
    
    Enterassistanceallowedcheckbox(){
        cy.get(this.weblocators.assistanceallowedcheckbox).check()
    }
    
    EnterEamilID(IID){
       cy.get(this.weblocators.emailid).type(IID)
    }

    Enterpassword(pass){
        cy.get(this.weblocators.password).type(pass)
    }
    
    EnterConfirmpassword(confimPass){
        cy.get(this.weblocators.confirmPassword).type(confimPass)
    }
    
    checkshowpassword(){
        cy.get(this.weblocators.showpassword).click()
    }

    EnterMobileNumber(mob){
        cy.get(this.weblocators.mobilenumber).type(mob)
    }



}