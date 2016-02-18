import LazySeq from './lazy-seq';

export function count(start, end) {
    let seq = new LazySeq(intGen, [start]);
    if (typeof end === 'undefined') return seq;
    return seq.takeWhile((x) => x < end);
}

function *intGen(start) {
    let x = start || 0;
    while (true) yield x++; //eslint-disable-line no-constant-condition
}
