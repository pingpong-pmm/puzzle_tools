import SudokuSvg from "../../components/Boards/Sudoku";

import SudokuToolCollection from "sudokutoolcollection";
import { InputEnum } from "../../components/Inputs/InputEnum";

const SudokuLogic = SudokuToolCollection();

export const data = {
  code: "000",
  version: "0.0.1",
  state: {
    difficulty: "easy",
    fontFamily: "Montserrat",
    fontUrl: null,

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
            {label: "Montserrat", value: "Montserrat"},
            {label: "Times New Roman", value: "Times New Roman"},
            {label: "Impact", value: "Impact"},
            {label: "Bradley Hand", value: "Bradley Hand"},
          ],
        },
        {
          id: "fontUrl",
          title: "Upload Font (Optional)",
          hint: "Upload a font file",
          accept:".ttf, .woff, .woff2",
          type: InputEnum.UploadFile,
          multiple: false,

        }
      ],
    },
  ],
  create: async (state) => {
    let board = SudokuLogic.generator.generate(state.difficulty);
    let solution = SudokuLogic.solver.solve(board);
    board = {
      board: board,

      fontFamily: state.fontFamily,
      fontUrl: state.fontUrl
    }
    console.log(board);

    solution = {
      board: solution,

      fontFamily: state.fontFamily,
      fontUrl: state.fontUrl
    }

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
