import LoginAndroidScreen from "./android/login.android.screen"
import LoginIOSScreen from "./ios/login.ios.screen"

export default class LoginScreen {

    async getLoginScreen() {
        return await driver.isAndroid ? new LoginAndroidScreen() : new LoginIOSScreen()
    }
}