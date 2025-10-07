export default class HomeIOSdScreen {

    get btnLogin() { return $('//android.widget.TextView[@text="Login"]') }
    
    async clickBtnLogin() {
        await this.btnLogin.waitForDisplayed({ timeout: 30000 })
        await this.btnLogin.click()
    }
}