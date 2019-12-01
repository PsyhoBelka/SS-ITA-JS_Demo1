import {Validator, help} from "./Validator.js";

export function printTriag(triagArr) {
    const validator = new Validator();
    if (triagArr.length === 0) {
        return -1;
    }
    for (let i = 0; i < triagArr.length; i++) {
        if (!validator.isValidTriangle(triagArr[i])) {
            return help(`Triangle ${triagArr[i].name} is invalid. Stoped!`)
        }
    }
    return triagArr
        .map(x => new Triangle(x))
        .sort((a, b) => {
            return a.square <= b.square ? 1 : -1;
        });
}

class Triangle {
    constructor({name, a, b, c}) {
        this.name = name;
        this.a = a;
        this.b = b;
        this.c = c;
        this.square = +this.square().toFixed(2);
    }

    square() {
        const p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(Math.abs(p * (p - this.a) * (p - this.b) * (p - this.c)));
    }
}