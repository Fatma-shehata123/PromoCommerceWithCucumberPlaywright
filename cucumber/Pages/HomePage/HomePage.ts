import { Locator } from "@playwright/test";
import PromoBasePage from "../BasePage/BasePage";
export default class HomePage extends PromoBasePage{
    
    private readonly shopButton= this.promoPage.locator('[href="/angularpractice/shop"]');
    private readonly cart = this.promoPage.locator('[class="card h-100"]');
    private readonly addItemSelector = this.promoPage.locator('.btn.btn-info');
    private readonly ckeckOutBtn = this.promoPage.locator('[class="nav-link btn btn-primary"]');
    
    async ClickOnShopButton(){
        await this.clickOnButton(this.shopButton);
    }
    async ClickOnAddToCart(items : string[]){
        for (const item of items) {
        const itemCard = this.cart.filter({ hasText: item });
        const addButton = itemCard.locator(this.addItemSelector).first();
        await this.clickOnButton(addButton);
        }
    }
    async ClickOnCheckOutButton(){
        await this.clickOnButton(this.ckeckOutBtn);
    }
}
