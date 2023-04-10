var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useImperativeHandle, useMemo, useState, } from "react";
import { useSuccessiveValue } from "./hooks/useSuccessiveValue";
import { StepScrollContext } from "./hooks/useStepScroll";
import DebouncedScroll from "./DebouncedScroll";
var StepScroll = forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.defaultPage, defaultPage = _b === void 0 ? 0 : _b, _c = _a.delay, delay = _c === void 0 ? 300 : _c, _d = _a.isPreventDefault, isPreventDefault = _d === void 0 ? true : _d;
    var _e = useState([]), pagesIdArray = _e[0], setPagesIdArray = _e[1];
    var _f = useSuccessiveValue({
        maximum: children.length - 1,
        defaultNumber: defaultPage >= children.length ? 0 : defaultPage,
    }), current = _f.current, setCurrent = _f.setCurrent, resetCurrent = _f.resetCurrent, next = _f.next, prev = _f.prev, hasNext = _f.hasNext, hasPrev = _f.hasPrev, move = _f.move;
    var providerValues = useMemo(function () { return ({
        pagesIdArray: pagesIdArray,
        setPagesIdArray: setPagesIdArray,
        currentPage: current,
        setCurrentPage: setCurrent,
        resetCurrent: resetCurrent,
        hasNextPage: hasNext,
        hasPrevPage: hasPrev,
        nextPage: next,
        prevPage: prev,
        movePage: move,
    }); }, [
        pagesIdArray,
        setPagesIdArray,
        current,
        setCurrent,
        resetCurrent,
        hasNext,
        hasPrev,
        next,
        prev,
        move,
    ]);
    useImperativeHandle(ref, function () { return ({
        currentPage: current,
        nextPage: next,
        prevPage: prev,
        movePage: move,
        resetCurrentPage: resetCurrent,
    }); });
    return (_jsxs(StepScrollContext.Provider, __assign({ value: providerValues }, { children: [_jsx(DebouncedScroll, { isPreventDefault: isPreventDefault, delay: delay }), children] })));
});
export default StepScroll;
