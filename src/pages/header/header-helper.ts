import { Page } from "@playwright/test";
import { Header } from "./header";

export class HeaderHelper{
    private header:Header
    private page:Page


    constructor(page:Page){
        this.page=page
        this.header = new Header(page);
    }

    async getShoppingCartItemCount(){
    return  await this.header.shoppingCartItemCount.innerText()
    }
}