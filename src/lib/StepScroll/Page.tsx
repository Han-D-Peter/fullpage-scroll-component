import { HTMLAttributes, useEffect, useId, useRef } from "react";
import { useDidUpdate } from "./hooks/useDidUpdate";
import { useStepScroll } from "./hooks/useStepScroll";
import styled from "@emotion/styled";

type PageProps = HTMLAttributes<HTMLDivElement> & {};

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

/**
 * @description
 * StepScroll 컴포넌트의 children으로만 사용할 수 있는 컴포넌트 입니다.
 */
function Page({ children, ...args }: PageProps) {
  const { pagesIdArray, setPagesIdArray, currentPage } = useStepScroll();
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (!pagesIdArray.includes(id)) {
      setPagesIdArray((prev: string[]) => [...prev, id]);
    }
  }, []);

  useDidUpdate(() => {
    if (ref.current && pagesIdArray[currentPage] === id) {
      ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [pagesIdArray, currentPage]);

  useEffect(() => {
    const scrollIntoViewByResize = () => {
      if (ref.current && pagesIdArray[currentPage] === id) {
        ref.current?.scrollIntoView({ block: "start" });
      }
    };
    window.addEventListener("resize", scrollIntoViewByResize);
    return () => {
      window.removeEventListener("resize", scrollIntoViewByResize);
    };
  }, [ref, currentPage, pagesIdArray, id]);

  return (
    <PageContainer id={id} ref={ref} {...args}>
      {children}
    </PageContainer>
  );
}

export default Page;
