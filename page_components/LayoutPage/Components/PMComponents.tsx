import Link from "next/link";
import { MouseEventHandler, useEffect, useRef } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { PortalAwareItem } from "../../../components/utils/PortalAwareItem";
import ComInput from "../../../components/Inputs/Input";
import ComInputMultiLine from "../../../components/Inputs/InputMultiline";
import Page_Basic from "../../../components/Page/Basic";
import ComRange from "../../../components/Inputs/Range";
import ComSelect from "../../../components/Inputs/Select";
import ComDate from "../../../components/Inputs/Date";
import { reorder } from "../../../lib/dnd_functions";
import { bookTypes, form } from "./Variables";
// import { ZoomableComponent } from "../../../components/ZoomableComponent";

interface IPMLayout_Border {
  toProcess: any;
  setToProcess: Function;
  curId: any;
  setCurId: Function;
  toInsertable: any;
  addBoard: Function;
  deleteBoard: Function;
  setShowSidebar: MouseEventHandler;
}

export function PMLayout_BoardList({
  toProcess,
  setToProcess,
  curId,
  setCurId,
  toInsertable,
  addBoard,
  deleteBoard,
  setShowSidebar,
}: IPMLayout_Border) {
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
    //debugger;

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
      <div className="flex-[2] flex flex-col overflow-hidden relative max-h-[90vh]">
        <button
          className="text-left text-secCol1-300 px-4 pt-2"
          onClick={setShowSidebar}
        >
          &lt; Toggle Sidebar
        </button>
        <div className="h-3/5 w-full p-3 border-b flex flex-col min-w-0 overflow-hidden">
          <p className="">Table of Contents</p>

          <Droppable droppableId="toProcess">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`${
                  snapshot.isDraggingOver ? "bg-gray-400" : "bg-white"
                } border min-w-0 overflow-y-auto max-h-[50vh] flex-1 noScrollBar`}
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
                            ${curId === toProcess[i].id ? "bg-secCol1-50" : ""}
                            p-1 mb-0.5 border-l-2 border-l-secCol1-300 flex items-center justify-between hideButtons`}
                          params={{
                            onClick: () => setCurId(toProcess[i].id),
                          }}
                          content={
                            <>
                              <p className="cursor-pointer">
                                {toProcess[i].title}{" "}
                                {toProcess[i].rawPage
                                  ? ""
                                  : toProcess[i].isBoard
                                  ? "Board"
                                  : "Solution"}
                              </p>
                              <p
                                className="cursor-pointer hideThis"
                                onClick={() =>
                                  deleteBoard(toProcess[i].id, index)
                                }
                              >
                                {/*<FontAwesomeIcon*/}
                                {/*  className="text-black font-thin h-4 mx-4"*/}
                                {/*  icon={["fas", "trash-alt"]}*/}
                                {/*/>*/}
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
        </div>

        <div className="h-2/5 w-full p-3 border-b flex flex-col min-w-0 overflow-hidden">
          <p className="text-xs">Elements (Click to Insert Into Pages)</p>

          <div className="min-h-0 pt-4 overflow-y-auto grid grid-cols-3 gap-0.5 noScrollBar">
            {/*toInsertable &&
              Object.keys(toInsertable).map((i, index) => (
                <div
                  key={`to_ins${index}`}
                  className={`p-1 bg-secCol1-100 text-black cursor-pointer w-full`}
                  onClick={addBoard.bind(this, toInsertable[i].title)}
                >
                  <p className="text-sm text-center">{toInsertable[i].title}</p>
                </div>
              ))*/}
            {toInsertable &&
              Object.keys(toInsertable).map((i, index) => (
                <div
                  key={`to_ins${index}`}
                  className={`p-1 bg-secCol1-100 text-black cursor-pointer w-full`}
                  onClick={addBoard.bind(this, toInsertable[i].title)}
                >
                  <p className="text-sm text-center">{toInsertable[i].title}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export function PMLayout_Settings({
  generalValueSource,
  specificValueSource,
  formToUse,
  changeValue,
}) {
  const createForm = (ee, id, target: any = false) => {
    switch (ee.type) {
      case "select":
        return (
          <ComSelect
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
            options={ee.options}
          />
        );
      case "input":
        return (
          <ComInput
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
          />
        );
      case "number":
        return (
          <ComInput
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
            type="number"
          />
        );
      case "multinp":
        return (
          <ComInputMultiLine
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
          />
        );
      case "range":
        return (
          <ComRange
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
            options={ee.range}
          />
        );
      case "date":
        return (
          <ComDate
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
          />
        );
    }
  };

  return (
    <div className="flex-[2] border">
      <div className="h-full w-full p-3 flex flex-col min-w-0 overflow-hidden">
        <p className="">Settings</p>
        <div className=" min-w-0 flex-1 max-h-[83vh] overflow-auto noScrollBar">
          <div className="min-w-0 pb-[50vh]">
            {form.general.map((e, i) => {
              return (
                <div key={`form_g_${i}`}>
                  <h4 className="text-lg text-center p-2">{e.title}</h4>
                  <hr />
                  <div className="m-2 mt-4">
                    {e.template.map((ee, ii) => {
                      return (
                        ee.id[0] !== "_" &&
                        createForm(ee, `form_g_${i}_${ii}`, "general")
                      );
                    })}
                  </div>
                </div>
              );
            })}
            {formToUse &&
              formToUse.map((e, i) => {
                return (
                  <div key={`form_b_${i}`}>
                    <h4 className="text-lg text-center p-2">{e.title}</h4>
                    <hr />
                    <div className="m-2 mt-4">
                      {e.template.map((ee, ii) => {
                        return createForm(ee, `form_b_${i}_${ii}`);
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

interface IPMLayout_Preview {
  valueSource;
  boards: any;
  refToUse: any;
  PageLayout: any;
  listenOnRender?: boolean;
  onRenderFinish?: Function;
  pageDetails?: any;
  curPage: any;
  totalPage: number;
  prevFunc: MouseEventHandler;
  nextFunc: MouseEventHandler;
  actions?: any;
  isSaving: boolean;
  info: any;
  isNew: boolean;
  remainingTokens?: any;
  background?: boolean;
}

export function PMLayout_Preview({
  valueSource,
  boards: boardData,
  refToUse,
  PageLayout,
  listenOnRender = false,
  onRenderFinish = () => {},
  pageDetails,
  curPage,
  totalPage,
  prevFunc,
  nextFunc,
  actions,
  isSaving,
  info,
  isNew,
  remainingTokens,
  background = true,
}: IPMLayout_Preview) {
  return (
    <div className="flex-[5] flex flex-col bg-white relative h-full">
      {PageLayout ? (
        <div
          className={`${
            background ? "BG_Box" : "BG_Box"
          } relative flex flex-[6] justify-center items-center overflow-hidden z-10 p-5`}
        >
          <div
            className={`h-full max-h-[90vh] transform transform-gpu ${
              listenOnRender ? "shadow-lg border" : ""
            }`}
          >
            {/*<ZoomableComponent>*/}
              <Page_Basic
                refToUse={refToUse}
                settings={valueSource}
                isPrinting={listenOnRender}
              >
                <PageLayout
                  valueSource={valueSource}
                  boardData={boardData}
                  listenOnRender={listenOnRender}
                  onRenderFinish={onRenderFinish}
                />
              </Page_Basic>
            {/*</ZoomableComponent>*/}
          </div>
          {
            <div className="absolute bottom-3 right-3 select-none bg-white border border-black bg-opacity-50 w-fit mx-auto rounded-lg text-xs">
              <div className="flex justify-center items-center p-0.5">
                <p className="cursor-pointer" onClick={prevFunc}>
                  Prev
                  {/*<FontAwesomeIcon*/}
                  {/*  className="text-black font-thin h-4 mx-4"*/}
                  {/*  icon={["fas", "less-than"]}*/}
                  {/*/>*/}
                </p>
                <p className="text-lg">
                  Page {curPage + 1} / {totalPage ? totalPage + 1 : "--"}
                </p>
                <p className="cursor-pointer" onClick={nextFunc}>
                  Next
                  {/*<FontAwesomeIcon*/}
                  {/*  className="text-black font-thin h-4 mx-4"*/}
                  {/*  icon={["fas", "greater-than"]}*/}
                  {/*/>*/}
                </p>
              </div>
            </div>
          }
        </div>
      ) : (
        <div
          className={`${background ? "BG_Box" : "bg-secCol1-50"} flex-[6]`}
        ></div>
      )}
      {pageDetails && (
        <div className="flex bg-secCol1-50">
          {pageDetails}
          <div className="">
            {info.subscription.user_type >= 3 ||
            info.subscription.token_page > 0 ||
            !isNew ? (
              <>
                <div className="flex flex-col items-end">
                  <button
                    className="bg-primCol1-600 text-white p-1 flex-1 m-1 w-full"
                    onClick={actions.saveBoard}
                  >
                    {!isSaving ? (
                      "Save"
                    ) : (
                      <div className=" w-3 h-3 animate-spin mx-auto"></div>
                    )}
                  </button>
                  <button
                    className="bg-secCol1-400 text-black p-1 flex-1 m-1 w-full"
                    onClick={actions.testPrint}
                  >
                    Export
                  </button>
                </div>
                <p className="text-sm text-center">
                  Remaing Books: {remainingTokens}
                </p>
              </>
            ) : (
              <>
                <p>
                  You can&apos;t create any new books, wait until tomorrow or
                  upgrade your plan
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Responsible for Render Page It will render page on /Book-Exporter
 * @param valueSource
 * @param boardData
 * @param refToUse
 * @param PageLayout
 * @param listenOnRender
 * @param curPage
 * @param totalPage
 * @param prevFunc
 * @param nextFunc
 * @param onRenderFinish
 * @returns {JSX.Element}
 * @constructor
 */
export function PMLayout_PreviewExport({
  valueSource,
  boards: boardData,
  refToUse,
  PageLayout,
  listenOnRender = false,
  curPage,
  totalPage,
  prevFunc,
  nextFunc,
  onRenderFinish = () => {},
}) {
  //   console.log("PMLayout_Preview", {
  //     valueSource,
  //     boardData,
  //     refToUse,
  //     PageLayout,
  //   });
  return (
    <div className="flex-[5] bg-white relative">
      {PageLayout ? (
        <div className="BG_Box relative flex h-full justify-center items-center overflow-hidden z-10 p-5">
          <div
            className={`h-full max-h-[90vh] transform transform-gpu ${
              listenOnRender ? "shadow-lg border" : ""
            }`}
          >
            <Page_Basic
              refToUse={refToUse}
              settings={valueSource}
              isPrinting={listenOnRender}
            >
              {/*page content also editable*/}
              <PageLayout
                valueSource={valueSource}
                boardData={boardData}
                listenOnRender={listenOnRender}
                onRenderFinish={onRenderFinish}
              />
            </Page_Basic>
          </div>
          {!listenOnRender && (
            <div className="absolute bottom-0 left-0 right-0 select-none">
              <div className="flex justify-center items-center p-2">
                <p className="cursor-pointer" onClick={prevFunc}>
                 Prev
                </p>
                <p className="text-lg">
                  Page {curPage + 1} / {totalPage ? totalPage + 1 : "--"}
                </p>
                <p className="cursor-pointer" onClick={nextFunc}>
                  Next
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-3 h-3 bg-secCol1-300 animate-pulse m-auto"></div>
      )}
    </div>
  );
}

// ==============================

const baseToolLinks = {
  [bookTypes.noContent]: "FREE-No-Content-Book-Creator-Software",
  [bookTypes.lowContent]: "Planner-Book-Creator-Software",
  [bookTypes.activity]: "Activity-Book-Creator-Software",
};

export function PMLayout_ExportDetails({
  actions,
  domInfo,
  generalValueSource,
  specificValueSource,
  changeValue,
  projId,
  isProcessing,
  complexPage,
}) {
  const createForm = (ee, id, target: any = false) => {
    switch (ee.type) {
      case "select":
        return (
          <ComSelect
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
            options={ee.options}
          />
        );
      case "input":
        return (
          <ComInput
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
          />
        );
      case "multinp":
        return (
          <ComInputMultiLine
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
          />
        );
      case "range":
        return (
          <ComRange
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
            options={ee.range}
          />
        );
      case "number":
        return (
          <ComInput
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
            type="number"
          />
        );
    }
  };

  // const params = new Proxy(new URLSearchParams(window.location.search), {
  //    get: (searchParams, prop) => searchParams.get(prop),
  // });

  let params = new URL(document.location as any).searchParams;
  let bType = params.get("type");
  let bSimple = params.get("simple") === "true";

  return (
    <div className="flex-[2] border">
      {!isProcessing ? (
        <div className="h-[90vh] w-full p-3 flex flex-col min-w-0 overflow-hidden">
          <Link
            href={`/tools/${baseToolLinks[bType]}/${
              bSimple ? "" : "advanced/"
            }${projId}`}
            passHref
            className="flex items-center cursor-pointer"
          >
            <p>Return To Layout</p>
          </Link>
          <p className="mt-4 text-2xl text-center">Export</p>
          <div className=" min-w-0 overflow-auto flex-1 noScrollBar mb-1">
            <div className="min-h-0">
              <div key={`form_g_1`}>
                <div className="m-2 mt-4">
                  {form.print_general.map((e, i) => {
                    return (
                      <div key={`form_g_${i}`}>
                        {complexPage && (
                          <>
                            <h4 className="text-lg text-center p-2">
                              {e.title}
                            </h4>
                            <hr />
                          </>
                        )}
                        <div className="m-2 mt-4">
                          {e.template.map((ee, ii) => {
                            if (
                              !complexPage &&
                              ["quality", "exportType"].includes(ee.id)
                            ) {
                              return null;
                            }
                            return createForm(
                              ee,
                              `form_g_${i}_${ii}`,
                              "print_general"
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div key={`form_g_2`}>
                <h4 className="text-lg text-center p-2">Download Book</h4>
                <hr />
                <div className="m-2 mt-4">
                  {actions.map((e, i) => {
                    return (
                      <button
                        key={`act_${i}`}
                        className={`${e.className} p-1 w-full m-1`}
                        onClick={e.action}
                      >
                        {e.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div key={`form_g_3`}>
          <h4 className="text-lg text-center p-2">Progress</h4>
          <hr />
          <div className="m-2 mt-4">{domInfo}</div>
        </div>
      )}
    </div>
  );
}
