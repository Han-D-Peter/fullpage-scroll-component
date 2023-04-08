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
import { forwardRef, useMemo, useState, } from "react";
import { useSuccessiveValue } from "./hooks/useSuccessiveValue";
import { StepScrollContext } from "./hooks/useStepScroll";
import Page from "./Page";
import DebouncedScroll from "./DebouncedScroll";
function StepScroll(_a, ref) {
    var children = _a.children, defaultPage = _a.defaultPage;
    var _b = useState([]), pagesIdArray = _b[0], setPagesIdArray = _b[1];
    var _c = useSuccessiveValue({
        maximum: children.length - 1,
        defaultNumber: defaultPage >= children.length ? 0 : defaultPage,
    }), current = _c.current, setCurrent = _c.setCurrent, resetCurrent = _c.resetCurrent, next = _c.next, prev = _c.prev, hasNext = _c.hasNext, hasPrev = _c.hasPrev, move = _c.move;
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
    return (_jsxs(StepScrollContext.Provider, __assign({ value: providerValues }, { children: [_jsx(DebouncedScroll, {}), children] })));
}
StepScroll.Page = Page;
export default forwardRef(StepScroll);
