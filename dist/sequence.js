'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _take = require('./take');

var _take2 = _interopRequireDefault(_take);

var Sequence = (function () {
    function Sequence(gen, args, parent) {
        _classCallCheck(this, Sequence);

        this._generator = gen;
        this._args = args;
        if (parent) this._args.push(parent);
    }

    _createClass(Sequence, [{
        key: Symbol.iterator,
        value: function value() {
            return this._generator.apply(this, this._args);
        }
    }, {
        key: 'take',
        value: function take(n) {
            return new Sequence(_take2['default'], [n], this);
        }
    }, {
        key: 'map',
        value: function map(fn) {
            var mapGen = regeneratorRuntime.mark(function mapGen(fn, iterable) {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, val;

                return regeneratorRuntime.wrap(function mapGen$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            context$3$0.prev = 3;
                            _iterator = iterable[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                context$3$0.next = 12;
                                break;
                            }

                            val = _step.value;
                            context$3$0.next = 9;
                            return fn(val);

                        case 9:
                            _iteratorNormalCompletion = true;
                            context$3$0.next = 5;
                            break;

                        case 12:
                            context$3$0.next = 18;
                            break;

                        case 14:
                            context$3$0.prev = 14;
                            context$3$0.t0 = context$3$0['catch'](3);
                            _didIteratorError = true;
                            _iteratorError = context$3$0.t0;

                        case 18:
                            context$3$0.prev = 18;
                            context$3$0.prev = 19;

                            if (!_iteratorNormalCompletion && _iterator['return']) {
                                _iterator['return']();
                            }

                        case 21:
                            context$3$0.prev = 21;

                            if (!_didIteratorError) {
                                context$3$0.next = 24;
                                break;
                            }

                            throw _iteratorError;

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
            return new Sequence(mapGen, [fn], this);
        }
    }, {
        key: 'filter',
        value: function filter(fn) {
            var filterGen = regeneratorRuntime.mark(function filterGen(fn, iterable) {
                var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, val;

                return regeneratorRuntime.wrap(function filterGen$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion2 = true;
                            _didIteratorError2 = false;
                            _iteratorError2 = undefined;
                            context$3$0.prev = 3;
                            _iterator2 = iterable[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                context$3$0.next = 13;
                                break;
                            }

                            val = _step2.value;

                            if (!fn(val)) {
                                context$3$0.next = 10;
                                break;
                            }

                            context$3$0.next = 10;
                            return val;

                        case 10:
                            _iteratorNormalCompletion2 = true;
                            context$3$0.next = 5;
                            break;

                        case 13:
                            context$3$0.next = 19;
                            break;

                        case 15:
                            context$3$0.prev = 15;
                            context$3$0.t0 = context$3$0['catch'](3);
                            _didIteratorError2 = true;
                            _iteratorError2 = context$3$0.t0;

                        case 19:
                            context$3$0.prev = 19;
                            context$3$0.prev = 20;

                            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                                _iterator2['return']();
                            }

                        case 22:
                            context$3$0.prev = 22;

                            if (!_didIteratorError2) {
                                context$3$0.next = 25;
                                break;
                            }

                            throw _iteratorError2;

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

            return new Sequence(filterGen, [fn], this);
        }
    }, {
        key: 'toArray',
        value: function toArray() {
            var result = [];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var val = _step3.value;

                    result.push(val);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                        _iterator3['return']();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return result;
        }
    }, {
        key: 'reduce',
        value: function reduce(fn, acc) {
            var i = 0;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var val = _step4.value;

                    if (! i++ && typeof acc === 'undefined') acc = val;else acc = fn(acc, val);
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                        _iterator4['return']();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return acc;
        }
    }]);

    return Sequence;
})();

exports['default'] = Sequence;
module.exports = exports['default'];
//# sourceMappingURL=sequence.js.map