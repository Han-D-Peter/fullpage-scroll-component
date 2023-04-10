import React from "react";
import { useStepScroll } from "./lib/StepScroll/hooks";

export default function Component() {
  const { nextPage, prevPage } = useStepScroll();
  return (
    <div>
      <button onClick={() => prevPage()}>prev</button>
      <button onClick={() => nextPage()}>next</button>
    </div>
  );
}
