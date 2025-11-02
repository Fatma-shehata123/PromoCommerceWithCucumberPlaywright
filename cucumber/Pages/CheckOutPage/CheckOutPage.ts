import { Locator , expect} from "@playwright/test";
import PromoBasePage from "../BasePage/BasePage";
export default class CheckOutPage extends PromoBasePage {
    private readonly checkout = this.promoPage.locator('[class="btn btn-success"]');
    private readonly countryField = this.promoPage.locator('[id="country"]');
    private readonly termsLink = this.promoPage.locator('//*[text()="term & Conditions"]');
    private readonly termsTitle = this.promoPage.locator('//*[text()="Terms And Conditions"]');
    private readonly closeBtn = this.promoPage.locator('[class="btn btn-info"]');
    private readonly checkTerms = this.promoPage.locator('[id="checkbox2"]');
    private readonly PurchaseBtn = this.promoPage.locator('[class="btn btn-success btn-lg"]');
    private readonly visibleText = this.promoPage.locator('//strong');

    async clickOnCheckOutButton(){
        await this.clickOnButton(this.checkout);
    }
    async enterLocation(location: string){
        await this.enterTextToField(this.countryField, location)
    }
    async clickOnTerms(){
        await this.clickOnButton(this.termsLink);
    }
    async clickOnCloseBtn(){
        await this.clickOnButton(this.closeBtn);
    }
    async check(){
        await this.checkBox(this.checkTerms);
    }
    async clickOnPurchase(){
        await this.clickOnButton(this.PurchaseBtn);
    } 
    async visible(text :string){
        await this.verifyTextContent(this.visibleText , text);
    }
    async verifyTermsVisible() {
    await expect(this.termsTitle).toBeVisible({ timeout: 5000 });
}
}