import WebviewAndroidScreen from "./android/webview.android.screen"
import WebviewIOSScreen from "./ios/webview.ios.screen"

export default class WebviewScreen {

    async getWebviewScreen() {
        return await driver.isAndroid ? new WebviewAndroidScreen() : new WebviewIOSScreen()
    }
}