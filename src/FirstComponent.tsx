import React from "react";
import { useStepScroll } from "./lib";

export default function FirstComponent() {
  const { nextPage } = useStepScroll();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "skyblue",
      }}
    >
      <button onClick={() => nextPage()}>next</button>
    </div>
  );
}
