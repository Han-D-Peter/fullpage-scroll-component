# fullpage-scroll-component(Eng)

This component form React(not support SSR yet. but you can import this component by `dynamic' import with `{ ssr: false }`option in Next.js)

## **How to use([Example](https://dulcet-fairy-055d1f.netlify.app/))**

`fullpage-scroll-component` provides a `StepScroll` component and one `useStepScroll` hook.

- `StepScroll` component is used to set up scroll zones. It is assisted by `Page`.

- `StepScroll` component takes in three props.

  - `defaultPage`: Set the default page to be placed on the screen.(Set to a number greater than 0 and equal to or less than the total number of pages, default is 0)

  - `delay`: Adjust the delay after which the screen flips (default is 300, units ms)

  - `isPreventDefault`: Setting to prevent scrolling. (default is true)

```typescript
function App() {
  return (
    <StepScroll>
      <Page>
        <FirstCustomComponent />
      </Page>
      <Page>
        <SecondCustomComponent />
      </Page>
      <Page>
        <ThirdCustomComponent />
      </Page>
    </StepScroll>
  );
}
```

- Underneath the `StepScroll` component, scrolling is accomplished through the `useStepScroll` hook.

- `useStepScroll`: The page number currently visible on the screen.

  - `currentPage`: 현재 화면에 보이는 페이지 번호.

  - `resetCurrent`: Resets to the default page number that was entered when the hook was loaded.

  - `hasNextPage`: Indicates whether the next page exists.

  - `hasPrevPage`: Indicates whether the previous page exists.

  - `nextPage`: The function to go to the next page.

  - `prevPage`: The function to go to the previous page.

  - `movePage`: A function that, when executed with the page you want to move to as an argument, moves to that page.

```typescript
function FirstCustomComponent() {
  const {
    currentPage,
    resetCurrent,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
    movePage,
  } = useStepScroll();
  return <div></div>;
}
```

## **Example usage**

### Use inside a component

```typescript
function FirstCustomComponent() {
  const {
    currentPage,
    resetCurrent,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
    movePage,
  } = useStepScroll();
  return (
    <div>
      {hasPrevPage && <button onClick={prevPage}>Prev</button>}
      {hasNextPage && <button onClick={nextPage}>Next</button>}
    </div>
  );
}
```

- In the `StepScroll` component subcomponent, you can `useStepScroll` to create a button that moves the page.

### Using refs

```typescript
function App() {
  const ref = useRef<HandleScroll>(null);

  return (
    <>
      <StepScroll ref={ref}>
        <StepScroll.Page>
          <FirstCustomComponent />
        </StepScroll.Page>
        <StepScroll.Page>
          <SecondCustomComponent />
        </StepScroll.Page>
        <StepScroll.Page>
          <ThirdCustomComponent />
        </StepScroll.Page>
      </StepScroll>
      <button
        onClick={() => {
          ref.current.next();
        }}
      >
        Next Page
      </button>
      <button
        onClick={() => {
          ref.current.next();
        }}
      >
        Prev Page
      </button>
      <button
        onClick={() => {
          ref.current.move(2);
        }}
      >
        Move to 2page
      </button>
      <button
        onClick={() => {
          ref.current.resetCurrent();
        }}
      >
        To the first screen
      </button>
    </>
  );
}
```

- You can use refs to manipulate some of the behavior of the `StepScroll` component.

  - `currentPage`: Represents the current page.

  - `nextPage`: The function to go to the next page.

  - `prevPage`: Function to go to the previous page.

  - `movePage`: A function to move to a specific page.

  - `resetCurrentPage`: Function to return to the first (default or 0th) screen.

# fullpage-scroll-component(한글)

이 컴포넌트는 React 를 위한 컴포넌트 입니다. (SSR은 아직 지원하지 않습니다. next.js 에서 `dynamic`임포트를 { ssr: false } 옵션으로 사용할 수 있습니다. )

## **사용방법([Example](https://dulcet-fairy-055d1f.netlify.app/))**

`fullpage-scroll-component`는 `StepScroll` 컴포넌트와 `useStepScroll` 훅 하나를 제공합니다.

- `StepScroll` 컴포넌트는 스크롤 구역을 설정할 때 사용합니다. `Page`의 도움을 받습니다.

- `StepScroll` 컴포넌트는 세가지 프랍스를 넘겨받습니다.

  - `defaultPage`: 화면에 위치시킬 디폴트 페이지를 설정합니다.(0보다 크고 전체 페이지 갯수와 같거나 작은 수로 설정, default is 0)

  - `delay`: 화면이 넘어가는 딜레이를 조정합니다 (default is 300, 단위 ms)

  - `isPreventDefault`: 스크롤을 막는 설정값입니다. (default is true)

```typescript
function App() {
  return (
    <StepScroll>
      <Page>
        <FirstCustomComponent />
      </Page>
      <Page>
        <SecondCustomComponent />
      </Page>
      <Page>
        <ThirdCustomComponent />
      </Page>
    </StepScroll>
  );
}
```

- `StepScroll`컴포넌트 하위에선 `useStepScroll` 훅을 통해 스크롤 조작이 가능합니다.

- `useStepScroll`이 반환하는 값은 아래와 같습니다.

  - `currentPage`: 현재 화면에 보이는 페이지 번호.

  - `resetCurrent`: 훅을 불러올때 입력했던 디폴트 페이지 번호로 초기화 합니다.

  - `hasNextPage`: 다음 페이지의 존재 여부를 나타냅니다.

  - `hasPrevPage`: 이전 페이지의 존재 여부를 나타냅니다.

  - `nextPage`: 다음 페이지로 이동하는 함수입니다.

  - `prevPage`: 이전 페이지로 이동하는 함수입니다.

  - `movePage`: 넘어가고자 하는 페이지를 인자로 넣고 실행하면 해당 페이지로 이동합니다.

```typescript
function FirstCustomComponent() {
  const {
    currentPage,
    resetCurrent,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
    movePage,
  } = useStepScroll();
  return <div></div>;
}
```

## **사용예시**

### 컴포넌트 내부에서 사용

```typescript
function FirstCustomComponent() {
  const {
    currentPage,
    resetCurrent,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
    movePage,
  } = useStepScroll();
  return (
    <div>
      {hasPrevPage && <button onClick={prevPage}>Prev</button>} // 이전 페이지ㅣ
      {hasNextPage && <button onClick={nextPage}>Next</button>}
    </div>
  );
}
```

- `StepScroll` 컴포넌트 하위 컴포넌트에서 `useStepScroll`을 통해 페이지를 이동하는 버튼을 만들 수 있습니다.

### ref 를 활용한 사용

```typescript
function App() {
  const ref = useRef<HandleScroll>(null);

  return (
    <>
      <StepScroll ref={ref}>
        <StepScroll.Page>
          <FirstCustomComponent />
        </StepScroll.Page>
        <StepScroll.Page>
          <SecondCustomComponent />
        </StepScroll.Page>
        <StepScroll.Page>
          <ThirdCustomComponent />
        </StepScroll.Page>
      </StepScroll>
      <button
        onClick={() => {
          ref.current.next();
        }}
      >
        다음페이지
      </button>
      <button
        onClick={() => {
          ref.current.next();
        }}
      >
        이전페이지
      </button>
      <button
        onClick={() => {
          ref.current.move(2);
        }}
      >
        2페이지로 이동
      </button>
      <button
        onClick={() => {
          ref.current.resetCurrent();
        }}
      >
        처음화면으로
      </button>
    </>
  );
}
```

- ref를 사용해 StepScroll 컴포넌트의 일부 동작을 조작할 수 있습니다.

  - `currentPage`: 현재 페이지를 나타냅니다.

  - `nextPage`: 다음페이지로 이동하는 함수입니다.

  - `prevPage`: 이전페이지로 이동하는 함수입니다.

  - `movePage`: 특정페이지로 이동하는 함수입니다.

  - `resetCurrentPage`: 처음(디폴트 or 0번째)화면으로 돌아가는 함수입니다.
