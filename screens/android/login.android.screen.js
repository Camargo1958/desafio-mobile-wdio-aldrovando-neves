export default class LoginAndroidScreen {

    get inputEmail() { return $('~input-email') }
    get inputPassword() { return $('~input-password') }
    get btnLogin() { return $('~button-LOGIN') }

    async setInputEmail(email) {
        await this.inputEmail.waitForDisplayed({ timeout: 30000 })
        await this.inputEmail.addValue(email)
    }

    async setInputPassword(password) {
        await this.inputPassword.waitForDisplayed({ timeout: 30000 })
        await this.inputPassword.addValue(password)
    }

    async clickBtnLogin() {
        await this.btnLogin.waitForDisplayed({ timeout: 30000 })
        await this.btnLogin.click()
    }

    async doLogin(email, password) {
        await this.setInputEmail(email)
        await this.setInputPassword(password)
        await this.clickBtnLogin()
    }

    async waitForIsShown(isShown = true) {
        await this.btnLogin.waitForDisplayed({
            timeout: 30000,
            reverse: !isShown
        })
        return this
    }
}