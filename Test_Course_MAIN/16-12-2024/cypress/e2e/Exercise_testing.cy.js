describe('Automation Exercise', () => {
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.visit('https://www.automationexercise.com/');
      });
    it('Contact Us Form', () => {

        cy.contains(" Contact us").click()

        cy.get('[data-qa="name"]').type('jaunius pinelis')
        cy.get('[data-qa="email"]').type('jauniuspinelis@gmail.com')
        cy.get('[data-qa="subject"]').type('testing')
        cy.get('[data-qa="message"]').type('testing message')
    
        cy.get('[data-qa="submit-button"]').click()
    
        cy.contains('div', "Success! Your details have been submitted successfully.").should('be.visible')
    })

    it('Add Products in Cart', () => {
        
        cy.contains('a', " Products").click()

        cy.get('a[data-product-id="1"]').first().click()

        cy.get('button.btn-success').click()

        cy.get('a[data-product-id="2"]').first().click()

        cy.contains('u', "View Cart").click()

        cy.contains('a', "Blue Top").should('be.visible')
        cy.contains('a', "Men Tshirt").should('be.visible')
    })

    it('Verify Product quantity in Cart', () => {

        cy.get('a[href="/product_details/1"]').click()
        
        cy.get('input[id="quantity"]').clear().type('4')

        cy.contains('button', "Add to cart").click()
        cy.contains('u', "View Cart").click()
        cy.contains('button', "4").should('be.visible')
    })


    it('Register User', () => {
        
        cy.contains('a', " Signup / Login").click()

        cy.get('input[data-qa="signup-name"]').type('newUSERtesting')
        cy.get('input[data-qa="signup-email"]').type('newUSERtesting@gmail.com')
        cy.get('button[data-qa="signup-button"]').click()
        
        cy.get('input[id="id_gender1"]').click()
        cy.get('input[data-qa="password"]').type('newUSERtesting_StrongPassword')

        cy.get('select[data-qa="days"]').select("5")
        cy.get('select[data-qa="months"]').select("1")
        cy.get('select[data-qa="years"]').select("2000")

        cy.get('input[data-qa="first_name"]').type('HiMyNameIs')
        cy.get('input[data-qa="last_name"]').type('WhatMyNameIs')
        cy.get('input[data-qa="address"]').type('(Street address, P.O. Box, Company name, etc.)')

        cy.get('select[data-qa="country"]').select("Canada")

        cy.get('input[data-qa="state"]').type('Normal State')
        cy.get('input[data-qa="city"]').type('Normal City')
        cy.get('input[data-qa="zipcode"]').type('12345')
        cy.get('input[data-qa="mobile_number"]').type('115478976')

        cy.get('button[data-qa="create-account"]').click()

        cy.contains('h2', "Account Created!").should("be.visible")
    })

    it('Login User with correct email and password', () => {
        
        cy.contains('a', " Signup / Login").click()

        cy.get('input[data-qa="login-email"]').type('newUSERtesting@gmail.com')
        cy.get('input[data-qa="login-password"]').type('newUSERtesting_StrongPassword')
        cy.get('button[data-qa="login-button"]').click()

        cy.contains('a', " Delete Account").click()

        cy.contains('h2', "Account Deleted!").should("be.visible")

    }) 
})