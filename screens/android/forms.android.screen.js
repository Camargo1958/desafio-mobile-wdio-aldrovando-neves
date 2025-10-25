export default class FormsAndroidScreen {

    get formFrame() { return $('//android.widget.ScrollView[@content-desc="Forms-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]') }
    get lblTitle() { return $('//android.widget.TextView[@text="Form components"]') }
    get inputField() { return $('//android.widget.EditText[@content-desc="text-input"]') }
    get lblYouHaveTyped() { return $('//android.widget.TextView[contains(@text, "You have typed:")]') }
    get inputTextResult() { return $('~input-text-result') }
    get toggleSwitch() { return $('//android.widget.Switch[@content-desc="switch"]') }
    get switchStatusText() { return $('~switch-text') }
    get dropdownListOpenBtn() { return $('//android.widget.TextView[@text="󰅀"]') }
    get dropDownListSelection() { return $('//android.widget.EditText[@resource-id="text_input"]') }
    get btnActive() { return $('//android.widget.TextView[@text="Active"]') }
    get btnInactive() { return $('//android.widget.TextView[@text="Inactive"]') }
    get alertModalTitle() { return $('[id="android:id/alertTitle"]') }
    get alertModalMessage() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
    get lblButtons() { return $('//android.widget.TextView[@text="Buttons"]') }
    get alertModalBtnOk() { return $('[text="OK"]') }
    get alertModalBtnAskMeLater() { return $('[text="ASK ME LATER"]') }
    get alertModalBtnCancel() { return $('[text="CANCEL"]') }

    async getTitleText() {
        return await this.lblTitle.getText()
    }

    async setInputFieldText(text) {
        await this.inputField.waitForDisplayed({ timeout: 5000 })
        await this.inputField.clearValue()
        await this.inputField.setValue(text)
    }

    async getInputFieldText() {
        return await this.inputField.getText()
    }

    async getYouHaveTypedText() {
        return await this.lblYouHaveTyped.getText()
    }

    async getInputTextResultText() {
        return await this.inputTextResult.getText()
    }

    async toggleSwitchClick() {
        await this.toggleSwitch.waitForDisplayed({ timeout: 5000 })
        await this.toggleSwitch.click()
    }

    async getSwitchStatusText() {
        return await this.switchStatusText.getText()
    }

    async selectDropdownOption(optionText) {
        await this.dropdownListOpenBtn.waitForDisplayed({ timeout: 5000 })
        await this.dropdownListOpenBtn.click()
        const option = $(`[text="${optionText}"]`)
        await option.waitForDisplayed({ timeout: 5000 })
        await option.click()
    }

    async getSelectedDropdownText() {
        return await this.dropDownListSelection.getText()
    }

    async scrollToLblButtons() {
        await this.lblButtons.scrollIntoView()
    }

    async clickBtnActive() {
        await this.btnActive.waitForDisplayed({ timeout: 5000 })
        await this.btnActive.click()
    }

    async clickBtnInactive() {
        await this.btnInactive.waitForDisplayed({ timeout: 5000 })
        await this.btnInactive.click()
    }

    async isDisplayedAlertModal() {
        return await this.alertModalTitle.isDisplayed()
    }

    async getAlertModalTitleText() {
        await this.alertModalTitle.waitForDisplayed({ timeout: 5000 })
        return await this.alertModalTitle.getText()
    }

    async getAlertModalMessageText() {
        await this.alertModalMessage.waitForDisplayed({ timeout: 5000 })
        return await this.alertModalMessage.getText()
    }

    async clickAlertModalBtnOk() {
        await this.alertModalBtnOk.waitForDisplayed({ timeout: 5000 })
        await this.alertModalBtnOk.click()
    }

    async clickAlertModalBtnAskMeLater() {
        await this.alertModalBtnAskMeLater.waitForDisplayed({ timeout: 5000 })
        await this.alertModalBtnAskMeLater.click()
    }

    async clickAlertModalBtnCancel() {
        await this.alertModalBtnCancel.waitForDisplayed({ timeout: 5000 })
        await this.alertModalBtnCancel.click()
    }

    async waitForIsShown(isShown = true) {
        await this.formFrame.waitForDisplayed({
            timeout: 10000,
            reverse: !isShown
        })
        return this
    }
}