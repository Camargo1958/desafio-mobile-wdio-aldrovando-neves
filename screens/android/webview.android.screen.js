export default class WebviewAndroidScreen {

    get webviewContainer() { return $('//android.webkit.WebView') }
    
    async isWebviewContainerDisplayed() {
        return this.webviewContainer.isDisplayed({ timeout: 10000 })
    }

    async waitForIsShown(isShown = true) {
        await this.webviewContainer.waitForDisplayed({
            timeout: 10000,
            reverse: !isShown
        })
        return this
    }
}