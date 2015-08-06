export default function *(n, parent) {
    let x = 0;
    if (n === 0) return;
    for (let val of parent) {
        yield val;
        if (n <= ++x) break;
    }
}