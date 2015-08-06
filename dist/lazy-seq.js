'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _take = require('./take');

var _take2 = _interopRequireDefault(_take);

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
        key: 'take',
        value: function take(n) {
            return new LazySeq(_take2['default'], [n], this);
        }
    }, {
        key: 'drop',
        value: function drop(n) {
            var dropGen = regeneratorRuntime.mark(function dropGen(n, iterable) {
                var x, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, val;

                return regeneratorRuntime.wrap(function dropGen$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            x = 0;
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            context$3$0.prev = 4;
                            _iterator = iterable[Symbol.iterator]();

                        case 6:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                context$3$0.next = 14;
                                break;
                            }

                            val = _step.value;

                            if (!(n <= x++)) {
                                context$3$0.next = 11;
                                break;
                            }

                            context$3$0.next = 11;
                            return val;

                        case 11:
                            _iteratorNormalCompletion = true;
                            context$3$0.next = 6;
                            break;

                        case 14:
                            context$3$0.next = 20;
                            break;

                        case 16:
                            context$3$0.prev = 16;
                            context$3$0.t0 = context$3$0['catch'](4);
                            _didIteratorError = true;
                            _iteratorError = context$3$0.t0;

                        case 20:
                            context$3$0.prev = 20;
                            context$3$0.prev = 21;

                            if (!_iteratorNormalCompletion && _iterator['return']) {
                                _iterator['return']();
                            }

                        case 23:
                            context$3$0.prev = 23;

                            if (!_didIteratorError) {
                                context$3$0.next = 26;
                                break;
                            }

                            throw _iteratorError;

                        case 26:
                            return context$3$0.finish(23);

                        case 27:
                            return context$3$0.finish(20);

                        case 28:
                        case 'end':
                            return context$3$0.stop();
                    }
                }, dropGen, this, [[4, 16, 20, 28], [21,, 23, 27]]);
            });
            return new LazySeq(dropGen, [n], this);
        }
    }, {
        key: 'map',
        value: function map(fn) {
            var mapGen = regeneratorRuntime.mark(function mapGen(fn, iterable) {
                var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, val;

                return regeneratorRuntime.wrap(function mapGen$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion2 = true;
                            _didIteratorError2 = false;
                            _iteratorError2 = undefined;
                            context$3$0.prev = 3;
                            _iterator2 = iterable[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                context$3$0.next = 12;
                                break;
                            }

                            val = _step2.value;
                            context$3$0.next = 9;
                            return fn(val);

                        case 9:
                            _iteratorNormalCompletion2 = true;
                            context$3$0.next = 5;
                            break;

                        case 12:
                            context$3$0.next = 18;
                            break;

                        case 14:
                            context$3$0.prev = 14;
                            context$3$0.t0 = context$3$0['catch'](3);
                            _didIteratorError2 = true;
                            _iteratorError2 = context$3$0.t0;

                        case 18:
                            context$3$0.prev = 18;
                            context$3$0.prev = 19;

                            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                                _iterator2['return']();
                            }

                        case 21:
                            context$3$0.prev = 21;

                            if (!_didIteratorError2) {
                                context$3$0.next = 24;
                                break;
                            }

                            throw _iteratorError2;

                        case 24:
                            return context$3$0.finish(21);

                        case 25:
                            return context$3$0.finish(18);

                        case 26:
                        case 'end':
                            return context$3$0.stop();
                    }
                }, mapGen, this, [[3, 14, 18, 26], [19,, 21, 25]]);
            });
            return new LazySeq(mapGen, [fn], this);
        }
    }, {
        key: 'filter',
        value: function filter(fn) {
            var filterGen = regeneratorRuntime.mark(function filterGen(fn, iterable) {
                var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, val;

                return regeneratorRuntime.wrap(function filterGen$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion3 = true;
                            _didIteratorError3 = false;
                            _iteratorError3 = undefined;
                            context$3$0.prev = 3;
                            _iterator3 = iterable[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                context$3$0.next = 13;
                                break;
                            }

                            val = _step3.value;

                            if (!fn(val)) {
                                context$3$0.next = 10;
                                break;
                            }

                            context$3$0.next = 10;
                            return val;

                        case 10:
                            _iteratorNormalCompletion3 = true;
                            context$3$0.next = 5;
                            break;

                        case 13:
                            context$3$0.next = 19;
                            break;

                        case 15:
                            context$3$0.prev = 15;
                            context$3$0.t0 = context$3$0['catch'](3);
                            _didIteratorError3 = true;
                            _iteratorError3 = context$3$0.t0;

                        case 19:
                            context$3$0.prev = 19;
                            context$3$0.prev = 20;

                            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                                _iterator3['return']();
                            }

                        case 22:
                            context$3$0.prev = 22;

                            if (!_didIteratorError3) {
                                context$3$0.next = 25;
                                break;
                            }

                            throw _iteratorError3;

                        case 25:
                            return context$3$0.finish(22);

                        case 26:
                            return context$3$0.finish(19);

                        case 27:
                        case 'end':
                            return context$3$0.stop();
                    }
                }, filterGen, this, [[3, 15, 19, 27], [20,, 22, 26]]);
            });

            return new LazySeq(filterGen, [fn], this);
        }
    }, {
        key: 'dropWhile',
        value: function dropWhile(fn) {
            var dropWhileGen = regeneratorRuntime.mark(function dropWhileGen(fn, iterable) {
                var isBlocked, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, val;

                return regeneratorRuntime.wrap(function dropWhileGen$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            isBlocked = true;
                            _iteratorNormalCompletion4 = true;
                            _didIteratorError4 = false;
                            _iteratorError4 = undefined;
                            context$3$0.prev = 4;
                            _iterator4 = iterable[Symbol.iterator]();

                        case 6:
                            if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                                context$3$0.next = 15;
                                break;
                            }

                            val = _step4.value;

                            if (isBlocked) isBlocked = fn(val);

                            if (isBlocked) {
                                context$3$0.next = 12;
                                break;
                            }

                            context$3$0.next = 12;
                            return val;

                        case 12:
                            _iteratorNormalCompletion4 = true;
                            context$3$0.next = 6;
                            break;

                        case 15:
                            context$3$0.next = 21;
                            break;

                        case 17:
                            context$3$0.prev = 17;
                            context$3$0.t0 = context$3$0['catch'](4);
                            _didIteratorError4 = true;
                            _iteratorError4 = context$3$0.t0;

                        case 21:
                            context$3$0.prev = 21;
                            context$3$0.prev = 22;

                            if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                                _iterator4['return']();
                            }

                        case 24:
                            context$3$0.prev = 24;

                            if (!_didIteratorError4) {
                                context$3$0.next = 27;
                                break;
                            }

                            throw _iteratorError4;

                        case 27:
                            return context$3$0.finish(24);

                        case 28:
                            return context$3$0.finish(21);

                        case 29:
                        case 'end':
                            return context$3$0.stop();
                    }
                }, dropWhileGen, this, [[4, 17, 21, 29], [22,, 24, 28]]);
            });
            return new LazySeq(dropWhileGen, [fn], this);
        }
    }, {
        key: 'takeWhile',
        value: function takeWhile(fn) {
            var takeWhileGen = regeneratorRuntime.mark(function takeWhileGen(fn, iterable) {
                var isOpen, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, val;

                return regeneratorRuntime.wrap(function takeWhileGen$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            isOpen = true;
                            _iteratorNormalCompletion5 = true;
                            _didIteratorError5 = false;
                            _iteratorError5 = undefined;
                            context$3$0.prev = 4;
                            _iterator5 = iterable[Symbol.iterator]();

                        case 6:
                            if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                                context$3$0.next = 19;
                                break;
                            }

                            val = _step5.value;

                            if (!isOpen) {
                                context$3$0.next = 15;
                                break;
                            }

                            context$3$0.t0 = isOpen = fn(val);

                            if (!context$3$0.t0) {
                                context$3$0.next = 13;
                                break;
                            }

                            context$3$0.next = 13;
                            return val;

                        case 13:
                            context$3$0.next = 16;
                            break;

                        case 15:
                            return context$3$0.abrupt('break', 19);

                        case 16:
                            _iteratorNormalCompletion5 = true;
                            context$3$0.next = 6;
                            break;

                        case 19:
                            context$3$0.next = 25;
                            break;

                        case 21:
                            context$3$0.prev = 21;
                            context$3$0.t1 = context$3$0['catch'](4);
                            _didIteratorError5 = true;
                            _iteratorError5 = context$3$0.t1;

                        case 25:
                            context$3$0.prev = 25;
                            context$3$0.prev = 26;

                            if (!_iteratorNormalCompletion5 && _iterator5['return']) {
                                _iterator5['return']();
                            }

                        case 28:
                            context$3$0.prev = 28;

                            if (!_didIteratorError5) {
                                context$3$0.next = 31;
                                break;
                            }

                            throw _iteratorError5;

                        case 31:
                            return context$3$0.finish(28);

                        case 32:
                            return context$3$0.finish(25);

                        case 33:
                        case 'end':
                            return context$3$0.stop();
                    }
                }, takeWhileGen, this, [[4, 21, 25, 33], [26,, 28, 32]]);
            });

            return new LazySeq(takeWhileGen, [fn], this);
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
            var result = [];
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = this[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var val = _step6.value;

                    result.push(val);
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6['return']) {
                        _iterator6['return']();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            return result;
        }
    }, {
        key: 'reduce',
        value: function reduce(fn, acc) {
            var i = 0;
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = this[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var val = _step7.value;

                    if (! i++ && typeof acc === 'undefined') acc = val;else acc = fn(acc, val);
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7['return']) {
                        _iterator7['return']();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
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