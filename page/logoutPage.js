export class LogoutPage{

    constructor(page){
        this.page =page
        this.LogoutLink = page.locator('//a[text()="Log out"]')
    }

    async clickLogout(){
        await this.LogoutLink.click()
        return this
    }

}
