import { DependencyList, useEffect, useRef } from "react";

export const useDidUpdate = (
  callback: () => void | Function,
  deps: DependencyList
) => {
  const mounted = useRef<boolean>(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      callback();
    }
  }, deps);
};
