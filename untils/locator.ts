import { $ } from '@wdio/globals';

export function findElement(attribute: String, value:String) {
    return $(`//*${attribute}="${value}"`);
}

export function findElementContains(attribute: string, value: string) {
    return $(`//*[contains(@${attribute}, "${value}")]`);
}
