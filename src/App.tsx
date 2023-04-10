import React from "react";
import Component from "./Component";
import { StepScroll } from "./lib";
import Page from "./lib/StepScroll/Page";

function App() {
  return (
    <div>
      <StepScroll>
        <Page>
          <Component />
        </Page>
        <Page>bye</Page>
      </StepScroll>
    </div>
  );
}

export default App;
