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
    toArray() {
        let result = [];
        for (let val of this) result.push(val);
        return result;
    }
}

export default Sequence;