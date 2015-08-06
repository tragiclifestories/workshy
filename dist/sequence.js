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
        key: 'toArray',
        value: function toArray() {
            var result = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var val = _step.value;
                    result.push(val);
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

            return result;
        }
    }]);

    return Sequence;
})();

exports['default'] = Sequence;
module.exports = exports['default'];
//# sourceMappingURL=sequence.js.map