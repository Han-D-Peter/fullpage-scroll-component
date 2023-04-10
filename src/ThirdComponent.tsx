import React from "react";
import { useStepScroll } from "./lib";

export default function ThirdComponent() {
  const { prevPage } = useStepScroll();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
      }}
    >
      <button onClick={() => prevPage()}>prev</button>
    </div>
  );
}
