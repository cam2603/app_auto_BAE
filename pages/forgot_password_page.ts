import Page from "./page.js";
import { $ } from '@wdio/globals';


class ForgotPasswordPage extends Page  {
    get phoneNumber() {
        return $('//*[@text="Số điện thoại"]');
    }
    get confirmButton() {
        return $('//*[@text = "Xác nhận"]');
    }

}