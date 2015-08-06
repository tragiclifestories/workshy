import Sequence from '../dist/sequence';

function force (seq) {
    let result = [];
    for (let x of seq) result.push(x);
    return result;
}

function zeroSeq () {
    return new Sequence(function* () {
        while (true) yield 0; //eslint-disable-line no-constant-condition
    })
}

describe('class Sequence', function () {
    describe('.take', function () {
        var sequence;
        beforeEach(function () {
            sequence = zeroSeq();
        });

        it('takes nothing', function () {
            expect(force(sequence.take(0))).to.eql([]);
        });

        it('takes the first n items', function () {
            let result = sequence.take(5);
            expect(force(result)).to.eql([0,0,0,0,0]);
        });

        it('takes only while underlying seq yields values', function () {
            sequence = new Sequence(function* () {
                yield 0;
            });

            let result = sequence.take(5);
            expect(force(result)).to.eql([0]);
        });
    });

    describe('.toArray', function () {
        it('force evaluates the sequence to an array', function () {
            let sequence = zeroSeq().take(5);
            expect(sequence.toArray()).to.eql([0,0,0,0,0]);
        });
    });

    describe('lazy application', function () {
        it('one sequence cannot be exhausted by a sibling', function () {
            let base = new Sequence(function* () {
                yield 0;
            });
            let seq1 = base.take(1); 
            let seq2 = base.take(1);

            expect(seq1.toArray()).to.eql(seq2.toArray()); 
        });
        
        it('can be deeply nested', function () {
            let sequence = zeroSeq().take(5).take(3);
            expect(sequence.toArray()).to.eql([0,0,0]);
        });
    });
});