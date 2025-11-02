@E2E
Feature: E2E Feature 
       
@login
    Scenario Outline: Login with valid credentials
        Given User open the website 
        When User enter the username "<username>"  
        And User enter the email "<email>"   
        And User enter the password "<password>" 
        And User choose the gender from drop down "<gender>" 
        And User choose the employment status 
        And User enter the date of birth "<birthday>" 
        And User enter the two way Data "<twowaydata>" 
        And User click on the submit button  
        Then Assert that the message of sumbit is visible "Success!"

        Examples:
        |username||email          ||password||gender||birthday  ||twowaydata|
        |Fatma   ||fatma@gmail.com||1234    ||Female||2025-10-21||commerce  |

@addProduct
    Scenario Outline: Add Product and Confirm Order
        When User navigates to the home page
        And User click on the add to cart "<items>"  
        And User click on the checkout button in home page 
        And User click on the checkout button in checkout page 
        And User enter the location "<location>" 
        And User click on the Terms 
        Then Assert that the terms is contain Terms And Conditions
        When User click on the close button 
        And User click on the checkbox button 
        And User click on the Purchase button 
        Then Assert that the message is visible "Success!"

        Examples:
        |location||items   |
        |Egypt   ||iphone X|