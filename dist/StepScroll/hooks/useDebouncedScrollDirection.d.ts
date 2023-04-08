interface useDebouncedScrollDirection {
    /**
     * 위로 스크롤 하게 되면 실행할 콜백을 설정합니다.
     */
    upScrollCallback?: () => void;
    /**
     * 아래로 스크롤 하게 되면 실행할 콜백을 설정합니다.
     */
    downScrollCallback?: () => void;
    /**
     * 스크롤 이벤트에서 스크롤 동작을 실행하지 않도록 합니다.
     * @default
     * preventDefault의 기본 값은 false 입니다.
     */
    preventDefault?: boolean;
    /**
     * 스크롤에 따른 콜백 실행까지 지연되는 디바운스 시간을 설정합니다.
     * @default
     * debounceDelay 기본 값은 10000 입니다.
     */
    debounceDelay?: number;
}
export default function useDebouncedScrollDirection({ upScrollCallback, downScrollCallback, preventDefault, debounceDelay, }: useDebouncedScrollDirection): "" | "up" | "down";
export {};
