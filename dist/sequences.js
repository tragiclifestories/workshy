'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.count = count;
exports.repeatedly = repeatedly;
exports.iterate = iterate;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lazySeq = require('./lazy-seq');

var _lazySeq2 = _interopRequireDefault(_lazySeq);

var _generators = require('./generators');

var g = _interopRequireWildcard(_generators);

function count(start, end) {
    var seq = new _lazySeq2['default'](g.iterate, [function (x) {
        return x + 1;
    }, start || 0]);
    if (typeof end === 'undefined') return seq;
    return seq.takeWhile(function (x) {
        return x < end;
    });
}

function repeatedly(f, n) {
    return new _lazySeq2['default'](g.repeatedly, [f, n]);
}

function iterate(f, initial) {
    var seq = new _lazySeq2['default'](g.iterate, [f, initial]);

    return seq;
}
//# sourceMappingURL=sequences.js.map
