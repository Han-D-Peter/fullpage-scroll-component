import React, { useRef, useState } from "react";
import { StepScroll } from "./lib";
import Page from "./lib/StepScroll/Page";
import { HandleScroll } from "./lib/StepScroll/StepScroll";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

function App() {
  const ref = useRef<HandleScroll>(null);
  const [isScrollabled, setIsScrollabled] = useState(true);

  return (
    <div>
      <div style={{ position: "fixed" }}>
        <button onClick={() => ref.current?.prevPage()}>prev</button>
        <button onClick={() => ref.current?.nextPage()}>next</button>
        <button onClick={() => setIsScrollabled(!isScrollabled)}>
          {isScrollabled ? "isScrollabled" : "is not Scrollabled"}
        </button>
      </div>
      <StepScroll ref={ref} isScrollabled={isScrollabled}>
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
