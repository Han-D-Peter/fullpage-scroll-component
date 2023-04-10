import { useStepScroll } from "./hooks";
import { useDebouncedScrollDirection } from "./hooks";

/**
 * 페이지의 스크롤링에 관여하는 훅을 담은 fake 컴포넌트 입니다.
 */
export default function DebouncedScroll() {
  const { prevPage, nextPage } = useStepScroll();
  useDebouncedScrollDirection({
    upScrollCallback: prevPage,
    downScrollCallback: nextPage,
    preventDefault: true,
    debounceDelay: 300,
  });
  return <></>;
}
