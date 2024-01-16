/// <reference types="cypress"/>

import { product } from "../../pages/product.cy"
import Productselect from "../../fixtures/Productselect.json"
//import { URL } from "../../pages/HitURL.cy"


const productOBJ= new product()
//const Page = new URL()

describe("Product test case",()=>{
  
 it("product selection from Navbar",()=>{
        
       // productOBJ.OpenURL()
        productOBJ.load()
        cy.wait(5000);
        productOBJ.SelectCountry('Pakistan')
        
        productOBJ.ClickEnter()
        cy.wait(20000)
        productOBJ.clickNewArrival()
        productOBJ.MainCount()
        productOBJ.clickProduct()
        productOBJ.totalProductCount()
        productOBJ.clickinnerproduct()
        productOBJ.ProductAmount();
        productOBJ.clicksubmittbutton()
        //cy.wait(1000);
       //productOBJ.ProductQuantity('1');
       // productOBJ.clickdone();
        productOBJ.EnterEmail(Productselect.Email)
        productOBJ.EnterUserName(Productselect.UserName)
        productOBJ.EnterLastName(Productselect.LastName)
        productOBJ.EnterStreetAddress(Productselect.StreetAddress)
        productOBJ.SelectdropdownCountry(Productselect.Country)
        productOBJ.SelectState(Productselect.state)
        cy.wait(5000);
        productOBJ.EnterCity(Productselect.City)
        productOBJ.EnterPostalCode(Productselect.PostalCode)
        productOBJ.EnterPhoneNumber(Productselect.PhoneNumber)
        productOBJ.clickNext()
        productOBJ.clickCashonDelivery()



        

    })
})