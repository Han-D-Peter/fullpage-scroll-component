import { useState, useEffect } from "react";
import _ from "lodash-es";
export function useDebouncedScrollDirection(_a) {
    var upScrollCallback = _a.upScrollCallback, downScrollCallback = _a.downScrollCallback, isPreventDefault = _a.isPreventDefault, _b = _a.debounceDelay, debounceDelay = _b === void 0 ? 1000 : _b;
    var _c = useState(""), scrollDir = _c[0], setScrollDir = _c[1];
    var _d = useState(0), touchStart = _d[0], setTouchStart = _d[1];
    useEffect(function () {
        var debounce = _.debounce(function (direction) {
            if (direction === "down") {
                if (downScrollCallback) {
                    downScrollCallback();
                }
            }
            if (direction === "up") {
                if (upScrollCallback) {
                    upScrollCallback();
                }
            }
        }, debounceDelay);
        var handleScroll = function (e) {
            if (isPreventDefault) {
                e.preventDefault();
            }
            if (e.deltaY > 0) {
                debounce("down");
                setScrollDir("down");
            }
            else if (e.deltaY < 0) {
                debounce("up");
                setScrollDir("up");
            }
        };
        var onSetTouchStart = function (e) {
            setTouchStart(e.changedTouches[0].clientY);
        };
        var handleMobileScroll = function (e) {
            if (isPreventDefault) {
                e.preventDefault();
            }
            if (e.changedTouches[0].clientY < touchStart) {
                debounce("down");
                setScrollDir("down");
            }
            else if (e.changedTouches[0].clientY > touchStart) {
                debounce("up");
                setScrollDir("up");
            }
        };
        window.addEventListener("wheel", handleScroll, { passive: false });
        window.addEventListener("touchmove", handleMobileScroll, {
            passive: false,
        });
        window.addEventListener("touchstart", onSetTouchStart, { passive: false });
        return function () {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("touchmove", handleMobileScroll);
            window.removeEventListener("touchstart", onSetTouchStart);
        };
    }, [upScrollCallback, downScrollCallback, touchStart]);
    return scrollDir;
}
