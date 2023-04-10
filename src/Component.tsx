import React from "react";
import { useStepScroll } from "./lib/StepScroll/hooks";

export default function Component() {
  const { nextPage, prevPage, hasNextPage, hasPrevPage } = useStepScroll();
  return (
    <div>
      {hasPrevPage && <button onClick={() => prevPage()}>prev</button>}
      {hasNextPage && <button onClick={() => nextPage()}>next</button>}
    </div>
  );
}
