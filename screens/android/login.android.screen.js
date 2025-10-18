export default class LoginAndroidScreen {

    // Login elements
    get lblLogin() { return $('[text="Login"]') }
    get inputLoginEmail() { return $('~input-email') }
    get inputLoginPassword() { return $('~input-password') }
    get btnLogin() { return $('~button-LOGIN') }
    get invalidEmailValidationMessage() { return $('//android.widget.TextView[@text="Please enter a valid email address"]') }
    get invalidPasswordValidationMessage() { return $('//android.widget.TextView[@text="Please enter at least 8 characters"]') }

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

    async isDisplayedBtnLogin() {
        return this.btnLogin.isDisplayed()
    }

    async isInvalidEmailValidationMessageDisplayed() {
        return this.invalidEmailValidationMessage.isDisplayed()
    }

    async isInvalidPasswordValidationMessageDisplayed() {
        return this.invalidPasswordValidationMessage.isDisplayed()
    }

    async doLogin(user, pwd) {
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
    get lblSignUp() { return $('[text="Sign up"]') }
    get inputEmail() { return $('[text="Email"]') }
    get inputPassword() { return $('[text="Password"]') }
    get inputConfirmPassword() { return $('[text="Confirm password"]') }
    get btnSignUp() { return $('~button-SIGN UP') }
    get confirmationModalTitle() { return $('[id="android:id/alertTitle"]') }
    get confirmationModalMessage() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get confirmationModalBtnOk() { return $('[text="OK"]') }

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
    async getConfirmationModalTitleText() {
        await this.confirmationModalTitle.waitForDisplayed({ timeout: 3000 })
        return this.confirmationModalTitle.getText()
    }

    async getConfirmationModalMessageText() {
        await this.confirmationModalMessage.waitForDisplayed({ timeout: 3000 })
        return this.confirmationModalMessage.getText()
    }

    async clickConfirmationModalBtnOk() {
        await this.confirmationModalBtnOk.waitForDisplayed({ timeout: 3000 })
        await this.confirmationModalBtnOk.click()
    } 

    async doSignUp(email, pwd) {
        await this.clickLblSignUp()
        await this.setInputEmail(email)
        await this.setInputPassword(pwd)
        await this.setInputConfirmPassword(pwd)
        await this.clickBtnSignUp()
    }
}