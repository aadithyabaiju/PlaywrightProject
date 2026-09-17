import {LogoutPage} from './logoutPage'

export class PlaceHolderPage{
       constructor(page){
        this.page =page
        this.LaptopLink = page.locator("//a[text()='Laptops']")
        this.MacBookLink = page.locator("//a[text()='MacBook air']")
        this.PhoneLink= page.locator("//a[text()='Phones']")
        this.SamsungPhone=  page.locator("//a[text()='Samsung galaxy s6']")
        this.MonitorLink = page.locator("//a[text()='Monitors']")
        this.AppleMonitor=  page.locator("//a[text()='Apple monitor 24']")
        this.cartBtn= page.getByRole('link',{name:"Add to cart"})
        this.cartIcon= page.locator("//a[text()='Cart']")
        this.PlaceOrderBtn= page.locator("//button[text()='Place Order']")
        this.purchaserName= page.locator('//input[@id="name"]')
        this.purchaserCountry= page.locator('//input[@id="country"]')
        this.purchaserCity=page.locator('//input[@id="city"]')
        this.purchaserCard= page.locator('//input[@id="card"]')
        this.purchaserMonth=page.locator('//input[@id="month"]')
        this.purchaseYear=page.locator('//input[@id="year"]')
        this.purchaseBtn= page.locator('//button[text()="Purchase"]')
        this.purchaseOKBtn= page.locator('//button[text()="OK"]')        
    }

async selectCategoryLaptop(){
    await  this.LaptopLink.click()
    return this
}

async selectMacBook(){
    await this.MacBookLink.click()
    return this
}

async selectCategoryPhone(){
    await this.PhoneLink.click()
    return this
}

async selectSamsung(){
    await this.SamsungPhone.click()
    return this
}

async selectCategoryMonitor(){
    await this.MonitorLink.click()
    return this
}

async selectAppleMonitor(){
    await this.AppleMonitor.click()
    return this
}

async addToCart(){
    await this.cartBtn.click()
    return this
}

async  clickCartLink(){
    await this.cartIcon.click()
    return this
}

//to clear existing product from the cart
async clearCart(){
    await this.clickCartLink()
    const DeleteButton = this.page.locator("//a[text() = 'Delete']")
    if(await DeleteButton.count()>0)
    {
        await DeleteButton.first().click()
    }
    await this.page.getByText('PRODUCT STORE').click()
    return this
}

async clickplaceOrderBtn(){
    await this.PlaceOrderBtn.click()
    return this
}

async enterPurchaserDetails(name, country, city, card, month,year)
{
    await this.purchaserName.fill(name)
    await this.purchaserCountry.fill(country)
    await this.purchaserCity.fill(city)
    await this.purchaserCard.fill(card)
    await this.purchaserMonth.fill(month)
    await this.purchaseYear.fill(year)
    return this
}

async clickPurchaseBtn(){
    await this.purchaseBtn.click()
    return this
}

async clickOkButton(){
    await this.purchaseOKBtn.click()
    return new LogoutPage(this.page)
}

}

