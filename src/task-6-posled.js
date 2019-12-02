function posled(start, count) {
    let low = Math.floor(Math.sqrt(start));
    return Array(count).fill(0).map((x, i) => {
        return low + i;
    }).join(', ');
}