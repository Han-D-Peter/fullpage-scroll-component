import React, { useEffect, useRef } from "react";
import Component from "./Component";
import { StepScroll } from "./lib";
import Page from "./lib/StepScroll/Page";
import { HandleScroll } from "./lib/StepScroll/StepScroll";

function App() {
  const ref = useRef<HandleScroll>(null);

  return (
    <div>
      <StepScroll ref={ref}>
        <Page>
          <Component />
        </Page>
        <Page>
          <Component />
        </Page>
        <Page>
          <Component />
        </Page>
        <Page>
          <Component />
        </Page>
      </StepScroll>
    </div>
  );
}

export default App;
