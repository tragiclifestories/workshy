import LazySeq from '../dist/lazy-seq';

function force (seq) {
    let result = [];
    for (let x of seq) result.push(x);
    return result;
}

function zeroSeq () {
    return new LazySeq(function* () {
        while (true) yield 0; //eslint-disable-line no-constant-condition
    })
}

describe('class LazySeq', function () {
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
            sequence = new LazySeq(function* () {
                yield 0;
            });

            let result = sequence.take(5);
            expect(force(result)).to.eql([0]);
        });
    });


    describe('.map', function () {
        it('lazily maps over a sequence', function () {
            let mapSeq = (new LazySeq(function* () {
                yield 1;
                yield 2;
                yield 3;
            })).map((x) => x * x);

            expect(mapSeq.toArray()).to.eql([1,4,9]);     
        });
    });

    describe('.filter', function () {
        it('should filter according to predicate function', function () {
            let filterSeq = (new LazySeq(function* () {
                yield 1;
                yield 2;
                yield 3;
            })).filter((x) => x % 2);
            expect(filterSeq.toArray()).to.eql([1,3]);
        });
    });

    describe('reductions', function () {
        describe('.reduce', function () {
            it('reduces from first element', function () {
                let seq = zeroSeq().take(5);
                expect(seq.reduce((acc, next) => "" + acc + next)).to.equal('00000');
            });

            it('reduces from optional initial value', function () {
               let seq = zeroSeq().take(5);
               expect(seq.reduce((acc, next) => "" + acc + next, 'foo')).to.equal('foo00000'); 
            });
        });

        describe('.toArray', function () {
            it('force evaluates the sequence to an array', function () {
                let sequence = zeroSeq().take(5);
                expect(sequence.toArray()).to.eql([0,0,0,0,0]);
            });
        });
    });

    describe('lazy application', function () {
        it('cannot be exhausted by a sibling', function () {
            let base = new LazySeq(function* () {
                yield 0;
            });
            let seq1 = base.take(1); 
            let seq2 = base.take(1);

            expect(seq1.toArray()).to.eql(seq2.toArray()); 
        });
    });

    describe('composition', function () {
        it('can be deeply nested', function () {
            let sequence = zeroSeq().take(5).take(3);
            expect(sequence.toArray()).to.eql([0,0,0]);
        });

        it('composes sequence methods transitively', function () {
            let seq1 = zeroSeq().take(5).map((x) => x + 1);
            let seq2 = zeroSeq().map((x) => x + 1).take(5);
            expect(seq1.toArray()).to.eql([1,1,1,1,1]);
            expect(seq1.toArray()).to.eql(seq2.toArray());
        });
    });
});