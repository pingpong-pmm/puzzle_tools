import MazeSvg from "../../components/Boards/Maze";

//import MazeLogic from "easystarjs";
//import MazeGenerator from "generate-maze";

import { Thermo } from "../games/thermometer/main.js";
import { createCanvas } from "canvas";
import getShape from "../games/maze/masks/shapes.js";
import { InputEnum } from "../../components/Inputs/InputEnum";

export const data = {
  code: "003",
  version: "0.0.1",
  state: {
    size: 5,
    shape: 'a',
    cellShape: "square",

    instructions: {
      howToPlay: {
        title: "How To Play",
        url: "https://docs.google.com/document/d/1IZNggNKmih2XWGOhxYx407g2Ix7fuyWZY3nz0wv4TyM/edit?usp=share_link",
      },
      howToUse: {
        title: "How To Use",
        url: "https://docs.google.com/document/d/1QazwDRjzV06rciukpp2ptJg4k1C_4ERvIn78_esLMR8/edit?usp=share_link",
      },
    },
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
            {label: "0 - 50", value: 50},
            {label: "0 - 100", value: 100},
            {label: "-50 - 50", value: -50},
          ],
        },
        {
          id: "f",
          title: "Range  °F",
          type: InputEnum.Select,
          options: [
            {label: "50 - 104", value: 50},
            {label: "0 - 104", value: 0},
            {label: "-30 - 80", value: -50},
          ],
        }
      ],
    },
  ],
  create: async (state) => {
    let model = new Thermo();
    let model_config = {
        size: {
            cellSize: parseInt(state.size),
            width: parseInt(state.size),
            height: parseInt(state.size),
            layers: parseInt(state.size),
        },
        mask: getShape(state.shape, state.cellShape, state.size, state.size),
        algorithm: "aldousBroder",
        element: createCanvas(400, 400),
        shape: state.cellShape,
    }

    // await model.buildMazeUsingModel(model_config);
    const board_image = model.model.maze.metadata.drawingSurface.getCanvas();
    // await model.solve();
    const solution_image = model.model.maze.metadata.drawingSurface.getCanvas();


    //const width = Number(state.size);
    //const height = Number(state.size);

    //const maze = MazeGenerator(
    //  width,
    //  height,
    //  true,
    //  Math.floor(Math.random() * 10000)
    //);

    //let grid = [];
    //// Create the bianry cell from maze
    //for (let y = 0; y < height; y++) {
    //  grid.push(new Array(width).fill(1));
    //}

    //let pathF = new MazeLogic.js();

    //let cell: any = {};

    //pathF.setGrid(grid);
    //pathF.setAcceptableTiles([1]);
    //for (let y = 0; y < height; y++) {
    //  for (let x = 0; x < width; x++) {
    //    cell = maze[y][x];
    //    pathF.setDirectionalCondition(x, y, [
    //      !cell.top && MazeLogic.TOP,
    //      !cell.left && MazeLogic.LEFT,
    //      !cell.right && MazeLogic.RIGHT,
    //      !cell.bottom && MazeLogic.BOTTOM,
    //    ] as MazeLogic.Direction[]);
    //  }
    //}

    ////// console.log(maze)

    //let m = [];
    //for (let y in maze) {
    //  for (let x in maze) {
    //    m.push(maze[y][x]);
    //  }
    //}

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
    //let solution = JSON.parse(JSON.stringify(board));
    ////// console.log(board)

    //pathF.findPath(0, 0, width - 1, height - 1, function (path) {
    //  if (path === null) {
    //    alert("Path was not found.");
    //    // console.error("ERROR in maze");
    //  } else {
    //    //alert("Path was found. The first Point is " + path[0].x + " " + path[0].y);
    //    solution.path = path;
    //  }
    //});
    //// Initially that was 1000(updated on 21 aug 22)
    //pathF.enableSync();
    //await pathF.calculate();

    return { board, solution };
  },
  viewerView: (data) => {
    //let board = sudoku.generator.generate(state.difficulty)
    let sB =
      data.showBoard === undefined || data.showBoard === true
        ? true
        : data.showBoard;

    return <MazeSvg board={sB ? data.board.board : data.board.solution} />;
  },
  downloaderView: (data) => {
    return <MazeSvg board={data.board} />;
  },
};
