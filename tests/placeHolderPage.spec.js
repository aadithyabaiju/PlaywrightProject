import {test, expect} from '@playwright/test'
import LoginPage from '../page/loginPage'
import {PlaceHolderPage} from '../page/placeholderPage'
import { LogoutPage } from '../page/logoutPage'
//import test from '../utils/fixture.js'

//TC7 - Login with valid credentials -> Select a product(Laptop) -> Add to Cart -> Click "ok" on the popup
test('Valid Login and Add Laptop',{timeout:50000}, async({page})=>
{
  let loginPage = new LoginPage(page)
 // let loginPage = new LoginPage(customfixture)
  await loginPage.accessUrl()
  await loginPage.clickLoginLink()
  await loginPage.validUserName()
  await loginPage.validpassword()
  let plHoldPg = await loginPage.clickloginButton()
  await expect(page).toHaveURL("https://www.demoblaze.com/")
 
   //let plHoldPg = new PlaceHolderPage(page)
  await plHoldPg.selectCategoryLaptop()
  await plHoldPg.selectMacBook()

   //code for dialog box
   page.once('dialog', async dialog=>
    {
      await dialog.accept()
    })
  await plHoldPg.addToCart() 
 //await expect(await page.locator('//h2[@class="name"]')).toHaveText("MacBook air")
 


  

})

//TC8: Login with valid credentials -> Select a product under Phones-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase
test('Valid Login and Phone purchase',{timeout:50000}, async({page})=>
{
  let loginPage1 = new LoginPage(page)
  await loginPage1.accessUrl()
  await loginPage1.clickLoginLink()
  await loginPage1.validUserName()
  await loginPage1.validpassword()
  let plHoldPg1 = await loginPage1.clickloginButton()
  await expect(page).toHaveURL("https://www.demoblaze.com/")
  
  //let plHoldPg1 = new PlaceHolderPage(page)
  await plHoldPg1.selectCategoryPhone()
  await plHoldPg1.selectSamsung()
  
  //code for dialog box
    page.once('dialog', async dialog=>
    {
      await dialog.accept()
    })

  await plHoldPg1.addToCart()
  await expect(page).toHaveURL("https://www.demoblaze.com/prod.html?idp_=1#")
  await plHoldPg1.clearCart()
  await plHoldPg1.clickCartLink()
  await plHoldPg1.clickplaceOrderBtn()
  await plHoldPg1.enterPurchaserDetails("Aadithya","India","Bengaluru","2314-XXX_XXX","December","2032")
  await plHoldPg1.clickPurchaseBtn()
  await expect(page.getByText("Thank you for your purchase!")).toBeVisible()
 await plHoldPg1.clickOkButton()
   const logoutPg= new LogoutPage(page)

})

//TC9: Login with valid credentials -> Select a product under Monitors-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase
test('Valid Login and Monitor purchase',{timeout:50000}, async({page})=>
{

   let loginPage1 = new LoginPage(page)
  await loginPage1.accessUrl()
  await loginPage1.clickLoginLink()
  await loginPage1.validUserName()
  await loginPage1.validpassword()
  let plHoldPg2 = await loginPage1.clickloginButton()
  await expect(page).toHaveURL("https://www.demoblaze.com/")
  
  //let plHoldPg2 = new PlaceHolderPage(page)
  await plHoldPg2.selectCategoryMonitor()
  await plHoldPg2.selectAppleMonitor()

  //code for dialog box
    page.once('dialog', async dialog=>
    {
      await dialog.accept()
    })

  await plHoldPg2.addToCart()
  await expect(page).toHaveURL("https://www.demoblaze.com/prod.html?idp_=10#")
  await plHoldPg2.clearCart() 
  await plHoldPg2.clickCartLink()
  await plHoldPg2.clickplaceOrderBtn()
  await plHoldPg2.enterPurchaserDetails("Aadithya","India","Bengaluru","2314-XXX_XXX","December","2032")
  await plHoldPg2.clickPurchaseBtn()

  await expect(page.getByText("Thank you for your purchase!")).toHaveText("Thank you for your purchase!")
  await plHoldPg2.clickOkButton()

  
})
