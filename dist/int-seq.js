'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var marked0$0 = [intGen].map(regeneratorRuntime.mark);

var _lazySeq = require('./lazy-seq');

var _lazySeq2 = _interopRequireDefault(_lazySeq);

function intSeq(start, end) {
    var seq = new _lazySeq2['default'](intGen, [start]);
    if (typeof end === 'undefined') return seq;
    return seq.takeWhile(function (x) {
        return x < end;
    });
}

function intGen(start) {
    var x;
    return regeneratorRuntime.wrap(function intGen$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                x = start || 0;

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