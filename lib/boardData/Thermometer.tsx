/* eslint-disable react/jsx-no-undef */
import { Thermo, Thermoc } from "../games/thermometer/main.js";
import { ThermoSVG } from '../games/thermometer/ThermoSVG.js'
import { InputEnum } from "../../components/Inputs/InputEnum";

export const data = {
  code: "004",
  version: "0.0.1",
  state: {
    c: 100,
    f: 212,
    // cellShape: "square",
  },

  form: [
    {
      title: "Configurations",
      template: [
        {
          id: "c",
          title: "Range  °C",
          type: InputEnum.Select,
          options: [
            { label: "0 - 50", value: 50 },
            { label: "0 - 100", value: 100 },
            { label: "-50 - 50", value: -50 },
          ],
        },
        {
          id: "f",
          title: "Range  °F",
          type: InputEnum.Select,
          options: [
            { label: "50 - 104", value: 50 },
            { label: "0 - 104", value: 0 },
            { label: "-30 - 80", value: -50 },
          ],
        }
      ],
    },
  ],

  create: async (state) => {

    let th = new Thermoc(state.c)
    let b_data = th.makeData()

    let link = localStorage.getItem("th_img")
    let board_image = link
    let solution_image = link;
    // let board_image = '/images/girl.jpg'
    // let solution_image = '/images/girl2.jpg';

    let board = {
      boardData: b_data,
      width: state.width,
      height: state.height,
      mazeData: board_image,
      path: [],
    };
    let solution = {
      boardData: b_data,
      width: state.width,
      height: state.height,
      mazeData: solution_image,
      path: [],
    };

    return { board, solution }
  },

  viewerView: (data) => {
    let thermometer = data.board.board.boardData

    let sB =
      data.showBoard === undefined || data.showBoard === true
        ? true
        : data.showBoard;

    return sB ? (
      <div>
        <Thermo show={!!false} temps={thermometer} />
      </div>
    ) : (
      <div>
        <Thermo show={!!true} temps={thermometer} />
      </div>
    )
  },
  downloaderView: (data) => {
    let thermometer = data.board.boardData
    let link = localStorage.getItem("th_img")
    return (
      <div className="grid h-full w-full items-center">
        {/* <ThermoSVG link={link} /> */}
        <Thermo show={!!true} temps={thermometer} />
      </div>
    )
  },
};
