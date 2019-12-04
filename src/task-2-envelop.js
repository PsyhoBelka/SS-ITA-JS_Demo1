export function envelop(a, b, c, d) {
    if (fits(a, b, c, d) !== 0) {
        return 1; //ab in cd
    }
    if (fits(c, d, a, b) !== 0) {
        return 2; //cd in ab
    }
    return 0; //nothing
}

function fits(a, b, c, d) {
    [a, b] = [Math.max(a, b), Math.min(a, b)]; //a big, b small
    [c, d] = [Math.max(c, d), Math.min(c, d)]; //c big, d small

    for (let i = 0; i <= 90; i++) {
        let tmpA = c * cos(i) + d * cos(90 - i);
        let tmpB = c * cos(90 - i) + d * cos(i);
        if (tmpA < a && tmpB < b) {
            return 1;
        }
    }

    return 0;
}

const cos = (x) => {
    return Math.cos(x)
};


// console.log(fits(2, 2, 3, 4));
// console.log(envelop(4, 2, 3, 4));