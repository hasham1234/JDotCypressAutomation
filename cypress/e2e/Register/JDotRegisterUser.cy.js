/// <reference types="cypress"/>
import { registeruser } from "../../pages/RegisterUser.cy"
import register from "../../fixtures/register.json"
const registerObj= new registeruser()

describe("Test case",()=>{
    it("Register User",()=>{
        registerObj.OpenURL();
        registerObj.EnterFirstName(register.firstname)
        registerObj.EnterLastName(register.lastname)
        registerObj.Clickcheckbox()
        registerObj.Enteralternateid(register.alternateID)
        registerObj.EnterDateofbirth(register.dateofbith)
        registerObj.EnterMartialStatus(register.martialstatus)
        registerObj.EnterEamilID(register.Emailid)
        registerObj.Enterpassword(register.password)
        registerObj.EnterConfirmpassword(register.ConfirmPassword)
        registerObj.checkshowpassword()
        registerObj.EnterMobileNumber(register.MobileNumber)

    })
})

