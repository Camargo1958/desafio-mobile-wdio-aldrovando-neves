export default class FormsAndroidScreen {

    get lblTitle() { return $('//android.widget.TextView[@text="Form components"]') }
    get inputField() { return $('//android.widget.EditText[@content-desc="text-input"]') }
    get lblYouHaveTyped() { return $('//android.widget.TextView[contains(@text, "You have typed:")]') }
    get inputTextResult() { return $('~input-text-result') }
    get toggleSwitch() { return $('//android.widget.Switch[@content-desc="switch"]') }
    get switchStatusText() { return $('~switch-text') }
    get dropdownList() { return $('//android.widget.Spinner[@content-desc="Dropdown"]') }
    get btnActive() { return $('//android.widget.Button[@text="Active"]') }
    get btnInactive() { return $('//android.widget.Button[@text="Inactive"]') }

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

    async toggleSwitchOnOff() {
        await this.toggleSwitch.waitForDisplayed({ timeout: 5000 })
        await this.toggleSwitch.click()
    }

    async getSwitchStatusText() {
        return await this.switchStatusText.getText()
    }

    async selectDropdownOption(optionText) {
        await this.dropdownList.waitForDisplayed({ timeout: 5000 })
        await this.dropdownList.click()
        const option = $(`//android.widget.TextView[@text="${optionText}"]`)
        await option.waitForDisplayed({ timeout: 5000 })
        await option.click()
    }

    async getSelectedDropdownText() {
        return await this.dropdownList.getText()
    }

    async clickBtnActive() {
        await this.btnActive.waitForDisplayed({ timeout: 5000 })
        await this.btnActive.click()
    }

    async clickBtnInactive() {
        await this.btnInactive.waitForDisplayed({ timeout: 5000 })
        await this.btnInactive.click()
    }

    async waitForIsShown(isShown = true) {
        await this.lblTitle.waitForDisplayed({
            timeout: 10000,
            reverse: !isShown
        })
        return this
    }
}