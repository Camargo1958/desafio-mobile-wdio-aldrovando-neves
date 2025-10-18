import { config } from 'dotenv'
config()
import { allureReportsHelpers, assertJS, homeScreen, loginScreen } from "../../constants"
import { describeName } from "../../data/describe.data"
import { feature } from "../../data/feature.data"
import { severity } from "../../data/severity.data"

describe(describeName.app1, () => {

    beforeEach(async () => {
        await homeScreen.waitForIsShown(true)
        await homeScreen.clickBtnLogin()
        await loginScreen.waitForIsShown(true)
    })

    afterEach(async () => {
        await homeScreen.waitForIsShown(true)
        await homeScreen.clickBtnHome()
    })

    it(`[APP01-000001] deve realizar signup com sucesso`, async () => {
        await allureReportsHelpers.addAllureMobile(924, severity.blocker, feature.login)

        await loginScreen.clickLblSignUp()
        await loginScreen.doSignUp(process.env.TEST_USER_EMAIL, process.env.TEST_USER_PASSWORD)
        assertJS.isTrue(await loginScreen.getConfirmationModalTitleText() === "Signed Up!")
        assertJS.isTrue(await loginScreen.getConfirmationModalMessageText() === "You successfully signed up!")
        await loginScreen.clickConfirmationModalBtnOk()
    })

    it(`[APP01-000002] deve realizar login com sucesso`, async () => {
        await allureReportsHelpers.addAllureMobile(924, severity.blocker, feature.login)

        await loginScreen.clickLblLogin()
        await loginScreen.doLogin(process.env.TEST_USER_EMAIL, process.env.TEST_USER_PASSWORD)
        assertJS.isTrue(await loginScreen.getConfirmationModalTitleText() === "Success")
        assertJS.isTrue(await loginScreen.getConfirmationModalMessageText() === "You are logged in!")
        await loginScreen.clickConfirmationModalBtnOk()
    })

    it(`[APP01-000003] não deve realizar login com email vazio`, async () => {
        await allureReportsHelpers.addAllureMobile(925, severity.critical, feature.login)

        await loginScreen.clickLblLogin()
        await loginScreen.doLogin('', process.env.TEST_USER_PASSWORD)
        assertJS.isTrue(await loginScreen.isInvalidEmailValidationMessageDisplayed())
    })

    it(`[APP01-000004] não deve realizar login com senha vazia`, async () => {
        await allureReportsHelpers.addAllureMobile(926, severity.critical, feature.login)

        await loginScreen.clickLblLogin()
        await loginScreen.doLogin(process.env.TEST_USER_EMAIL, '')
        assertJS.isTrue(await loginScreen.isInvalidPasswordValidationMessageDisplayed())
    })

    it(`[APP01-000005] não deve realizar login com email invalido`, async () => {
        await allureReportsHelpers.addAllureMobile(927, severity.normal, feature.login)

        await loginScreen.clickLblLogin()
        await loginScreen.doLogin(process.env.TEST_INVALID_EMAIL, process.env.TEST_USER_PASSWORD)
        assertJS.isTrue(await loginScreen.isInvalidEmailValidationMessageDisplayed())
    })

    it(`[APP01-000006] não deve realizar login com email invalido`, async () => {
        await allureReportsHelpers.addAllureMobile(928, severity.normal, feature.login)

        await loginScreen.clickLblLogin()
        await loginScreen.doLogin(process.env.TEST_USER_EMAIL, process.env.TEST_INVALID_PASSWORD)
        assertJS.isTrue(await loginScreen.isInvalidPasswordValidationMessageDisplayed())
    })
})

