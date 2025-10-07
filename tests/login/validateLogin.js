import { allureReportsHelpers, assertJS, homeScreen, loginScreen } from "../../constants"
import { describeName } from "../../data/describe.data"
import { feature } from "../../data/feature.data"
import { severity } from "../../data/severity.data"

describe(describeName.app1, () => {

    beforeEach(async () => {
        await (await homeScreen).waitForIsShown(true)
        await (await homeScreen).clickBtnLogin()
        await (await loginScreen).waitForIsShown(true)
    })

    it(`[APP01-000001] deve realizar login com sucesso`, async () => {
        await allureReportsHelpers.addAllureMobile(924, severity.blocker, feature.login)

        await (await loginScreen).doLogin('user', 'pwd')
        //await browser.pause(5000);
        //assertJS.isTrue(await (await wikipediaScreen).isExistLblProductName("BrowserStack"))
    })
})

