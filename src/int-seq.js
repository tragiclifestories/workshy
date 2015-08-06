import Sequence from './sequence';

function intSeq(n) { 
    return new Sequence(intGen, [n]);
    
}

function *intGen(n) {
    let x = n || 0;
    while (true) yield x++; //eslint-disable-line no-constant-condition
}

export default intSeq;