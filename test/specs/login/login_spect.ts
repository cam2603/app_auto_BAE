import { expect } from '@wdio/globals';
import LoginPage from '../../../pages/login.page.js';

describe('Login UI', () => {

    it('Kiểm tra màn hình Login', async () => {

        // await expect(LoginPage.phoneInput).toBeDisplayed();

        await expect(LoginPage.passwordInput).toBeDisplayed();

        await expect(LoginPage.loginButton).toBeDisplayed();

    });

});