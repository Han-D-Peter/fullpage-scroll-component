var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useId, useRef } from "react";
import { useDidUpdate } from "./hooks/useDidUpdate";
import { useStepScroll } from "./hooks/useStepScroll";
import styled from "@emotion/styled";
var PageContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100vw;\n  height: 100vh;\n"], ["\n  width: 100vw;\n  height: 100vh;\n"])));
/**
 * @description
 * StepScroll 컴포넌트의 children으로만 사용할 수 있는 컴포넌트 입니다.
 */
function Page(_a) {
    var children = _a.children;
    var _b = useStepScroll(), pagesIdArray = _b.pagesIdArray, setPagesIdArray = _b.setPagesIdArray, currentPage = _b.currentPage;
    var ref = useRef(null);
    var id = useId();
    useEffect(function () {
        if (!pagesIdArray.includes(id)) {
            setPagesIdArray(function (prev) { return __spreadArray(__spreadArray([], prev, true), [id], false); });
        }
    }, []);
    useDidUpdate(function () {
        var _a;
        if (ref.current && pagesIdArray[currentPage] === id) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    }, [pagesIdArray, currentPage]);
    useEffect(function () {
        var scrollIntoViewByResize = function () {
            var _a;
            if (ref.current && pagesIdArray[currentPage] === id) {
                (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: "start" });
            }
        };
        window.addEventListener("resize", scrollIntoViewByResize);
        return function () {
            window.removeEventListener("resize", scrollIntoViewByResize);
        };
    }, [ref, currentPage, pagesIdArray, id]);
    return (_jsx(PageContainer, __assign({ id: id, ref: ref }, { children: children })));
}
export default Page;
var templateObject_1;
