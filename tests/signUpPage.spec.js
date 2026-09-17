import {test, expect} from '@playwright/test'
import SignUPPage from '../page/signupPage'


 //Generate unique username
    const username='User'+Date.now()
    //generate unique password
    const password = 'Aadhi'+Date.now()

// TC1 -Sign Up Scenario
test('SignUp',{timeout:30000}, async({page})=>
{ 
    let signUpLink = new SignUPPage(page)
    await signUpLink.accessurl() 
    await signUpLink.clickSignUp()
    await signUpLink.enterUsername()
    await signUpLink.enterPassword()
    //code for dialog box
    page.once('dialog', async dialog=>
    {
      await dialog.message()
      await dialog.accept()
    })
    await signUpLink.signUpButton()
    await expect(page).toHaveURL('https://www.demoblaze.com')

})

//TC2 - SignUP - Close  Scenario
test('SignUp Close',{timeout:50000}, async({page})=>
{
    let signUpLink1 = new SignUPPage(page)
    await signUpLink1.accessurl() 
    await signUpLink1.clickSignUp()
    await signUpLink1.enterUsername()
    await signUpLink1.enterPassword()
    await signUpLink1.closeButton()
    await expect(page).toHaveURL('https://www.demoblaze.com')

})