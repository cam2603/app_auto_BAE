import { browser } from '@wdio/globals';

export default class Page {

    async open(path: string) {
        await browser.url(path);
    }

    async back() {
        await browser.back();
    }

    async refresh() {
        await browser.refresh();
    }

}