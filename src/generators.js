export default {
    chunk: function* (n, iterable) {
        if (!n || n < 1) n = 1;
        let currentChunk = [];
        for (let val of iterable) {
            if (currentChunk.length < n) currentChunk.push(val);
            else {
                yield currentChunk;
                currentChunk = [];
            }
        }
        yield currentChunk;
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
        for (let val of iterable) {
            if (n <= x++) yield val; 
        }
    },

    map: function* (fn, iterable) {
        for (let val of iterable) yield fn(val);
    },

    filter: function* (fn, iterable) {
        for (let val of iterable) {
            if (fn(val)) yield val; 
        }
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
        for (let val of iterable) {
            if (isOpen) (isOpen = fn(val)) && (yield val);
            else break;
        }
    }
};