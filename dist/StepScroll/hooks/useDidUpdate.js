import { useEffect, useRef } from "react";
export var useDidUpdate = function (callback, deps) {
    var mounted = useRef(false);
    useEffect(function () {
        if (!mounted.current) {
            mounted.current = true;
        }
        else {
            callback();
        }
    }, deps);
};
