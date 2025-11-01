import { Locator } from "@playwright/test";
import PromoBasePage from "../BasePage/BasePage";
export default class HomePage extends PromoBasePage{
    
    private readonly cart = this.promoPage.locator('[class="card h-100"]');
    private readonly addItemSelector = this.promoPage.locator('.btn.btn-info');
    private readonly ckeckOutBtn = this.promoPage.locator('[class="nav-link btn btn-primary"]');
    
    async ClickOnAddToCart(items : string[]){
        for (const item of items) {
        const itemCard = this.cart.filter({ hasText: item });
        const addButton = itemCard.locator(this.addItemSelector);
        await this.clickOnButton(addButton);
        }
    }
    async ClickOnCheckOutButton(){
        await this.clickOnButton(this.ckeckOutBtn);
    }
}
