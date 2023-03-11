import Square from "./Square";
import Utility from "./Utility";
// import {numberAnimalsMapping} from "./Globals";

export default class Generator {
    constructor(){
        this.squares = []; // will hold all 81 squares of the sudoku
        this.count = 0;  // the index of the square in the sudoku that is about to be filled with a value
    }


    setUp(width,height, data){
        console.log(width,height, data);
        this.squares = new Array(width*height);

        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i] = this.createSquare(i, parseInt(data[i]));
        }
        console.log("squares",this.squares);
    }

    // based on the index and possible value an example square is created
    // used later to check if it fits in the partially filled sudoku
    createSquare(index, value){
        let square = new Square();
        square.column = Utility.getColumn(index + 1);
        square.row = Utility.getRow(index + 1);
        square.subGrid = Utility.getSubGrid(index + 1);
        square.value = value;
        square.index = index;
        // square.picture = numberAnimalsMapping.get(value);
        square.picture = undefined;
        return square;
    }

    // remove value of randomly chosen squares to build a solvable sudoku
    generateSudoku(data){
        console.log("Generation of Data");
        console.log(data);

        this.setUp(data.width, data.height, data.key);

        return this.squares;
    }
}
