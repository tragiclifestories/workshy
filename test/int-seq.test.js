import intSeq from '../dist/int-seq.js';

describe('intlist', function () {
    it('generates a sequence of whole numbers', function () {
        let [a, b, c] = intSeq();
        expect([a, b, c]).to.eql([0,1,2]);
    });

    it('accepts optional start param', function () {
        let [a, b, c] = intSeq(1);
        expect([a, b, c]).to.eql([1,2,3]); 
    });

    it('accepts optional exclusive end param', function () {
        let [a, b, c] = intSeq(1, 3);
        expect([a, b, c]).to.eql([1, 2, undefined]);
    });
});