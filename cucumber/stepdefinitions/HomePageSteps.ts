import {Given, When, Then} from '@cucumber/cucumber';
import HomePage from '../Pages/HomePage/HomePage';

let homepage: HomePage;

When('User navigates to the home page', async function () {
    this.homepage = new HomePage(this.page);
    await this.page.goto("https://rahulshettyacademy.com/angularpractice/shop");
    // await this.homepage.ClickOnShopButton();
});

When('User click on the add to cart {string}', async function (items: string) {
    this.homepage = new HomePage(this.page);
    await this.homepage.ClickOnAddToCart(items);
 });

// When('User click on the add to cart {srting}', async function (items : string) {
//     this.homepage = new HomePage(this.page);
//     await this.homepage.ClickOnAddToCart(items);
// });

When('User click on the checkout button in home page', async function () {
    this.homepage = new HomePage(this.page);
    await this.homepage.ClickOnCheckOutButton();
});




//  await page.goto('https://rahulshettyacademy.com/angularpractice/shop');
//     await promocommercehome.ClickOnAddToCart(PromoTestData.items);
//     await promocommercehome.ClickOnCheckOutButton();



// let page:Page;

// When('User navigates to the home page', async function () {
//     await this.page.goto('https://rahulshettyacademy.com/angularpractice/shop');
// });

// Then('Assert that the home page is contain', async function () {
//     await expect(this.page.locator('(//*[@class="navbar-brand"])[2]')).toHaveText('ProtoCommerce Home');
// });

// Then('Assert that the checkout button is visible', async function () {
//     await expect(this.page.locator('[class="nav-link btn btn-primary"]')).toBeVisible();
// });

// When('User click on the add to cart', async function () {
//     await this.page.locator('(//*[@class="btn btn-info"])[1]').click();
// });

// When('User click on the checkout button in home page', async function () {
//     await this.page.locator('[class="nav-link btn btn-primary"]').click();
// });

// //Checkout page
// When('User click on the checkout button in checkout page', async function () {
//     await this.page.locator('.btn.btn-success').click();
// });

// When('User enter the location {string}', async function (location : string) {
//     await this.page.locator('#country').fill(location);
// });

// When('User click on the Terms', async function () {
//     await this.page.locator('//*[text()="term & Conditions"]').click();
// });

// Then('Assert that the terms is contain Terms And Conditions', async function () {
//     await expect(this.page.locator('//h1')).toHaveText('Terms And Conditions');
// });

// When('User click on the close button', async function () {
//     await this.page.locator('[class="btn btn-info"]').click();
// });

// When('User click on the checkbox button', async function () {
//     await this.page.locator('label[for="checkbox2"]').click();
// });

// When('User click on the Purchase button', async function () {
//     await this.page.locator('[class="btn btn-success btn-lg"]').click();
// });

// Then('Assert that the message is visible', async function () {
//     await expect(this.page.locator('//strong')).toHaveText('Success!');
// });

