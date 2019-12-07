import {Validator, help} from "./Validator.js";

export function envelop(a, b, c, d) {
    const validator = new Validator();

    if (!validator.isValidEnvelop(a, b,)) {
        return help(`envelop ${[a, b]} can't be envelop!`);
    }
    if (!validator.isValidEnvelop(c, d,)) {
        return help(`envelop ${[c, d]} can't be envelop!`);
    }

    if (a * b < c * d) {
        return 1;//ab in cd
    }
    if (c * d < a * b) {
        return 2;//cd in ab
    }

    if (fits(a, b, c, d) !== 0) {
        return 1; //ab in cd
    }
    if (fits(c, d, a, b) !== 0) {
        return 2; //cd in ab
    }
    return 0; //nothing
}

const pi = Math.PI;
const cos = (x) => {
    return Math.cos(x / 180 * pi);
};

function fits(a, b, c, d) {

    [a, b] = [Math.max(a, b), Math.min(a, b)]; //a big, b small
    [c, d] = [Math.max(c, d), Math.min(c, d)]; //c big, d small

    for (let i = 0; i <= 90; i++) {
        let tmpA = c * cos(i) + d * cos(90 - i);
        let tmpB = c * cos(90 - i) + d * cos(i);
        console.log(`${tmpA}, ${tmpB}, ${i}`);
        if (tmpA < a && tmpB < b) {
            return 1;
        }
    }

    return 0;
}