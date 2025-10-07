import HomeAndroidScreen from "./android/home.android.screen"
import HomeIOSScreen from "./ios/home.ios.screen"

export default class HomeScreen {

    async getHomeScreen() {
        return await driver.isAndroid ? new HomeAndroidScreen() : new HomeIOSScreen()
    }
}