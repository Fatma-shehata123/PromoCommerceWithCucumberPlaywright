import {Given, When, Then} from '@cucumber/cucumber';
import PromoLoginPage from '../Pages/LoginPage/LoginPage';

Given('User open the website', async function () {
    await this.page.goto("https://rahulshettyacademy.com/angularpractice/");
});

When('User enter the username {string}', async function (username : string) {
    this.promologinPage = new PromoLoginPage(this.page);
    await this.promologinPage.enterUserName(username);
});

When('User enter the email {string}', async function (email : string) {
    this.promologinPage = new PromoLoginPage(this.page);
    await this.promologinPage.enterEmail(email);
});

When('User enter the password {string}', async function (password : string) {
    this.promologinPage = new PromoLoginPage(this.page);
    await this.promologinPage.enterPassword(password);
});

When('User choose the gender from drop down {string}', async function (gender : string) {
    this.promologinPage = new PromoLoginPage(this.page);
    await this.promologinPage.selectGender(gender);
});

When('User choose the employment status', async function () {
    this.promologinPage = new PromoLoginPage(this.page);
    await this.promologinPage.selectEmploymentStatus();
});

When('User enter the date of birth {string}', async function (date : string) {
    this.promologinPage = new PromoLoginPage(this.page);
    await this.promologinPage.dateOfBirth(date);
});

When('User enter the two way Data {string}', async function (twowaydata : string) {
    this.promologinPage = new PromoLoginPage(this.page);
    await this.promologinPage.twoWayData(twowaydata);
});

When('User click on the submit button', async function () {
    this.promologinPage = new PromoLoginPage(this.page);
    await this.promologinPage.submitBtn();
});

Then('Assert that the message of sumbit is visible {string}', async function (text : string) {
    this.promologinPage = new PromoLoginPage(this.page);
    await this.promologinPage.visible(text);
});

