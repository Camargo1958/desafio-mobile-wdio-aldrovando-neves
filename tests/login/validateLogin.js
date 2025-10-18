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

    it(`[APP01-000003] deve validar login com email vazio`, async () => {
        await allureReportsHelpers.addAllureMobile(925, severity.critical, feature.login)

        await loginScreen.clickLblLogin()
        await loginScreen.doLogin('', process.env.TEST_USER_PASSWORD)
        assertJS.isTrue(await loginScreen.isEmptyEmailValidationMessageDisplayed())
    })

    // it(`[APP01-000004] deve validar login com senha vazia`, async () => {
    //     await allureReportsHelpers.addAllureMobile(926, severity.critical, feature.login)

    //     const login = await loginScreen
    //     await login.clickLblLogin()
    //     await login.setInputLoginEmail(process.env.TEST_USER_EMAIL)
    //     await login.setInputLoginPassword('')
    //     await login.clickBtnLogin()
    //     // Note: App shows a toast message "Please enter a valid password" for empty password
    //     const toastSelector = await $('//android.widget.Toast')
    //     await toastSelector.waitForDisplayed({ timeout: 5000 })
    //     const toastText = await toastSelector.getText()
    //     assertJS.isTrue(toastText.includes('Please enter a valid password'), `Expected toast message about password validation, got: ${toastText}`)
    // })

    // it(`[APP01-000005] deve validar login com credenciais invalidas`, async () => {
    //     await allureReportsHelpers.addAllureMobile(927, severity.normal, feature.login)

    //     const login = await loginScreen
    //     await login.doLogin(process.env.TEST_INVALID_EMAIL, process.env.TEST_INVALID_PASSWORD)
    //     // Note: App shows a toast message "Invalid credentials" for wrong email/password combination
    //     const toastSelector = await $('//android.widget.Toast')
    //     await toastSelector.waitForDisplayed({ timeout: 5000 })
    //     const toastText = await toastSelector.getText()
    //     assertJS.isTrue(toastText.includes('Invalid credentials'), `Expected toast message about invalid credentials, got: ${toastText}`)
    // })

    // it(`[APP01-000006] deve validar login com email invalido`, async () => {
    //     await allureReportsHelpers.addAllureMobile(928, severity.normal, feature.login)

    //     const login = await loginScreen
    //     await login.clickLblLogin()
    //     await login.setInputLoginEmail(process.env.TEST_INVALID_EMAIL_FORMAT)
    //     await login.setInputLoginPassword(process.env.TEST_USER_PASSWORD)
    //     await login.clickBtnLogin()
    //     // Note: App shows a toast message "Please enter a valid email address" for invalid email format
    //     const toastSelector = await $('//android.widget.Toast')
    //     await toastSelector.waitForDisplayed({ timeout: 5000 })
    //     const toastText = await toastSelector.getText()
    //     assertJS.isTrue(toastText.includes('Please enter a valid email address'), `Expected toast message about email format validation, got: ${toastText}`)
    // })
})

