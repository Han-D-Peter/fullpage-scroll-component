import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

interface useSuccessiveValueArgs {
  /**
   * 시작 숫자를 지정합니다.
   */
  defaultNumber?: number;

  /**
   * 최대번호를 지정합니다.
   * 최대번호가 넘어가면 next, prev 함수가 동작하지 않습니다.
   */
  maximum: number;
}

interface useSuccessiveValueReturnType {
  /**
   * 현재 번호 입니다.
   */
  current: number;

  /**
   * 현재 번호를 변형시키는 dispatch 입니다.
   */
  setCurrent: Dispatch<SetStateAction<number>>;

  /**
   * 디폴트 값으로 초기화 하는 함수입니다.
   */
  resetCurrent: () => void;

  /**
   * 다음 번호로 변화시키는 함수입니다.
   */
  next: () => void;

  /**
   * 이전 번호로 변화시키는 함수입니다.
   */
  prev: () => void;

  /**
   * 다음 번호가 있는지 여부를 나타냅니다.
   */
  hasNext: boolean;

  /**
   * 이전 번호가 있는지 여부를 나타냅니다.
   */
  hasPrev: boolean;

  /**
   * 특정 값으로 변형시킵니다.
   */
  move: (to: number) => void;
}

export const useSuccessiveValue = ({
  defaultNumber = 0,
  maximum,
}: useSuccessiveValueArgs): useSuccessiveValueReturnType => {
  const defaultCurrentNumberRef = useRef<number>(defaultNumber ?? 0);
  const [current, setCurrent] = useState(defaultCurrentNumberRef.current);

  const resetCurrent = useCallback(() => {
    setCurrent(defaultCurrentNumberRef.current);
  }, []);

  const next = useCallback(() => {
    if (current >= maximum) {
      return;
    }
    setCurrent((prev) => ++prev);
  }, [current, maximum]);

  const prev = useCallback(() => {
    if (current <= 0) {
      return;
    }
    setCurrent((prev) => --prev);
  }, [current]);

  const hasNext = useMemo(() => {
    return current < maximum;
  }, [current, maximum]);

  const hasPrev = useMemo(() => {
    return current > 0;
  }, [current]);

  const move = useCallback(
    (to: number) => {
      if (to >= 0 || to <= maximum) {
        setCurrent(to);
      }
    },
    [maximum]
  );

  return {
    current,
    setCurrent,
    resetCurrent,
    next,
    prev,
    hasNext,
    hasPrev,
    move,
  };
};
