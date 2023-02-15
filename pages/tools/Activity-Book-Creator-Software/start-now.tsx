import { useRouter } from "next/router";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { move, reorder } from "../../../lib/dnd_functions";
import { PortalAwareItem } from "../../../components/utils/PortalAwareItem";
import { bookTypes } from "../../../page_components/LayoutPage/Components/Variables";
import {boardCollectionDB, db} from "../../../db/idb";

const stepsName = [
  "Pick Puzzles",
  "Page Size",
  // "Set Book Settings",
  "Book Interior",
  "Book Settings",
  "Done",
];

function PageMakePick({ info, token }) {
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
    // todo

    // let bL = await Account.board.getCollectionList(token, [0, 99]);
    let bL = await boardCollectionDB.boardCollectionDB.toCollection().toArray()

    console.log(bL);

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
    //localStorage.setItem('pmm_boards', tok.data.token)

    // Encrypt it browser side, make it a hassle so that anyone doing this will question their motives.
    try {
      await db.bookCreatorBoards.clear();
      const id = await db.bookCreatorBoards.add({
        data: toProcess,
        type: bookTypes.activity,
      });

      // const token = jwt.sign(
      //   JSON.stringify({ data: toProcess, type: bookTypes.activity }),
      //   process.env.NEXT_PUBLIC_JWTSecret
      // );
      // localStorage.setItem("pmm_boards", token);
    } catch (e) {
      alert("Error: Unable to create token.");
      console.log(e);
    }

    if (type == "simple") {
      return router.push("/tools/Activity-Book-Creator-Software");
    }
    return router.push("/tools/Activity-Book-Creator-Software");
  }

  return (
      <div className="min-h-screen">

        <ul
            id="progress-bar"
            className="table steps transform translate-y-full"
        >
          {stepsName.map((e, i) => (
              <li
                  key={i}
                  className={`step ${
                      0 == i ? "is-active" : 0 > i ? "is-complete" : ""
                  }`}
                  {...{ "data-step": i + 1 }}
              >
                {e}
              </li>
          ))}
        </ul>
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
                                      href="/tools/Puzzle-Maker-Software"
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
                            <p>Drag Board Collections Here for Book Interior</p>
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
              This is the first step of creating your pages / book. Take a
              look at the left side where you see all the boards you have
              created in the last 24 hours. Decide which you want to use to
              create your interior of your book and then drag them to the
              right side and then click continue.
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


export default PageMakePick;

