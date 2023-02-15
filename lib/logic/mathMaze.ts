import {
  False,
  list_dup,
  None,
  rand_choice,
  rand_int,
  str,
  True,
} from "./_utils";

export default class MathMaze {
  constructor() {
    this._title = "Math Maze";
    this._board = [];
    this._boardKeys = [];
    this._filler = 0;

    this._width = 0;
    this._height = 0;

    this._up = 0;
    this._left = 1;
    this._down = 2;
    this._right = 3;

    this._keys = [];

    this._onePath = False;

    this._maxStep = 0;

    this.setLegends();

    this._percentHide = 80;

    this._start = "S";
    this._path = "P";
    this._end = "E";
    this._answer = "X";

    this._operations = ["+", "-"];
    this._numbers = [...new Array(8).keys()].map((e) => e + 2);
  }

  private _title: string;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  private _board: any[];

  get board(): any[] {
    return this._board;
  }

  set board(value: any[]) {
    this._board = value;
  }

  private _boardKeys: any[];

  get boardKeys(): any[] {
    return this._boardKeys;
  }

  set boardKeys(value: any[]) {
    this._boardKeys = value;
  }

  private _filler: string | number;

  get filler(): string | number {
    return this._filler;
  }

  set filler(value: string | number) {
    this._filler = value;
  }

  private _width: number;

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  private _height: number;

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  private _up: number;

  get up(): number {
    return this._up;
  }

  set up(value: number) {
    this._up = value;
  }

  private _left: number;

  get left(): number {
    return this._left;
  }

  set left(value: number) {
    this._left = value;
  }

  private _down: number;

  get down(): number {
    return this._down;
  }

  set down(value: number) {
    this._down = value;
  }

  private _right: number;

  get right(): number {
    return this._right;
  }

  set right(value: number) {
    this._right = value;
  }

  private _keys: any[];

  get keys(): any[] {
    return this._keys;
  }

  set keys(value: any[]) {
    this._keys = value;
  }

  private _onePath: boolean;

  get onePath(): boolean {
    return this._onePath;
  }

  set onePath(value: boolean) {
    this._onePath = value;
  }

  private _maxStep: number;

  get maxStep(): number {
    return this._maxStep;
  }

  set maxStep(value: number) {
    this._maxStep = value;
  }

  private _percentHide: number;

  get percentHide(): number {
    return this._percentHide;
  }

  set percentHide(value: number) {
    this._percentHide = value;
  }

  private _start: string;

  get start(): string {
    return this._start;
  }

  set start(value: string) {
    this._start = value;
  }

  private _path: string;

  get path(): string {
    return this._path;
  }

  set path(value: string) {
    this._path = value;
  }

  private _end: string;

  get end(): string {
    return this._end;
  }

  set end(value: string) {
    this._end = value;
  }

  private _answer: string;

  get answer(): string {
    return this._answer;
  }

  set answer(value: string) {
    this._answer = value;
  }

  private _operations: string[];

  get operations(): string[] {
    return this._operations;
  }

  set operations(value: string[]) {
    this._operations = value;
  }

  private _numbers: number[];

  get numbers(): number[] {
    return this._numbers;
  }

  set numbers(value: number[]) {
    this._numbers = value;
  }

  private _hasEnd: boolean;

  get hasEnd(): boolean {
    return this._hasEnd;
  }

  set hasEnd(value: boolean) {
    this._hasEnd = value;
  }

  re_init() {
    this._board = [];
    this._boardKeys = [];

    this._keys = [];

    this._maxStep = 0;
  }

  setLegends(start = "S", path = "P", end = "E", answer = "X") {
    this._start = start;
    this._path = path;
    this._end = end;
    this._answer = answer;
  }

  setBoard(width, height, filler = ".") {
    this._boardKeys = new Array(width * height).fill(`${filler}`);
    this._width = width;
    this._height = height;
    this._filler = `${filler}`;
    this._maxStep = Math.floor((this._width * this._height) / 2);
  }

  setOnePath(mode) {
    this._onePath = mode;
  }

  getBoard(mode = 0) {
    switch (mode) {
      case 0:
        return this._boardKeys;
      case 1:
        return this._board;
    }
  }

  printBoard(mode = 0, sF = true) {
    let toLoop = this.getBoard(mode);
    let s;
    for (let y = 0; y < this._height; y++) {
      s = "";
      for (let x = 0; x < this._width; x++) {
        if (toLoop[this._width * y + x] == this._filler && !sF) s += "  ";
        else s += `${toLoop[this._width * y + x]} `;
      }
      // console.log(`${s}`);
    }
  }

  buildBoard() {
    this._hasEnd = False;

    function generate_start() {
      this._boardKeys[rand_int(1, this._width - 2)] = this._start;
    }

    function validate_path(loc, bound = True) {
      let safe = True;

      if (
        Math.floor(loc / this._width) <= 0 ||
        Math.floor(loc / this._width) >= this._height - 1 ||
        loc % this._width <= 0 ||
        (loc % this._width >= this._width - 1 && bound)
      )
        safe = False;

      if (this._boardKeys[loc] != this._filler) safe = False;

      return safe;
    }

    function validate_surroundings(loc, direction) {
      let t = True;
      let f = False;

      /*
              p1 p2 p3
              p4 p5 p6
              p7 p8 p9
            */
      function microCheck(loc, p) {
        let safeMicro = True;
        for (let i = 0; i < p.length; i++) {
          let y = Math.floor(i / 3) - 1;
          let x = (i % 3) - 1;

          if (
            this._boardKeys[loc + y * this._width + x] != this._filler &&
            p[i]
          )
            safeMicro = False;
        }

        return safeMicro;
      }

      if (direction == this._up)
        return microCheck.call(this, loc, [t, t, t, t, f, t, f, f, f]);
      else if (direction == this._left)
        return microCheck.call(this, loc, [t, t, f, t, f, f, t, t, f]);
      else if (direction == this._down)
        return microCheck.call(this, loc, [f, f, f, t, f, t, t, t, t]);
      else if (direction == this._right)
        return microCheck.call(this, loc, [f, t, t, f, f, t, f, t, t]);
    }

    function recursive_createPath(
      loc,
      num_or_op,
      val = None,
      op: string | boolean = None,
      start = False
    ) {
      let allChoice = [0, 1, 2, 3];

      if (num_or_op) op = None;

      if (op == None) op = "*1";

      let allPos = [loc - 1, loc + 1, loc - this._width, loc + this._width];

      let allDir = [this._left, this._right, this._up, this._down];

      let hasNeighbor = False;

      while (allChoice.length > 0) {
        let i = allChoice.pop();
        if (validate_path.call(this, allPos[i])) {
          if (validate_surroundings.call(this, allPos[i], allDir[i])) {
            hasNeighbor = True;

            if (num_or_op) {
              if (start) this._boardKeys[allPos[i]] = val;
              else if (rand_int(0, 100) > this._percentHide)
                this._boardKeys[allPos[i]] = val;
              else this._boardKeys[allPos[i]] = this._path;
              this._board[allPos[i]] = val;
            } else {
              op = `${rand_choice(this._operations)}${rand_choice(
                this._numbers
              )}`;
              this._boardKeys[allPos[i]] = `(${op})`;
              this._board[allPos[i]] = `(${op})`;
            }

            if (
              !recursive_createPath.call(
                this,
                allPos[i],
                !num_or_op,
                str(eval(`${val}${op}`)),
                op
              )
            ) {
              if (num_or_op) this._boardKeys[allPos[i]] = val;
              else
                op = `${rand_choice(this._operations)}${rand_choice(
                  this._numbers
                )}`;
              this._boardKeys[allPos[i]] = this._filler;
            }
          }
        }
      }

      return hasNeighbor;
    }

    generate_start.call(this);

    this._board = list_dup(this._boardKeys);

    let num_or_op = True;
    let startNum = rand_choice(this._numbers);

    let startIndex = this._boardKeys.indexOf(this._start);

    recursive_createPath.call(
      this,
      startIndex,
      num_or_op,
      startNum,
      None,
      True
    );
  }

  async howToUse() {
    this.re_init();
    this.setLegends("V", ",", "2", "X");
    this._percentHide = 100;
    this.setBoard(16, 16, ".");
    this.buildBoard();
    this.printBoard(0, false);
    // console.log('---')
    this.printBoard(1, false);
  }
}
