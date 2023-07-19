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
    <img src={board.mazeData} alt="Your Logo Alt" ></img>
  );
}

export default Thermometer;
