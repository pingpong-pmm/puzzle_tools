// db.ts
import Dexie, { Table } from "dexie";

export interface BookCreatorBoards {
  id?: number;
  data: any;
  type: number;
}

export interface BoardCollection {
  id?: number;
  title: string;
  boardCollection: any;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  bookCreatorBoards!: Table<BookCreatorBoards>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      bookCreatorBoards: "++id, data, type", // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();


export class BoardCollectionClass extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  boardCollectionDB!: Table<BoardCollection>;

  constructor() {
    super("boardCollectionDB");
    this.version(1).stores({
      boardCollectionDB: "++id, title, boardCollection", // Primary key and indexed props
    });
  }
}

export const boardCollectionDB = new BoardCollectionClass()


//
// {
//   owner: id,
//       title: bodyData.data.title,
//     pages: bodyData.data.pages,
//     boards: bodyData.data.boards,
//     type: bodyData.data.type,
//     settings: bodyData.data.settings,
// }

export interface FinalBookData {
  id?: number;
  title: string;
  pages: any;
  boards: any;
  type: any;
  settings: any;
}

export class FinalBoardClass extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  finalBookDataTable!: Table<FinalBookData>;

  constructor() {
    super("finalBookDataTable");
    this.version(1).stores({
      finalBookDataTable: "++id, title, pages, boards, type, settings", // Primary key and indexed props
    });
  }
}

export const finalBookDataDB = new FinalBoardClass()
