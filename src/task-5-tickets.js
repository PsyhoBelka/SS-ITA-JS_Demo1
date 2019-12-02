import {Validator, help} from "./Validator.js";


function tickets({min, max}) {
    const validator = new Validator();
    if (!validator.isInteger(min) || !validator.isInteger(max) || validator.isString(min) || validator.isString(max)) {
        return help('Tickets must be integer!')
    }
    if (min >= max || min < 0 && max < 0) {
        return help('Invalid ticket range!');
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

    result.simpleCheck > result.hardCheck ? result.winner = 'simple win!' : result.winner = 'hard win!';

    return result;
}

function makeFullNumber(number) {
    let arr = [...number.toString()];
    if (arr.length < 6) {
        [Array(6 - [...number.toString()].length).fill('0'), [...number.toString()]].flat()
    }

    return arr;
}

function checkSimple(number) {
    let arr = makeFullNumber(number);
    return arr[0] + arr[1] + arr[2] === arr[3] + arr[4] + arr[5];
}

function checkHard(number) {
    let arr = makeFullNumber(number);
    let odd = 0;
    let even = 0;
    arr.forEach((x) => {
        Number(x) % 2 === 0 ? odd += +x : even += +x;
    });
    return odd === even;
}