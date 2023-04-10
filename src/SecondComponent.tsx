import React from "react";
import { useStepScroll } from "./lib";

export default function SecondComponent() {
  const { nextPage, prevPage } = useStepScroll();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
      }}
    >
      <button onClick={() => prevPage()}>prev</button>
      <button onClick={() => nextPage()}>next</button>
    </div>
  );
}
