import { Thermo, Thermoc } from "../games/thermometer/main.js";
import { Thermos } from "../games/thermometer-2/main.js";
import { InputEnum } from "../../components/Inputs/InputEnum";

export const data = {
  code: "004",
  version: "0.0.1",
  state: {
    size: 5,
    shape: 'a',
    cellShape: "square",
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

    let th = new Thermoc()
    // console.log(thermo.therm)
    
    let board_image = th.viewImage()
    let solution_image = th.viewImage()

    // function setImage(i) {
    //   board_image = i
    //   solution_image = i
    //   // console.log(board_image)
    // }

    // let board_image = '/images/girl.jpg'
    // let solution_image = '/images/girl2.jpg';

    let board = {
      width: state.width,
      height: state.height,
      mazeData: board_image,
      path: [],
    };
    let solution = {
      width: state.width,
      height: state.height,
      mazeData: solution_image,
      path: [],
    };

    return { board, solution }
  },

  viewerView: (data) => {

    let sB =
      data.showBoard === undefined || data.showBoard === true
        ? true
        : data.showBoard;

    return sB ? (
      <div>
        <Thermo show={!!false} />
      </div>
    ) : (
      <div>
        <Thermo show={!!true} />
      </div>
    )
  },
  downloaderView: (data) => {
    return <div>Hello Ahnafiass</div>;
    // return <MazeSvg board={data.board} />;
  },
};
