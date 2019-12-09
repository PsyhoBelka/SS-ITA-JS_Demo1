import {help, Validator} from "./Validator.js";

export function triangles(triagArr) {
    const validator = new Validator();
    if (arguments.length === 0 || triagArr.length===0) {
        return help('no data!');
    }
    for (let i = 0; i < triagArr.length; i++) {
        if (!validator.isValidTriangle(triagArr[i])) {
            return help(`Triangle ${triagArr[i].name.toUpperCase()} is invalid!`)
        }
    }
    return triagArr
        .map(x => new Triangle(x))
        .sort((a, b) => {
            return a.square <= b.square ? 1 : -1;
        });
}

class Triangle {
    constructor(x) {
        this.name = x.name.toUpperCase();
        this[this.name[0].toLowerCase()] = x[x.name[0]];
        this[this.name[1].toLowerCase()] = x[x.name[1]];
        this[this.name[2].toLowerCase()] = x[x.name[2]];
        this['square'] = +this.square().toFixed(2);
    }

    square() {
        const a = this.name[0].toLowerCase();
        const b = this.name[1].toLowerCase();
        const c = this.name[2].toLowerCase();
        const p = (this[a] + this[b] + this[c]) / 2;
        return Math.sqrt(Math.abs(p * (p - this[a]) * (p - this[b]) * (p - this[c])));
    }
}