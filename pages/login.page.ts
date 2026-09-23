import { $ } from '@wdio/globals';
import Page from './page.js';

class LoginPage extends Page {

    // Kiểm tra UI của màn hình
    get phoneInput() {
        return $('(//android.widget.EditText[@password="false"])[1]');
    }

    get passwordInput() {
        return $('//android.widget.EditText[@password="true"]');
    }

    get loginButton() {
        return $('//*[@text="ĐĂNG NHẬP"]');
    }

    async enterPhone(phone: string) {
        await this.phoneInput.setValue(phone);
    }

    async enterPassword(password: string) {
        await this.passwordInput.setValue(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(phone: string, password: string) {
        await this.enterPhone(phone);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}

export default new LoginPage();