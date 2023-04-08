import { useCallback, useMemo, useRef, useState, } from "react";
export var useSuccessiveValue = function (_a) {
    var _b = _a.defaultNumber, defaultNumber = _b === void 0 ? 0 : _b, maximum = _a.maximum;
    var defaultCurrentNumberRef = useRef(defaultNumber !== null && defaultNumber !== void 0 ? defaultNumber : 0);
    var _c = useState(defaultCurrentNumberRef.current), current = _c[0], setCurrent = _c[1];
    var resetCurrent = useCallback(function () {
        setCurrent(defaultCurrentNumberRef.current);
    }, []);
    var next = useCallback(function () {
        if (current >= maximum) {
            return;
        }
        setCurrent(function (prev) { return ++prev; });
    }, [current]);
    var prev = useCallback(function () {
        if (current <= 0) {
            return;
        }
        setCurrent(function (prev) { return --prev; });
    }, [current]);
    var hasNext = useMemo(function () {
        return current < maximum;
    }, [current]);
    var hasPrev = useMemo(function () {
        return current > 0;
    }, [current]);
    var move = useCallback(function (to) {
        if (to >= 0 || to <= maximum) {
            setCurrent(to);
        }
    }, [maximum]);
    return {
        current: current,
        setCurrent: setCurrent,
        resetCurrent: resetCurrent,
        next: next,
        prev: prev,
        hasNext: hasNext,
        hasPrev: hasPrev,
        move: move,
    };
};
