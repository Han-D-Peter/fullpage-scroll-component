import { ReactElement } from "react";
import Page from "./Page";
interface StepScrollProps {
    children: ReactElement<typeof Page>[];
    defaultPage: number;
}
interface HandleScroll {
    /**
     * 현재 페이지 번호를 나타냅니다.
     */
    readonly current: number;
    /**
     * 다음페이지로 이동합니다.
     * 다음페이지가 존재하지 않는다면 동작하지 않습니다.
     */
    readonly next: () => void;
    /**
     * 이전페이지로 이동합니다.
     * 이전페이지가 존재하지 않는다면 동작하지 않습니다.
     */
    readonly prev: () => void;
    /**
     * 특정페이지로 이동합니다.
     * 없는 페이지라면 동작하지 않습니다.
     */
    readonly move: (to: number) => void;
    /**
     * 처음페이지 or 디폴트 페이지로 이동합니다.
     */
    readonly resetCurrent: () => void;
}
declare const _default: import("react").ForwardRefExoticComponent<StepScrollProps & import("react").RefAttributes<HandleScroll>>;
export default _default;
