'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var marked0$0 = [intGen].map(regeneratorRuntime.mark);

var _sequence = require('./sequence');

var _sequence2 = _interopRequireDefault(_sequence);

function intSeq() {
    return new _sequence2['default'](intGen());
}

function intGen() {
    var x;
    return regeneratorRuntime.wrap(function intGen$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                x = 0;

            case 1:
                if (!true) {
                    context$1$0.next = 6;
                    break;
                }

                context$1$0.next = 4;
                return x++;

            case 4:
                context$1$0.next = 1;
                break;

            case 6:
            case 'end':
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

//eslint-disable-line no-constant-condition
exports['default'] = intSeq;
module.exports = exports['default'];
//# sourceMappingURL=int-seq.js.map