import { useState, useEffect } from "react";
import _ from "lodash-es";

interface useDebouncedScrollDirectionArgs {
  /**
   * 위로 스크롤 하게 되면 실행할 콜백을 설정합니다.
   */
  upScrollCallback?: () => void;

  /**
   * 아래로 스크롤 하게 되면 실행할 콜백을 설정합니다.
   */
  downScrollCallback?: () => void;

  /**
   * 스크롤 이벤트에서 스크롤 동작을 실행하지 않도록 합니다.
   * @default
   * preventDefault의 기본 값은 false 입니다.
   */
  isPreventDefault?: boolean;

  /**
   * 스크롤에 따른 콜백 실행까지 지연되는 디바운스 시간을 설정합니다.
   * @default
   * debounceDelay 기본 값은 10000 입니다.
   */
  debounceDelay?: number;
}

export function useDebouncedScrollDirection({
  upScrollCallback,
  downScrollCallback,
  isPreventDefault,
  debounceDelay = 1000,
}: useDebouncedScrollDirectionArgs) {
  const [scrollDir, setScrollDir] = useState<"up" | "down" | "">("");
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    const debounce = _.debounce((direction: string) => {
      if (direction === "down") {
        if (downScrollCallback && isPreventDefault) {
          downScrollCallback();
        }
      }

      if (direction === "up") {
        if (upScrollCallback && isPreventDefault) {
          upScrollCallback();
        }
      }
    }, debounceDelay);

    const handleScroll = (e: WheelEvent) => {
      if (isPreventDefault) {
        e.preventDefault();
      }
      if (e.deltaY > 0) {
        debounce("down");
        setScrollDir("down");
      } else if (e.deltaY < 0) {
        debounce("up");
        setScrollDir("up");
      }
    };

    const onSetTouchStart = (e: TouchEvent) => {
      setTouchStart(e.changedTouches[0].clientY);
    };

    const handleMobileScroll = (e: TouchEvent) => {
      if (isPreventDefault) {
        e.preventDefault();
      }

      if (e.changedTouches[0].clientY < touchStart) {
        debounce("down");
        setScrollDir("down");
      } else if (e.changedTouches[0].clientY > touchStart) {
        debounce("up");
        setScrollDir("up");
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchmove", handleMobileScroll, {
      passive: false,
    });
    window.addEventListener("touchstart", onSetTouchStart, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleMobileScroll);
      window.removeEventListener("touchstart", onSetTouchStart);
    };
  }, [upScrollCallback, downScrollCallback, touchStart]);

  return scrollDir;
}
