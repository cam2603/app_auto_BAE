import { expect } from '@wdio/globals';
import LoginPage from '../../../pages/login.page.js';

describe('Login UI', () => {

    it('Kiểm tra màn hình Login', async () => {

        await expect(LoginPage.phoneInput).toBeDisplayed();

        await expect(LoginPage.passwordInput).toBeDisplayed();

        await expect(LoginPage.carNum).toBeDisplayed();

        await expect(LoginPage.forgotPassword).toBeDisplayed();

        await expect(LoginPage.autoLogin).toBeDisplayed();

        await expect(LoginPage.loginButton).toBeDisplayed();

    });


});

describe('auto login', () => {
    it('Checkbox Tự động đăng nhập được chọn', async () => {
                await LoginPage.toggleAutoLogin();

       
    });


 });



describe('Xử lý trường hơp không cho phép đăng nhập', () => {

    it('Bỏ trống thông tin số tài khoản', async () => {
        await LoginPage.enterPhone("");
        await LoginPage.clickLogin();
        await expect(LoginPage.toastMessage("Vui lòng nhập thông tin tài khoản vào ô trống")).toBeDisplayed;

    });
    it('Bỏ trống pass', async () => {
        await LoginPage.enterPhone("0367671234");
        await LoginPage.enterPassword("");
        await LoginPage.clickLogin();
        await expect(LoginPage.toastMessage("Vui lòng nhập mật khẩu vào ô trống")).toBeDisplayed;
    });

    it('Bỏ trống biển số xe', async () => {
        await LoginPage.enterPhone('0367671234');

        await LoginPage.enterPassword('123456');

        await expect(LoginPage.passwordInput).toHaveAttribute(
            'password',
            'true'
        );
        await LoginPage.enterCarNum("");
        await LoginPage.clickLogin();
        await expect(LoginPage.toastMessage("Vui lòng nhập thông tin tài khoản vào ô trống")).toBeDisplayed;
    });

});