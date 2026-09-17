import {test, expect} from '@playwright/test'
import {LogoutPage} from '../page/logoutPage'
import LoginPage from '../page/loginPage'


//TC10 - Login with valid credentials -> Logout
test('Logout', async({page})=>
{
  let loginPage = new LoginPage(page)
  await loginPage.accessUrl()
  await loginPage.clickLoginLink()
  await loginPage.validUserName()
  await loginPage.validpassword()
  await loginPage.clickloginButton()

  let logoutPg = new LogoutPage(page)
  await logoutPg.clickLogout()
  await expect(page).toHaveURL("https://www.demoblaze.com/index.html")

})