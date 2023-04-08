import { useState, useEffect } from "react";
import _ from "lodash-es";
export default function useDebouncedScrollDirection(_a) {
    var upScrollCallback = _a.upScrollCallback, downScrollCallback = _a.downScrollCallback, preventDefault = _a.preventDefault, _b = _a.debounceDelay, debounceDelay = _b === void 0 ? 1000 : _b;
    var _c = useState(""), scrollDir = _c[0], setScrollDir = _c[1];
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
            if (preventDefault) {
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
        window.addEventListener("wheel", handleScroll, { passive: false });
        return function () {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [upScrollCallback, downScrollCallback]);
    return scrollDir;
}
