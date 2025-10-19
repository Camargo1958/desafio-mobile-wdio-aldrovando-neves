import { config } from 'dotenv'
config()
import { allureReportsHelpers, assertJS, homeScreen, formsScreen } from "../../constants"
import { describeName } from "../../data/describe.data"
import { feature } from "../../data/feature.data"
import { severity } from "../../data/severity.data"
import { browser } from '@wdio/globals'

describe(describeName.app1, () => {

    beforeEach(async () => {
        await homeScreen.waitForIsShown(true)
    })

    it(`[APP01-000008] deve visualizar forms screen e validar título`, async () => {
        await allureReportsHelpers.addAllureMobile(930, severity.normal, feature.forms)

        await homeScreen.clickBtnForms()
        await formsScreen.waitForIsShown(true)
        assertJS.isTrue(await formsScreen.getTitleText() === "Form components")
    })

    it(`[APP01-000009] deve digitar um texto no input field e verificar saída`, async () => {
        await allureReportsHelpers.addAllureMobile(931, severity.normal, feature.forms)

        await homeScreen.clickBtnForms()
        await formsScreen.waitForIsShown(true)

        const testText = "Hello World"
        await formsScreen.setInputFieldText(testText)
        const outputText = await formsScreen.getInputTextResultText()
        assertJS.isTrue(outputText.includes(testText))
    })
})