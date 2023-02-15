import { useEffect, useRef, useState } from "react";
import { boardDataCode } from "../../../lib/boardData";

const BoardEngineList = {};
let CurViewer: any = false;
let CurId = false;

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

export async function loadBoardData(boardToLoad) {
  if (boardToLoad && boardToLoad.length > 0) {
    for (const type of boardToLoad) {
      try {
        if (type && !(type in BoardEngineList)) {
          let whatGame = boardDataCode[type];
          //// console.log(whatGame);
          let bD = await import(`../../../lib/boardData/${whatGame}`);

          BoardEngineList[type] = bD.data;
        }
      } catch (e) {
        // console.log(e);
      }
    }

    //CurViewer = BoardEngineList[boardToLoad[0]];
    //CurId = boardToLoad[0];
  }
}

export function PageMakerGameBoard({
  valueSource,
  boardData,
  listenOnRender = false,
  onRenderFinish = () => {},
}) {
  const [cUp, setcUp] = useState({});
  const boardCtr = useRef(0);

  let row = valueSource.boardCountRow;
  let col = valueSource.boardCountColumn;
  let offset = Number(valueSource.boardCountOffset || 0);

  function setCurBoard() {
    CurViewer = BoardEngineList[boardData.boardCollection[0].code];
    CurId = boardData.boardCollection[0].code;
    setcUp({ ...cUp });
    //// console.log(puzzleEngines.current)
    //// console.log(boards.boardCollection[0].code)
  }

  useEffect(() => {
    setCurBoard();
  }, [boardData]);

  useEffect(() => {
    listenOnRender &&
      boardData &&
      CurViewer.viewerView &&
      boardData.boardCollection &&
      onRenderFinish();
  });

  return CurViewer &&
    boardData.boardCollection &&
    boardData.boardCollection[0].code === CurId ? (
    <>
      {boardData && boardData.boardCollection && (
        <div
          className="grid w-full h-full"
          style={{
            gridTemplateRows: `repeat(${row}, minmax(0, 1fr))`,
            gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`,
            gap: `${valueSource.boardGap / 100}rem`,
          }}
        >
          {boardData.boardCollection
            .slice(offset * row * col, (offset + 1) * (row * col))
            .map((e, i) => {
              return (
                <div
                  key={`b_${i}`}
                  className="relative pageMakerGameBoard h-full bg-white"
                >
                  <p className="pb-2 text-md text-center font-bold">
                    {offset * row * col + i + 1}
                  </p>

                  <CurViewer.viewerView
                    board={e.data}
                    showBoard={boardData.isBoard}
                  />
                </div>
              );
            })}
        </div>
      )}
    </>
  ) : (
    <div className="w-3 h-3 bg-blue animate-spin"></div>
  );
}
