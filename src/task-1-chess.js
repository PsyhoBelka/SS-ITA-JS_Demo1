import {help, Validator} from './Validator.js';

export function chessBoard(width, height, sym) {
    const validator = new Validator();
    console.log('123');

    if (!validator.isNumber(height)) {
        return help(`${height} is not a number!`)
    }
    if (!validator.isNumber(width)) {
        return help(`${width} is not a number!`)
    }
    if (!validator.isSingleCharacter(sym)) {
        return help(`'${sym}' is not a string or more then 1 symbol!`);
    }
    if (!validator.isNumInPositiveRange(height)) {
        return help(`${height} is not positive!`);
    }
    if (!validator.isNumInPositiveRange(width)) {
        return help(`${width} is not positive!`);
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