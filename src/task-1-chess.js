import {help, Validator} from './Validator.js';

export function chessBoard(width, height, sym) {
    const validator = new Validator();

    if (!validator.isNumAndPositive(height)) {
        return help(`${height} is not a number or not positive!`)
    }
    if (!validator.isNumAndPositive(width)) {
        return help(`${width} is not a number or not positive!`)
    }
    if (!validator.isSingleCharacter(sym)) {
        return help(`'${sym}' is not a string or more then 1 symbol!`);
    }

    return Array(height)
        .fill(0)
        .map(() => Array(width).fill(sym))
        .map((x, i) => {
            return i % 2 !== 0 ? ' ' + x.join(' ') + '\n' : x.join(' ') + ' \n'
        })
        .toString()
        .replace(/,/g, '')
        .trim();
}