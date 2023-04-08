import { createContext, useContext } from "react";
export var StepScrollContext = createContext(null);
StepScrollContext.displayName = "StepScroll";
export var useStepScroll = function () {
    var context = useContext(StepScrollContext);
    var currentPage = context.currentPage, hasNextPage = context.hasNextPage, hasPrevPage = context.hasPrevPage, nextPage = context.nextPage, prevPage = context.prevPage, movePage = context.movePage, pagesIdArray = context.pagesIdArray, setPagesIdArray = context.setPagesIdArray;
    return {
        currentPage: currentPage,
        hasNextPage: hasNextPage,
        hasPrevPage: hasPrevPage,
        nextPage: nextPage,
        prevPage: prevPage,
        movePage: movePage,
        pagesIdArray: pagesIdArray,
        setPagesIdArray: setPagesIdArray,
    };
};
