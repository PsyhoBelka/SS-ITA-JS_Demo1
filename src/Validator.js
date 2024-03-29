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

    isValidTriangle(triangle) {
        const [sideA, sideB, sideC] = [triangle[triangle.name[0]], triangle[triangle.name[1]], triangle[triangle.name[2]]];
        if (
            [triangle.name[1], triangle.name[2]].includes(triangle.name[0]) ||
            [triangle.name[0], triangle.name[2]].includes(triangle.name[1]) ||
            [triangle.name[0], triangle.name[1]].includes(triangle.name[2])
        ) {
            return false;
        }
        if (sideA === 0 || sideB === 0 || sideC === 0 || !this.isNumber(sideA) || !this.isNumber(sideB) || !this.isNumber(sideC)) {
            return false;
        }
        return (sideA + sideB > sideC) || (sideC + sideB > sideA) || (sideA + sideC > sideB);
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