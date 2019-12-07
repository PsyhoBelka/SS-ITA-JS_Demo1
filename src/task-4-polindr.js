import {help, Validator} from "../src/Validator.js";

export function palindrome(input) {
    const validator = new Validator();
    if (!validator.isNumAndPositive(input)) {
        return help('Input must be a number and positive!')
    }

    const reverseInput = Array.from(input.toString()).reverse().join('');

    let res = [];
    [...calcPalindrome(input).flat(), ...calcPalindrome(reverseInput).flat()].forEach((x) => {
        !res.includes(x) ? res.push(x) : 0
    });
    return res;
}

function calcPalindrome(input) {
    input = input.toString();
    let regP1 = '(\\w)';
    let i = 1;
    let k = 2;
    let palindromsArr = [];
    while (i < input.length) {
        let match = input
            .toString()
            .match(new RegExp([...getRegexP1(i, regP1), ...getRegexP2(k, [])].join(''), 'g'));
        k > i ? i++ : k++;
        if (match === null) {
            continue;
        }
        palindromsArr.push(match)
    }
    return palindromsArr.length > 0 ? palindromsArr.flat() : 0;
}

function getRegexP1(size, regexTemplate) {
    return Array(size).fill(regexTemplate);
}

function getRegexP2(count) {
    return Array(count - 1).fill(0).map((x, i) => {
        return `\\${i + 1}`
    }).reverse();
}