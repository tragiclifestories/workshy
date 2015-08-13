import LazySeq from '../dist/lazy-seq';
import intSeq from '../dist/int-seq';

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

    describe('.drop', function () {
        it('ignores the first n values in a seq', function () {
            let dropSeq = intSeq().drop(5),
                [a, b, c] = dropSeq;
            expect([a, b, c]).to.eql([5,6,7]);
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

    describe('.dropWhile', function () {
        it('ignores values until predicate is false', function () {
            let dwSeq = intSeq(1).dropWhile((x) => x % 12 !== 0),
                [a, b, c] = dwSeq;
            expect([a, b, c]).to.eql([12, 13, 14]);     
        });
    });

    describe('.takeWhile', function () {
        it('takes values until predicate is false', function () {
            let twSeq = intSeq(4).takeWhile((x) => (x * x) % 6 !== 0),
                [a, b, c] = twSeq;
            expect([a, b, c]).to.eql([4, 5, undefined]);
        });
    });

    describe('.takeUntil', function () {
        it('takes values until predicate is true', function () {
            let tuSeq = intSeq(4).takeUntil((x) => (x * x) % 6 === 0),
                [a, b, c] = tuSeq;
            expect([a, b, c]).to.eql([4, 5, undefined]);
        });
    });

    describe('.dropUntil', function () {
        it('ignores values until predicate is true', function () {
            let duSeq = intSeq(1).dropUntil((x) => x % 12 === 0),
                [a, b, c] = duSeq;
            expect([a, b, c]).to.eql([12, 13, 14]);
        });
    });

    describe('.chunk', function () {
        it('yields n-length arrays from parent', function () {
            let chunkSeq = intSeq(1).chunk(5),
                [a] = chunkSeq;

            expect(a).to.eql([1,2,3,4,5]);
        });

        it('yields remainder if n > remaining values', function () {
            let chunkSeq = intSeq(1).take(3).chunk(5),
                [a] = chunkSeq;

            expect(a).to.eql([1,2,3]);
        });

        it('defaults n to 1', function () {
            let chunkSeq = intSeq(1).chunk(),
                [a] = chunkSeq;            
            expect(a).to.eql([1]);
        });
    });

    describe('.compact', function () {
        it('yields only truthy values', function () {
            let compactSeq = intSeq().compact(),
                [a] = compactSeq;

            expect(a).to.equal(1);
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