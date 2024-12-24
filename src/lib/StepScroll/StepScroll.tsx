import {
  ForwardedRef,
  ReactElement,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { useSuccessiveValue } from "./hooks/useSuccessiveValue";
import { StepScrollContext } from "./hooks/useStepScroll";
import Page from "./Page";
import DebouncedScroll from "./DebouncedScroll";

interface StepScrollProps {
  children: ReactElement<typeof Page>[];
  defaultPage?: number;
  isScrollabled?: boolean;
  isPreventDefault?: boolean;
  delay?: number;
  isCaptured?: boolean;
}

export interface HandleScroll {
  /**
   * 현재 페이지 번호를 나타냅니다.
   */
  readonly currentPage: number;

  /**
   * 다음페이지로 이동합니다.
   * 다음페이지가 존재하지 않는다면 동작하지 않습니다.
   */
  readonly nextPage: () => void;

  /**
   * 이전페이지로 이동합니다.
   * 이전페이지가 존재하지 않는다면 동작하지 않습니다.
   */
  readonly prevPage: () => void;

  /**
   * 특정페이지로 이동합니다.
   * 없는 페이지라면 동작하지 않습니다.
   */
  readonly movePage: (to: number) => void;

  /**
   * 처음페이지 or 디폴트 페이지로 이동합니다.
   */
  readonly resetCurrentPage: () => void;
}

const StepScroll = forwardRef(function (
  {
    children,
    defaultPage = 0,
    delay = 300,
    isPreventDefault = true,
    isScrollabled = true,
    isCaptured = true,
  }: StepScrollProps,
  ref: ForwardedRef<HandleScroll>
) {
  const [pagesIdArray, setPagesIdArray] = useState<string[]>([]);
  const {
    current,
    setCurrent,
    resetCurrent,
    next,
    prev,
    hasNext,
    hasPrev,
    move,
  } = useSuccessiveValue({
    maximum: children.length - 1,
    defaultNumber: defaultPage >= children.length ? 0 : defaultPage,
  });

  const providerValues = useMemo(
    () => ({
      pagesIdArray,
      setPagesIdArray,
      currentPage: current,
      setCurrentPage: setCurrent,
      resetCurrent: resetCurrent,
      hasNextPage: hasNext,
      hasPrevPage: hasPrev,
      nextPage: next,
      prevPage: prev,
      movePage: move,
    }),
    [
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
    ]
  );

  useImperativeHandle(ref, () => ({
    currentPage: current,
    nextPage: next,
    prevPage: prev,
    movePage: move,
    resetCurrentPage: resetCurrent,
  }));

  const handleScroll = (e: WheelEvent) => {
    e.preventDefault();
  };

  const handleMobileScroll = (e: TouchEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!isScrollabled) {
      window.addEventListener("wheel", handleScroll, {
        passive: false,
        capture: isCaptured,
      });
      window.addEventListener("touchmove", handleMobileScroll, {
        passive: false,
        capture: isCaptured,
      });

      return () => {
        window.removeEventListener("wheel", handleScroll);
        window.removeEventListener("touchmove", handleMobileScroll);
      };
    }
  }, [isCaptured, isScrollabled]);

  return (
    <StepScrollContext.Provider value={providerValues}>
      {isScrollabled && (
        <DebouncedScroll isPreventDefault={isPreventDefault} delay={delay} />
      )}
      {children}
    </StepScrollContext.Provider>
  );
});

export default StepScroll;
