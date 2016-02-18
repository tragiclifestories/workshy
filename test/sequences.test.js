import * as s from '../dist/sequences.js';

describe('count', function () {
    it('generates a sequence of whole numbers', function () {
        let [a, b, c] = s.count();
        expect([a, b, c]).to.eql([0,1,2]);
    });

    it('accepts optional start param', function () {
        let [a, b, c] = s.count(1);
        expect([a, b, c]).to.eql([1,2,3]); 
    });

    it('accepts optional exclusive end param', function () {
        let [a, b, c] = s.count(1, 3);
        expect([a, b, c]).to.eql([1, 2, undefined]);
    });
});

describe('repeatedly', function () {
    it('repeatedly yields from a function', function () {
        let i = 0;
        let f = () => i++;
        let [a, b, c] = s.repeatedly(f);
        expect([a, b, c]).to.eql([0, 1, 2]);
    });

    it('optionally limits iterations', function () {
       let i = 0;
        let f = () => i++;
        let [a, b, c] = s.repeatedly(f, 2);
        expect([a, b, c]).to.eql([0, 1, undefined]); 
    });
});

describe('iterate', function () {
    it('calls function with previous result', function () {
        let f = (x) => ++x;

        let [a, b, c] = s.iterate(f, 0);
        expect([a, b, c]).to.eql([0, 1, 2]);
    });
});