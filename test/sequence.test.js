import Sequence from '../dist/sequence';

function force (seq) {
    let result = [];
    for (let x of seq) result.push(x);
    return result;
}

describe('class Sequence', function () {
    describe('.take', function () {
        var sequence;
        beforeEach(function () {
            sequence = new Sequence((function* () {
                while (true) yield 0; //eslint-disable-line no-constant-condition
            })());
        });

        it('takes nothing', function () {
            expect(force(sequence.take(0))).to.eql([]);
        });

        it('takes the first n items', function () {
            let result = sequence.take(5);
            expect(force(result)).to.eql([0,0,0,0,0]);
        });

        it('takes only while underlying seq yields values', function () {
            sequence = new Sequence((function* () {
                yield 0;
            })());

            let result = sequence.take(5);
            expect(force(result)).to.eql([0]);
        });
    });

    describe('.value', function () {
        
    });
});