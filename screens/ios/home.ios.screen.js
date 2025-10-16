export default class HomeIOSScreen {

    get btnLogin() { return $('~btn-login') }

    async clickBtnLogin() {
        console.log('Attempting to click btnLogin with selector:', this.btnLogin.selector)
        await this.btnLogin.waitForDisplayed({ timeout: 2000 })
        console.log('btnLogin is displayed, clicking...')
        await this.btnLogin.click()
        console.log('btnLogin clicked successfully')
    }

    async waitForIsShown(isShown = true) {
        await this.btnLogin.waitForDisplayed({
            timeout: 2000,
            reverse: !isShown
        })
        return this
    }
}