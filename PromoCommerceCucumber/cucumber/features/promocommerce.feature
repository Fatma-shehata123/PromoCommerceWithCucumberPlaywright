@E2E
Feature: E2E Feature 
       
@login
    Scenario Outline: Login with valid credentials
         Given User open the website
        Then Assert that the login page is contain 
        Then Assert that the username filed is visible
        When User click on the username filed
        And User enter the username "<username>"
        Then Assert that the email filed is visible
        When User click on the email filed
        And User enter the email "<email>"
        Then Assert that the password filed is visible
        When User click on the password filed
        And User enter the password "<password>"
        Then Assert that the gender filed is visible
        When User choose the gender from drop down 
        Then Assert that the employment status filed is visible
        When User choose the employment status 
        Then Assert that the choosed option is true
        And Assert that the birthday filed is visible
        When User enter the date of birth "<birthday>"
        Then Assert that the twoWayData filed is visible
        When User enter the two way Data "<twowaydata>"
        Then Assert that the submit button is visible
        When User click on the submit button
        Then Assert that the message of sumbit is visible 

        Examples:
        |username||email          ||password||birthday  ||twowaydata|
        |Fatma   ||fatma@gmail.com||1234    ||2025-10-21||commerce  |

@addProduct
    Scenario Outline: Add Product and Confirm Order
        When User navigates to the home page
        Then Assert that the home page is contain 
        And Assert that the checkout button is visible
        When User click on the add to cart
        And User click on the checkout button in home page
        And User click on the checkout button in checkout page
        And User enter the location "<location>"
        And User click on the Terms
        Then Assert that the terms is contain Terms And Conditions
        When User click on the close button
        And User click on the checkbox button
        And User click on the Purchase button
        Then Assert that the message is visible

        Examples:
        |location|
        |Egypt|

