import {
  range,
  random_seed,
  shuffle
} from "./utils.js";


export default class Sudoku {
  static __empty_cell_value = null;
  // Sudoku game is generated from grid dimensions given like 4x4, 6x6 ,9x9 and 16x16.
  // Takes the dimension as params and checks them to see if they are not undefined.
  constructor(width = 3, height, board, difficulty, seed) {
    // Giving one dimension is compulsory
    this.width = width;
    this.height = height || width;
    this.size = this.width * this.height;

    this.difficulty = 0;

    if (difficulty != undefined) {
      this.difficulty = difficulty;
    }

    if (!(this.width > 0)) {
      throw new Error('Width cannot be less than 1');
    }
    if (!(this.height > 0)) {
      throw new Error('Height cannot be less than 1');
    }
    if (!(this.size > 1)) {
      throw new Error('Board size cannot be 1 x 1');
    }


    if (board) {
      let blank_count = 0;
      this.board = board.map(row => row.map(cell => cell));
      for (const row of this.board) {
        for (let i = 0; i < row.length; i++) {
          if (!Number.isInteger(row[i]) || row[i] < 1 || row[i] > this.size) {
            row[i] = Sudoku.__empty_cell_value;
            blank_count += 1;
          }
        }
      }
      if (difficulty === undefined) {
        if (this.validate()) {
          this.__difficulty = blank_count / (this.size * this.size);
        } else {
          this.__difficulty = -2;
        }
      }
    }
    else {
      const positions = [...Array(this.size).keys()];
      random_seed(seed);
      shuffle(positions);
      this.board = positions.map((_, j) => [...Array(this.size).keys()].map((i) => (i === positions[j]) ? (i + 1) : Sudoku.__empty_cell_value));
    }
  }


  static _copy_board(board) {
    return board.map((row) => row.map((cell) => cell));
  }

  solve(raising = false) {
    let solution;
    if (this.validate()) {
      solution = new SudokuSolver(this);
      solution = solution._solve();
    } else {
      solution = null;
    }
    if (solution) {
      return solution;
    }

    else if (raising) {
      throw new Error("No solution found");
    }
    else {
      let solutionBoard = Sudoku.empty(this.width, this.height).board;
      let solutionDifficulty = -2;
      return new Sudoku(null, null, solutionBoard, solutionDifficulty);
    }
  }


  static empty(width, height) {
    const size = width * height;
    const board = Array(size).fill(Array(size).fill(Sudoku.__empty_cell_value));
    return new Sudoku(width, height, board, 0);
  }

  // Verified Correct Code
  validate() {
    let row_numbers = [];
    for (let i = 0; i < this.size; i++) {
      row_numbers.push([]);
      for (let j = 0; j < this.size; j++) {
        row_numbers[i].push(false);
      }
    }

    let col_numbers = []
    for (let i = 0; i < this.size; i++) {
      col_numbers.push([]);
      for (let j = 0; j < this.size; j++) {
        col_numbers[i].push(false);
      }
    }

    let box_numbers = [];
    for (let i = 0; i < this.size; i++) {
      box_numbers.push([]);
      for (let j = 0; j < this.size; j++) {
        box_numbers[i].push(false);
      }
    }

    // We have a Grid for row number,col numbers, box numbers
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        let cell = this.board[row][col];
        let box = Math.floor(row / this.height) * this.height + Math.floor(col / this.width);

        if (cell == 0) {
          continue;
        } else if (cell != null) {
          if (row_numbers[row][cell - 1]) {
            return false
          } else if (col_numbers[col][cell - 1]) {
            return false
          } else if (box_numbers[box][cell - 1]) {
            return false
          }
          row_numbers[row][cell - 1] = true
          col_numbers[col][cell - 1] = true
          box_numbers[box][cell - 1] = true
        }
      }
    }
    return true;
  }

  set_difficulty(diff) {
    if (typeof diff != 'number') {
      console.log(`difficulty is not a number: ${difficulty}`);
    }
    if (diff < 0 || diff > 1) {
      throw new Error('difficulty should be between 0 and 1');
    }

    let indices = [...Array(this.size * this.size).keys()];
    shuffle(indices);

    let problemSudoku = this.solve();
    let problemBoard = problemSudoku.board;

    for (let index of indices.slice(0, Math.floor(diff * this.size * this.size))) {
      let rowIndex = Math.floor(index / this.size);
      let colIndex = index % this.size;
      problemBoard[rowIndex][colIndex] = Sudoku.__empty_cell_value;
    }
    return new Sudoku(this.width, this.height, problemBoard, diff);
  }

  show() {
    if (this.__difficulty === -2) {
      console.log('Puzzle has no solution');
    }
    if (this.__difficulty === -1) {
      console.log('Invalid puzzle. Please solve the puzzle (puzzle.solve()), or set a difficulty (puzzle.difficulty())');
    }
    if (!this.board) {
      console.log('No solution');
    }
  }

  generateCode() {
    let puzzleString = "";
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.board[i][j] === null) {
          puzzleString += "0,";
        } else {
          puzzleString += this.board[i][j] + ",";
        }
      }
    }
    return {
      key: puzzleString,
      width: this.width * this.height,
      height: this.height * this.width
    };
  }
}


class SudokuSolver {
  // Constructor for the SudokuSolver class
  // Takes a Sudoku object as an argument
  constructor(sudoku = "Sudoku") {
    this.width = sudoku.width;
    this.height = sudoku.height;
    this.size = sudoku.size;
    this.sudoku = sudoku;
  }

  // Public method to solve the Sudoku puzzle
  // Calls the __get_blanks and __calculate_blank_cell_fillers private methods
  _solve() {
    let blanks = this.__get_blanks();
    let blank_count = blanks.length;

    // console.log("Confirmed get blanks working Correctly");
    const are_blanks_filled = Array(blank_count).fill(false);
    // console.log("Confirmed Are blanks filled working Correctly");
    let blank_fillers = this.__calculate_blank_cell_fillers(blanks)

    const solutionBoard = this.__get_solution(Sudoku._copy_board(this.sudoku.board), blanks, blank_fillers, are_blanks_filled);

    const solutionDifficulty = 0;
    if (!solutionBoard) {
      return null;
    }

    return new Sudoku(this.width, this.height, solutionBoard, solutionDifficulty);
  }

  __get_solution(board, blanks, blank_fillers, are_blanks_filled) {
    let minFillerCount = null;
    let chosenBlank = null;
    let chosenBlankIndex = null;

    for (let i = 0; i < blanks.length; i++) {
      const blank = blanks[i];
      const [x, y] = blank;
      if (are_blanks_filled[i]) {
        continue;
      }
      const validFillerCount = blank_fillers[x][y].reduce((sum, current) => sum + current, 0);
      if (validFillerCount === 0) {
        // Blank cannot be filled with any number, no solution
        return null;
      }
      if (minFillerCount === null || validFillerCount < minFillerCount) {
        minFillerCount = validFillerCount;
        chosenBlank = blank;
        chosenBlankIndex = i;
      }
    }

    if (chosenBlank === null) {
      // All blanks have been filled with valid values, return this board as the solution
      return board;
    }

    const [row, col] = chosenBlank;

    // Declare chosen blank as filled
    are_blanks_filled[chosenBlankIndex] = true;

    // Save list of neighbors affected by the filling of current cell
    const revertList = Array(blanks.length).fill(false);


    for (let number = 0; number < this.size; number++) {
      // Only try filling this cell with numbers its neighbors aren't already filled with
      if (!blank_fillers[row][col][number]) {
        continue;
      }

      // Test number in this cell, number + 1 is used because number is zero-indexed
      board[row][col] = number + 1;

      for (let i = 0; i < blanks.length; i++) {
        const blank = blanks[i];
        const blankRow = blank[0];
        const blankCol = blank[1];
        if (blank === chosenBlank) {
          continue;
        }
        if (this.__is_neighbor(blank, chosenBlank) && blank_fillers[blankRow][blankCol][number]) {
          blank_fillers[blankRow][blankCol][number] = false;
          revertList[i] = true;
        } else {
          revertList[i] = false;
        }
      }
      const solution_board = this.__get_solution(board, blanks, blank_fillers, are_blanks_filled);

      if (solution_board) {
        return solution_board;
      }

      // No solution found by having tested number in this cell
      // So we reallow neighbor cells to have this number filled in them
      for (let i = 0; i < blanks.length; i++) {
        if (revertList[i]) {
          const blank = blanks[i];
          const blankRow = blank[0];
          const blankCol = blank[1];
          blank_fillers[blankRow][blankCol][number] = true;
        }
      }
    }

    are_blanks_filled[chosenBlankIndex] = false;
    board[row][col] = Sudoku.__empty_cell_value;

    return null;
  }


  __is_neighbor(blank1, blank2) {
    const [row1, col1] = blank1;
    const [row2, col2] = blank2;
    if (row1 === row2 || col1 === col2) {
      return true;
    }
    const gridRow1 = Math.floor(row1 / this.height);
    const gridCol1 = Math.floor(col1 / this.width);
    const gridRow2 = Math.floor(row2 / this.height);
    const gridCol2 = Math.floor(col2 / this.width);
    return gridRow1 === gridRow2 && gridCol1 === gridCol2;
  }

  __calculate_blank_cell_fillers(blanks) {
    const sudoku = this.sudoku;
    const valid_fillers = Array(this.size)
      .fill(null)
      .map(() =>
        Array(this.size)
          .fill(null)
          .map(() => Array(this.size).fill(true))
      );
    for (const [row, col] of blanks) {
      for (let i = 0; i < this.size; i++) {
        const sameRow = sudoku.board[row][i];
        const sameCol = sudoku.board[i][col];
        if (sameRow && i !== col) {
          valid_fillers[row][col][sameRow - 1] = false;
        }
        if (sameCol && i !== row) {
          valid_fillers[row][col][sameCol - 1] = false;
        }
      }
      const gridRow = Math.floor(row / sudoku.height);
      const gridCol = Math.floor(col / sudoku.width);
      const gridRowStart = gridRow * sudoku.height;
      const gridColStart = gridCol * sudoku.width;
      for (let yOffset = 0; yOffset < sudoku.height; yOffset++) {
        for (let xOffset = 0; xOffset < sudoku.width; xOffset++) {
          if (gridRowStart + yOffset === row && gridColStart + xOffset === col) {
            continue;
          }
          const cell = sudoku.board[gridRowStart + yOffset][gridColStart + xOffset];
          if (cell) {
            valid_fillers[row][col][cell - 1] = false;
          }
        }
      }
    }
    return valid_fillers;
  }

  // Private method to get the coordinates of all the blank cells in the Sudoku puzzle
  __get_blanks() {
    const blanks = [];
    for (let i = 0; i < this.sudoku.board.length; i++) {
      const row = this.sudoku.board[i];
      for (let j = 0; j < row.length; j++) {
        const cell = row[j];
        if (cell === Sudoku.__empty_cell_value) {
          blanks.push([i, j]);
        }
      }
    }
    return blanks;
  }
}
