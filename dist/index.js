'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _intSeq = require('./int-seq');

var _intSeq2 = _interopRequireDefault(_intSeq);

var _lazySeq = require('./lazy-seq');

var _lazySeq2 = _interopRequireDefault(_lazySeq);

require('babel/polyfill');
exports['default'] = { intSeq: _intSeq2['default'], LazySeq: _lazySeq2['default'] };
module.exports = exports['default'];
//# sourceMappingURL=index.js.map