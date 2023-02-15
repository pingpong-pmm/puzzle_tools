import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import {
  pageMargins,
  pageRangePaperBack,
  pageSizeMapFromPx,
} from "../../constants/pageSizes";
import { LayoutList } from "../../components/Page/Contents/PageDirectory";
import { useRouter } from "next/router";
import { PMLayout_Preview } from "./Components/PMComponents";
import {
  _addPageSet,
  _changeValue,
  loadDataFromLocal,
  loadDataFromNet,
} from "./Components/Functions";
import {
  bookTypes,
  dateCountBy,
  form,
  insertableList,
} from "./Components/Variables";

import ComButton from "../../components/Button1";

import PMLite_SettingList from "./PageSteps/PMLite_SettingList";
import PMLite_PagePick from "./PageSteps/PMLite_PagePick";
import PMLite_PageExport from "./PageSteps/PMLite_PageExport";
import PMLite_PageSizeList from "./PageSteps/PMLite_PageSizeList";
import {finalBookDataDB} from "../../db/idb";


const titleSubtitle = {
  [bookTypes.noContent]: "35 No / Low Content",
  [bookTypes.lowContent]: "Planner",
  [bookTypes.activity]: "Activity",
};

const titleTitle = {
  [bookTypes.noContent]: "FREE No / Low Content",
  [bookTypes.lowContent]: "Planner",
  [bookTypes.activity]: "Activity",
};

const stepsName = [
  "Page Size",
  // "Set Book Settings",
  "Book Interior",
  "Book Settings",
  "Done",
];

export function PageMakeLayout({ info, token, query }) {
  const router = useRouter();


  // todo: mark 1
  const pageRef: any = useRef();
  const jobQueue: any = useRef();
  const strictParams: any = useRef({});
  const mainWindow: any = useRef();
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // Initiate Settings Functions
  const [toProcess, setToProcess] = useState<any>(false);
  const [toInsertable, setToInsertable] = useState(false);
  const [pageLayout, setPageLayout] = useState<any>(false);
  const [fD, setFD] = useState<any>(false);
  const [fDType, setFDType] = useState<any>(false);
  const [currentFD, setCurrentFD] = useState<any>(false);
  const [pageInfo, setPageInfo] = useState<any>({});
  const [printSettings, setPrintSettings] = useState<any>({});
  const [pageDetail, setPageDetail] = useState<any>(false);
  const [currentStep, setCurrentStep] = useState<any>(0);
  const [pageType, setPageType] = useState<any>(false);
  const [bookType, setBookType] = useState(0);

  const changeValue = _changeValue(fD, setFD, currentFD);

  async function loadBoard() {
    if (query && query.page) {
      try {
        await loadDataFromNet(

          query,
          setCurrentFD,
          setToProcess,
          setPageLayout,
          setFD,
          setFDType,
          setToInsertable,
          false,
          setPageType
        );
      } catch (e) {
        alert("Error loading page from server. Please try again later.");
      }
    } else {
      try {
        await loadDataFromLocal(
          setCurrentFD,
          setToProcess,
          setPageLayout,
          setFD,
          setFDType,
          setToInsertable,
          setPageType
        );
      } catch (e) {
        alert("Error loading page from local. Please try again later.");
      }
    }
  }

  // Web Functions

  function exportPage() {
    setIsSaving(true);

    setTimeout(async () => {
      let settingsArr = [];
      for (let i in fD) {
        settingsArr.push(JSON.stringify({ id: i, ...fD[i] }));
      }


      const toUpload = {
        title: fD.general.name,
        pages: [],
        boards: Array.from(
          new Set(
            toProcess
              .filter((e) => Number(e.type) === 0)
              .map((e) => typeof(e.id) === "string" ? e.id.replaceAll("s_", "") : e.id.toString())
          )
        ),
        settings: settingsArr,
        type: pageType,
      };

      for (let i of toProcess) {
        toUpload["pages"].push(
          JSON.stringify({
            b_id: i.id,
            p_type: i.type,
            pageType: pageLayout[i.id],
            pageSettingsType: fDType[i.id],
            boardData: typeof(i.id) === "string" ? i.id.replaceAll("s_", "") : i.id.toString(),
            isBoard: i.isBoard,
            isGameBoard: i.type === 0,
            isMultiPage: i.multiPage || false,
            multiPageBatch: i.multiPageBatch || 1,
            dateCountBy: i.datedPage ? i.dateCountBy : false,
            isDatedPage: i.datedPage || false,
          })
        );
      }

      if (query && query.page) {
        //const from = window.location.href.indexOf("No-Content") > -1;

        // await Account.page.updatePage(token, query.page, toUpload);
        router.push(
          `/tools/Book-Exporter/${query.page}?simple=true&type=${bookType}`
        );
      } else {
        if (pageType !== false) {
          toUpload.type = pageType;
        }
        // const res = await Account.page.createPage(token, toUpload);
        //console.log(res);

        // {
        //   owner: id,
        //       title: bodyData.data.title,
        //     pages: bodyData.data.pages,
        //     boards: bodyData.data.boards,
        //     type: bodyData.data.type,
        //     settings: bodyData.data.settings,
        // }
        let id = await finalBookDataDB.finalBookDataTable.add(toUpload)

          router.push(
            `/tools/Book-Exporter/${id}?simple=true&type=${bookType}`
          );
      }

      setIsSaving(false);
    }, 10);
  }

  function countPage() {
    const _jobQueue = [];
    let ind = 0;
    for (let _p in toProcess) {
      let p = toProcess[_p];
      let pageCount = 1;
      let startDate;
      let endDate;

      let batchSize = p.multiPageBatch ? p.multiPageBatch : 1;

      if (!p.rawPage) {
        const perPage = fD[p.id].boardCountColumn * fD[p.id].boardCountRow;
        const totalBoard = p.boardCollection.length;
        pageCount = Math.ceil(totalBoard / perPage);
      } else if (p.multiPage) {
        const totalBoard = fD[p.id].pages * batchSize;
        pageCount = Math.ceil(totalBoard);
      } else if (p.datedPage) {
        startDate = new Date(fD[p.id].startDate);
        endDate = new Date(fD[p.id].endDate);
        startDate.setDate(1);
        endDate.setDate(
          new Date(endDate.getYear(), endDate.getMonth(), 0).getDate()
        );
        const totalBoard = (endDate - startDate) / dateCountBy[p.dateCountBy];
        pageCount = Math.ceil(totalBoard);
      }

      for (let offset = 0; offset < pageCount; offset++) {
        ind += 1;
        _jobQueue.push({
          id: p.id,
          raw: p.rawPage || false,
          offset: offset,
          totalOffset: pageCount,
          curset: _p,
          totalset: toProcess.length,
          currentPage: ind,
          right: ind % 2 === 1,
          dateRange: [startDate, endDate],
          batchOffset: offset % batchSize,
          totalBatch: batchSize,
        });
      }
    }
    const pageCurrent = pageSizeMapFromPx[fD.general.pagesize];
    const pageRange = pageRangePaperBack[pageCurrent][fD.general.pagetype];

    let marginSpecs;

    for (let pC in pageMargins) {
      if (parseInt(pC) > _jobQueue.length) {
        marginSpecs = pageMargins[pC];
        break;
      }
    }

    strictParams.current = {
      margin: marginSpecs,
    };

    jobQueue.current = _jobQueue;
    const indexdummy = Math.max(
      _jobQueue.findIndex((e) => e.id === currentFD),
      0
    );

    let curJob = jobQueue.current[indexdummy];
    setPageDetail({ cur: indexdummy, total: _jobQueue.length - 1 });

    setPrintSettings({
      boardCountOffset: curJob.offset,
      right: curJob.right,
      strictMargin: strictParams.current.margin,
      dateRange: curJob.dateRange,
      batchOffset: curJob.batchOffset,
      totalBatch: curJob.totalBatch,
    });

    setPageInfo({
      length: _jobQueue.length,
      range: pageRange,
      margin: marginSpecs,
    });
  }

  useEffect(() => {


    loadBoard().then(() => {
      const urlCheck = window.location.href;
      if (urlCheck.includes("No-Content-Book")) {
        setBookType(bookTypes.noContent);
      } else if (urlCheck.includes("Planner-Book")) {
        setBookType(bookTypes.lowContent);
      } else if (urlCheck.includes("Activity-Content-Book")) {
        setBookType(bookTypes.activity);
      }
    });
  }, []);

  useEffect(() => {
    toProcess && fD && countPage();
  }, [toProcess, fD]);

  return (
      <div className="h-full flex mb-24">
        {toProcess && form && fDType && fD ? (
            <>
              <div className="flex-1 pt-5">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-3/5 pl-0 lg:pl-8">
                  <div className="h-fit text-center">
                    <h3 className="font-bold">Create a Book</h3>
                    <p>Simple and Fast!</p>
                  </div>

                </div>
                <div className="flex lg:h-[100vh] p-8">
                  <div className="flex flex-col-reverse lg:flex-row border-2 shadow-lg">
                    <div className="flex-[2]">
                      <ul
                          id="progress-bar"
                          className="table steps transform translate-y-full"
                      >
                        {bookType == bookTypes.activity && (
                            <li
                                className={`step is-active`}
                                {...{ "data-step": 0 }}
                            >
                              <Link href="/tools/Activity-Book-Creator-Software/start-now">
                                Pick Puzzles to Use
                              </Link>
                              <br />
                              <p className="-pt-6 text-[0.5rem]">
                                Click above to select again
                              </p>
                            </li>
                        )}
                        {stepsName.map((e, i) => (
                            <li
                                key={i}
                                className={`step ${
                                    currentStep == i
                                        ? "is-active"
                                        : currentStep > i
                                            ? "is-complete"
                                            : ""
                                }`}
                                {...{ "data-step": i + 1 }}
                            >
                              {e}
                            </li>
                        ))}
                      </ul>
                      <div className="m-0 lg:m-16 mt-12">
                        <div className="p-2 lg:p-8 pt-2 h-full border-l-2 border-r-2 border-gray-700">
                          <div className="min-w-0 flex-1 max-h-[50vh] overflow-auto lightScrollBar">
                            <div className="min-h-[55vh]" ref={mainWindow}>
                              {currentStep === 0 && (
                                  <PMLite_PageSizeList
                                      generalValueSource={fD}
                                      changePageSize={changeValue(
                                          "pagesize",
                                          "general"
                                      )}
                                  />
                              )}

                              {currentStep === 1 && (
                                  <PMLite_PagePick
                                      pageList={toInsertable}
                                      toProcess={toProcess}
                                      setToProcess={setToProcess}
                                      curId={currentFD}
                                      setCurId={(v) => {
                                        let ind = jobQueue.current.findIndex(
                                            (e) => e.id === v
                                        );

                                        let curJob = jobQueue.current[ind];
                                        setCurrentFD(curJob.id);
                                        setPageDetail({
                                          ...pageDetail,
                                          cur: ind,
                                        });
                                        setPrintSettings({
                                          boardCountOffset: curJob.offset,
                                          right: curJob.right,
                                          strictMargin:
                                          strictParams.current.margin,
                                          dateRange: curJob.dateRange,
                                          batchOffset: curJob.batchOffset,
                                          totalBatch: curJob.totalBatch,
                                        });
                                      }}
                                      addBoard={(templateName) => {
                                        const _fDType = {},
                                            _fDList = {},
                                            _layoutList = {},
                                            _finData = [],
                                            name = `page:Board_${uuid().slice(
                                                0,
                                                4
                                            )}`;

                                        const dataToAdd = insertableList[
                                            pageType
                                            ][templateName].dataBoard(
                                            name,
                                            _finData,
                                            _fDList,
                                            _fDType,
                                            _layoutList
                                        );

                                        // todo: fix for typescript
                                        // @ts-ignore
                                        _addPageSet(...dataToAdd);

                                        setToProcess([...toProcess, ..._finData]);
                                        setPageLayout({
                                          ...pageLayout,
                                          ..._layoutList,
                                        });
                                        setFD({ ...fD, ..._fDList });
                                        setFDType({ ...fDType, ..._fDType });
                                        setCurrentFD(name);
                                      }}
                                      deleteBoard={(id, index) => {
                                        if (toProcess.length > 1) {
                                          let _tp = [...toProcess];
                                          _tp.splice(index, 1);
                                          setToProcess(_tp);

                                          let _pL = { ...pageLayout };
                                          delete _pL[id];
                                          setPageLayout(_pL);

                                          let _fD = { ...fD };
                                          delete _fD[id];
                                          setFD(_fD);

                                          let _fDT = { ...fDType };
                                          delete _fDT[id];
                                          setFDType(_fDT);

                                          setTimeout(() => {
                                            // console.log(Object.keys(_fD).at(-1));
                                            setCurrentFD(Object.keys(_fD).at(-1));
                                          }, 0);
                                        } else {
                                          alert(
                                              "A Book Must at least Have One Page!"
                                          );
                                        }
                                      }}
                                  />
                              )}
                              {currentStep === 2 && (
                                  <PMLite_SettingList
                                      generalValueSource={fD}
                                      specificValueSource={fD[currentFD]}
                                      formToUse={form[fDType[currentFD]]}
                                      changeValue={changeValue}
                                      toProcess={toProcess}
                                      setToProcess={setToProcess}
                                      curId={currentFD}
                                      setCurId={(v) => {
                                        let ind = jobQueue.current.findIndex(
                                            (e) => e.id === v
                                        );

                                        let curJob = jobQueue.current[ind];
                                        setCurrentFD(curJob.id);
                                        setPageDetail({
                                          ...pageDetail,
                                          cur: ind,
                                        });
                                        setPrintSettings({
                                          boardCountOffset: curJob.offset,
                                          right: curJob.right,
                                          strictMargin:
                                          strictParams.current.margin,
                                          dateRange: curJob.dateRange,
                                          batchOffset: curJob.batchOffset,
                                          totalBatch: curJob.totalBatch,
                                        });
                                      }}
                                      deleteBoard={(id, index) => {
                                        if (toProcess.length > 1) {
                                          let _tp = [...toProcess];
                                          _tp.splice(index, 1);
                                          setToProcess(_tp);

                                          let _pL = { ...pageLayout };
                                          delete _pL[id];
                                          setPageLayout(_pL);

                                          let _fD = { ...fD };
                                          delete _fD[id];
                                          setFD(_fD);

                                          let _fDT = { ...fDType };
                                          delete _fDT[id];
                                          setFDType(_fDT);

                                          setTimeout(() => {
                                            // console.log(Object.keys(_fD).at(-1));
                                            setCurrentFD(Object.keys(_fD).at(-1));
                                          }, 0);
                                        }
                                      }}
                                      token={token}
                                  />
                              )}
                              {currentStep === 3 && (
                                  <PMLite_PageExport exportPage={exportPage} />
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <ComButton
                              text="Previous"
                              action={() => setCurrentStep(currentStep - 1)}
                              disabled={currentStep <= 0}
                          />
                          <ComButton
                              text="Next"
                              action={() => setCurrentStep(currentStep + 1)}
                              disabled={currentStep >= stepsName.length - 1}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="p-8 lg:pr-24 h-full lg:h-[80vh]">
                        <PMLayout_Preview
                            background={false}
                            valueSource={{
                              ...fD.general,
                              ...fD[currentFD],
                              ...printSettings,
                            }}
                            boards={
                              toProcess[
                                  toProcess.findIndex((e) => e.id == currentFD)
                                  ]
                            }
                            PageLayout={LayoutList[pageLayout[currentFD]]}
                            refToUse={pageRef}
                            curPage={pageDetail.cur}
                            totalPage={pageDetail.total}
                            prevFunc={() => {
                              let nextInd = Math.max(0, pageDetail.cur - 1);
                              let curJob = jobQueue.current[nextInd];
                              setCurrentFD(curJob.id);
                              setPageDetail({ ...pageDetail, cur: nextInd });
                              setPrintSettings({
                                boardCountOffset: curJob.offset,
                                right: curJob.right,
                                strictMargin: strictParams.current.margin,
                                dateRange: curJob.dateRange,
                                batchOffset: curJob.batchOffset,
                                totalBatch: curJob.totalBatch,
                              });
                            }}
                            nextFunc={() => {
                              let nextInd = Math.min(
                                  pageDetail.total,
                                  pageDetail.cur + 1
                              );
                              let curJob = jobQueue.current[nextInd];
                              setCurrentFD(curJob.id);
                              setPageDetail({ ...pageDetail, cur: nextInd });
                              setPrintSettings({
                                boardCountOffset: curJob.offset,
                                right: curJob.right,
                                strictMargin: strictParams.current.margin,
                                dateRange: curJob.dateRange,
                                batchOffset: curJob.batchOffset,
                                totalBatch: curJob.totalBatch,
                              });
                            }}
                            isSaving={isSaving}
                            info={info}
                            isNew={!(query && query.page)}
                        />
                      </div>
                      <p className="text-center text-xs hidden">
                        If you want the more advanced page maker,{" "}
                        <Link
                            href="/tools/pagemake/page/layout"
                            className="text-primary"
                        >
                          Click Here
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
        ) : (
            <div className="flex items-center m-auto">
              <div className="w-3 h-3 bg-secCol1-300 animate-pulse mr-3"></div>
              <p>Loading Layout App</p>
            </div>
        )}
      </div>
  );
}
