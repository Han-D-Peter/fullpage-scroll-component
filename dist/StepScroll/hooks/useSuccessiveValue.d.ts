import { Dispatch, SetStateAction } from "react";
interface useSuccessiveValue {
    /**
     * 시작 숫자를 지정합니다.
     */
    defaultNumber?: number;
    /**
     * 최대번호를 지정합니다.
     * 최대번호가 넘어가면 next, prev 함수가 동작하지 않습니다.
     */
    maximum: number;
}
interface useSuccessiveValueReturnType {
    /**
     * 현재 번호 입니다.
     */
    current: number;
    /**
     * 현재 번호를 변형시키는 dispatch 입니다.
     */
    setCurrent: Dispatch<SetStateAction<number>>;
    /**
     * 디폴트 값으로 초기화 하는 함수입니다.
     */
    resetCurrent: () => void;
    /**
     * 다음 번호로 변화시키는 함수입니다.
     */
    next: () => void;
    /**
     * 이전 번호로 변화시키는 함수입니다.
     */
    prev: () => void;
    /**
     * 다음 번호가 있는지 여부를 나타냅니다.
     */
    hasNext: boolean;
    /**
     * 이전 번호가 있는지 여부를 나타냅니다.
     */
    hasPrev: boolean;
    /**
     * 특정 값으로 변형시킵니다.
     */
    move: (to: number) => void;
}
export declare const useSuccessiveValue: ({ defaultNumber, maximum, }: useSuccessiveValue) => useSuccessiveValueReturnType;
export {};
