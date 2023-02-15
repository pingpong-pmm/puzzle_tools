/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import ComButton from "../../../components/Button1";

import BoardList from "../../../page_components/PuzzleMakePage/steps/_boardList";
import PickBoard from "../../../page_components/PuzzleMakePage/steps/_pickBoard";
import BoardCreate from "../../../page_components/PuzzleMakePage/steps/_createBoard";
import BoardDownload from "../../../page_components/PuzzleMakePage/steps/_downloadBoard";

import { useRouter } from "next/router";
import Link from "next/link";

const stepsName = [
  "Your Boards",
  // "Set Book Settings",
  "Create New Board",
  "Modify Settings",
  "View and Download",
];

function PuzzleMakerPage({ info, token }) {
  const [boardType, setBoardType] = useState("");
  const [boardDoneId, setBoardDoneId] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [purchaseList, setPurchaseList] = useState([]);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      // let purchasedList = await Accounts.features.checkAll(token);

      // TODO: add items

      // purchasedList.simple &&
      //   setPurchaseList(
      //     purchasedList.simple.map((item) => item.feature_id.feature_id)
      //   );
    })();
    const { step } = router.query;
    if (step !== undefined && step !== null && step !== "" && step === "1") {
      setCurrentStep(1);
    }
  }, []);

  async function pickBoard(boardType) {
    // TODO: work


      // console.log(purchased);
      setBoardType(boardType);
      setCurrentStep(2);

  }

  function setFinishBoard(boardId) {
    setBoardDoneId(boardId);
    setCurrentStep(3);
  }

  return (
    <div>
      <div className="min-h-screen max-w-screen-xl mx-auto container">
        <div className="flex flex-col items-center">

          <div className="flex pb-8">
            <ul
                id="progress-bar"
                className="table steps transform translate-y-full"
            >
              {stepsName.map((e, i) => (
                  <li
                      key={i}
                      className={`${
                          i < currentStep ? "cursor-pointer" : ""
                      } step ${
                          currentStep == i
                              ? "is-active"
                              : currentStep > i
                                  ? "is-complete"
                                  : ""
                      }`}
                      {...{ "data-step": i + 1 }}
                      onClick={
                        i < currentStep
                            ? setCurrentStep.bind(this, i)
                            : () => {}
                      }
                  >
                    {e}
                  </li>
              ))}
            </ul>
          </div>
          {currentStep == 0 && (
              <div className="flex flex-col items-center w-full">
                <ComButton
                    text="Create A New Puzzle"
                    action={setCurrentStep.bind(this, 1)}
                    extraParams={null}
                />

                <BoardList token={token} setFinishBoard={setFinishBoard} />
              </div>
          )}
          {currentStep == 1 && (
              <div>
                <button
                    className="text-secCol1 pl-8 cursor-pointer"
                    onClick={setCurrentStep.bind(this, currentStep - 1)}
                >
                  &lt;&lt; Go Back
                </button>
                <PickBoard
                    purchaseList={purchaseList}
                    setBoardType={pickBoard}
                />
              </div>
          )}
          {currentStep == 2 && (
              <div className="w-full">
                <button
                    className="text-secCol1 pl-8 cursor-pointer"
                    onClick={setCurrentStep.bind(this, currentStep - 1)}
                >
                  &lt;&lt; Go Back
                </button>
                <BoardCreate
                    onCreateFinish={setFinishBoard}
                    boardType={boardType}
                    token={token}
                    info={info}
                />
              </div>
          )}
          {currentStep == 3 && (
              <div className="w-full">
                <div className="pl-8">
                  <ComButton
                      text="Create more puzzles"
                      action={setCurrentStep.bind(this, 1)}
                  />
                </div>

                {/* <button
                    className="text-secCol1 pl-8 cursor-pointer"
                    onClick={}
                  >
                    &lt;&lt; Create New Board
                  </button> */}

                <button
                    className="text-secCol1 pl-8 cursor-pointer"
                    onClick={setCurrentStep.bind(this, 0)}
                >
                  &lt;&lt;&lt; View Created Boards
                </button>
                <BoardDownload
                    board={boardDoneId}
                    token={token}
                    info={info}
                />
              </div>
          )}
        </div>
      </div>

    </div>
  );
}



export default PuzzleMakerPage;
