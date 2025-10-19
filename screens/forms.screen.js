import FormsAndroidScreen from "./android/forms.android.screen"
import FormsIOSScreen from "./ios/forms.ios.screen"

export default class FormsScreen {

    async getFormsScreen() {
        return await driver.isAndroid ? new FormsAndroidScreen() : new FormsIOSScreen()
    }
}