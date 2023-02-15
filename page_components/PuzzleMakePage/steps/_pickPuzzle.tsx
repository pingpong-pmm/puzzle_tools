import { useRouter } from "next/router";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";



// import Account from "../../../lib/mw/Accounts";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { move, reorder } from "../../../lib/dnd_functions";
import { PortalAwareItem } from "../../../components/utils/PortalAwareItem";
import { bookTypes } from "../../LayoutPage/Components/Variables";
import {boardCollectionDB} from "../../../db/idb";

function PickPuzzles({ info, token }) {
  const router = useRouter();
  const { query } = router;
  const { type } = query;

  const [boardList, setBoardList] = useState<any>(false);
  const [toProcess, setToProcess] = useState([]);
  const portal = useRef(null);

  function addPortal() {
    document.querySelector("my-super-cool-portal") &&
      document.querySelector("my-super-cool-portal").remove();
    const _portal = document.createElement("div");
    _portal.classList.add("my-super-cool-portal");

    if (!document.body) {
      throw new Error("body not ready for portal creation!");
    }

    document.body.appendChild(_portal);

    portal.current = _portal;
  }

  async function loadData() {
    // let bL = await Account.board.getCollectionList(token, [0, 99]);
    // todo
    let bL = boardCollectionDB.boardCollectionDB.toCollection()
    //// console.log(bL);
    setBoardList(bL);
  }

  useEffect(() => {
    addPortal();
    loadData();
  }, []);

  function onDragEnd(result) {
    //// console.log(result)

    //debugger;

    // dropped outside the list
    if (!result.destination) {
      return;
    }

    let target = {
      boardList: {
        state: boardList.simple,
        setState: (newVal) => setBoardList({ ...boardList, simple: newVal }),
      },
      toProcess: {
        state: toProcess,
        setState: (newVal) => setToProcess(newVal),
      },
    };

    if (result.destination.droppableId !== result.source.droppableId) {
      const items = move(
        target[result.source.droppableId].state,
        target[result.destination.droppableId].state,
        result.source,
        result.destination
      );

      target[result.source.droppableId].setState(
        items[result.source.droppableId]
      );
      target[result.destination.droppableId].setState(
        items[result.destination.droppableId]
      );
    } else {
      const items = reorder(
        target[result.destination.droppableId].state,
        result.source.index,
        result.destination.index
      );

      target[result.destination.droppableId].setState(items);
    }
  }

  async function nextPage() {
    // Encrypted Token Method
    //let tok = await AccountFE.signData(toProcess)
    ////// console.log(tok.data.token)
    ////// console.log(JSON.stringify(toProcess))
    //localStorage.setItem('pmm_boards', tok.data.token)

    // Encrypt it browser side, make it a hassle so that anyone doing this will question their motives.

    localStorage.setItem("pmm_boards", token);

    if (type == "simple") {
      return router.push("/tools/pagemake/page/ezlayout/");
    }
    return router.push("/tools/pagemake/page/layout/");
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-row my-6 mx-12">
        <div className="m-auto w-full flex flex-col md:flex-row">
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex-[6]">
              <h2 className="text-lg">Your Boards</h2>

              <Droppable droppableId="boardList">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`${
                      snapshot.isDraggingOver ? "bg-gray-400" : "bg-white"
                    } p-3 m-3 rounded-lg shadow-lg h-[60vh] overflow-auto`}
                  >
                    {boardList ? (
                      boardList.simple && boardList.simple.length > 0 ? (
                        boardList.simple.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <PortalAwareItem
                                provided={provided}
                                snapshot={snapshot}
                                portal={portal.current}
                                className={`${
                                  snapshot.isDragging
                                    ? "bg-gray-400"
                                    : "bg-transparent"
                                } p-5 border shadow-md m-1`}
                                content={
                                  <>
                                    <p className="text-2xl">{item.title}</p>
                                    <div className="text-sm">
                                      {item.boardCollection.length} Boards
                                    </div>
                                  </>
                                }
                              />
                            )}
                          </Draggable>
                        ))
                      ) : (
                        <p className="w-full h-full flex justify-center items-center flex-col">
                          You have no puzzles to use yet for book.
                          <Link
                            href="/tools/pagemake/create"
                            passHref={true}
                            className=" text-center p-1 m-1 text-white bg-secCol1-600 border-b-4 border-b-secCol1-800 rounded-md"
                          >
                            {" "}
                            Create Now
                          </Link>
                        </p>
                      )
                    ) : (
                      <p>Loading the Boards</p>
                    )}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>

            <div className="flex-1 flex justify-center items-center">
              <p className="text-xs text-center">
                Drag Board Sets from left to right to include them in your
                Project
              </p>
            </div>

            <div className="flex-[6]">
              <h2 className="text-lg">To Be Used On Project</h2>
              <Droppable droppableId="toProcess">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`${
                      snapshot.isDraggingOver ? "bg-gray-400" : "bg-white"
                    } p-3 m-3 rounded-lg shadow-lg h-[60vh]  overflow-auto`}
                  >
                    {toProcess.length > 0 ? (
                      toProcess.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <PortalAwareItem
                              provided={provided}
                              snapshot={snapshot}
                              portal={portal.current}
                              className={`${
                                snapshot.isDragging
                                  ? "bg-gray-400"
                                  : "bg-transparent"
                              } p-5 border shadow-md m-1`}
                              content={
                                <>
                                  <p className="text-2xl">{item.title}</p>
                                  <div className="text-sm">
                                    {item.boardCollection.length} Boards
                                  </div>
                                </>
                              }
                            />
                          )}
                        </Draggable>
                      ))
                    ) : (
                      <p>Drag Board Collection Here you&#39;d want to use</p>
                    )}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-end mx-24 my-4">
        <div className="border border-secCol1-300 p-2 rounded-lg shadow-md mr-0 md:mr-16">
          <h2 className="text-xl mb-4">What to do here?</h2>
          <p className="text-sm text-justify">
            The left box will load all of the boards you had created. Drag a
            puzzle collection from left to right to include it in your project.
            Note that the dragged boards will be final and you cant add new
            boards inside the layout creator itself. Although, you can create as
            many page project as you like.
          </p>
        </div>
        <button
          className="p-3 bg-secCol1-300 disabled:bg-secCol1-50  text-white"
          onClick={nextPage}
          disabled={toProcess.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default PickPuzzles;
