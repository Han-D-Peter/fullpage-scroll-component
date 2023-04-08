import {
  ForwardedRef,
  ReactElement,
  RefObject,
  forwardRef,
  useMemo,
  useState,
} from "react";
import { useSuccessiveValue } from "./hooks/useSuccessiveValue";
import { StepScrollContext } from "./hooks/useStepScroll";
import Page from "./Page";
import DebouncedScroll from "./DebouncedScroll";

interface StepScrollProps {
  children: ReactElement<typeof Page>[];
  defaultPage: number;
}

interface HandleScroll {
  /**
   * 현재 페이지 번호를 나타냅니다.
   */
  readonly current: number;

  /**
   * 다음페이지로 이동합니다.
   * 다음페이지가 존재하지 않는다면 동작하지 않습니다.
   */
  readonly next: () => void;

  /**
   * 이전페이지로 이동합니다.
   * 이전페이지가 존재하지 않는다면 동작하지 않습니다.
   */
  readonly prev: () => void;

  /**
   * 특정페이지로 이동합니다.
   * 없는 페이지라면 동작하지 않습니다.
   */
  readonly move: (to: number) => void;

  /**
   * 처음페이지 or 디폴트 페이지로 이동합니다.
   */
  readonly resetCurrent: () => void;
}

function StepScroll(
  { children, defaultPage }: StepScrollProps,
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

  return (
    <StepScrollContext.Provider value={providerValues}>
      <DebouncedScroll />
      {children}
    </StepScrollContext.Provider>
  );
}

StepScroll.Page = Page;

export default forwardRef<HandleScroll, StepScrollProps>(StepScroll);