import HomeScreen from "./screens/home.screen.js"
import LoginScreen from "./screens/login.screen.js"
import WebviewScreen from "./screens/webview.screen.js"
import FormsScreen from "./screens/forms.screen.js"
import { assert } from "chai"
import AllureReportsHelpers from "./helpers/allure.helpers"

export const homeScreen = await new HomeScreen().getHomeScreen()
export const loginScreen = await new LoginScreen().getLoginScreen()
export const webviewScreen = await new WebviewScreen().getWebviewScreen()
export const formsScreen = await new FormsScreen().getFormsScreen()
export const assertJS = assert
export const allureReportsHelpers = new AllureReportsHelpers()