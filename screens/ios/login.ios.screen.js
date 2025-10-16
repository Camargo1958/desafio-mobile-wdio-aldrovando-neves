export default class LoginIOSScreen {

    // Login elements
    get lblLogin() { return $('~lbl-login') }
    get inputLoginEmail() { return $('~input-email') }
    get inputLoginPassword() { return $('~input-password') }
    get btnLogin() { return $('~btn-login') }

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
    get lblSignUp() { return $('~lbl-signup') }
    get inputEmail() { return $('~input-signup-email') }
    get inputPassword() { return $('~input-signup-password') }
    get inputConfirmPassword() { return $('~input-confirm-password') }
    get btnSignUp() { return $('~btn-signup') }
    get confirmationModal() { return $('~modal-signed-up') }

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