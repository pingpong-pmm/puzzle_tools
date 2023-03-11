import loadFont from "../utils/loadFont";
import {numberAnimalsMapping} from "../../lib/games/sudoku/Globals";

function convertToAlphabets(i:number, lower:boolean=false) {
  let result = '';
      if(lower){
            result += String.fromCharCode(97 + Number(i));
      }
      else{
        result += String.fromCharCode(65 + Number(i));
     }
  return result;
}

function Sudoku({ board }) {
  loadFont(board.fontFamily, board.fontUrl);
  const lines = [];

  //let numWidthLine = Math.floor(Math.sqrt(board.boardWidth)) - 1;
  //let numHeightLine = Math.ceil(Math.sqrt(board.boardHeight)) - 1;
  let numWidthLine = board.boardWidth - 1;
  let numHeightLine = board.boardHeight - 1;
  let numWidthLineBlock = Math.floor(Math.sqrt(board.boardWidth)) - 1;
  let numHeightLineBlock = Math.ceil(Math.sqrt(board.boardHeight)) - 1;
  
  for (let i = 0; i < numWidthLine; i++) {
        const x1 = (i+1) * 297/(numWidthLine+1);
        const x2 = (i+1) * 297/(numWidthLine+1);
        const y1 = 0;
        const y2 = 297;
      
        lines.push(
          <line
            //key={`line_${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            fill="white"
            stroke="black"
            strokeWidth="1"
          />,
        );
  }
  for (let j = 0; j < numHeightLine; j++) {
        const x1 = 0;
        const x2 = 297;
        const y1 = (j+1) * 297/(numHeightLine+1);
        const y2 = (j+1) * 297/(numHeightLine+1);
      
        lines.push(
          <line
            //key={`line_${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            fill="white"
            stroke="black"
            strokeWidth="1"
          />,
        );
  }
  for (let i = 0; i < numWidthLineBlock; i++) {
        const x1 = (i+1) * 297/(numWidthLineBlock+1);
        const x2 = (i+1) * 297/(numWidthLineBlock+1);
        const y1 = 0;
        const y2 = 297;
      
        lines.push(
          <line
            //key={`line_${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            fill="white"
            stroke="black"
            strokeWidth="2"
          />,
        );
  }
  for (let j = 0; j < numHeightLineBlock; j++) {
        const x1 = 0;
        const x2 = 297;
        const y1 = (j+1) * 297/(numHeightLineBlock+1);
        const y2 = (j+1) * 297/(numHeightLineBlock+1);
      
        lines.push(
          <line
            //key={`line_${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            fill="white"
            stroke="black"
            strokeWidth="2"
          />,
        );
  }

  function selectFormat(num){
    switch (board.boardFormat){
        case "Numeric":
            return num;
        case "Alphabet":
            return convertToAlphabets(num);
        case "Lower Alpha":
            return convertToAlphabets(num, true);
        case "Clip Art":
            return numberAnimalsMapping.get(parseInt(num));
       default:
            return num;
    }
  }


  return (
    <svg
      width="100%" height="100%"
      viewBox="0 0 297 297"
      preserveAspectRatio="xMidYMid meet"
      style={
        {
          fontFamily: board.fontFamily,
        }
      }
    >
      <rect
        x="0"
        y="0"
        width="297"
        height="297"
        fill="white"
        stroke="black"
        strokeWidth="2" // border
      />
      {lines}

      {board.board &&
        board.board.split(",").map((e, i:number) => {
          const output = selectFormat(e);
          const isImage = output instanceof Object;
      
          console.log(isImage, output)
          return (
            <>
              {isImage ? (
                <image
                  key={`sudoku_n_${i}`}
                  href={output.src}
                  x={(297 / (4.5 * board.boardWidth)) + (297 / board.boardWidth) * (i % board.boardWidth)}
                  y={(297 / (4.5 * board.boardHeight)) + (297 / board.boardHeight) * Math.floor(i / board.boardHeight)}
                  width={Math.ceil(297 / (2 * board.boardHeight))}
                />
              ) : (
                <text
                  key={`sudoku_n_${i}`}
                  x={(297 / (3.25 * board.boardWidth)) + (297 / board.boardWidth) * (i % board.boardWidth)}
                  y={(297 / (1.5 * board.boardHeight)) + (297 / board.boardHeight) * Math.floor(i / board.boardHeight)}
                  fill="black"
                  fontSize={Math.ceil(297 / (2 * board.boardHeight)) + "px"}
                >
                  {e !== "0" ? output : ""}
                </text>
              )}
            </>
          );
        })}
    </svg>
  );
}

export default Sudoku;
