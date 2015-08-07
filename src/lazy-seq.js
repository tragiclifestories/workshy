import takeGen from './take';

class LazySeq {
    constructor(gen, args, parent) {
        this._generator = gen;
        this._args = args;
        if (parent) this._args.push(parent);
    }

    [Symbol.iterator]() {
        return this._generator.apply(this, this._args);
    }

    take(n) {
        return new LazySeq(takeGen, [n], this);
    }

    drop(n) {
        let dropGen = function *(n, iterable) {
            let x = 0;
            for (let val of iterable) {
                if (n <= x++) yield val; 
            }
        }
        return new LazySeq(dropGen, [n], this);
    }

    map(fn) {
        let mapGen = function* (fn, iterable) {
            for (let val of iterable) yield fn(val);
        };
        return new LazySeq(mapGen, [fn], this);
    }

    filter(fn) {
        let filterGen = function* (fn, iterable) {
            for (let val of iterable) {
                if (fn(val)) yield val; 
            }
        };

        return new LazySeq(filterGen, [fn], this);
    }

    dropWhile(fn) {
        let dropWhileGen = function* (fn, iterable) {
            let isBlocked = true;
            for (let val of iterable) {
                if (isBlocked) isBlocked = fn(val);
                if (!isBlocked) yield val;
            }
        }
        return new LazySeq(dropWhileGen, [fn], this);
    }

    takeWhile(fn) {
        let takeWhileGen = function* (fn, iterable) {
            let isOpen = true;
            for (let val of iterable) {
                if (isOpen) (isOpen = fn(val)) && (yield val);
                else break;
            }
        }

        return new LazySeq(takeWhileGen, [fn], this);
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