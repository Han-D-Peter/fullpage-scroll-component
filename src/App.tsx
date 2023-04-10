import React, { useEffect, useRef } from "react";
import Component from "./Component";
import { StepScroll } from "./lib";
import Page from "./lib/StepScroll/Page";
import { HandleScroll } from "./lib/StepScroll/StepScroll";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

function App() {
  const ref = useRef<HandleScroll>(null);

  return (
    <div>
      <div style={{ position: "fixed" }}>
        <button onClick={() => ref.current?.prevPage()}>prev</button>
        <button onClick={() => ref.current?.nextPage()}>next</button>
      </div>
      <StepScroll ref={ref}>
        <Page>
          <FirstComponent />
        </Page>
        <Page>
          <SecondComponent />
        </Page>
        <Page>
          <ThirdComponent />
        </Page>
      </StepScroll>
    </div>
  );
}

export default App;
