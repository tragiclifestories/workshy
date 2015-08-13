'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _generators = require('./generators');

var _generators2 = _interopRequireDefault(_generators);

var LazySeq = (function () {
    function LazySeq(gen, args, parent) {
        _classCallCheck(this, LazySeq);

        this._generator = gen;
        this._args = args;
        if (parent) this._args.push(parent);
    }

    _createClass(LazySeq, [{
        key: Symbol.iterator,
        value: function value() {
            return this._generator.apply(this, this._args);
        }
    }, {
        key: 'chunk',
        value: function chunk(n) {
            return new LazySeq(_generators2['default'].chunk, [n], this);
        }
    }, {
        key: 'compact',
        value: function compact() {
            return this.filter(function (x) {
                return x;
            });
        }
    }, {
        key: 'take',
        value: function take(n) {
            return new LazySeq(_generators2['default'].take, [n], this);
        }
    }, {
        key: 'drop',
        value: function drop(n) {
            return new LazySeq(_generators2['default'].drop, [n], this);
        }
    }, {
        key: 'map',
        value: function map(fn) {
            return new LazySeq(_generators2['default'].map, [fn], this);
        }
    }, {
        key: 'filter',
        value: function filter(fn) {
            return new LazySeq(_generators2['default'].filter, [fn], this);
        }
    }, {
        key: 'dropWhile',
        value: function dropWhile(fn) {
            return new LazySeq(_generators2['default'].dropWhile, [fn], this);
        }
    }, {
        key: 'takeWhile',
        value: function takeWhile(fn) {
            return new LazySeq(_generators2['default'].takeWhile, [fn], this);
        }
    }, {
        key: 'takeUntil',
        value: function takeUntil(fn) {
            var inverted = function inverted(x) {
                return !fn(x);
            };
            return this.takeWhile(inverted);
        }
    }, {
        key: 'dropUntil',
        value: function dropUntil(fn) {
            var inverted = function inverted(x) {
                return !fn(x);
            };
            return this.dropWhile(inverted);
        }
    }, {
        key: 'toArray',
        value: function toArray() {
            return this.reduce(function (acc, item) {
                return acc.concat([item]);
            }, []);
        }
    }, {
        key: 'reduce',
        value: function reduce(fn, acc) {
            var i = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var val = _step.value;

                    if (! i++ && typeof acc === 'undefined') acc = val;else acc = fn(acc, val);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return acc;
        }
    }]);

    return LazySeq;
})();

exports['default'] = LazySeq;
module.exports = exports['default'];
//# sourceMappingURL=lazy-seq.js.map