import takeGen from './take';

class Sequence {
    constructor(gen, args, parent) {
        this._generator = gen;
        this._args = args;
        if (parent) this._args.push(parent);
    }

    [Symbol.iterator]() {
        return this._generator.apply(this, this._args);
    }

    take(n) {
        return new Sequence(takeGen, [n], this);
    }

    map(fn) {
        let mapGen = function* (fn, iterable) {
            for (let val of iterable) yield fn(val);
        };
        return new Sequence(mapGen, [fn], this);
    }

    filter(fn) {
        let filterGen = function* (fn, iterable) {
            for (let val of iterable) {
                if (fn(val)) yield val; 
            }
        };

        return new Sequence(filterGen, [fn], this);
    }

    toArray() {
        let result = [];
        for (let val of this)  {
                result.push(val);
            }
        return result;
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

export default Sequence;