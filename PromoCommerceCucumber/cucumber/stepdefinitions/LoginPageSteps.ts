import {Given, When, Then} from '@cucumber/cucumber';
import { Page, expect} from '@playwright/test';

let page:Page;

Given('User open the website', async function () {
    await this.page.goto("https://rahulshettyacademy.com/angularpractice/");
});

Then('Assert that the login page is contain', async function () {
    await expect(this.page.locator('//h1')).toHaveText('Protractor Tutorial');
});

Then('Assert that the username filed is visible', async function () {
    await expect(this.page.locator('(//input[@name="name"])[1]')).toBeVisible();
});

When('User click on the username filed', async function () {
    await this.page.locator('(//input[@name="name"])[1]').click();
});

When('User enter the username {string}', async function (username : string) {
    await this.page.locator('(//input[@name="name"])[1]').fill(username);
});

Then('Assert that the email filed is visible', async function () {
    await expect(this.page.locator('[class="form-control ng-untouched ng-pristine ng-invalid"]')).toBeVisible();
});

When('User click on the email filed', async function () {
    await this.page.locator('[class="form-control ng-untouched ng-pristine ng-invalid"]').click();
});

When('User enter the email {string}', async function (email : string) {
    await this.page.locator('[class="form-control ng-untouched ng-pristine ng-invalid"]').fill(email);
});

Then('Assert that the password filed is visible', async function () {
    await expect(this.page.locator('[id="exampleInputPassword1"]')).toBeVisible();
});

When('User click on the password filed', async function () {
    await this.page.locator('[id="exampleInputPassword1"]').click();
});

When('User enter the password {string}', async function (password : string) {
    await this.page.locator('[id="exampleInputPassword1"]').fill(password);
});

Then('Assert that the gender filed is visible', async function () {
    await expect(this.page.locator('[id="exampleFormControlSelect1"]')).toBeVisible();
});

When('User choose the gender from drop down', async function () {
  await this.page.selectOption('[id="exampleFormControlSelect1"]', { index: 1 });
});

Then('Assert that the employment status filed is visible', async function () {
    await expect(this.page.locator('[for="exampleFormControlRadio1"]')).toBeVisible();
});

When('User choose the employment status', async function () {
    await this.page.locator('[id="inlineRadio1"]').check();
});

Then('Assert that the choosed option is true', async function () {
    await expect(this.page.locator('[id="inlineRadio1"]')).toBeChecked();
});

Then('Assert that the birthday filed is visible', async function () {
    await expect(this.page.locator('[name="bday"]')).toBeVisible();
});

When('User enter the date of birth {string}', async function (birthday:string) {
    await this.page.locator('[name="bday"]').fill(birthday);
});

Then('Assert that the twoWayData filed is visible', async function () {
    await expect(this.page.locator('(//input[@name="name"])[2]')).toBeVisible();
});

When('User enter the two way Data {string}', async function (twowaydata:string) {
    await this.page.locator('(//input[@name="name"])[2]').fill(twowaydata);
});

Then('Assert that the submit button is visible', async function () {
    await expect(this.page.locator('[class="btn btn-success"]')).toBeVisible();
});

When('User click on the submit button', async function () {
    await this.page.locator('[class="btn btn-success"]').click();
});

Then('Assert that the message of sumbit is visible', async function () {
    await expect(this.page.locator('//strong')).toHaveText('Success!');
});