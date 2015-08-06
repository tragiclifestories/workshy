import Sequence from './sequence';

function intSeq() { 
    return new Sequence(intGen());
    
}

function *intGen() {
    let x = 0;
    while (true) yield x++; //eslint-disable-line no-constant-condition
}

export default intSeq;