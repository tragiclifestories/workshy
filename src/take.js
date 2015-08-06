export default function *(n, gen) {
    let x = 0;
    if (n === 0) return;
    for (let val of gen) {
        yield val;
        if (n <= ++x) break;
    }
}