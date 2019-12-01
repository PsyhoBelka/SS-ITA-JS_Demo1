export function polindrom(input) {
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

function getRegexP1(i, regP1) {
    return Array(i).fill(regP1);
}

function getRegexP2(k) {
    return Array(k-1).fill(0).map((a,b)=>{
        return `\\${b+1}`}).reverse();
}

// let a = '13493234567765431';
//(\w)(\w)\1
//(\w)(?:(?R)|\w?)\1