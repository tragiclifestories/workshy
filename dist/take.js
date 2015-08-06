"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = regeneratorRuntime.mark(function callee$0$0(n, parent) {
    var x, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, val;

    return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                x = 0;

                if (!(n === 0)) {
                    context$1$0.next = 3;
                    break;
                }

                return context$1$0.abrupt("return");

            case 3:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 6;
                _iterator = parent[Symbol.iterator]();

            case 8:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    context$1$0.next = 17;
                    break;
                }

                val = _step.value;
                context$1$0.next = 12;
                return val;

            case 12:
                if (!(n <= ++x)) {
                    context$1$0.next = 14;
                    break;
                }

                return context$1$0.abrupt("break", 17);

            case 14:
                _iteratorNormalCompletion = true;
                context$1$0.next = 8;
                break;

            case 17:
                context$1$0.next = 23;
                break;

            case 19:
                context$1$0.prev = 19;
                context$1$0.t0 = context$1$0["catch"](6);
                _didIteratorError = true;
                _iteratorError = context$1$0.t0;

            case 23:
                context$1$0.prev = 23;
                context$1$0.prev = 24;

                if (!_iteratorNormalCompletion && _iterator["return"]) {
                    _iterator["return"]();
                }

            case 26:
                context$1$0.prev = 26;

                if (!_didIteratorError) {
                    context$1$0.next = 29;
                    break;
                }

                throw _iteratorError;

            case 29:
                return context$1$0.finish(26);

            case 30:
                return context$1$0.finish(23);

            case 31:
            case "end":
                return context$1$0.stop();
        }
    }, callee$0$0, this, [[6, 19, 23, 31], [24,, 26, 30]]);
});
module.exports = exports["default"];
//# sourceMappingURL=take.js.map