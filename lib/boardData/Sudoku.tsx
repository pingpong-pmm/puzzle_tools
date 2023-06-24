import SudokuSvg from "../../components/Boards/Sudoku";

//import SudokuToolCollection from "sudokutoolcollection";
import Sudoku from "../games/sudoku/sudoku.js";
import { InputEnum } from "../../components/Inputs/InputEnum";

//const SudokuLogic = SudokuToolCollection();

export const data = {
  code: "000",
  version: "0.0.1",
  state: {
    difficulty: "easy",
    fontFamily: "Montserrat",
    fontUrl: null,
    boardSize: "9x9",
    boardFormat: "Numeric",

    instructions: {
      howToPlay: {
        title: "How To Play",
        url: "https://docs.google.com/document/d/1OmUMZ-Krl-u8uCtdXemcvF0q_gEZ0j-Bb4DtqSTH4DE/edit?usp=share_link",
      },
      howToUse: {
        title: "How To Use",
        url: "https://docs.google.com/document/d/1YDwDusKcUKn-lZKsLnQjpiVNyNToGYIZUmiZ92kUi50/edit?usp=share_link",
      },
    },
  },
  form: [
    {
      title: "Configuration",
      template: [
        {
          id: "difficulty",
          title: "Difficulty",
          type: InputEnum.Select,
          options: [
            { label: "Very Easy", value: "easy" },
            { label: "Easy", value: "medium" },
            { label: "Medium", value: "hard" },
            { label: "Hard", value: "very-hard" },
            { label: "Very Hard", value: "insane" },
            { label: "Extreme", value: "inhuman" },
          ],
        },
        {
          id: "fontFamily",
          title: "Font",
          type: InputEnum.Select,
          options: [
            { label: "Montserrat", value: "Montserrat" },
            { label: "Times New Roman", value: "Times New Roman" },
            { label: "Impact", value: "Impact" },
            { label: "Bradley Hand", value: "Bradley Hand" },
          ],
        },
        {
          id: "fontUrl",
          title: "Upload Font (Optional)",
          hint: "Upload a font file",
          accept: ".ttf, .woff, .woff2",
          type: InputEnum.UploadFile,
          multiple: false,
        },
        {
          id: "boardSize",
          title: "Board Size",
          type: InputEnum.Select,
          options: [
            { label: "4x4", value: "4x4" },
            { label: "6x6", value: "6x6" },
            { label: "9x9", value: "9x9" },
            { label: "16x16", value: "16x16" },
          ],
        },
        {
          id: "boardFormat",
          title: "Board Format",
          type: InputEnum.Select,
          options: [
            { label: "Numeric", value: "Numeric" },
            { label: "Alphabet", value: "Alphabet" },
            { label: "Lower Alpha", value: "Lower Alpha" },
            { label: "Clip Art", value: "Clip Art" },
          ],
        },
      ],
    },
  ],
  create: async (state) => {
    let sizeArray = state.boardSize.split("x");
    const numRows = parseInt(sizeArray[0], 10);
    const numCols = parseInt(sizeArray[1], 10);
    let sudoku = new Sudoku(
      Math.ceil(Math.sqrt(numRows)),
      Math.floor(Math.sqrt(numCols))
    );
    let difficulty = 0.38;
    switch (state.difficulty) {
      case "easy":
        difficulty = 0.38;
        break;
      case "medium":
        difficulty = 0.47;
        break;
      case "hard":
        difficulty = 0.5;
        break;
      case "very-hard":
        difficulty = 0.65;
        break;
      case "insane":
        difficulty = 0.74;
        break;
      case "inhuman":
        difficulty = 0.83;
        break;
      default:
        difficulty = 0.38;
    }
    sudoku = sudoku.set_difficulty(difficulty);
    let board: any = sudoku.generateCode();
    let solution: any = sudoku.solve().generateCode();
    //let solution = SudokuLogic.solver.solve(board);
    
    board = {
      board: board.key,
      fontFamily: state.fontFamily,
      fontUrl: state.fontUrl,
      boardFormat: state.boardFormat,
      boardWidth: board.width,
      boardHeight: board.height,
    };

    solution = {
      board: solution.key,
      fontFamily: state.fontFamily,
      fontUrl: state.fontUrl,
      boardFormat: state.boardFormat,
      boardWidth: solution.width,
      boardHeight: solution.height,
    };

    return { board, solution };
  },
  viewerView: (data) => {
    let sB = data.showBoard === undefined ? true : data.showBoard;

    return <SudokuSvg board={sB ? data.board.board : data.board.solution} />;
  },
  downloaderView: (data) => {
    return <SudokuSvg board={data.board} />;
  },
};
