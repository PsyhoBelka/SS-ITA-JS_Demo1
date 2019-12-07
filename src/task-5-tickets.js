import {help, Validator} from "./Validator.js";


export function tickets({min, max}) {
    const validator = new Validator();
    if (!validator.isNumAndPositive(min) || !validator.isNumAndPositive(max) || validator.isString(min) || validator.isString(max)) {
        return help('Tickets must be positive integer!')
    }
    if (min >= max) {
        return help('Invalid ticket range!');
    }
    if (!validator.isValidTicketMaxNumber(max)) {
        return help('Invalid max, should be less then 1 000 000');
    }

    let result = {simpleCheck: 0, hardCheck: 0, winner: 'draw'};

    for (let i = min; i <= max; i++) {
        if (checkSimple(i)) {
            result.simpleCheck += 1;
        }
        if (checkHard(i)) {
            result.hardCheck += 1;
        }
    }

    result.simpleCheck > result.hardCheck ? result.winner = 'simple win!' : 0;
    result.simpleCheck < result.hardCheck ? result.winner = 'hard win!' : 0;

    return result;
}

function makeFullNumber(number) {
    let arr = [...number.toString()];
    if (arr.length < 6) {
        return [Array(6 - [...number.toString()].length).fill('0'), [...number.toString()]].flat()
    }

    return arr;
}

function checkSimple(number) {
    let arr = makeFullNumber(number);
    return +arr[0] + +arr[1] + +arr[2] === +arr[3] + +arr[4] + +arr[5];
}

function checkHard(number) {
    let arr = makeFullNumber(number);
    return +arr[1] + +arr[3] + +arr[5] === +arr[0] + +arr[2] + +arr[4];
}