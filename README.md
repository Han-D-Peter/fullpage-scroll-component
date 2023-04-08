# fullpage-scroll-component

## **사용방법**

`fullpage-scroll-component`는 `StepScroll` 컴포넌트와 `useStepScroll` 훅 하나를 제공합니다.

- `StepScroll` 컴포넌트는 스크롤 구역을 설정할 때 사용합니다. `StepScroll.Page`의 도움을 받습니다.

```typescript
function App() {
  return (
    <StepScroll>
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
  );
}
```

- `StepScroll`컴포넌트 하위에선 `useStepScroll` 훅을 통해 스크롤 조작이 가능합니다.
- `useStepScroll`의 인자로 넣어주는 값은 아래와 같습니다.
  - `defaultPage`: 처음 화면에 띄워줄 페이지 번호(0보다 작을 수 없고, 전체 길이보다 클 수 없습니다 -> 예외시 기본값 0)
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
  } = useStepScroll({ defaultPage: 0 });
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
  } = useStepScroll({ defaultPage: 0 });
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
  const ref = useRef(null);

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

  - `current`: 현재 페이지를 나타냅니다.
  - `next`: 다음페이지로 이동하는 함수입니다.
  - `prev`: 이전페이지로 이동하는 함수입니다.
  - `move`: 특정페이지로 이동하는 함수입니다.
  - `resetCurrent`: 처음(디폴트 or 0번째)화면으로 돌아가는 함수입니다.
