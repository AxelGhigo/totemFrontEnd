import { Generic } from "./generic";

export class Numerator extends Generic {

    public color: string = 'white'

    constructor(color: string = 'white') {
        super('standard');
        this.color = color
    }
}

export class Stato extends Generic {
    public color: string
    constructor(color: string = 'yellow') {
        super('blink');
        this.color = color
    }
}

export class Type extends Generic {
    public png: string
    constructor(png: string = '') {
        super('type');
        this.png = png
    }
}

export class Priority extends Generic {
    public color: string = 'white'

    constructor(color: string = 'white') {
        super();
        this.color = color
    }
}

export class Room extends Generic {
    public room?: string

    constructor(room?: string) {
        super();
        this.room = room
    }
}

export class Data extends Generic {
    public room?: string

    constructor(room?: string) {
        super();
        this.room = room
    }
}

