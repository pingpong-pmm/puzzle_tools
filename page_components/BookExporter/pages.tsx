import Page_Basic from "../../components/Page/Basic";
import React, { useState } from "react";
import { LayoutList } from "../../components/Page/Contents/PageDirectory";

type Props = {
  fD;
  boards;
  PageLayout;
  printSettings;
  jobQueue;
  callPrint: Function;
};

class Pages extends React.Component<Props> {
  constructor(props) {
    super(props);
    console.log(this.props.jobQueue);
  }
  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  async componentDidMount(): Promise<void> {
    await this.sleep(1000);
    this.props.callPrint();
  }
  render() {
    return (
      <div className="flex-[5] bg-white relative overflow-auto">
        {this.props.jobQueue.current.map((job, index) => {
          const boardData =
            this.props.boards[
              this.props.boards.findIndex((e) => e.id === job.id)
            ];

          const PageLayout = LayoutList[this.props.PageLayout[job.id]];
          const printSettings = {
            boardCountOffset: job.offset,
            right: job.right,
            strictMargin: job.margin,
            dateRange: job.dateRange,
            batchOffset: job.batchOffset,
            totalBatch: job.totalBatch,
          };
          return this.props.PageLayout ? (
            <div>
              <Page_Basic
                key={index}
                refToUse={null}
                settings={{
                  ...this.props.fD.general,
                  ...this.props.fD[job.id],
                  ...printSettings,
                }}
                isPrinting={true}
              >
                {/*page content also editable*/}
                <PageLayout
                  valueSource={{
                    ...this.props.fD.general,
                    ...this.props.fD[job.id],
                    ...printSettings,
                  }}
                  boardData={boardData}
                />
              </Page_Basic>
            </div>
          ) : (
            <div className="w-3 h-3 bg-secCol1-300 animate-pulse m-auto"></div>
          );
        })}
      </div>
    );
  }
}

export default Pages;
