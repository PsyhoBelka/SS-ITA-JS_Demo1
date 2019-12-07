import {help, Validator} from "./Validator.js";

export function fibo(a) {
    const validator = new Validator();
    let fields = Object.keys(a);
    let i;
    if (fields.includes('min') && fields.includes('max') && fields.includes('length')) {
        return help('bad input!');
    }
    if (fields.includes('min') && fields.includes('max')) {
        let min = a.min;
        let max = a.max;
        if (!validator.isNumAndPositive(min) || !validator.isNumAndPositive(max)) {
            return help('min and max should be a positive number!');
        }
        if (!validator.isValidFibonacciRange(min, max)) {
            return help('min should be less then max!');
        }
        let fibArr = [];
        i = 0;
        while (bine(i) < min) {
            i++;
        }
        while (bine(i) <= max) {
            fibArr.push(bine(i));
            i++;
        }
        return fibArr;
    }
    if (fields.includes('length')) {
        let length = a.length;
        if (!validator.isNumAndPositive(length)) {
            return help('length should be a positive number!')
        }
        let fibArr = [];
        i = 0;
        while (bine(i).toString().length < length) {
            i++;
        }
        while (bine(i).toString().length === length) {
            fibArr.push(bine(i));
            i++
        }
        return fibArr;
    }

    return help('bad input!');
}

function bine(n) {
    const index = Math.pow(5, 0.5);
    const left = (1 + index) / 2;
    const right = (1 - index) / 2;

    return Math.round((Math.pow(left, n) - Math.pow(right, n)) / index);
}