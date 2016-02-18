# workshy
Idle collections for indolent JS developers.

```js
import { count } from 'workshy/dist/sequences';
let [x, y, z] = count().filter((x) => x % 2).take(5);
console.log(x, y, z); // 1, 3, 5
```

## Acknowledgements

LazySeq methods basically pinched from lodash, several of the sequences plagiarised from Clojure core.

## Todos

At present, this is pretty much a gist with a test suite. Still trying to figure out how best to package it up. At any rate, the `dist` folder contains ES5 files transpiled by Babel in commonjs format, and the `src` folder contains ES6 modules. Using the ES5 modules will require the Babel polyfill for generators. (We are on Babel 5.) The ES6 modules can be transpiled and polyfilled (or not) to your taste, using whatever.

## API

### Sequences

#### `sequences.count([start, end])`

A `LazySeq` of successive integers, starting from `start` or zero, counting up to `end` (excluding `end` itself) or infinity.

```js
import { count } from 'workshy/dist/sequences';
let [a, b, c] = count(); // a == 0, b == 1, c == 2
let [a, b, c] = count(1); // a == 1, b == 2, c == 3
let [a, b, c] = count(1, 3); // a == 1, b == 2, c == undefined
```

#### `sequences.repeatedly(fn, [n])`

Generate a sequence of values from repeatedly calling fn, infinitely or `n` times.

```js
import { repeatedly } from 'workshy/dist/sequences';
let [a, b, c] = repeatedly(() => 1); // a == 1, b == 1, c == 1
let [a, b, c] = count(() => 1, 2); // a == 1, b == 2, c == undefined
```

#### `sequences.iterate(fn, initialValue)`

On first call, yield the result of `fn(initialValue)`. On second call, yield the result of `fn(fn(initialValue))` - and so on.

```js
import { repeatedly } from 'workshy/dist/sequences';
let [a, b, c] = repeatedly(() => 1); // a == 1, b == 1, c == 1
let [a, b, c] = count(() => 1, 2); // a == 1, b == 2, c == undefined
```

### class LazySeq

#### `new LazySeq(generator, args, [parent])`

A LazySeq is passed a generator, and an array of arguments which will be applied to the generator when the sequence is consumed. The parent is a pointer to another sequence, for chaining sequences. It is used a lot internally, but not terribly useful for callers, so far as I can tell (unless you're monkeypatching the thing with new methods, in which case, send me your PRs!)

```js
let l = new LazySeq(function* (name) {
    while (true)
        yield `Hello ${name}`;
}, ['Steve']);

let [a, b, c] = l;

console.log(a, b, c); // Hello Steve Hello Steve Hello Steve
```

#### `chunk(size)`

Returns a new lazy sequence of arrays of size `size`. If parent sequence length modulo `size` != 0, the last chunk will consist of remaining values.

```js
let [a] = count().chunk(5); // a == [0, 1, 2, 3, 4]
let [a] = count().take(3).chunk(5); // a == [0, 1, 2]
```

#### `compact()`

Returns a new sequence, filtering all falsy values from the parent.

```js
let l = new LazySeq(function* () { // Alternates between true and false
    let current = true;
    while (true)
        yield current = !current;
}, []);

let [a, b, c] = l.compact(); // a == true, b == true, c== true
```

#### `drop(number)`

Returns a new sequence, without its first `number` values.

```js
let [a] = count().drop(5); // a == 5
```

#### `dropUntil(predicate)`

Returns a new sequence, omitting all values until one is reached that satisfies the predicate function.

```js
let [a] = count().dropWhile((x) => x > 5); // a == 6
```

#### `dropWhile(predicate)`

Returns a new sequence, omitting all values until one is reached that does not satisfy the predicate function.

```js
let [a] = count().dropWhile((x) => x <= 5); // a == 6
```

#### `fill(value, [start, end])`

Returns a new sequence, repeatedly yielding `value` until the parent sequence is exhausted. If `start` is provided, start fill at that index. If `end` is provided, end fill at that index. 

```js
let [a, b, c] = count().fill(7); // a == 7, b == 7, c == 7
let [a, b, c] = count().fill(7, 1); // a == 0, b == 7, c == 7
let [a, b, c] = count().fill(7, 1, 2); // a == 0, b == 7, c == 2
```

#### `filter(predicate)`

Returns a new sequence, yielding all values of the parent sequence that satisfy the predicate. 

```js
let [a, b, c] = count().filter((x) => x % 2 === 0); // a == 0, b == 2, c = 4
```

#### `map(fn)`

Returns a new sequence of the result of `fn` applied to each value of parent sequence. 

```js
let [a, b, c] = count().map((x) => x * 2); // a == 0, b == 2, c = 4
```

#### `reduce(fn, [initialValue])`

Given `fn` which takes two arguments, an accumulated value and the next value in the sequence, `fn` will be called with the result of the previous call and the next value in the parent sequence, returning a new accumulated value, which will in turn be passed as the first argument ... When the parent sequence is exhausted, the accumulated value is returned.

If `initialValue` is supplied, it will be passed as the first argument to the first call to `fn`. If not, `fn` will be initially called with the first two values in the parent sequence.

**Note: this function consumes the parent sequence. If the parent sequence is infinite, `reduce` will not terminate.**

```js
count().take(5).reduce((x, y) => x + y) == 10;
count().take(5).reduce((x, y) => x + y, 10) == 20;
count().reduce((x, y) => x + y); // make some coffee, this will take a while!
```

####`take(n)`

Returns a new sequence of the first `n` values in the parent.

```js
let [a, b] = count().take(1); //a == 0, b == undefined
```

####`takeUntil(predicate)`

Returns a new sequence, omitting all values produced by the parent *after* the first value which satisfies the predicate.

```js
let [a, b] = count().takeUntil((x) => x > 0); //a == 0, b == undefined
```

####`takeWhile(predicate)`

Returns a new sequence, omitting all values produced by the parent *after* the first value which does not satisfy the predicate.

```js
let [a, b] = count().takeWhile((x) => x === 0); //a == 0, b == undefined
```

####`toArray()`

Reduces parent to a plain Javascript array.

**Note: this function consumes the parent sequence. If the parent sequence is infinite, `toArray` will not terminate.**

```js
count().take(5).toArray(); // [0,1,2,3,4]
count().toArray(); // Time to read up on the halting problem
```