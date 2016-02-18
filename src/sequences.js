import LazySeq from './lazy-seq';
import * as g from './generators';

export function count(start, end) {
    let seq = new LazySeq(g.iterate, [(x) => x + 1, start || 0]);
    if (typeof end === 'undefined') return seq;
    return seq.takeWhile((x) => x < end);
}

export function repeatedly(f, n) {
    return new LazySeq(g.repeatedly, [f, n]);
}

export function iterate(f, initial) {
    let seq = new LazySeq(g.iterate, [f, initial]);

    return seq;
}