import { allureReportsHelpers, assertJS, homeScreen, loginScreen } from "../../constants"
import { describeName } from "../../data/describe.data"
import { feature } from "../../data/feature.data"
import { severity } from "../../data/severity.data"

describe(describeName.app1, () => {

    beforeEach(async () => {
        const home = await homeScreen
        await home.waitForIsShown(true)
        await home.clickBtnLogin()
        const login = await loginScreen
        await login.waitForIsShown(true)
    })

    it(`[APP01-000001] deve realizar signup com sucesso`, async () => {
        await allureReportsHelpers.addAllureMobile(924, severity.blocker, feature.login)

        const login = await loginScreen
        await login.clickLblSignUp()
        await login.doSignUp('teste@teste.com', '12345678')
        await browser.pause(5000)
    })

    it(`[APP01-000002] deve realizar login com sucesso`, async () => {
        await allureReportsHelpers.addAllureMobile(924, severity.blocker, feature.login)

        const login = await loginScreen
        await login.waitForIsShown(true)
        await browser.pause(5000)

        // TODO: Implement actual login flow
        await login.doLogin('teste@teste.com', '12345678')
        await browser.pause(5000);
        // assertJS.isTrue(await (await wikipediaScreen).isExistLblProductName("BrowserStack"))

        // Signed Up!
        // You successfully signed up!
        // btn: ok
    })
})

