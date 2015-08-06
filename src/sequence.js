import takeGen from './take';

class Sequence {
    constructor(gen) {
        this._generator = gen;
    }
    [Symbol.iterator]() {
        return this._generator;
    }
    take(n) {
        let newGen = takeGen(n, this._generator);

        return new Sequence(newGen);
    }
}

export default Sequence;