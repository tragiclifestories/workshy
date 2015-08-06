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
    function Sequence(gen) {
        _classCallCheck(this, Sequence);

        this._generator = gen;
    }

    _createClass(Sequence, [{
        key: Symbol.iterator,
        value: function value() {
            return this._generator;
        }
    }, {
        key: 'take',
        value: function take(n) {
            var newGen = (0, _take2['default'])(n, this._generator);

            return new Sequence(newGen);
        }
    }]);

    return Sequence;
})();

exports['default'] = Sequence;
module.exports = exports['default'];
//# sourceMappingURL=sequence.js.map