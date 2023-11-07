import { Time } from "../int/time";
import { Generic } from "./collType/generic";
import { Numerator, Priority, Room, Stato, Type } from "./collType/alltypecoll";

export class Common {

    protected typeColl: string[] = ["priorità", "type", "number", "data", "room", "stato"]

    scambia(T: any, v: any, n: any) {
        const x = T[n];
        T[n] = T[v];
        T[v] = x;
        return T
    }

    setTime(D?: number): Time {
        const day = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
        const mouth = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novrembre", "Dicembre"]
        const data = D ? new Date(D) : new Date()
        return {
            minuti: this.addZero(data.getHours()),
            ore: this.addZero(data.getMinutes()),
            date: day[data.getDay()] + " " + data.getDate() + " " + mouth[data.getMonth()] + " " + data.getFullYear()
        }
    }

    addZero(num: number) {
        if (num < 10) return "0" + num
        return num
    }

    insertClassType(type: string) {
        if (type === 'number') return new Numerator()
        else if (type === 'priorità') return new Priority()
        else if (type === 'stato') return new Stato()
        else if (type === 'type') return new Type()
        else if (type === 'room') return new Room()
        else if (type === 'data') return new Room()

        return new Generic()
    }
}
