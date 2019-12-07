export class Validator {
    isNumber(num) {
        return !isNaN(parseFloat(num)) && !this.isString(num);
    };

    isString(str) {
        return typeof str === 'string';
    };

    isNumAndPositive(num) {
        return this.isNumber(num) && num >= 0;
    };

    isValidTriangle({a, b, c}) {
        if (a === 0 || b === 0 || c === 0 || !this.isNumber(a) || !this.isNumber(b) || !this.isNumber(c)) {
            return false;
        }
        return (a + b > c) || (c + b > a) || (a + c > b);
    };

    isSingleCharacter(sym) {
        return this.isString(sym) && sym.length === 1;
    }

    isValidEnvelop(a, b) {
        if (this.isNumAndPositive(a) && this.isNumAndPositive(b)) {
            return Math.abs(a - b) >= 0;
        }
    }

    isValidTicketMaxNumber(num) {
        return num > 0 && num < 1000000;
    }

    isValidFibonacciRange(start, end) {
        return this.isNumAndPositive(start) && this.isNumAndPositive(end) && start < end;
    }
}

export function help(reason) {
    return {
        status: 'failed',
        reason: reason,
    };
}