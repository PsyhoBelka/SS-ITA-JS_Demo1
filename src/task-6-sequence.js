export function sequence(start, count) {
    let low = Math.floor(Math.sqrt(start)) + 1;
    return Array(count).fill(0).map((x, i) => {
        return low + i;
    }).join(', ');
}