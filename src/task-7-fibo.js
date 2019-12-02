function bine(n) {
    const index = Math.pow(5, 0.5);
    const left = (1 + index) / 2;
    const right = (1 - index) / 2;

    return Math.round((Math.pow(left, n) - Math.pow(right, n)) / index);
}