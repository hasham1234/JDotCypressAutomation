export class product {
    weblocators = {

        "NewArrical": "#ui-id-3 > span.mm-subcategory-title.underline-megamenu",
        // "EnterCountry": 'form[name="country-selection"] [name="landing-currency"]',
        "EnterCountry": 'form[action="https://www.junaidjamshed.com/"] select[class="form-control"]',
        // "EnterSubmitt": "[class='form-control jj-enter-btn']",
        "EnterSubmitt": '[class="form-control jj-enter-btn"][type="submit"]',
        "DivMainCount": "#maincontent > div.columns > div > div.container-v15 > div.row.c-live > div.container-v15 > div > div",
        "productselect": "#maincontent > div.columns > div > div.container-v15 > div.row.c-live > div.container-v15 > div > div > div.col-sm-6.nopaddingleft",
        "ProductCount": ".products.list.items.product-items",
        "Innerproduct": "#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol > li:nth-child(1) > div > div.product.details.product-item-details > div.addtocart_position_3.left > form > button",
        "VerifyAmount": "span[data-bind='html: cart().subtotal_excl_tax'] span[class='price']",
        "submitButton": "div > #top-cart-btn-checkout",
        //"done": "#top-cart-btn-checkout",
        "Email": "#customer-email",
        "Username": "[name='firstname']",
        "LastName": "[name='lastname']",
        "streetAddress": '[name="street[0]"]',
        "dropdownCountry": '[name="country_id"]',
        "State": '[name="region"]',
        "City": 'select[name="city"]',
        //"City":"div[class='admin__field _required'] div[class='admin__field-control']",
        "postalCode": "[name='postcode']",
        "phonenumber": "[name='telephone']",
        "Next": "button[data-role='opc-continue']",
        "Cash":"#cashondelivery"
        //  "VerifyQuantity": ".your-container-class input.item-qty.cart-item-qty[data-cart-item='99190518'][data-item-qty='1']",


    }

    load() {
        cy.visit('/select-country')
    }

    // OpenURL() {
    //     cy.visit(Cypress.env('URL'))
    // }

    SelectCountry(country) {
        cy.get(this.weblocators.EnterCountry).select(country)
    }



    ClickEnter() {
        cy.get(this.weblocators.EnterSubmitt).should('be.visible').click({ force: true })
    }

    clickNewArrival() {
        cy.get(this.weblocators.NewArrical).click()
    }

    MainCount() {
        cy.get(this.weblocators.DivMainCount).within(() => {
            cy.get('div').then((item) => {
                let length = item.length;
                cy.log(`print the total count div: ${length}`)
                expect(length).to.be.greaterThan(0);
            })

        })
    }

    clickProduct() {
        cy.get(this.weblocators.productselect)
            .find('a')
            .first()
            .then(($link) => {
                const href = $link.prop('href');
                cy.visit(href); // Visit the link directly, opening it in the same tab
            });
    }



    totalProductCount() {
        cy.get(this.weblocators.ProductCount).within(() => {
            cy.get('li').then((items) => {
                let length = items.length;
                cy.log(`print the total Product count: ${length}`)
                expect(length).to.be.greaterThan(0);
            })
        })
    }

    clickinnerproduct() {
        cy.get(this.weblocators.Innerproduct)
            .scrollIntoView()     /////The scrollIntoView() method is used to scroll an element into the browser's viewport. It's often used when an element is not currently visible on the page, and you want to bring it into view before interacting with it.
            .should('be.visible')
            .click({ force: true });
    }

    ProductAmount() {
        cy.get(this.weblocators.VerifyAmount).scrollIntoView().should('be.visible').invoke('text').as('expectedPrice')
    }


    clicksubmittbutton() {
        cy.get(this.weblocators.submitButton).should('be.visible').click()
    }

    EnterEmail(ENEmail) {
        cy.get(this.weblocators.Email).type(ENEmail)
    }

    EnterUserName(EUSER) {
        cy.get(this.weblocators.Username).type(EUSER)
    }

    EnterLastName(ELAST) {
        cy.get(this.weblocators.LastName).type(ELAST)
    }

    EnterStreetAddress(EStreet) {
        cy.get(this.weblocators.streetAddress).type(EStreet)
    }

    SelectdropdownCountry(Country1) {
        cy.get(this.weblocators.dropdownCountry).select(Country1)
    }

    SelectState(EState) {
        cy.get(this.weblocators.State).type(EState)
    }

    // EnterCity(ECity) {
    //     cy.get(this.weblocators.City).select(ECity)
    // }

    EnterCity(ECity) {
        cy.log(`Selecting city: ${ECity}`);
      
        // Select the option that contains the specified text
        cy.get(this.weblocators.City).contains(ECity).then(($option) => {
          // Get the value of the found option
          const optionValue = $option.val();
      
          // Select the option by its value
          cy.get(this.weblocators.City).select(optionValue);
      
          cy.log('After select');
        });
      }
      
      
      
    EnterPostalCode(EpOSTAL) {
        cy.get(this.weblocators.postalCode).type(EpOSTAL)
    }

    EnterPhoneNumber(EnPhone) {
        cy.get(this.weblocators.phonenumber).type(EnPhone)
    }

    clickNext() {
        cy.get(this.weblocators.Next).click()
    }
    
    clickCashonDelivery()
    {
        cy.get(this.weblocators.Cash).check()
    }









    // ProductQuantity(value){
    //     cy.log(`Count the product Quantity:${value}`)
    //     cy.get(this.weblocators.VerifyQuantity).should('contain.text',value)
    // }

    // ProductQuantity(value) {
    //     cy.get(this.weblocators.VerifyQuantity, { timeout: 15000 })
    //         .should('exist')
    //         .invoke('val')
    //         .should('eq', value);

    //     cy.log(`Count the product Quantity: ${value}`);
    // }

    // ProductQuantity(value) {
    //     cy.get(this.weblocators.VerifyQuantity)
    //         .then(($el) => {
    //             console.log($el); // Log the element to see if it's found
    //         })
    //         .should('be.visible',value)
    //         .click(); // or perform any other action
    // }









}