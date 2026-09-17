class SignUPPage{

    constructor(page){
        this.page =page
        this.signUpLink = page.locator('#signin2')
        this.userName = page.locator("#sign-username")
        this.password = page.locator("#sign-password")
        this.signUp=page.locator('//button[text()="Sign up"]')
        this.close=page.locator('//button[text()="Close"]')
    }

    async accessurl()
    {
        await this.page.goto("https://www.demoblaze.com")
    }

    async clickSignUp()
    {
        await this.signUpLink.click()
        return this
    }

    async enterUsername()
    {
        await this.userName.fill('Aadithya')
        return this
    }

    async enterPassword()
    {
         await this.password.fill('1AadithyaBaiju#')
         return this
    }

    async signUpButton()
    {   
         await this.signUp.click()
         return this

    }

    async closeButton()
    {
        await this.close.nth(1).click()
        return this
    }
}
export default SignUPPage


