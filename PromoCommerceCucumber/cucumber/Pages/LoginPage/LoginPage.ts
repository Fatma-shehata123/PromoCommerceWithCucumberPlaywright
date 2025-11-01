
import { Locator, Page } from "@playwright/test";
import PromoBasePage from "../BasePage/BasePage";

export default class PromoLoginPage extends PromoBasePage {
    private readonly userNameField: Locator;
    private readonly emailField: Locator;
    private readonly passwordField: Locator;
    private readonly genderField: Locator;
    private readonly employmentStatusField: Locator;
    private readonly dateOfBirthField: Locator;
    private readonly submitButton: Locator;
    private readonly visibleText : Locator;
    private readonly twoWayDataField : Locator;

    constructor(page: Page) {
        super(page);
        this.userNameField = page.locator('(//input[@name="name"])[1]');
        this.emailField = page.locator('[class="form-control ng-untouched ng-pristine ng-invalid"]');
        this.passwordField = page.locator('[id="exampleInputPassword1"]');
        this.genderField = page.locator('[id="exampleFormControlSelect1"]');
        this.employmentStatusField = page.locator('[id="inlineRadio1"]');
        this.dateOfBirthField = page.locator('[name="bday"]');
        this.submitButton = page.locator('[class="btn btn-success"]');
        this.visibleText = page.locator('//strong');
        this.twoWayDataField = page.locator('(//input[@name="name"])[2]');
    }

    async enterUserName(username: string) {
        await this.enterTextToField(this.userNameField, username);
    }
    async enterEmail(email: string) {
        await this.enterTextToField(this.emailField, email);
    }
    async enterPassword(password: string) {
        await this.enterTextToField(this.passwordField, password);
    }
    // 
    async selectGender(gender : string) {
        await this.selectOption(this.genderField, gender);
    }
    async selectEmploymentStatus() {
        await this.selectRadio(this.employmentStatusField);
    }
    async dateOfBirth(date: string) {
        await this.enterTextToField(this.dateOfBirthField, date);
    }
    async submitBtn() {
        await this.clickOnButton(this.submitButton);
    }
    async visible(text :string){
        await this.verifyTextContent(this.visibleText , text);
    }
    async twoWayData(twowaydata : string){
        await this.enterTextToField(this.twoWayDataField , twowaydata);
    }
}
