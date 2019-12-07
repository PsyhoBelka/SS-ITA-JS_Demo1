import {help, Validator} from "./Validator.js";

export function triangles(triagArr) {
    const validator = new Validator();
    if (arguments.length === 0 || triagArr.length===0) {
        return help('no data!');
    }
    for (let i = 0; i < triagArr.length; i++) {
        if (!validator.isValidTriangle(triagArr[i])) {
            return help(`Triangle ${triagArr[i].name} is invalid!`)
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