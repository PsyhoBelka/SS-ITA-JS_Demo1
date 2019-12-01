export function polindrom(a) {
    a = a.toString();
    let regP1 = '(\\w)';
    let i = 1;
    let k = 2;
    let b = getRegexP1(i, regP1);
    let d = [];
    getRegexP2(k, d);
    let c = [...b, ...d].join('');
    let pal = [];
    while (i < a.length) {
        b = getRegexP1(i, regP1);
        d = [];
        getRegexP2(k, d);
        c = [...b, ...d].join('');

        let match = a.toString().match(new RegExp(c, 'g'));
        k > i ? i++ : k++;
        if (match === null) {
            continue;
        }
        pal.push(match)
    }

    return pal.length > 0 ? pal.flat() : 0;
}

function getRegexP1(i, regP1) {
    return Array(i).fill(regP1);
}

function getRegexP2(k, d) {
    for (let i = 1; i < k; i++) {
        d.unshift(`\\${i}`)
    }
}

// let a = '13493234567765431';
//(\w)(\w)\1
//(\w)(?:(?R)|\w?)\1