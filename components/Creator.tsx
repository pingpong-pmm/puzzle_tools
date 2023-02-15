import { useEffect, useRef, useState } from "react";
import { toBlob } from "html-to-image";

import JSZip from "jszip";
import { saveAs } from "file-saver";

let zip;
let created = 0;
let ct = 0;
let boardIndex = 0;
let processingBoard = true;
let firstRun = true;
let run = false;

function CreatorDOM({
  collectionBoard,
  collectionSolution,
  cnt,
  namePrefix = "PuzzlePic",
  resultZipName = "PuzzleCollection",
  startNumberAt = 0,
  DownloadView,
  onProcessOneDown,
  onJobOneDown,
  onChangeTask,
  onDownloading,
  onEnd,
}) {
  const ref = useRef();
  const [value, setValue] = useState(collectionBoard[0]);

  useEffect(() => {
    // commented by Md Shakil Hossain
    // if (run === false) {
    //   return;
    // }

    if (firstRun) {
      zip = new JSZip();
      firstRun = false;
    }

    setTimeout(() => {
      create(ref.current, zip);
    }, 20);
  }, [value]);

  function create(element, zip) {
    toBlob(element)
      .then(function (blob) {
        //window.saveAs(blob, 'my-node.png');
        //// console.log(processingBoard)
        //// console.log(created)
        generate();

        created += 1;

        if (created - startNumberAt - 1 !== cnt) {
          //if ((created == 20) || (created == 21) || (created == 22)) debugger;
          //console.log(blob);
          const name = `${processingBoard ? "board/" : "solution/"}${namePrefix
            .replaceAll(/\s/g, "_")
            .replaceAll(/[\/\*\|\:\<\>\?\"\\]/gi, "_")}_${created}.png`;

          zip.file(name, blob);
        } else {
          // never reached
          zip.file(`${processingBoard ? "board/" : "solution/"}_.png`, blob);
          //created
        }
        //// console.log(created)
        //zip.file(`myImage${uuid()}.png`, blob, { binary: true });
        //debugger;
      })
      .then(() => {
        let len = Object.keys(zip.files).length;
        onJobOneDown && onJobOneDown(Math.min(len % (cnt + 3), cnt));
        if (len === (processingBoard ? cnt + 1 : 2 * (cnt + 1))) {
          //on letter tracing puzzle it will skip the solution fot the condition
          if (collectionSolution === undefined) {
            processingBoard = false;
          }
          packZip(zip);
        }
        //else{
        //  generate()
        //}
      });
  }

  function generate() {
    setTimeout(() => {
      if (ct > 0) {
        // change value here
        setValue(
          processingBoard
            ? collectionBoard[boardIndex]
            : collectionSolution && collectionSolution[boardIndex]
        );
        // tested ok collection Solution working fine.
        onProcessOneDown && onProcessOneDown(boardIndex);
        //generate();
        boardIndex += 1;
        ct -= 1;
      }
    }, 250);
  }

  function packZip(zip) {
    if (processingBoard) {
      boardIndex = 0;
      created = startNumberAt;
      ct = cnt;
      processingBoard = false;
      onChangeTask(false);
      // This was a bug from previous developer
      // generate();
    } else {
      zip.remove(`board/_.png`);
      zip.remove(`solution/_.png`);
      onDownloading(true);
      zip
        .generateAsync({ type: "blob" })
        .then(function callback(blob) {
          saveAs(blob, resultZipName.replaceAll(/\s/g, "_") + ".zip");
        })
        .then(function () {
          run = false;
          firstRun = true;
          processingBoard = true;

          onDownloading(false);
          onEnd();
        });
    }
  }

  // This would be called immediately after calling this item into existence
  useEffect(() => {
    boardIndex = 0;
    created = startNumberAt;
    ct = cnt;
    run = true;
    processingBoard = true;
    generate();
  }, []);

  return (
    <div
      className="relative bg-white p-8"
      ref={ref}
      style={{ width: "100%", height: "auto" }}
    >
      <DownloadView board={value} />
    </div>
  );
}

export default CreatorDOM;
