import HomeScreen from "./screens/home.screen.js"
import LoginScreen from "./screens/login.screen.js"
import { assert } from "chai"
import AllureReportsHelpers from "./helpers/allure.helpers"

export const homeScreen = await new HomeScreen().getHomeScreen()
export const loginScreen = await new LoginScreen().getLoginScreen()
export const assertJS = assert
export const allureReportsHelpers = new AllureReportsHelpers()