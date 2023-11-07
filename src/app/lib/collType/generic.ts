import { BaseObj } from "src/app/int/base-obj";

export class Generic implements BaseObj {
    public value: string = '';
    public style: string = '';

    constructor(style: string = '', value: string = '') {
        this.value = value;
        this.style = style;
    }
}
