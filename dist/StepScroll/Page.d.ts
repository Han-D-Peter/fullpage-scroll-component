import { ReactNode } from "react";
interface PageProps {
    children: ReactNode;
}
/**
 * @description
 * StepScroll 컴포넌트의 children으로만 사용할 수 있는 컴포넌트 입니다.
 */
declare function Page({ children }: PageProps): JSX.Element;
export default Page;
