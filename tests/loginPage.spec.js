import {test, expect} from '@playwright/test'
import LoginPage from '../page/loginPage'


//TC3 - Login with valid login credentials.
test('Login with valid login credentials', async({page})=>
{
  let loginPage = new LoginPage(page)
  await loginPage.accessUrl()
  await loginPage.clickLoginLink()
  await loginPage.validUserName()
  await loginPage.validpassword()
  const plceholderPge = await loginPage.clickloginButton()
  await expect(page).toHaveURL("https://www.demoblaze.com/")
})

//TC4 - Login with invalid username and valid password
test('Invalid Username and Valid Password', async({page})=>
{
  let loginPage1 = new LoginPage(page)
  await loginPage1.accessUrl()
  await loginPage1.clickLoginLink()
  await loginPage1.invalidUserName()
  await loginPage1.validpassword()
  const plceholderPge1 = await loginPage1.clickloginButton()
  
  //code for dialog box
    page.once('dialog', async dialog=>
    {
      await dialog.accept()
    })

  await expect(page).toHaveURL("https://www.demoblaze.com/")

})


//TC5 -  login with valid username and invalid password
test('Login Valid Username and Invalid password', async({page})=>
{
  let loginPage2 = new LoginPage(page)
  await loginPage2.accessUrl()
  await loginPage2.clickLoginLink()
  await loginPage2.validUserName()
  await loginPage2.invalidPassword()
  await loginPage2.clickloginButton()
  //const plceholderPge2 = 
 
  //code for dialog box
    page.once('dialog', async dialog=>
    {
      await dialog.accept()
    })

  await expect(page).toHaveURL("https://www.demoblaze.com/")

})

//TC6 - Login with invalid username and invalid password
test('Login Invalid - invalid username and invalid password', async({page})=>
{
  let loginPage3 = new LoginPage(page)
  await loginPage3.accessUrl()
  await loginPage3.clickLoginLink()
  await loginPage3.invalidUserName()
  await loginPage3.invalidPassword()
  const plceholderPge3 = await loginPage3.clickloginButton()

  //code for dialog box
    page.once('dialog', async dialog=>
    {
      await dialog.accept()
    })

  await expect(page).toHaveURL("https://www.demoblaze.com/")

})
