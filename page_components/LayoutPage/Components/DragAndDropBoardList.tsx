import { useEffect, useRef } from "react";
import { reorder } from "../../../lib/dnd_functions";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { PortalAwareItem } from "../../../components/utils/PortalAwareItem";


export default function DragAndDropBoardList({
  deleteBoard,
  toProcess,
  setToProcess,
  curId,
  setCurId,
}) {
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

  useEffect(() => {
    addPortal();
  }, []);

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    let target = {
      toProcess: {
        state: toProcess,
        setState: (newVal) => {
          setToProcess(newVal);
        },
      },
    };

    const items = reorder(
      target[result.destination.droppableId].state,
      result.source.index,
      result.destination.index
    );
    target[result.destination.droppableId].setState(items);
    //// console.log(items);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="toProcess">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`${
              snapshot.isDraggingOver ? "bg-gray-400" : "bg-white"
            } border border-gray-600 p-1 rounded-md shadow-md min-w-0 overflow-y-auto lightScrollBar min-h-[50vh] flex-1  sticky top-0`}
          >
            <div className="min-h-0">
              {Object.keys(toProcess).map((i, index) => (
                <Draggable
                  key={toProcess[i].id}
                  draggableId={toProcess[i].id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <PortalAwareItem
                      provided={provided}
                      snapshot={snapshot}
                      portal={portal.current}
                      className={`
                            ${snapshot.isDragging ? "bg-gray-400" : "bg-white"} 
                            ${curId === toProcess[i].id ? "bg-secCol1-200" : ""}
                            p-1 mb-0.5 flex items-center justify-between hideButtons m-1 border-2 border-secCol1-300 shadow-md rounded-md`}
                      params={{
                        onClick: () => setCurId(toProcess[i].id),
                      }}
                      content={
                        <>
                          <p className="cursor-pointer break-all">
                            {toProcess[i].title}{" "}
                            {toProcess[i].rawPage
                              ? ""
                              : toProcess[i].isBoard
                              ? "Board"
                              : "Solution"}
                          </p>
                          <p
                            className="cursor-pointer opacity-40 hover:opacity-100"
                            onClick={() => deleteBoard(toProcess[i].id, index)}
                          >
                         delete
                          </p>
                        </>
                      }
                    />
                  )}
                </Draggable>
              ))}
            </div>

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
