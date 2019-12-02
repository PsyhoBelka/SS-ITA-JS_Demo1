export class Validator {
    isNumber(num) {
        return !isNaN(parseFloat(num)) && !this.isString(num);
    };

    isString(str) {
        return typeof str === 'string';
    };

    isNumInPositiveRange(num) {
        return num > 0;
    };

    isValidTriangle({a, b, c}) {
        if (!this.isNumber(a) || !this.isNumber(b) || !this.isNumber(c)) {
            return false;
        }
        return (a + b > c) || (c + b > a) || (a + c > b);
    };

    isInteger(num){
        return Number.isInteger(num);
    }
}

export function help(reason) {
    return {
        status: 'failed',
        reason: reason,
    };
}