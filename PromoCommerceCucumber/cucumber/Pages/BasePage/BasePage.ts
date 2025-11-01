import { Locator ,Page ,expect } from "@playwright/test";
export default class PromoBasePage {
    protected readonly promoPage : Page ;
    constructor (PromoPage : Page){
        this.promoPage = PromoPage  ;
    }
    protected async clickOnButton(button: Locator){
        await button.click();
    }
    protected async enterTextToField (field : Locator , Text : string){
        await field.fill(Text);
    }
    protected async selectOption(element : Locator , value : string ){
        await element.selectOption(value);
    }
    protected async selectRadio(element : Locator ){
        await element.check();
        await expect(element).toBeChecked();
    }
    protected async verifyTextContent(element : Locator , expectedText: string){
        await expect(element).toBeVisible();
        await expect(element).toHaveText(expectedText);
    }
    protected async checkBox(element : Locator){
        await element.check();
        await expect(element).toBeChecked();
    }
}
