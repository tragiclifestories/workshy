"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = {
    take: regeneratorRuntime.mark(function take(n, parent) {
        var x, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, val;

        return regeneratorRuntime.wrap(function take$(context$1$0) {
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
        }, take, this, [[6, 19, 23, 31], [24,, 26, 30]]);
    }),

    drop: regeneratorRuntime.mark(function drop(n, iterable) {
        var x, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, val;

        return regeneratorRuntime.wrap(function drop$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    x = 0;
                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    context$1$0.prev = 4;
                    _iterator2 = iterable[Symbol.iterator]();

                case 6:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                        context$1$0.next = 14;
                        break;
                    }

                    val = _step2.value;

                    if (!(n <= x++)) {
                        context$1$0.next = 11;
                        break;
                    }

                    context$1$0.next = 11;
                    return val;

                case 11:
                    _iteratorNormalCompletion2 = true;
                    context$1$0.next = 6;
                    break;

                case 14:
                    context$1$0.next = 20;
                    break;

                case 16:
                    context$1$0.prev = 16;
                    context$1$0.t0 = context$1$0["catch"](4);
                    _didIteratorError2 = true;
                    _iteratorError2 = context$1$0.t0;

                case 20:
                    context$1$0.prev = 20;
                    context$1$0.prev = 21;

                    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                        _iterator2["return"]();
                    }

                case 23:
                    context$1$0.prev = 23;

                    if (!_didIteratorError2) {
                        context$1$0.next = 26;
                        break;
                    }

                    throw _iteratorError2;

                case 26:
                    return context$1$0.finish(23);

                case 27:
                    return context$1$0.finish(20);

                case 28:
                case "end":
                    return context$1$0.stop();
            }
        }, drop, this, [[4, 16, 20, 28], [21,, 23, 27]]);
    }),

    map: regeneratorRuntime.mark(function map(fn, iterable) {
        var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, val;

        return regeneratorRuntime.wrap(function map$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    _iteratorNormalCompletion3 = true;
                    _didIteratorError3 = false;
                    _iteratorError3 = undefined;
                    context$1$0.prev = 3;
                    _iterator3 = iterable[Symbol.iterator]();

                case 5:
                    if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                        context$1$0.next = 12;
                        break;
                    }

                    val = _step3.value;
                    context$1$0.next = 9;
                    return fn(val);

                case 9:
                    _iteratorNormalCompletion3 = true;
                    context$1$0.next = 5;
                    break;

                case 12:
                    context$1$0.next = 18;
                    break;

                case 14:
                    context$1$0.prev = 14;
                    context$1$0.t0 = context$1$0["catch"](3);
                    _didIteratorError3 = true;
                    _iteratorError3 = context$1$0.t0;

                case 18:
                    context$1$0.prev = 18;
                    context$1$0.prev = 19;

                    if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
                        _iterator3["return"]();
                    }

                case 21:
                    context$1$0.prev = 21;

                    if (!_didIteratorError3) {
                        context$1$0.next = 24;
                        break;
                    }

                    throw _iteratorError3;

                case 24:
                    return context$1$0.finish(21);

                case 25:
                    return context$1$0.finish(18);

                case 26:
                case "end":
                    return context$1$0.stop();
            }
        }, map, this, [[3, 14, 18, 26], [19,, 21, 25]]);
    }),

    filter: regeneratorRuntime.mark(function filter(fn, iterable) {
        var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, val;

        return regeneratorRuntime.wrap(function filter$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    _iteratorNormalCompletion4 = true;
                    _didIteratorError4 = false;
                    _iteratorError4 = undefined;
                    context$1$0.prev = 3;
                    _iterator4 = iterable[Symbol.iterator]();

                case 5:
                    if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                        context$1$0.next = 13;
                        break;
                    }

                    val = _step4.value;

                    if (!fn(val)) {
                        context$1$0.next = 10;
                        break;
                    }

                    context$1$0.next = 10;
                    return val;

                case 10:
                    _iteratorNormalCompletion4 = true;
                    context$1$0.next = 5;
                    break;

                case 13:
                    context$1$0.next = 19;
                    break;

                case 15:
                    context$1$0.prev = 15;
                    context$1$0.t0 = context$1$0["catch"](3);
                    _didIteratorError4 = true;
                    _iteratorError4 = context$1$0.t0;

                case 19:
                    context$1$0.prev = 19;
                    context$1$0.prev = 20;

                    if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
                        _iterator4["return"]();
                    }

                case 22:
                    context$1$0.prev = 22;

                    if (!_didIteratorError4) {
                        context$1$0.next = 25;
                        break;
                    }

                    throw _iteratorError4;

                case 25:
                    return context$1$0.finish(22);

                case 26:
                    return context$1$0.finish(19);

                case 27:
                case "end":
                    return context$1$0.stop();
            }
        }, filter, this, [[3, 15, 19, 27], [20,, 22, 26]]);
    }),

    dropWhile: regeneratorRuntime.mark(function dropWhile(fn, iterable) {
        var isBlocked, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, val;

        return regeneratorRuntime.wrap(function dropWhile$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    isBlocked = true;
                    _iteratorNormalCompletion5 = true;
                    _didIteratorError5 = false;
                    _iteratorError5 = undefined;
                    context$1$0.prev = 4;
                    _iterator5 = iterable[Symbol.iterator]();

                case 6:
                    if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                        context$1$0.next = 15;
                        break;
                    }

                    val = _step5.value;

                    if (isBlocked) isBlocked = fn(val);

                    if (isBlocked) {
                        context$1$0.next = 12;
                        break;
                    }

                    context$1$0.next = 12;
                    return val;

                case 12:
                    _iteratorNormalCompletion5 = true;
                    context$1$0.next = 6;
                    break;

                case 15:
                    context$1$0.next = 21;
                    break;

                case 17:
                    context$1$0.prev = 17;
                    context$1$0.t0 = context$1$0["catch"](4);
                    _didIteratorError5 = true;
                    _iteratorError5 = context$1$0.t0;

                case 21:
                    context$1$0.prev = 21;
                    context$1$0.prev = 22;

                    if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
                        _iterator5["return"]();
                    }

                case 24:
                    context$1$0.prev = 24;

                    if (!_didIteratorError5) {
                        context$1$0.next = 27;
                        break;
                    }

                    throw _iteratorError5;

                case 27:
                    return context$1$0.finish(24);

                case 28:
                    return context$1$0.finish(21);

                case 29:
                case "end":
                    return context$1$0.stop();
            }
        }, dropWhile, this, [[4, 17, 21, 29], [22,, 24, 28]]);
    }),

    takeWhile: regeneratorRuntime.mark(function takeWhile(fn, iterable) {
        var isOpen, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, val;

        return regeneratorRuntime.wrap(function takeWhile$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    isOpen = true;
                    _iteratorNormalCompletion6 = true;
                    _didIteratorError6 = false;
                    _iteratorError6 = undefined;
                    context$1$0.prev = 4;
                    _iterator6 = iterable[Symbol.iterator]();

                case 6:
                    if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                        context$1$0.next = 19;
                        break;
                    }

                    val = _step6.value;

                    if (!isOpen) {
                        context$1$0.next = 15;
                        break;
                    }

                    context$1$0.t0 = isOpen = fn(val);

                    if (!context$1$0.t0) {
                        context$1$0.next = 13;
                        break;
                    }

                    context$1$0.next = 13;
                    return val;

                case 13:
                    context$1$0.next = 16;
                    break;

                case 15:
                    return context$1$0.abrupt("break", 19);

                case 16:
                    _iteratorNormalCompletion6 = true;
                    context$1$0.next = 6;
                    break;

                case 19:
                    context$1$0.next = 25;
                    break;

                case 21:
                    context$1$0.prev = 21;
                    context$1$0.t1 = context$1$0["catch"](4);
                    _didIteratorError6 = true;
                    _iteratorError6 = context$1$0.t1;

                case 25:
                    context$1$0.prev = 25;
                    context$1$0.prev = 26;

                    if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
                        _iterator6["return"]();
                    }

                case 28:
                    context$1$0.prev = 28;

                    if (!_didIteratorError6) {
                        context$1$0.next = 31;
                        break;
                    }

                    throw _iteratorError6;

                case 31:
                    return context$1$0.finish(28);

                case 32:
                    return context$1$0.finish(25);

                case 33:
                case "end":
                    return context$1$0.stop();
            }
        }, takeWhile, this, [[4, 21, 25, 33], [26,, 28, 32]]);
    })
};
module.exports = exports["default"];
//# sourceMappingURL=generators.js.map