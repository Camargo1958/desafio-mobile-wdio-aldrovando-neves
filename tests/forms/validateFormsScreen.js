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

    it(`[APP01-000010] deve alternar o switch e verificar o status`, async () => {
        await allureReportsHelpers.addAllureMobile(932, severity.normal, feature.forms)
        
        await homeScreen.clickBtnForms()
        await formsScreen.waitForIsShown(true)

        const initialStatus = await formsScreen.getSwitchStatusText()
        await formsScreen.toggleSwitchOnOff()
        const toggledStatus = await formsScreen.getSwitchStatusText()
        assertJS.isTrue(initialStatus !== toggledStatus)
    })

    it(`[APP01-000011] deve selecionar uma opção do dropdown e verificar a seleção`, async () => {
        await allureReportsHelpers.addAllureMobile(933, severity.normal, feature.forms)

        await homeScreen.clickBtnForms()
        await formsScreen.waitForIsShown(true)

        const optionToSelect = "Appium is awesome"
        await formsScreen.selectDropdownOption(optionToSelect)
        const selectedOption = await formsScreen.getSelectedDropdownText()
        assertJS.isTrue(selectedOption === optionToSelect)
    })

    it(`[APP01-000012] deve clicar no botão Active e Inactive`, async () => {
        await allureReportsHelpers.addAllureMobile(934, severity.normal, feature.forms)

        await homeScreen.clickBtnForms()
        await formsScreen.waitForIsShown(true)

        await formsScreen.clickBtnActive()
        // Aqui você pode adicionar uma verificação específica para o estado "Active" se houver feedback visual     
        await formsScreen.clickBtnInactive()
        // Aqui você pode adicionar uma verificação específica para o estado "Inactive" se houver feedback visual     
    })
})