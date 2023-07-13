import { useResizeDetector } from "react-resize-detector";

// @ts-ignore
function Thermometer({ board }) {
  /*
      {
          width : width,
          height : height,
          mazeData : maze,
          path : [],
      }
    */


  const cellSize = 30;
  const gWidth = (board && board.width) || 10;
  const gHeight = (board && board.height) || 10;
  const bWidth = gWidth * cellSize;
  const bHeight = gHeight * cellSize;
  const { width, height, ref } = useResizeDetector();

  function generatePath(data, i) {
    // console.log(data)

    let x1 = cellSize * (i % gWidth);
    let y1 = cellSize * Math.floor(i / gWidth);
    let x2 = cellSize * ((i % gWidth) + 1);
    let y2 = cellSize * (Math.floor(i / gWidth) + 1);

    // M 0 0 L 2 0 L 2 2 L 0 2 L 0 0

    return `M ${x1} ${y1} ${data.top ? "L" : "M"} ${x2} ${y1} ${
      data.right ? "L" : "M"
    } ${x2} ${y2} ${data.bottom ? "L" : "M"} ${x1} ${y2} ${
      data.left ? "L" : "M"
    } ${x1} ${y1}`;
  }

  return (
    // <svg
    //   width="100%"
    //   height="100%"
    //   viewBox={`0 0 ${bWidth} ${bHeight}`}
    //   preserveAspectRatio="xMidYMid meet"
    // >
    //   {
    //     //M 0 0 L 2 0 L 2 2 L 0 2 L 0 0
    //     board.mazeData &&
    //       board.mazeData.map((e, i) => {
    //         if (i === 0) {
    //           return (
    //             <>
    //               <text
    //                 key={`mz_path_${i}`}
    //                 textAnchor="center"
    //                 x={cellSize * (2 / 5) + cellSize * e.x}
    //                 y={cellSize * (1 / 2) + cellSize * e.y}
    //                 fontSize="14px"
    //                 fontWeight="bold"
    //               >
    //                 ★
    //               </text>

    //               <path
    //                 d={generatePath(e, i)}
    //                 strokeLinejoin="round"
    //                 fill="transparent"
    //                 stroke="black"
    //                 strokeWidth="0"
    //                 key={`mz_line_${i}}`}
    //               />
    //             </>
    //           );
    //         } else if (board.mazeData.length - 1 === i) {
    //           return (
    //             <>
    //               <text
    //                 key={`mz_path_${i}`}
    //                 textAnchor="center"
    //                 x={cellSize * (2 / 5) + cellSize * e.x}
    //                 y={cellSize * (1 / 2) + cellSize * e.y}
    //                 fontSize="14px"
    //                 fontWeight="bold"
    //               >
    //                 ★
    //               </text>

    //               <path
    //                 d={generatePath(e, i)}
    //                 strokeLinejoin="round"
    //                 fill="transparent"
    //                 stroke="black"
    //                 strokeWidth="0"
    //                 key={`mz_line_${i}}`}
    //               />
    //             </>
    //           );
    //         } else {
    //           return (
    //             <path
    //               d={generatePath(e, i)}
    //               strokeLinejoin="round"
    //               fill="transparent"
    //               stroke="black"
    //               strokeWidth="4"
    //               key={`mz_line_${i}}`}
    //             />
    //           );
    //         }
    //       })
    //   }

    //   {board.path &&
    //     board.path.map((e, i) => {
    //       if (i === 0 || i === board.path.length - 1) {
    //         return;
    //       } else {
    //         return (
    //           <text
    //             key={`mz_path_${i}`}
    //             textAnchor="center"
    //             x={cellSize * (2.0 / 5.0) + cellSize * e.x}
    //             y={cellSize * (1.0 / 2.0) + cellSize * e.y}
    //             fontSize="50px"
    //             fontWeight="bold"
    //           >
    //             .
    //           </text>
    //         );
    //       }
    //     })}
    // </svg>
    // <svg
    //   width="100%"
    //   height="100%"
    //   viewBox={`0 0 ${bWidth} ${bHeight}`}
    //   preserveAspectRatio="xMidYMid meet"
    // >

    // </svg>
    <img src={board.mazeData} alt="Your Logo Alt" ></img>
  );
}

export default Thermometer;
