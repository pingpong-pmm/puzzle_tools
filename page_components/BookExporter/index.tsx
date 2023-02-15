import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {
  _changeValue,
  loadDataFromLocal,
  loadDataFromNet,
} from "../LayoutPage/Components/Functions";
import {
  pageMargins,
  pageRangePaperBack,
  pageSizeInMM,
  pageSizeMapFromPx,
} from "../../constants/pageSizes";
import { jsPDF } from "jspdf";
import {
  form,
  imgProcessor,
  loopDelay,
  PageSettingTypes,
  retryDelay,
} from "../LayoutPage/Components/Variables";

import pptxgen from "pptxgenjs";
import Head from "next/head";

import {
  PMLayout_ExportDetails,
  PMLayout_PreviewExport,
} from "../LayoutPage/Components/PMComponents";
import { LayoutList } from "../../components/Page/Contents/PageDirectory";
import { useReactToPrint } from "react-to-print";
import Pages from "./pages";

let loadOnce = true;

/**
 * This is the main function for BookExporting
 * @param info
 * @param token
 * @param query
 * @returns {JSX.Element}
 * @constructor
 */
export function PageMakeExport({  query }): JSX.Element {
  const router = useRouter();
  const pageRef = useRef<any>();
  const jobQueue = useRef<any>();
  const pdfJob = useRef<any>();
  let pres;
  const printSwitch = useRef(false);
  const strictParams = useRef<any>({});
  const printRef = useRef();

  // Initiate Settings Functions
  const [toProcess, setToProcess] = useState<any>(false);
  const [pageLayout, setPageLayout] = useState<any>(false);
  const [fD, setFD] = useState<any>(false);
  const [fDType, setFDType] = useState<any>(false);
  const [currentFD, setCurrentFD] = useState<any>(false);

  const [isPrinting, setIsPrinting] = useState<any>(false);
  const [printSettings, setPrintSettings] = useState<any>({});

  const [progDets, setProgDets] = useState<any>(false);

  const [summaryDets, setSummaryDets] = useState<any>(false);
  const [summaryDetsTotal, setSummaryDetsTotal] = useState<any>(false);

  const [pageDetail, setPageDetail] = useState<any>(false);
  const [isPrintingDom, setIsPrintingDom] = useState<boolean>(false);

  const [pageType, setPageType] = useState<any>(false);

  const [complexPage, setComplexPage] = useState<any>(true);

  const changeValue = _changeValue(fD, setFD, currentFD);

  const reactToPrint = useReactToPrint({
    content: () => printRef.current,
    onAfterPrint: () => {
      setIsPrintingDom(false);
    },
    onBeforeGetContent: () => {
      setIsPrintingDom(true);
    },
  });

  const printNow = () => {
    setIsPrintingDom(true);
  };

  useEffect(() => {
    if (router.query.simple == "true") {
      setComplexPage(false);
    }
    if (query && query.page) {
      loadOnce = true;
      console.log("Load from net")
      loadDataFromNet(
        query,
        setCurrentFD,
        setToProcess,
        setPageLayout,
        setFD,
        setFDType,
        false,
        true,
        setPageType
      );
    } else {
      // This should not work at any chance
      // todo: Potential Bug
      loadDataFromLocal(
        setCurrentFD,
        setToProcess,
        setPageLayout,
        setFD,
        setFDType,
        setPageType,
        (value) => {
          console.log(value);
        }
      );
    }
  }, []);

  useEffect(() => {
    loadOnce && toProcess && fD && funcHandler.createQueue();
  }, [toProcess, fD]);

  const funcHandler = {
    _debug: () => {
      // console.log("fD", fD);
      // console.log("fDType", fDType);
      // console.log("pageLayout", pageLayout);
      // console.log("toProcess", toProcess);
      // console.log("currentFD", currentFD);
    },
    createQueue: () => {
      const _jobQueue = [];
      let ind = 0;
      for (let _p in toProcess) {
        let p = toProcess[_p];
        //// console.log(p)
        //// console.log(fD[p.id])
        let pageCount = 1;
        let batchSize = p.multiPageBatch ? p.multiPageBatch : 1;
        let startDate;
        let endDate;

        if (!p.rawPage) {
          const perPage = fD[p.id].boardCountColumn * fD[p.id].boardCountRow;
          console.log({p})
          try{
            const totalBoard = p.boardCollection.length;
            pageCount = Math.ceil(totalBoard / perPage);
          } catch (e) {
            console.log(e)
          }

        } else if (p.multiPage) {
          const totalBoard = fD[p.id].pages * batchSize;
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

      setPageDetail({ cur: 0, total: ind - 1 });
      loadOnce = false;

      setSummaryDets(_jobQueue);
      setSummaryDetsTotal(_jobQueue.length);

      jobQueue.current = _jobQueue;
      //console.log("Job Queue", _jobQueue);

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
    },
  };

  // Web Functions

  const pdfFunctions = {
    equivalentDivider: 3.77952755906, // ex: 816/3.77952755906=215.9 which is equals to the current pdf width
    // this is initial job id
    currentJobId: "page:Board_01",

    initiatePDF: () => {
      let m = pageSizeMapFromPx[fD["general"].pagesize];
      let pageSize = pageSizeInMM[m];
      let isBleed = fD["general"].pagebleed;

      if (isBleed) {
        pageSize[1] += 6.35;
        pageSize[0] += 3.175;
      }
      // Document of 210mm wide and 297mm high
      const doc: any = new jsPDF("p", "mm", pageSize);

      doc.v_width = doc.internal.pageSize.getWidth();
      doc.v_height = doc.internal.pageSize.getHeight();

      pdfJob.current = doc;
    },
    dataToImagePromise: (data) => {
      return new Promise((resolve, reject) => {
        imgProcessor[fD["print_general"].exportType](data, { quality: 2 })
          .then((dataUrl) => {
            resolve(dataUrl);
          })
          .catch((err) => {
            reject("Can't convert to image.");
            // console.log(err);
          });
      });
    },

    drawBorder: (pdfPageWidth, pdfPageHeight) => {
      const borderImageSize =
        fD["general"].page_border.imageSize / pdfFunctions.equivalentDivider;
      const gap = 10 / pdfFunctions.equivalentDivider;
      if (fD["general"].page_border.borderSides.top) {
        for (let i = 0; i <= Math.round(pdfPageWidth / borderImageSize); i++) {
          if (fD["general"].page_border.imageUrl === "/static/img.png") {
            //x={imageSize * index } y={10}/>
            // pdfJob.current.addImage(
            //   DefaultIcon.src,
            //   fD["print_general"].exportType,
            //   borderImageSize * i,
            //   gap,
            //   borderImageSize,
            //   borderImageSize
            // );
          } else {
            pdfJob.current.addImage(
              fD["general"].page_border.imageUrl,
              fD["print_general"].exportType,
              borderImageSize * i,
              gap,
              borderImageSize,
              borderImageSize
            );
          }
        }
      }

      if (fD["general"].page_border.borderSides.bottom) {
        for (let i = 0; i <= Math.round(pdfPageWidth / borderImageSize); i++) {
          if (fD["general"].page_border.imageUrl === "/static/img.png") {
            //x={imageSize * index } y={height - (10 + imageSize)}
            // pdfJob.current.addImage(
            //   DefaultIcon.src,
            //   fD["print_general"].exportType,
            //   borderImageSize * i,
            //   pdfPageHeight - (gap + borderImageSize),
            //   borderImageSize,
            //   borderImageSize
            // );
          } else {
            pdfJob.current.addImage(
              fD["general"].page_border.imageUrl,
              fD["print_general"].exportType,
              borderImageSize * i,
              pdfPageHeight - (gap + borderImageSize),
              borderImageSize,
              borderImageSize
            );
          }
        }
      }

      if (fD["general"].page_border.borderSides.left) {
        for (let i = 0; i <= Math.round(pdfPageHeight / borderImageSize); i++) {
          if (fD["general"].page_border.imageUrl === "/static/img.png") {
            //x={10} y={imageSize * index }
            // pdfJob.current.addImage(
            //   DefaultIcon.src,
            //   fD["print_general"].exportType,
            //   gap,
            //   borderImageSize * i,
            //   borderImageSize,
            //   borderImageSize
            // );
          } else {
            pdfJob.current.addImage(
              fD["general"].page_border.imageUrl,
              fD["print_general"].exportType,
              gap,
              borderImageSize * i,
              borderImageSize,
              borderImageSize
            );
          }
        }
      }

      if (fD["general"].page_border.borderSides.right) {
        for (let i = 0; i <= Math.round(pdfPageHeight / borderImageSize); i++) {
          if (fD["general"].page_border.imageUrl === "/static/img.png") {
            //x={width - (10 + imageSize)} y={imageSize * index }
            // pdfJob.current.addImage(
            //   DefaultIcon.src,
            //   fD["print_general"].exportType,
            //   pdfPageWidth - (gap + borderImageSize),
            //   borderImageSize * i,
            //   borderImageSize,
            //   borderImageSize
            // );
          } else {
            pdfJob.current.addImage(
              fD["general"].page_border.imageUrl,
              fD["print_general"].exportType,
              pdfPageWidth - (gap + borderImageSize),
              borderImageSize * i,
              borderImageSize,
              borderImageSize
            );
          }
        }
      }
    },
    createEditablePdf: async function (
      pdfPageWidth: number,
      pdfPageHeight: number
    ) {
      pdfFunctions.drawBorder(pdfPageWidth, pdfPageHeight);

      let p_width = pdfJob.current.v_width;
      let p_height = pdfJob.current.v_height;

      const itemList = document.querySelectorAll(".pageMakerGameBoard");
      const valueSource = fD[pdfFunctions.currentJobId];
      let row = parseInt(valueSource.boardCountRow);
      let col = parseInt(valueSource.boardCountColumn);
      let boardGap = parseInt(valueSource.boardGap);
      let offset = Number(valueSource.boardCountOffset || 0);
      let margin = parseInt(valueSource.margin || 35);

      // JPEG
      let images = await Promise.all(
        Array.from(itemList).map((item) => {
          return pdfFunctions.dataToImagePromise(item);
        })
      );
      const blockWidth = pdfPageWidth / col;
      const blockHeight = pdfPageHeight / row;

      if (!(isNaN(row) && isNaN(col))) {
        let rowArray = new Array(row);
        for (let i = 0; i < row; i++) {
          rowArray[i] = images.slice(i * row, i * row + col);
        }
        rowArray.forEach((rowObj, i) => {
          rowObj.forEach((colObj, j) => {
            // todo: potential bug

            const x =
              blockWidth * (j % (row + 1)) + (j === 0 ? margin * 0.5 : 0);
            const y = blockHeight * (i % (col + 1)) + 10;

            pdfJob.current.addImage(
              colObj,
              fD["print_general"].exportType,
              x,
              y,
              p_width / (col + boardGap * 0.005 + margin * 0.005),
              p_height / (row + boardGap * 0.005 + margin * 0.005)
            );
          });
        });
      }
      let m = pageSizeMapFromPx[fD["general"].pagesize];
      pdfJob.current.addPage(pageSizeInMM[m]);

      pdfFunctions.nextQueue();
    },
    extractPNGAndPutToPDF: async () => {
      const [width, height] = JSON.parse(fD["general"].pagesize);
      const pdfPageWidth = pdfJob.current.internal.pageSize.getWidth();
      const pdfPageHeight = pdfJob.current.internal.pageSize.getHeight();
      //custom
      if (parseInt(router.query.type as string) === 1) {
        imgProcessor[fD["print_general"].exportType](pageRef.current, {
          cacheBust: true,
          width: width * (fD["print_general"].quality || 1),
          height: height * (fD["print_general"].quality || 1),
        })
          .then((dataUrl) => {
            let p_width = pdfJob.current.v_width;
            let p_height = pdfJob.current.v_height;

            pdfJob.current.addImage(
              dataUrl,
              fD["print_general"].exportType,
              0,
              0,
              p_width,
              p_height
            );

            let m = pageSizeMapFromPx[fD["general"].pagesize];
            pdfJob.current.addPage(pageSizeInMM[m]);

            pdfFunctions.nextQueue();
          })
          .catch((err) => {
            console.error(err);
          });
      } else if (parseInt(router.query.type as string) === 0) {
        if (
          parseInt(fD["general"].pdfSettings) ===
          PageSettingTypes.COMPLETED_LAYOUT
        ) {
          console.log("COMPLETED_LAYOUT");
          imgProcessor[fD["print_general"].exportType](pageRef.current, {
            cacheBust: true,
            width: width * (fD["print_general"].quality || 1),
            height: height * (fD["print_general"].quality || 1),
          })
            .then((dataUrl) => {
              let p_width = pdfJob.current.v_width;
              let p_height = pdfJob.current.v_height;

              pdfJob.current.addImage(
                dataUrl,
                fD["print_general"].exportType,
                0,
                0,
                p_width,
                p_height
              );
              let m = pageSizeMapFromPx[fD["general"].pagesize];
              pdfJob.current.addPage(pageSizeInMM[m]);

              pdfFunctions.nextQueue();
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          console.log("createEditablePdf");
          await pdfFunctions.createEditablePdf(pdfPageWidth, pdfPageHeight);
        }
      }
    },
    createQueueThenStart: () => {

      funcHandler.createQueue();
      pdfFunctions.initiatePDF();

      pdfFunctions.waitingQueue();
      pdfFunctions.nextQueue();
    },
    nextQueue: () => {
      let curJob = jobQueue.current.shift();
      if (curJob) {
        setProgDets(curJob);
        setIsPrinting(true);
        setCurrentFD(curJob.id);
        pdfFunctions.currentJobId = curJob.id;

        setPrintSettings({
          boardCountOffset: curJob.offset,
          right: curJob.right,
          strictMargin: strictParams.current.margin,
          dateRange: curJob.dateRange,
          batchOffset: curJob.batchOffset,
          totalBatch: curJob.totalBatch,
        });
        //setTimeout(() => {
        //  pdfFunctions.nextQueue();
        //}, 3000);
      } else {
        setIsPrinting(false);
        setProgDets(false);
        setPageDetail({ ...pageDetail, cur: pageDetail.total });
        let pageCount = pdfJob.current.internal.getNumberOfPages();
        pdfJob.current.deletePage(pageCount);
        pdfJob.current.save(`${fD["print_general"].fileName}.pdf`);
        funcHandler.createQueue();
      }
    },
    waitingQueue: async () => {
      setTimeout(() => {
        if (printSwitch.current) {
          printSwitch.current = false;
          pdfFunctions.extractPNGAndPutToPDF();
          setTimeout(() => {
            pdfFunctions.waitingQueue();
          }, loopDelay);
        } else {
          if (jobQueue.current && jobQueue.current.length > 0) {
            pdfFunctions.waitingQueue();
          }
        }
      }, retryDelay);
    },
  };

  const pptxFunctions = {
    mmToInch: (mm) => {
      return mm * 0.0393701;
    },

    initiatePPTX: () => {
      let m = pageSizeMapFromPx[fD["general"].pagesize];
      let pageSize = pageSizeInMM[m];
      let isBleed = fD["general"].pagebleed;

      if (isBleed) {
        pageSize[1] += 6.35;
        pageSize[0] += 3.175;
      }
      // Document of 210mm wide and 297mm high
      console.log(pageSize);
      pres = new pptxgen();
      pres.defineLayout({
        name: "A4",
        width: pptxFunctions.mmToInch(pageSize[0]),
        height: pptxFunctions.mmToInch(pageSize[1]),
      });
      pres.layout = "A4";
    },
    extractPNGAndPutToPDF: () => {
      const [width, height] = JSON.parse(fD["general"].pagesize);
      //debugger;
      imgProcessor[fD["print_general"].exportType](pageRef.current, {
        cacheBust: true,
        width: width * (fD["print_general"].quality || 1),
        height: height * (fD["print_general"].quality || 1),
      })
        .then((dataUrl) => {
          let m = pageSizeMapFromPx[fD["general"].pagesize];
          let pageSize = pageSizeInMM[m];

          let slide = pres.addSlide();
          slide.background = { data: dataUrl };
          //slide.addImage({data: dataUrl, x:0, y: 0, h:  pptxFunctions.mmToInch(pageSize[1]), w: pptxFunctions.mmToInch(pageSize[0])})

          pptxFunctions.nextQueue();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createQueueThenStart: () => {

      funcHandler.createQueue();
      pptxFunctions.initiatePPTX();

      pptxFunctions.waitingQueue();
      pptxFunctions.nextQueue();
    },
    nextQueue: () => {
      let curJob = jobQueue.current.shift();
      if (curJob) {
        setProgDets(curJob);
        setIsPrinting(true);
        //// console.log(curJob)
        setCurrentFD(curJob.id);
        setPrintSettings({
          boardCountOffset: curJob.offset,
          right: curJob.right,
          strictMargin: strictParams.current.margin,
          dateRange: curJob.dateRange,
          batchOffset: curJob.batchOffset,
          totalBatch: curJob.totalBatch,
        });
        //setTimeout(() => {
        //  pdfFunctions.nextQueue();
        //}, 3000);
      } else {
        setIsPrinting(false);
        setProgDets(false);
        setPageDetail({ ...pageDetail, cur: pageDetail.total });
        //let pageCount = pdfJob.current.internal.getNumberOfPages();
        // pdfJob.current.deletePage(pageCount)
        // pdfJob.current.save(`${fD["print_general"].fileName}.pdf`);
        pres.writeFile({ fileName: `${fD["print_general"].fileName}.pptx` });
        funcHandler.createQueue();
      }
    },
    waitingQueue: async () => {
      setTimeout(() => {
        if (printSwitch.current) {
          printSwitch.current = false;
          pptxFunctions.extractPNGAndPutToPDF();
          setTimeout(() => {
            pptxFunctions.waitingQueue();
          }, loopDelay);
        } else {
          if (jobQueue.current && jobQueue.current.length > 0) {
            pptxFunctions.waitingQueue();
          }
        }
      }, retryDelay);
    },
  };

  function nextPage() {
    // console.log("toProcess: ", toProcess[toProcess.findIndex((e) => e.id === currentFD)]);
    let nextInd = Math.min(pageDetail.total, pageDetail.cur + 1);
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
  }

  function prevPage() {
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
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row h-full min-h-[90vh]">
        {toProcess && form && fDType && fD ? (
            <>
              {isPrintingDom ? (
                  jobQueue.current && (
                      <Pages
                          callPrint={reactToPrint}
                          fD={fD}
                          boards={toProcess}
                          PageLayout={pageLayout}
                          ref={printRef}
                          printSettings={printSettings}
                          jobQueue={jobQueue}
                      />
                  )
              ) : (
                  <PMLayout_PreviewExport
                      valueSource={{
                        ...fD.general,
                        ...fD[currentFD],
                        ...printSettings,
                      }}
                      boards={
                        toProcess[toProcess.findIndex((e) => e.id === currentFD)]
                      }
                      PageLayout={LayoutList[pageLayout[currentFD]]}
                      refToUse={pageRef}
                      listenOnRender={isPrinting}
                      curPage={pageDetail && pageDetail.cur}
                      totalPage={pageDetail && pageDetail.total}
                      onRenderFinish={() => {
                        //pdfFunctions.nextQueue()
                        printSwitch.current = true;
                      }}
                      prevFunc={prevPage}
                      nextFunc={nextPage}
                  />
              )}

              <PMLayout_ExportDetails
                  generalValueSource={fD}
                  specificValueSource={fD[currentFD]}
                  changeValue={changeValue}
                  isProcessing={(progDets && summaryDets) || false}
                  complexPage={complexPage}
                  domInfo={
                    <>
                      {progDets && summaryDets ? (
                          <>
                            <div className="h-3 w-full border rounded-lg overflow-hidden p-0.5">
                              <div
                                  className="bg-secCol1-500 h-full transition-[width] rounded-lg"
                                  style={{
                                    width: `${
                                        ((summaryDetsTotal - summaryDets.length) /
                                            summaryDetsTotal) *
                                        100
                                    }%`,
                                  }}
                              ></div>
                            </div>
                            <p>Total Pages Left: </p>
                            <p className="text-2xl p-2">
                              {summaryDets.length + 1} / {summaryDetsTotal}{" "}
                            </p>
                            <p>Current Page Set Progress : </p>
                            <p className="text-2xl p-2">
                              {progDets.offset + 1} / {progDets.totalOffset}{" "}
                            </p>
                            <p>Total Page Sets Done : </p>
                            <p className="text-2xl p-2">
                              {progDets.curset} / {progDets.totalset}{" "}
                            </p>
                          </>
                      ) : (
                          <p>No Board To Process Yet</p>
                      )}
                    </>
                  }
                  actions={[
                    {
                      label: "Print / Download PDF (Fastest)",
                      className: "text-white bg-secCol1-500",
                      action: printNow,
                    },
                    {
                      label: "Download Book Interior as PDF",
                      className: "text-white bg-secCol1-500",
                      action: pdfFunctions.createQueueThenStart,
                    },
                    {
                      label: "Download Book Interior as PPTX",
                      className: "text-white bg-secCol1-500",
                      action: pptxFunctions.createQueueThenStart,
                    },
                  ]}
                  projId={query.page}
              />
            </>
        ) : (
            <div className="flex items-center m-auto">
              <div className="w-3 h-3 bg-secCol1-300 animate-pulse mr-3"></div>
              <p>Loading Layout App </p>
            </div>
        )}
      </div>

    </div>
  );
}
