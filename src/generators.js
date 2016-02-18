export default {
    chunk: function* (n, iterable) {
        if (!n || n < 1) n = 1;
        let currentChunk = [];
        for (let val of iterable) 
            if (currentChunk.length < n) currentChunk.push(val);
            else {
                yield currentChunk;
                currentChunk = [];
            }
    
        yield currentChunk;
    },

    repeatedly: function* (f, n) {
        if (!n)
            while (true) yield f(); //eslint-disable-line no-constant-condition
        else {
            let i = 0;
            while (i++ < n) yield f();
        } 
    },

    iterate: function* (f, initial) {
        let acc = initial;
        yield acc;
        while (true) yield acc = f(acc); //eslint-disable-line no-constant-condition
    },

    take: function* (n, iterable) {
        let x = 0;
        if (n === 0) return;
        for (let val of iterable) {
            yield val;
            if (n <= ++x) break;
        }
    },

    drop: function *(n, iterable) {
        let x = 0;
        for (let val of iterable) 
            if (n <= x++) yield val;
    },

    fill: function* (val, start, end, iterable) {
        let index = 0;
        for (let x of iterable) {
            if (fillIsStarted(start, index) && !fillIsComplete(end, index)) yield val;
            else yield x;
            index++;
        } 
    },

    map: function* (fn, iterable) {
        for (let val of iterable) yield fn(val);
    },

    filter: function* (fn, iterable) {
        for (let val of iterable) 
            if (fn(val)) yield val; 
    },

    dropWhile: function* (fn, iterable) {
        let isBlocked = true;
        for (let val of iterable) {
            if (isBlocked) isBlocked = fn(val);
            if (!isBlocked) yield val;
        }
    },

    takeWhile: function* (fn, iterable) {
        let isOpen = true;
        for (let val of iterable) 
            if (isOpen) (isOpen = fn(val)) && (yield val);
            else break;
    }
};

function fillIsStarted(start, index) {
    return start <= index || !start;
}

function fillIsComplete(end, index) {
    if (typeof end === "undefined") return false;
    else return end - 1 < index;
}