import generators from './generators';

class LazySeq {
    constructor(gen, args, parent) {
        this._generator = gen;
        this._args = args;
        if (parent) this._args.push(parent);
    }

    [Symbol.iterator]() {
        return this._generator.apply(this, this._args);
    }

    chunk(n) {
        return new LazySeq(generators.chunk, [n], this);
    }

    fill(val, start, end) {
        return new LazySeq(generators.fill, [val, start, end], this);
    }

    compact() {
        return this.filter((x) => x);
    }

    take(n) {
        return new LazySeq(generators.take, [n], this);
    }

    drop(n) {
        return new LazySeq(generators.drop, [n], this);
    }

    map(fn) {
        return new LazySeq(generators.map, [fn], this);
    }

    filter(fn) {
        return new LazySeq(generators.filter, [fn], this);
    }

    dropWhile(fn) {
        return new LazySeq(generators.dropWhile, [fn], this);
    }

    takeWhile(fn) {
        return new LazySeq(generators.takeWhile, [fn], this);
    }

    takeUntil(fn) {
        let inverted = (x) => !(fn(x));
        return this.takeWhile(inverted);
    }

    dropUntil(fn) {
        let inverted = (x) => !(fn(x));
        return this.dropWhile(inverted);   
    }

    toArray() {
        return this.reduce((acc, item) => acc.concat([item]), []);
    }

    reduce(fn, acc) {
        let i = 0;
        for (let val of this) {
            if (!i++ && typeof acc === 'undefined') acc = val;
            else acc = fn(acc, val);
        }

        return acc;
    }
}

export default LazySeq;