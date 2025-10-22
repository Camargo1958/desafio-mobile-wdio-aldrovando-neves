import { config } from 'dotenv'
config()
import { allureReportsHelpers, assertJS, homeScreen, formsScreen } from "../../constants"
import { describeName } from "../../data/describe.data"
import { feature } from "../../data/feature.data"
import { severity } from "../../data/severity.data"

describe(describeName.app1, () => {

    beforeEach(async () => {
        await homeScreen.waitForIsShown(true)
        await homeScreen.clickBtnForms()
    })

    afterEach(async () => {
        await homeScreen.clickBtnHome()
    })

    it(`[APP01-000008] deve visualizar forms screen e validar título`, async () => {
        await allureReportsHelpers.addAllureMobile(930, severity.normal, feature.forms)

        await formsScreen.waitForIsShown(true)
        assertJS.isTrue(await formsScreen.getTitleText() === "Form components")
    })

    it(`[APP01-000009] deve digitar um texto no input field e verificar saída`, async () => {
        await allureReportsHelpers.addAllureMobile(931, severity.normal, feature.forms)

        await formsScreen.waitForIsShown(true)
        const testText = "Hello World"
        await formsScreen.setInputFieldText(testText)
        const outputText = await formsScreen.getInputTextResultText()
        assertJS.isTrue(outputText.includes(testText))
    })

    it(`[APP01-000010] deve alternar o switch e verificar o status`, async () => {
        await allureReportsHelpers.addAllureMobile(932, severity.normal, feature.forms)

        const initialStatus = await formsScreen.getSwitchStatusText()
        await formsScreen.toggleSwitchOnOff()
        const toggledStatus = await formsScreen.getSwitchStatusText()
        assertJS.isTrue(initialStatus !== toggledStatus)
    })

    it(`[APP01-000011] deve selecionar uma opção do dropdown e verificar a seleção`, async () => {
        await allureReportsHelpers.addAllureMobile(933, severity.normal, feature.forms)

        const optionToSelect = "Appium is awesome"
        await formsScreen.selectDropdownOption(optionToSelect)
        const selectedOption = await formsScreen.getSelectedDropdownText()
        assertJS.isTrue(selectedOption === optionToSelect)
    })

    it(`[APP01-000012] deve clicar no botão "Active" e modal ser apresentado`, async () => {
        await allureReportsHelpers.addAllureMobile(934, severity.normal, feature.forms)

        await formsScreen.scrollToLblButtons()
        await formsScreen.clickBtnActive()
        assertJS.isTrue(await formsScreen.alertModalTitle.getText() === "This button is")
        assertJS.isTrue(await formsScreen.alertModalMessage.getText() === "This button is active")
        await formsScreen.alertModalBtnOk.click()
    })

    it(`[APP01-000013] deve fechar o modal ao clicar no botão "OK"`, async () => {
        await allureReportsHelpers.addAllureMobile(934, severity.normal, feature.forms)

        await formsScreen.scrollToLblButtons()
        await formsScreen.clickBtnActive()
        await formsScreen.alertModalBtnOk.click()
        assertJS.isFalse(await formsScreen.isDisplayedAlertModal())
    })

    it(`[APP01-000014] deve fechar o modal ao clicar no botão "ASK ME LATER"`, async () => {
        await allureReportsHelpers.addAllureMobile(934, severity.normal, feature.forms)

        await formsScreen.scrollToLblButtons()
        await formsScreen.clickBtnActive()
        await formsScreen.alertModalBtnAskMeLater.click()
        assertJS.isFalse(await formsScreen.isDisplayedAlertModal())
    })

    it(`[APP01-000015] deve fechar o modal ao clicar no botão "ASK ME LATER"`, async () => {
        await allureReportsHelpers.addAllureMobile(934, severity.normal, feature.forms)

        await formsScreen.scrollToLblButtons()
        await formsScreen.clickBtnActive()
        await formsScreen.alertModalBtnCancel.click()
        assertJS.isFalse(await formsScreen.isDisplayedAlertModal())
    })

    it(`[APP01-000016] deve clicar no botão Inactive e modal nãão deve ser apresentado`, async () => {
        await allureReportsHelpers.addAllureMobile(934, severity.normal, feature.forms)

        await formsScreen.scrollToLblButtons()
        await formsScreen.clickBtnInactive()
        assertJS.isFalse(await formsScreen.isDisplayedAlertModal())
    })
})