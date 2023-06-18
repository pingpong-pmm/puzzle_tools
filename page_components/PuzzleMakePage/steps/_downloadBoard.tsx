
import { useEffect, useState } from "react";
import ComButton from "../../../components/Button1";
import { chunkify_collection, formatDate } from "../../../lib/utilities";
import { boardDataCode } from "../../../lib/boardData";
import CreatorDOM from "../../../components/Creator";
import { bookTypes } from "../../LayoutPage/Components/Variables";
import router from "next/router";
import { boardCollectionDB, db } from "../../../db/idb";

let totalProg = 0;
let queueBoard = [];
let queueSolution = [];
let currentIndex = 0;
let nextIndex = 0;

function BoardDownload({ info, token, board }) {
  const [boardCol, setBoardCol] = useState<any>(false);

  const [loaded, setLoaded] = useState(false);

  let [boardData, setBoardData] = useState<any>(false);
  const [fD, setFD] = useState<any>(false);
  const [boardToProc, setBoardToProc] = useState(false);
  const [boardToProcLen, setBoardToProcLen] = useState<any>(false);

  const [solToProc, setSolToProc] = useState(false);

  const [processed, setProcessed] = useState(0);
  const [packaged, setPackaged] = useState(0);
  const [downloading, setDownloading] = useState(0);

  const [generatingBoard, setGeneratingBoard] = useState(true);

  const [accProg, setAccProg] = useState(0);

  const [chunkSize, setChunkSize] = useState(50);
  //const [batchSize, setBatchSize] = useState(1);

  async function createBookPages() {
    // Encrypt it browser side, make it a hassle so that anyone doing this will question their motives.
    try {
      // const token = jwt.sign(
      //   JSON.stringify({ data: [boardCol.simple], type: bookTypes.activity }),
      //   process.env.NEXT_PUBLIC_JWTSecret
      // );
      // await localStorage.setItem("pmm_boards", token);
      await db.bookCreatorBoards.clear();
      const id = await db.bookCreatorBoards.add({
        data: [boardCol.simple],
        type: bookTypes.activity,
      });
    } catch (e) {
      alert("Error: Unable to create token.");
      console.log(e);
    }

    return router.push("/tools/Activity-Book-Creator-Software");
  }

  async function combineBookInterior() {
    return router.push(
      "/tools/Activity-Book-Creator-Software/start-now?simple=true"
    );
  }

  async function loadBoard() {
    try {
      // let boardCol = await Account.board.getCollection(token, board);
      console.log({ board })
      let boardCol: any = await boardCollectionDB.boardCollectionDB.get(board)
      boardCol = {
        simple: boardCol
      }
      setBoardCol(boardCol);
      setChunkSize(boardCol.simple.boardCollection.length);
      let whatGame = boardDataCode[boardCol.simple.boardCollection[0].code];
      let bD = await import(`/lib/boardData/${whatGame}`);
      setBoardData(bD.data);
      setFD(bD.data.state);
      setLoaded(true);
    } catch (e) {
      // console.log(e);
    }
  }

  useEffect(() => {
    loadBoard();
  }, []);

  // const createBoards = () => {
  //   let board = [];
  //   let solution = [];
  //   let data = boardCol.simple.boardCollection.map((e) => {
  //     let p = JSON.parse(e.data);

  //     board.push(p.board);

  //     if (p.solution) {
  //       solution.push(p.solution);
  //     }
  //   });
  //   queueBoard = chunkify_collection(board, chunkSize);
  //   if (solution.length !== 0) {
  //     queueSolution = chunkify_collection(solution, chunkSize);
  //   }

  //   totalProg = queueBoard.length;
  //   currentIndex = 0;
  //   nextIndex = 0;
  //   setAccProg(0);

  //   onFinishBatch();
  // };

  const createBoardsAll = () => {
    let board = [];
    let solution = [];
    let data = boardCol.simple.boardCollection.map((e) => {
      let p = e.data;

      board.push(p.board);

      if (p.solution) {
        solution.push(p.solution);
      }
    });
    queueBoard = chunkify_collection(board, board.length);
    if (solution.length !== 0) {
      queueSolution = chunkify_collection(solution, solution.length);
    }

    setChunkSize(board.length);
    totalProg = queueBoard.length;
    currentIndex = 0;
    nextIndex = 0;
    setAccProg(0);

    onFinishBatch();
  };

  function onFinishBatch() {
    if (queueBoard.length > 0) {
      //console.log("onFinishBatch: called")
      setBoardToProc(false);
      setProcessed(0);
      setPackaged(0);
      setGeneratingBoard(true);
      currentIndex += nextIndex;
      setAccProg(totalProg - queueBoard.length);
      if (queueBoard.length !== 0) {
        setSolToProc(queueSolution.shift());
      }
      let b = queueBoard.shift();
      nextIndex = b.length;
      setBoardToProc(b);
      setBoardToProcLen(b.length);
    } else {
      setBoardToProc(null);
      setProcessed(null);
      setPackaged(null);
      setGeneratingBoard(null);
      currentIndex = 0;
      setAccProg(null);
      setSolToProc(null);
      setBoardToProc(null);
      setBoardToProcLen(null);

      setBoardToProc(false);
    }
  }

  // function setBatchSizeFunc(value) {
  //   if (value > boardCol.simple.boardCollection.length) {
  //     console.error("batch size can't be > than collection len");
  //     return;
  //   }
  //   setBatchSize(value);
  //   setChunkSize(Math.ceil(boardCol.simple.boardCollection.length / value));
  // }

  return (
    <div className="w-full">
      <div className="relative z-30 bg-white min-h-screen w-full">
        {loaded ? (
          <div className="flex flex-col-reverse lg:flex-row mx-8 break-all">
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-4 mt-4 rounded-xl shadow-lg">
                {/* <ComField
                  title="Title"
                  value={boardCol.simple.title as string}
                /> */}
                <h1 className="text-2xl">Title: {boardCol.simple.title}</h1>
                {/* <ComField
                  title="Created at"
                  value={formatDate(boardCol.simple.datetime)}
                /> */}
                {/*<h1>Created at: {formatDate(boardCol.simple.datetime)}</h1>*/}
                {/* <ComField
                  title="Total Collection Content"
                  value={boardCol.simple.boardCollection.length}
                /> */}
                <h1>
                  Total Collection Content:{" "}
                  {boardCol.simple.boardCollection.length}
                </h1>
              </div>

              <div className="bg-white p-4 mt-4 rounded-xl shadow-lg">
                <p className="text-xl text-gray-500">Board Samples (First 01)</p>
                <div className="grid">
                  {boardCol.simple.boardCollection.slice(0, 1).map((e, i) => {
                    console.log(e)
                    return (
                      <div
                        key={`col_${i}`}
                        className="lg:-ml-5 w-full text-center m-3"
                      >
                        <p className="mb-2">{e.id}</p>
                        <div className="w-full">
                          <boardData.viewerView board={e.data} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white mt-4 rounded-xl shadow-lg">
                <p className="text-xl text-gray-500">
                  Board Samples (First 12)
                </p>
                <div className="grid w-full gap-3">
                  {boardCol.simple.boardCollection.slice(0, 12).map((e, i) => {
                    return (
                      <div
                        key={`col_${i}`}
                        className="md:-ml-5 w-full text-center"
                      >
                        <div className="w-full">
                          <boardData.viewerView board={e.data} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 relative md:ml-2">
              <div className="block md:fixed  lg:flex flex-col p-5 shadow-xl rounded-lg bg-white break-normal w-full lg:w-1/4">
                <p className="text-2xl text-center mb-5">Download Options</p>
                {!boardToProc ? (
                  <>
                    {/* <ComButton text="Download in Batch" action={createBoards} />

                    <ComInput
                      type="number"
                      value={batchSize}
                      setValue={setBatchSizeFunc}
                      label="How many batches to download?"
                      icon={"wrench"}
                    /> */}
                    <ComButton
                      text="Download All (Recommended)"
                      action={createBoardsAll}
                    />
                    <p className="text-xs mb-5 text-center border border-2 rounded-xl border-secCol1-400 shadow-xl mt-4">
                      Note: You do not need to download the puzzles if you would
                      like to make the interiors of your book with the Activity
                      Book Creator Tool. It will automatically save your puzzle
                      boards to create the book interiors that you want.
                    </p>

                    <ComButton
                      text="Create Book Pages (Beta)"
                      action={createBookPages}
                    />
                    <ComButton
                      text="Combine Book Interiors (Beta)"
                      action={combineBookInterior}
                    />
                  </>
                ) : (
                  <>
                    <p>
                      {generatingBoard
                        ? "Generating: Boards"
                        : "Generating: Solutions"}{" "}
                      in chunk size {chunkSize}
                    </p>
                    {downloading ? (
                      <>
                        <div className="flex justify-center items-center my-4">
                          <p className="animate-ping bg-secCol1 w-3 h-3 mr-2">
                            &nbsp;
                          </p>
                          Downloading File Now
                          <p className="animate-ping bg-primCol1 w-3 h-3 ml-2">
                            &nbsp;
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="my-2">
                          <p>
                            Processed Data{" "}
                            {!generatingBoard ? (
                              `[${boardToProcLen}/${boardToProcLen}] +`
                            ) : (
                              <></>
                            )}{" "}
                            [{processed}/{boardToProcLen}]
                          </p>
                          <div className="border h-2 flex-1">
                            <div
                              className="bg-secCol1 h-full"
                              style={{
                                width: `${Math.min(processed / boardToProcLen, 1) * 100
                                  }%`,
                              }}
                            />
                          </div>
                        </div>
                        <div className="my-2">
                          <p>
                            Packaged Images{" "}
                            {!generatingBoard ? (
                              `[${boardToProcLen}/${boardToProcLen}] +`
                            ) : (
                              <></>
                            )}{" "}
                            [{packaged}/{boardToProcLen}]
                          </p>
                          <div className="border h-2 flex-1">
                            <div
                              className="bg-primCol1 h-full"
                              style={{
                                width: `${Math.min(packaged / boardToProcLen, 1) * 100
                                  }%`,
                              }}
                            />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="my-2">
                      <p>
                        Total Progress [{accProg}/{totalProg}]
                      </p>
                      <div className="border h-2 flex-1">
                        <div
                          className="bg-green-600 h-full"
                          style={{
                            width: `${(accProg / totalProg) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-screen flex justify-center items-center">
            <div className="w-5 h-5 bg-secCol1-500 animate-spin"></div>
          </div>
        )}
      </div>
      {loaded && boardToProc ? (
        <div>
          <CreatorDOM
            DownloadView={boardData.downloaderView}
            namePrefix={boardCol.simple.title}
            startNumberAt={currentIndex}
            resultZipName={`${boardCol.simple.title}_[${totalProg - queueBoard.length
              }]`}
            cnt={boardToProcLen}
            collectionBoard={boardToProc}
            collectionSolution={solToProc}
            onProcessOneDown={setProcessed}
            onJobOneDown={setPackaged}
            onChangeTask={setGeneratingBoard}
            onDownloading={setDownloading}
            onEnd={onFinishBatch}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default BoardDownload;
