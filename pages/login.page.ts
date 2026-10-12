import { $ } from '@wdio/globals';
import Page from './page.js';
import { expect } from '@wdio/globals';


class LoginPage extends Page {

    // Kiểm tra UI của màn hình
    get phoneInput() {
        return $('(//android.widget.EditText[@password="false"])[1]');
    }

    get passwordInput() {
        return $('//android.widget.EditText[@password="true"]');
    }

    get carNum() {
        return $('(//android.widget.EditText[@password="false" and @clickable="true" and @enabled="true" and @focusable="true"])[2]');
    }

    get autoLogin() {
        return $('//*[contains(@content-desc, "Tự động đăng nhập")]');

    }

    get autoUnCheckedLogin() {
        return $('//*[contains(@content-desc, "Tự động đăng nhậpNot TickedCheck boxdouble tap to toggle")]');
    }
    get autoCheckedLogin() {
        return $('//*[contains(@content-desc, "Tự động đăng nhậpTickedCheck boxdouble tap to toggle")]');
    }

    get forgotPassword() {
        return $('//*[@text="Quên mật khẩu?"]');
    }

    get loginButton() {
        return $('//android.widget.TextView[@text="ĐĂNG NHẬP"]');
    }

    //Check notify

    toastMessage(message: string) {
        return $(`//*[@text="${message}"]`);
    }

    //Kiểm tra action

    async enterPhone(phone: string) {
        await this.phoneInput.setValue(phone);
    }

    async enterPassword(password: string) {
        await this.passwordInput.setValue(password);
    }

    async enterCarNum(carNum: String) {
        await this.passwordInput.setValue(carNum);
    }

    //check auto login
    async toggleAutoLogin() {

        if (await this.autoUnCheckedLogin.isDisplayed()) {

            await this.autoLogin.click();

            await expect(this.autoCheckedLogin).toBeDisplayed();

        } else if (await this.autoCheckedLogin.isDisplayed()) {

            await this.autoLogin.click();

            await expect(this.autoUnCheckedLogin).toBeDisplayed();

        }
    }

    async clickLogin() {
        await this.loginButton.click();
    }
    async login(phone: string, password: string) {
        await this.enterPhone(phone);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async forgetPasswordClick() {
        await this.forgotPassword.click();
    }
}

export default new LoginPage();