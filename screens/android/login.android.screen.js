export default class LoginAndroidScreen {

    // Login elements
    get lblLogin() { return $(new UiSelector().text("Login").instance(0)) }
    get inputLoginEmail() { return $('~input-email') }
    get inputLoginPassword() { return $('~input-password') }
    get btnLogin() { return $('~button-LOGIN') }

    async clickLblLogin() {
        await this.lblLogin.waitForDisplayed({ timeout: 2000 })
        await this.lblLogin.click()
    }
    
    async setInputLoginEmail(email) {
        await this.inputLoginEmail.waitForDisplayed({ timeout: 2000 })
        await this.inputLoginEmail.addValue(email)
    }

    async setInputLoginPassword(password) {
        await this.inputLoginPassword.waitForDisplayed({ timeout: 2000 })
        await this.inputLoginPassword.addValue(password)
    }

    async clickBtnLogin() {
        await this.btnLogin.waitForDisplayed({ timeout: 2000 })
        await this.btnLogin.click()
    }

    async doLogin(user, pwd) {
        await this.clickLblLogin()
        await this.setInputLoginEmail(user)
        await this.setInputLoginPassword(pwd)
        await this.clickBtnLogin()
    }

    async waitForIsShown(isShown = true) {
        await this.btnLogin.waitForDisplayed({
            timeout: 2000,
            reverse: !isShown
        })
        return this
    }

    // Sign up elements
    get lblSignUp() { return $(new UiSelector().text("Sign up")) }
    get lblSignUp() { return $(UiSelector().text("Sign up")) }
    get inputEmail() { return $(new UiSelector().text("Email")) }
    get inputPassword() { return $(new UiSelector().text("Password")) }
    get inputConfirmPassword() { return $(new UiSelector().text("Confirm password")) }
    get btnSignUp() { return $(new UiSelector().description("button-SIGN UP")) }
    get confirmationModal() { return $(new UiSelector().textContains("Signed Up!")) }

    async clickLblSignUp() {
        await this.lblSignUp.waitForDisplayed({ timeout: 2000 })
        await this.lblSignUp.click()
    }

    async setInputEmail(email) {
        await this.inputEmail.waitForDisplayed({ timeout: 2000 })
        await this.inputEmail.setValue(email)
    }

    async setInputPassword(pwd) {
        await this.inputPassword.waitForDisplayed({ timeout: 2000 })
        await this.inputPassword.setValue(pwd)
    }

    async setInputConfirmPassword(pwd) {
        await this.inputConfirmPassword.waitForDisplayed({ timeout: 2000 })
        await this.inputConfirmPassword.setValue(pwd)
    }

    async clickBtnSignUp() {
        await this.btnSignUp.waitForDisplayed({ timeout: 2000 })
        await this.btnSignUp.click()
    }

    async doSignUp(email, pwd) {
        await this.clickLblSignUp()
        await this.setInputEmail(email)
        await this.setInputPassword(pwd)
        await this.setInputConfirmPassword(pwd)
        await this.clickBtnSignUp()
    }
}