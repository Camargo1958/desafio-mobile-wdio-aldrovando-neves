export default class HomeAndroidScreen {

    get btnLogin() { return $('//android.widget.TextView[@text="Login"]') }
    get btnHome() { return $('//android.widget.TextView[@text="Home"]') }
    get btnWebview() { return $('//android.widget.TextView[@text="Webview"]') }
    get btnForms() { return $('//android.widget.TextView[@text="Forms"]') }

    async clickBtnLogin() {
        console.log('Attempting to click btnLogin with selector:', this.btnLogin.selector)
        await this.btnLogin.waitForDisplayed({ timeout: 2000 })
        console.log('btnLogin is displayed, clicking...')
        await this.btnLogin.click()
        console.log('btnLogin clicked successfully')
        await this.btnLogin.waitForDisplayed({ timeout: 2000 })
        await this.btnLogin.click()
    }

    async clickBtnHome() {
        await this.btnHome.waitForDisplayed({ timeout: 2000 })
        await this.btnHome.click()
    }

    async clickBtnWebview() {
        await this.btnWebview.waitForDisplayed({ timeout: 2000 })
        await this.btnWebview.click()
    }

    async clickBtnForms() {
        await this.btnForms.waitForDisplayed({ timeout: 2000 })
        await this.btnForms.click()
    }

    async waitForIsShown(isShown = true) {
        await this.btnLogin.waitForDisplayed({
            timeout: 2000,
            reverse: !isShown
        })
        return this
    }
}