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

    compact() {
        return this.filter((x) => x);
    }

    drop(n) {
        return new LazySeq(generators.drop, [n], this);
    }

    dropUntil(fn) {
        let inverted = (x) => !(fn(x));
        return this.dropWhile(inverted);   
    }

    dropWhile(fn) {
        return new LazySeq(generators.dropWhile, [fn], this);
    }
    
    fill(val, start, end) {
        return new LazySeq(generators.fill, [val, start, end], this);
    }

    filter(fn) {
        return new LazySeq(generators.filter, [fn], this);
    }
    
    map(fn) {
        return new LazySeq(generators.map, [fn], this);
    }

    reduce(fn, acc) {
        let i = 0;
        for (let val of this) 
            if (!i++ && typeof acc === 'undefined') acc = val;
            else acc = fn(acc, val);

        return acc;
    }

    take(n) {
        return new LazySeq(generators.take, [n], this);
    }

    takeUntil(fn) {
        let inverted = (x) => !(fn(x));
        return this.takeWhile(inverted);
    }

    takeWhile(fn) {
        return new LazySeq(generators.takeWhile, [fn], this);
    }

    toArray() {
        return this.reduce((acc, item) => acc.concat([item]), []);
    }
}

export default LazySeq;