export default class HomeAndroidScreen { 

    get btnLogin() { return $('//android.widget.TextView[@text="Login"]') }
    
    async clickBtnLogin() {
        await this.btnLogin.waitForDisplayed({ timeout: 30000 })
        await this.btnLogin.click()
    }

    async waitForIsShown(isShown = true) {
        await this.btnLogin.waitForDisplayed({
            timeout: 30000,
            reverse: !isShown
        })
        return this
    }
}