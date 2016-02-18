'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _sequences = require('./sequences');

var _lazySeq = require('./lazy-seq');

var _lazySeq2 = _interopRequireDefault(_lazySeq);

require('babel/polyfill');
exports['default'] = { count: _sequences.count, LazySeq: _lazySeq2['default'] };
module.exports = exports['default'];
//# sourceMappingURL=index.js.map
