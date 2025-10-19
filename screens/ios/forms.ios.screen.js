export default class FormsIOSScreen {

    get lblTitle() { return $('~form-title') }
    get inputField() { return $('~text-input') }
    get lblYouHaveTyped() { return $('~typed-text') }
    get inputTextResult() { return $('~input-text-result') }
    get switchToggle() { return $('~switch-toggle') }
    get dropdownList() { return $('~dropdown-list') }
    get btnActive() { return $('~btn-active') }
    get btnInactive() { return $('~btn-inactive') }

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

    async toggleSwitch() {
        await this.switchToggle.waitForDisplayed({ timeout: 5000 })
        await this.switchToggle.click()
    }

    async isSwitchOn() {
        const switchState = await this.switchToggle.getAttribute('value')
        return switchState === '1'
    }

    async selectDropdownOption(optionText) {
        await this.dropdownList.waitForDisplayed({ timeout: 5000 })
        await this.dropdownList.click()
        const option = $(`~dropdown-option-${optionText.toLowerCase()}`)
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