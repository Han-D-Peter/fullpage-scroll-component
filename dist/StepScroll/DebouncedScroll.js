import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useStepScroll } from "./hooks";
import { useDebouncedScrollDirection } from "./hooks";
export default function DebouncedScroll(_a) {
    var _b = _a.isPreventDefault, isPreventDefault = _b === void 0 ? true : _b, _c = _a.delay, delay = _c === void 0 ? 300 : _c;
    var _d = useStepScroll(), prevPage = _d.prevPage, nextPage = _d.nextPage;
    useDebouncedScrollDirection({
        upScrollCallback: prevPage,
        downScrollCallback: nextPage,
        isPreventDefault: isPreventDefault,
        debounceDelay: delay,
    });
    return _jsx(_Fragment, {});
}
