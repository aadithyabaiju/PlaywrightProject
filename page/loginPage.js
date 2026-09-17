import {PlaceHolderPage} from './placeholderPage'
import validcredentials from '../utils/validcredentials.json'
import invalidCredentials from '../utils/invalidCredentials.json'

class LoginPage{

    constructor(page){
        this.page =page
        this.loginLink = page.locator('#login2')
        this.username = page.locator('#loginusername')
        this.password = page.locator('#loginpassword')
        this.loginButton= page.locator('//button[@class="btn btn-primary"]')
    }

    async accessUrl(){
         await this.page.goto('https://www.demoblaze.com')
        }
    

    async clickLoginLink(){
        await this.loginLink.click()
        return this

    }

    async validUserName(){
        await this.username.fill(validcredentials.username)
        return this
    }

    async validpassword(){
        await this.password.fill(validcredentials.password)
        return this
    }

    async invalidUserName(){
        await this.username.fill(invalidCredentials[2].username)
          return this
    }

    async invalidPassword(){
        await this.password.fill(invalidCredentials[2].password)
          return this
    }

    async clickloginButton(){
        await this.loginButton.nth(2).click()
        return new PlaceHolderPage(this.page)
    }

    
}
export default LoginPage