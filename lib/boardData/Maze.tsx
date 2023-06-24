import MazeSvg from "../../components/Boards/Maze";

//import MazeLogic from "easystarjs";
//import MazeGenerator from "generate-maze";

import { Maze } from "../games/maze/main.js";
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
      title: "Configuration",
      template: [
        {
          id: "size",
          title: "Board Width",
          type: InputEnum.Select,
          options: [
            {label: "5", value: 5},
            {label: "6", value: 6},
            {label: "7", value: 7},
            {label: "10", value: 10},
            {label: "20", value: 20},
          ],
        },
        {
          id: "shape",
          title: "Board Shape",
          type: InputEnum.Select,
          options: [
              { label: "A", value: "a" },
              { label: "B", value: "b" },
              { label: "Bird", value: "bird" },
              { label: "Bunny", value: "bunny" },
              { label: "C", value: "c" },
              { label: "Crown", value: "crown" },
              { label: "Car", value: "car" },
              { label: "D", value: "d" },
              { label: "Diamond", value: "diamond" },
              { label: "E", value: "e" },
              { label: "Egg", value: "egg" },
              { label: "F", value: "f" },
              { label: "G", value: "g" },
              { label: "Ghost", value: "ghost" },
              { label: "Gift Box", value: "gift-box" },
              { label: "Gingerbread", value: "gingerbread" },
              { label: "H", value: "h" },
              { label: "Heart", value: "heart" },
              { label: "I", value: "i" },
              { label: "J", value: "j" },
              { label: "K", value: "k" },
              { label: "L", value: "l" },
              { label: "L-Shape", value: "l" },
              { label: "M", value: "m" },
              { label: "N", value: "n" },
              { label: "O", value: "o" },
              { label: "P", value: "p" },
              { label: "Pumpkin", value: "pumpkin" },
              { label: "Pyramid", value: "pyramid" },
              { label: "Q", value: "q" },
              { label: "R", value: "r" },
              { label: "S", value: "s" },
              { label: "Star", value: "star" },
              { label: "T", value: "t" },
              { label: "U", value: "u" },
              { label: "V", value: "v" },
              { label: "W", value: "w" },
              { label: "X", value: "x" },
              { label: "Y", value: "y" },
              { label: "Z", value: "z" },
            ],
        },
        {
          id: "cellShape",
          title: "Cell Shape",
          type: InputEnum.Select,
          options: [
            {label: "Square", value: "square"},
            {label: "Circle", value: "circle"},
            {label: "Triangle", value: "triangle"},
            {label: "Hexagon", value: "hexagon"},
          ],
        },
      ],
    },
  ],
  create: async (state) => {
    let model = new Maze();
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

    await model.buildMazeUsingModel(model_config);
    const board_image = model.model.maze.metadata.drawingSurface.getCanvas();
    await model.solve();
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