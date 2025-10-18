export default class HomeAndroidScreen { 

    get btnLogin() { return $('//android.widget.TextView[@text="Login"]') }
    get btnHome() { return $('//android.widget.TextView[@text="Home"]') }

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

    async waitForIsShown(isShown = true) {
        await this.btnLogin.waitForDisplayed({
            timeout: 2000,
            reverse: !isShown
        })
        return this
    }
}