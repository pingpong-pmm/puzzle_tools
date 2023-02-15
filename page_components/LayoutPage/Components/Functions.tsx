

// import Account from "../../../lib/mw/Accounts";
import {
  LayoutListType,
  loadBoardData,
} from "../../../components/Page/Contents/PageDirectory";
import { formDefaultValue, insertableList } from "./Variables";

import { bookTypes } from "./Variables";
import {db, finalBookDataDB} from "../../../db/idb";

// ==============================

export function _addPageSet(
  id: any,
  pageContent: any,
  formData: any,
  layout: any
) {
  if (pageContent) pageContent.list.push(pageContent.data);
  if (formData) {
    formData.list[id] = {
      ...formDefaultValue[formData.type](...formData.param),
      ...(formData.prefill ? formData.prefill : {}),
    };
    formData.typeList[id] = formData.type;
  }
  if (layout) layout.list[id] = layout.data;
}

// Load Data From Local Storage
export async function loadDataFromLocal(
  setCurrentFD,
  setToProcess,
  setPageLayout,
  setFD,
  setFDType,
  setToInsertable,
  setType
) {
  const boards = await db.bookCreatorBoards.toArray();
  //// console.log(jwtDecode(data))
  const urlCheck = window.location.href;
  if (boards.length === 0) {
    if (urlCheck.includes("No-Content-Book")) {
      window.location.replace(
        "/tools/FREE-No-Content-Book-Creator-Software/start-now?simple=true"
      );
      return false;
    } else if (urlCheck.includes("Planner-Book")) {
      window.location.replace(
        "/tools/Planner-Book-Creator-Software/start-now?simple=true"
      );
      return false;
    } else if (urlCheck.includes("Activity-Book")) {
      window.location.replace(
        "/tools/Activity-Book-Creator-Software/start-now?simple=true"
      );
      return false;
    }
  }

  let decoded: any = boards[0];

  if (
    urlCheck.includes("No-Content-Book") &&
    decoded.type != bookTypes.noContent
  ) {
    window.location.replace(
      "/tools/FREE-No-Content-Book-Creator-Software/start-now?simple=true"
    );
    return false;
  } else if (
    urlCheck.includes("Planner-Book") &&
    decoded.type != bookTypes.lowContent
  ) {
    window.location.replace(
      "/tools/Planner-Book-Creator-Software/start-now?simple=true"
    );
    return false;
  } else if (
    urlCheck.includes("Activity-Book") &&
    decoded.type != bookTypes.activity
  ) {
    window.location.replace(
      "/tools/Activity-Book-Creator-Software/start-now?simple=true"
    );
    return false;
  }

  let data = decoded.data;
  let type = decoded.type;
  setType(type);

  // Load Board Data
  await loadBoardData(
    data.map((e) => e.boardCollection && e.boardCollection[0].code)
  );

  const fDType = {},
    fDList = {},
    layoutList = {},
    finData = [];

  _addPageSet(
    "general",
    false,
    {
      type: "general",
      param: [],
      prefill: false,
      list: fDList,
      typeList: fDType,
    },
    false
  );

  _addPageSet(
    "page:Board_01",
    {
      data: {
        id: "page:Board_01",
        type: LayoutListType.PageMakerBlank.type,
        title: LayoutListType.PageMakerBlank.title,
        rawPage: true,
      },
      list: finData,
    },
    {
      type: "i_blank",
      param: [],
      prefill: false,
      list: fDList,
      typeList: fDType,
    },
    { data: LayoutListType.PageMakerBlank.class, list: layoutList }
  );
  setCurrentFD("page:Board_01");

  // Create Pages for Boards and Solution
  for (let d of data) {
    _addPageSet(
      d.id,
      {
        data: {
          ...d,
          isBoard: true,
          type: LayoutListType.PageMakerGameBoard.type,
        },
        list: finData,
      },
      {
        type: "i_basic",
        param: [],
        prefill: false,
        list: fDList,
        typeList: fDType,
      },
      { data: LayoutListType.PageMakerGameBoard.class, list: layoutList }
    );
  }
  for (let d of data) {
    _addPageSet(
      `s_${d.id}`,

      {
        data: {
          ...d,
          id: `s_${d.id}`,
          isBoard: false,
          type: LayoutListType.PageMakerGameBoard.type,
        },
        list: finData,
      },
      {
        type: "i_basic",
        param: [],
        prefill: false,
        list: fDList,
        typeList: fDType,
      },
      { data: LayoutListType.PageMakerGameBoard.class, list: layoutList }
    );
  }

  setToProcess(finData);
  setPageLayout(layoutList);
  setFD(fDList);
  setFDType(fDType);

  // Insertables
  if (setToInsertable) {
    const insertables = [];

    for (let k of Object.keys(insertableList[type])) {
      _addPageSet(
        k,
        {
          data: {
            title: k,
            group: insertableList[type][k].group || "All",
          },
          list: insertables,
        },
        false,
        false
      );
    }

    setToInsertable && setToInsertable(insertables);
  }
}

// Load Data From Internet
export async function loadDataFromNet(
  query,
  setCurrentFD,
  setToProcess,
  setPageLayout,
  setFD,
  setFDType,
  setToInsertable,
  isPrint = false,
  setType
) {
  // todo
  let rawData: any = await finalBookDataDB.finalBookDataTable.toCollection().first()
  console.log(rawData)
  rawData = rawData;
  let title = rawData.title;
  let boards = rawData.boards;
  let pages = rawData.pages.map((e) => JSON.parse(e));
  let settings = {};

  let type = rawData.type;
  setType(type);

  for (let i of rawData.settings) {
    let d = JSON.parse(i);
    settings[d.id] = d;
  }

  // Load Board Data
  await loadBoardData(
    rawData.boards.map((e) => e.boardCollection && e.boardCollection[0].code)
  );

  const fDType = {},
    fDList = {},
    layoutList = {},
    finData = [];

  _addPageSet(
    "general",
    false,
    {
      type: "general",
      param: [],
      prefill: settings["general"],
      list: fDList,
      typeList: fDType,
    },
    false
  );

  if (isPrint) {
    _addPageSet(
      "print_general",
      false,
      {
        type: "print_general",
        param: [],
        prefill: [],
        list: fDList,
        typeList: fDType,
      },
      false
    );
  }

  let LLTs = Object.keys(LayoutListType);

  for (let page of pages) {
    page = page;
    let lD =
      LayoutListType[LLTs[Object.keys(LayoutListType).indexOf(page.pageType)]];
    if (page["isGameBoard"]) {
      console.log({page})
      _addPageSet(
        page.b_id,
        {
          data: {
            ...boards.filter((e) => e.id == page.boardData)[0],
            id: page["b_id"],
            type: lD.type,
            isBoard: typeof(page.b_id) === "number" ? page.b_id.toString() : page.b_id.split("_")[0] != "s",
            rawPage: false,
            multiPage: page["isMultiPage"],
            multiPageBatch: page["multiPageBatch"] || 1,
            dateCountBy: page["isDatedPage"] && page["dateCountBy"],
            datedPage: page["isDatedPage"],
          },
          list: finData,
        },
        {
          type: page["pageSettingsType"],
          param: [],
          prefill: settings[page["b_id"]],
          list: fDList,
          typeList: fDType,
        },
        {
          data: page["pageType"],
          list: layoutList,
        }
      );
    } else {
      _addPageSet(
        page.b_id,
        {
          data: {
            id: page["b_id"],
            type: lD.type,
            title: lD.title,
            rawPage: true,
            multiPage: page["isMultiPage"],
            multiPageBatch: page["multiPageBatch"] || 1,
            dateCountBy: page["isDatedPage"] && page["dateCountBy"],
            datedPage: page["isDatedPage"],
          },
          list: finData,
        },
        {
          type: page["pageSettingsType"],
          param: [],
          prefill: settings[page["b_id"]],
          list: fDList,
          typeList: fDType,
        },
        {
          data: page["pageType"],
          list: layoutList,
        }
      );
    }
  }

  setCurrentFD(pages[0].b_id);
  setToProcess(finData);
  setPageLayout(layoutList);
  setFD(fDList);
  setFDType(fDType);

  if (setToInsertable) {
    const insertables = [];
    // console.log(insertableList[type])

    for (let k of Object.keys(insertableList[type])) {
      _addPageSet(
        k,
        {
          data: {
            title: k,
            group: insertableList[type][k].group || "All",
          },
          list: insertables,
        },
        false,
        false
      );
    }
    setToInsertable && setToInsertable(insertables);
  }
}

// Changer Function
export const _changeValue =
  (source, changer, itemID) =>
  (toChange, target: any = false) =>
  (value) => {
    const nFD = { ...source };
    nFD[target ? target : itemID][toChange] = value;
    changer(nFD);
  };
