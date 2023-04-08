import { Dispatch, SetStateAction } from "react";
interface StepScrollContextType {
    /**
     * StepScroll chilren에 담기는 Page 컴포넌트들의 아이디를 담은 array 입니다.
     */
    pagesIdArray: string[];
    /**
     * pagesIdArray에 값을 변화시킬 수 있는 함수입니다.
     */
    setPagesIdArray: Dispatch<SetStateAction<string[]>>;
    /**
     * 현재 화면에 보이는 페이지 순서입니다.
     * 0번부터 시작합니다.
     */
    currentPage: number;
    /**
     * 다음 페이지의 존재 여부를 알 수 있습니다.
     */
    hasNextPage: boolean;
    /**
     * 이전 페이지의 존재 여부를 알 수 있습니다.
     */
    hasPrevPage: boolean;
    /**
     * 다음 페이지로 넘기는 함수입니다.
     * 다음 페이지가 없는 경우 동작하지 않습니다.
     */
    nextPage: () => void;
    /**
     * 이전 페이지로 넘기는 함수입니다.
     *  이전 페이지가 없는 경우 동작하지 않습니다.
     */
    prevPage: () => void;
    /**
     * 특정페이지로 이동하는 함수입니다.
     * @param page 넘어가고자 하는 페이지 번호
     */
    movePage: (page: number) => void;
}
export declare const StepScrollContext: import("react").Context<StepScrollContextType | null>;
export declare const useStepScroll: () => StepScrollContextType;
export {};
