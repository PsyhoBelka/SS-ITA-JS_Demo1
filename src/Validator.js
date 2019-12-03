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

    isInteger(num) {
        return Number.isInteger(num);
    }

    isSingleCharacter(sym) {
        return this.isString(sym) && sym.length === 1;
    }
}

export function help(reason) {
    return {
        status: 'failed',
        reason: reason,
    };
}