import {help, Validator} from "./Validator.js";

export function sequence(start, count) {
    const validator = new Validator();
    if (!validator.isNumAndPositive(start)||!validator.isNumAndPositive(count)) {
        return help('Input must be a positive number!');
    }
    if (start === 0 || count === 0) {
        return help('Input must be a bigger than 0!')
    }
    let low = Math.floor(Math.sqrt(start)) + 1;
    return Array(count).fill(0).map((x, i) => {
        return low + i;
    }).join(', ');
}