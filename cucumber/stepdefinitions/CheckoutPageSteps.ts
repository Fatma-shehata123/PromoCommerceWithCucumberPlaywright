import {Given, When, Then} from '@cucumber/cucumber';
import CheckOutPage from '../Pages/CheckOutPage/CheckOutPage';

When('User click on the checkout button in checkout page', async function () {
    this.checkoutpage = new CheckOutPage(this.page);
    await this.checkoutpage.clickOnCheckOutButton();
});

When('User enter the location {string}', async function (location : string) {
    this.checkoutpage = new CheckOutPage(this.page);
    await this.checkoutpage.enterLocation(location);
});

When('User click on the Terms', async function () {
    this.checkoutpage = new CheckOutPage(this.page);
    await this.checkoutpage.clickOnTerms();
});

Then('Assert that the terms is contain Terms And Conditions', async function () {
    this.checkoutpage = new CheckOutPage(this.page);
    await this.checkoutpage.verifyTermsVisible();
});

When('User click on the close button', async function () {
    this.checkoutpage = new CheckOutPage(this.page);
    await this.checkoutpage.clickOnCloseBtn();
});

When('User click on the checkbox button', async function () {
    this.checkoutpage = new CheckOutPage(this.page);
    await this.checkoutpage.check();
});

When('User click on the Purchase button', async function () {
    this.checkoutpage = new CheckOutPage(this.page);
    await this.checkoutpage.clickOnPurchase();
});

Then('Assert that the message is visible {string}', async function (text : string) {
    this.checkoutpage = new CheckOutPage(this.page);
    await this.checkoutpage.visible(text);
});
