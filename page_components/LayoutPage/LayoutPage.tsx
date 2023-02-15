import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { v4 as uuid } from "uuid";
// import Account from "../../lib/mw/Accounts";
import {
  pageSizeMapFromPx,
  pageRangePaperBack,
  pageMargins,
} from "../../constants/pageSizes";
import { LayoutList } from "../../components/Page/Contents/PageDirectory";
import { useRouter } from "next/router";
import {
  PMLayout_BoardList,
  PMLayout_Preview,
  PMLayout_Settings,
} from "./Components/PMComponents";
import {
  loadDataFromLocal,
  loadDataFromNet,
  _addPageSet,
  _changeValue,
} from "./Components/Functions";
import {
  bookTypes,
  dateCountBy,
  form,
  insertableList,
} from "./Components/Variables";

// ==============================

const _bookTypes = {
  0: "token_page",
  1: "token_nocontent",
  2: "token_lowcontent",
};

// commented by md Shakil Hossain (28 Aug 2022) this used on oldpages folder
export function PageMakeLayout({ info, token, query }) {
  //useLayoutEffect(() => {
  //  let data_token = localStorage.getItem("pmm_boards") || false;
  //  if (!data_token){
  //    window.location.href = "/tools/pagemake/page"
  //  }
  //}, [])

  const router = useRouter();
  const pageRef: any = useRef();
  const jobQueue: any = useRef();
  const strictParams: any = useRef({});

  const [saving, setSaving] = useState<any>(false);

  // Initiate Settings Functions
  const [toProcess, setToProcess] = useState<any>(false);
  const [toInsertable, setToInsertable] = useState<any>(false);
  const [pageLayout, setPageLayout] = useState<any>(false);
  const [fD, setFD] = useState<any>(false);
  const [fDType, setFDType] = useState<any>(false);
  const [currentFD, setCurrentFD] = useState<any>(false);

  const [pageInfo, setPageInfo] = useState<any>({});
  const [printSettings, setPrintSettings] = useState<any>({});

  const [pageDetail, setPageDetail] = useState<any>(false);

  const [pageType, setPageType] = useState<any>(false);
  const [bookType, setBookType] = useState<any>(0);

  // Changer Function for FD
  const changeValue = _changeValue(fD, setFD, currentFD);

  async function loadBoard() {
    if (query && query.page) {
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
    } else {
      await loadDataFromLocal(
        setCurrentFD,
        setToProcess,
        setPageLayout,
        setFD,
        setFDType,
        setToInsertable,
        setPageType
      );
    }
  }

  useEffect(() => {
    loadBoard();
    const urlCheck = window.location.href;
    if (urlCheck.includes("No-Content-Book")) {
      setBookType(bookTypes.noContent);
    } else if (urlCheck.includes("Planner-Book")) {
      setBookType(bookTypes.lowContent);
    } else if (urlCheck.includes("Activity-Content-Book")) {
      setBookType(bookTypes.activity);
    }
  }, []);

  useEffect(() => {
    toProcess && fD && countPage();
  }, [toProcess, fD]);

  // Web Functions

  function exportPage() {
    setSaving(true);

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
              .map((e) => e.id.replaceAll("s_", ""))
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
            boardData: i.id.replace("s_", ""),
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
        // todo
        // await Account.page.updatePage(token, query.page, toUpload);
        router.push(
          `/tools/Book-Exporter/${query.page}?simple=false&type=${bookType}`
        );
      } else {
        if (pageType !== false) {
          toUpload.type = pageType;
        }
        // todo
        // const res = await Account.page.createPage(token, toUpload);
        // if (res.simple)
        //   router.push(
        //     `/tools/Book-Exporter/${res.full.id}?simple=false&type=${bookType}`
        //   );
      }

      setSaving(false);
    }, 10);
  }

  async function saveBoard() {
    //// console.log(toProcess);
    //// console.log(pageLayout);
    //// console.log(fD);
    //// console.log(fDType);

    setSaving(true);

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
              .map((e) => e.id.replaceAll("s_", ""))
          )
        ),
        settings: settingsArr,
        type: pageType,
      };
      for (let i of toProcess) {
        // console.log(i);
        toUpload["pages"].push(
          JSON.stringify({
            b_id: i.id,
            p_type: i.type,
            pageType: pageLayout[i.id],
            pageSettingsType: fDType[i.id],
            boardData: i.id.replace("s_", ""),
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
        // todo
        // await Account.page.updatePage(token, query.page, toUpload);
      } else {
        if (pageType !== false) {
          toUpload.type = pageType;
        }
        // todo
        // const res = await Account.page.createPage(token, toUpload);
        // if (res.simple) {
          // let isSimple = router.asPath.includes("ezlayout");
          // router.replace(`./advanced/${res.full.id}`);
        // }
      }
      setSaving(false);
    }, 10);
  }

  function countPage() {
    const _jobQueue = [];
    let ind = 0;
    for (let _p in toProcess) {
      let p = toProcess[_p];
      //// console.log(p)
      //// console.log(fD[p.id])

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
        // Normalize start And End Dates to extend towards start and end of their month
        startDate.setDate(1);
        endDate.setDate(
          new Date(endDate.getYear(), endDate.getMonth(), 0).getDate()
        );
        const totalBoard = (endDate - startDate) / dateCountBy[p.dateCountBy];
        pageCount = Math.ceil(totalBoard);
      }
      let toPush = {};
      for (let offset = 0; offset < pageCount; offset++) {
        ind += 1;
        toPush = {
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
        };
        _jobQueue.push(JSON.parse(JSON.stringify(toPush)));
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

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row h-full">
        {toProcess && form && fDType && fD ? (
            <>
              <PMLayout_BoardList
                  setShowSidebar={setShowSidebar.bind(this, !showSidebar)}
                  toProcess={toProcess}
                  setToProcess={setToProcess}
                  curId={currentFD}
                  setCurId={(v) => {
                    //// console.log(v);
                    let ind = jobQueue.current.findIndex((e) => e.id === v);

                    let curJob = jobQueue.current[ind];
                    setCurrentFD(curJob.id);
                    setPageDetail({ ...pageDetail, cur: ind });
                    setPrintSettings({
                      boardCountOffset: curJob.offset,
                      right: curJob.right,
                      strictMargin: strictParams.current.margin,
                      dateRange: curJob.dateRange,
                      batchOffset: curJob.batchOffset,
                      totalBatch: curJob.totalBatch,
                    });
                  }}
                  toInsertable={toInsertable}
                  //setToInsertable={setToInsertable}
                  addBoard={(templateName) => {
                    const _fDType = {},
                        _fDList = {},
                        _layoutList = {},
                        _finData = [],
                        name = `page:Board_${uuid().slice(0, 4)}`;

                    const dataToadd = insertableList[pageType][
                        templateName
                        ].dataBoard(name, _finData, _fDList, _fDType, _layoutList);
                    // console.log(dataToadd);

                    // @ts-ignore
                    _addPageSet(...dataToadd);

                    setToProcess([...toProcess, ..._finData]);
                    setPageLayout({ ...pageLayout, ..._layoutList });
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

                      setCurrentFD(Object.keys(_fD)[0]);
                    }
                  }}
              />

              <PMLayout_Preview
                  valueSource={{
                    ...fD.general,
                    ...fD[currentFD],
                    ...printSettings,
                  }}
                  boards={
                    toProcess[toProcess.findIndex((e) => e.id == currentFD)]
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
                  pageDetails={
                    <div className="flex-1 bg-secCol1-50 p-3 text-sm">
                      <div className="flex">
                        <div className="h-min flex-1">
                          <p className="w-1/2">
                            Total Pages: {pageInfo.length}{" "}
                            {pageInfo.length < pageInfo.range[0] ? (
                                <span className="text-secCol1-500">
                                [Too Short]
                              </span>
                            ) : pageInfo.length > pageInfo.range[1] ? (
                                <span className="text-secCol1-500">
                                [Too Long]
                              </span>
                            ) : (
                                ""
                            )}
                          </p>
                          <p>Page Dimensions (in Px): {fD.general.pagesize}</p>
                        </div>
                        <div className="h-fit flex-1">
                          <p className="text-xs text-gray-600">
                            These are strict minimum specifications from Amazon
                            KDP
                          </p>
                          <p className="">
                            <span className="text-xs">
                              Minimum Page Allowed:{" "}
                            </span>
                            {pageInfo.range[0]}
                          </p>
                          <p className="">
                            <span className="text-xs">
                              Maximum Page Allowed:{" "}
                            </span>
                            {pageInfo.range[1]}
                          </p>
                          <p className="">
                            <span className="text-xs">Inner Margin: </span>
                            {pageInfo.margin[0]}&ldquo;
                          </p>
                          <p className="">
                            <span className="text-xs">Outer Margin: </span>
                            {pageInfo.margin[1]}&ldquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  }
                  actions={{
                    testPrint: exportPage,
                    saveBoard: saveBoard,
                  }}
                  isSaving={saving}
                  info={info}
                  isNew={query && query.page ? false : true}
                  remainingTokens={
                    pageType !== 1 && info.subscription.user_type < 3
                        ? info.subscription[_bookTypes[pageType]]
                        : "Unlimited"
                  }
              />

              <PMLayout_Settings
                  generalValueSource={fD}
                  specificValueSource={fD[currentFD]}
                  formToUse={form[fDType[currentFD]]}
                  changeValue={changeValue}
              />
            </>
        ) : (
            <div className="flex items-center m-auto">
              <div className="w-3 h-3 bg-secCol1-300 animate-pulse mr-3"></div>
              <p>Loading Layout App</p>
            </div>
        )}
      </div>
    </div>
  );
}
