import {test, expect} from '@playwright/test'
import validcredentials from '../utils/validcredentials.json'
import invalidCredentials from '../utils/invalidCredentials.json'

test.beforeEach({timeout:30000},async({browser, page})=>
{
   await page.goto('https://www.demoblaze.com')
})


// TC1 -Sign Up Scenario
test('SignUp',{timeout:30000}, async({page})=>
{
    const signUpLink = await page.locator('#signin2')
    await signUpLink.click()

    //Generate unique username
    const username='User'+Date.now()
    //generate unique password
    const password = 'Aadhi'+Date.now()
  
    await page.locator('#sign-username').fill('Aadithya')
    await page.locator('#sign-password').fill('1AadithyaBaiju#')

    //code for dialog box
    page.once('dialog', async dialog=>
    {
      await dialog.message()
      await dialog.accept()
    })

    await page.locator('//button[text()="Sign up"]').click()
    await expect(page).toHaveURL('https://www.demoblaze.com')

})

//TC2 - SignUP - Close  Scenario
test('SignUp Close',{timeout:50000}, async({page})=>
{
     const signUpLink = await page.locator('#signin2')
    await signUpLink.click()
    await page.locator('#sign-username').fill('Aadithya')
    await page.locator('#sign-password').fill('1AadithyaBaiju#')
   await page.locator('//button[@class="btn btn-secondary"]').nth(1).click()
    await expect(page).toHaveURL('https://www.demoblaze.com')

})

//TC3 - Login with valid login credentials.
test('Login Valid', async({page})=>
{
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill(validcredentials.username)
  await page.locator('#loginpassword').fill(validcredentials.password)
  await expect( page.locator('#loginpassword')).toHaveValue("1AadithyaBaiju#")
  await page.locator('//button[@class="btn btn-primary"]').nth(2).click()
  await expect(page).toHaveURL("https://www.demoblaze.com/")

})

//TC4 - Login with invalid username and valid password
test('Invalid Username and Valid Password', async({page})=>
{
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill(invalidCredentials[0].username)
  await page.locator('#loginpassword').fill(invalidCredentials[0].password)
  await expect( page.locator('#loginpassword')).toHaveValue("1AadithyaBaiju#")

  //code for dialog box
    page.once('dialog', async dialog=>
    {
      await dialog.accept()
    })


  await page.locator('//button[@class="btn btn-primary"]').nth(2).click()
  await expect(page).toHaveURL("https://www.demoblaze.com/")

})


//TC5 -  login with valid username and invalid password
test('Login Valid Username and Invalid password', async({page})=>
{
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill(invalidCredentials[1].username)
  await page.locator('#loginpassword').fill(invalidCredentials[1].password)

  //code for dialog box
    page.once('dialog', async dialog=>
    {
      await dialog.accept()
    })


  await page.locator('//button[@class="btn btn-primary"]').nth(2).click()
  await expect(page).toHaveURL("https://www.demoblaze.com/")

})

//TC6 - Login with invalid username and invalid password
test('Login Invalid - invalid username and invalid password', async({page})=>
{
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill(invalidCredentials[2].username)
  await page.locator('#loginpassword').fill(invalidCredentials[2].password)
  await expect( page.locator('#loginpassword')).toHaveValue("1Aadya#")

  //code for dialog box
    page.once('dialog', async dialog=>
    {
      await dialog.accept()
    })


  await page.locator('//button[@class="btn btn-primary"]').nth(2).click()
  await expect(page).toHaveURL("https://www.demoblaze.com/")

})

//TC7 - Login with valid credentials -> Select a product(Laptop) -> Add to Cart -> Click "ok" on the popup
test('Valid Login and Add Laptop',{timeout:50000}, async({page})=>
{
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill(validcredentials.username)
  await page.locator('#loginpassword').fill(validcredentials.password)
  await page.locator('//button[text()="Log in"]').click()
  await expect(page).toHaveURL("https://www.demoblaze.com/")
  await page.locator("//a[text()='Laptops']").click()
  await page.locator("//a[text()='MacBook air']").click()
 // await page.locator('//img[@class="card-img-top img-fluid"]').nth(5).click()
   //code for dialog box
    page.once('dialog', async dialog=>
    {
      await dialog.accept()
    })
  
    await expect(page).toHaveURL("https://www.demoblaze.com/prod.html?idp_=11")
  await page.getByRole('link',{name:"Add to cart"}).click()

  

})

//TC8: Login with valid credentials -> Select a product under Phones-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase
test('Valid Login and Phone purchase', async({page})=>
{
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill(validcredentials.username)
  await page.locator('#loginpassword').fill(validcredentials.password)
  await page.locator('//button[text()="Log in"]').click()
  await expect(page).toHaveURL("https://www.demoblaze.com/")
  await page.locator("//a[text()='Phones']").click()
  await page.locator("//a[text()='Samsung galaxy s6']").click()
   //code for dialog box
    page.once('dialog', async dialog=>
    {
      await dialog.accept()
    })
  await page.getByRole('link',{name:"Add to cart"}).click()
  await expect(page).toHaveURL("https://www.demoblaze.com/prod.html?idp_=1#")

  await page.locator("//a[text()='Cart']").click()
   await page.locator("//button[text()='Place Order']").click()

  await page.locator('//input[@id="name"]').fill("Aadithya")
  await page.locator('//input[@id="country"]').fill("India")
  await page.locator('//input[@id="city"]').fill("Bengaluru")
  await page.locator('//input[@id="card"]').fill("2314-xxxx-xxxx")
  await page.locator('//input[@id="month"]').fill("December")
  await page.locator('//input[@id="year"]').fill("2028")
  await page.locator('//button[text()="Purchase"]').click()
 await expect(page.getByText("Thank you for your purchase!")).toBeVisible()
  await page.locator('//button[text()="OK"]').click()

  
})

//TC9: Login with valid credentials -> Select a product under Monitors-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase
test('Valid Login and Monitor purchase',{timeout:50000}, async({page})=>
{
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill(validcredentials.username)
  await page.locator('#loginpassword').fill(validcredentials.password)
  await page.locator('//button[text()="Log in"]').click()
  await expect(page).toHaveURL("https://www.demoblaze.com/")
  await page.locator("//a[text()='Monitors']").click()
 await page.locator("//a[text()='Apple monitor 24']").click()
   //code for dialog box
    page.once('dialog', async dialog=>
    {
      await dialog.accept()
    })
  await page.getByRole('link',{name:"Add to cart"}).click()
 await expect(page).toHaveURL("https://www.demoblaze.com/prod.html?idp_=10#")

  await page.locator("//a[text()='Cart']").click()
   await page.locator("//button[text()='Place Order']").click()

  await page.locator('//input[@id="name"]').fill("Aadithya")
  await page.locator('//input[@id="country"]').fill("India")
  await page.locator('//input[@id="city"]').fill("Bengaluru")
  await page.locator('//input[@id="card"]').fill("2314-xxxx-xxxx")
  await page.locator('//input[@id="month"]').fill("December")
  await page.locator('//input[@id="year"]').fill("2028")
  await page.locator('//button[text()="Purchase"]').click()
  //await expect(page.getByText("Thank you for your purchase!")).toHaveText("Thank you for your purchase!")
  await page.locator('//button[text()="OK"]').click()

  
})


//TC10 - Login with valid credentials -> Logout
test('Logout', async({page})=>
{
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill(validcredentials.username)
  await page.locator('#loginpassword').fill(validcredentials.password)
  await expect( page.locator('#loginpassword')).toHaveValue("1AadithyaBaiju#")
  await page.locator('//button[@class="btn btn-primary"]').nth(2).click()
  await page.locator('//a[text()="Log out"]').click()
  await expect(page).toHaveURL("https://www.demoblaze.com/index.html")

})






