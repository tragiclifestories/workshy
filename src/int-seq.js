import LazySeq from './lazy-seq';

function intSeq(n) { 
    return new LazySeq(intGen, [n]);
    
}

function *intGen(n) {
    let x = n || 0;
    while (true) yield x++; //eslint-disable-line no-constant-condition
}

export default intSeq;