
import ComInput from "../../../components/Inputs/Input";
import ComCheckboxes from "../../../components/Inputs/Checkboxes";
import { useState } from "react";


const categories = {
  Sudokulike: "Sudoku-like",
  Wordgames: "Word Games",
  Numbergames: "Number Games",
  Linegames: "Line Games",
  Visualgames: "Visual Games",
  Calculate: "Calculating Games",
};

const catStates = {};

for (let c in categories) {
  catStates[`${categories[c]}`] = false;
}

const boards = [
  {
    title: "Sudoku",
    subtitle: "Sudoku Boards",
    image: "sudoku - Copy.PNG",
    link: "sudoku",
    categories: [categories.Numbergames, categories.Sudokulike],
  },

  {
    title: "Maze",
    subtitle: "Navigate a labyrinth on a paper",
    image: "maze - Copy.PNG",
    link: "maze",
    categories: [categories.Linegames, categories.Visualgames],
  },

];

function PickBoard({ setBoardType, purchaseList }) {
  const [checkBoxes, setCheckBoxes] = useState(catStates);
  const [search, setSearch] = useState("");

  return (
    <div className="flex">
      <div className="flex flex-1 flex-row flex-wrap justify-start items-start p-4 min-h-screen w-3/4">
        {boards &&
          boards.map((e, i) => {
            return (
              (Object.keys(checkBoxes).every((c) => checkBoxes[c] === false) ||
                e.categories.some(
                  (c) => checkBoxes[c] && e.categories.indexOf(c) > -1
                )) &&
              //   purchaseList.indexOf(e.link) > -1 &&
              e.title.toLowerCase().indexOf(search.toLowerCase()) > -1 && (
                <button

                  key={`board_${i}`}
                  className="w-1/2 lg:w-1/4 p-2 relative"
                  onClick={setBoardType.bind(this, e.link)}
                >




                  <div className=" p-6 overflow-hidden bg-white transform transition-transform hover:scale-105 cursor-pointer shadow-md">
                    <div className="h-2/3 overflow-hidden w-full border-b">

                    </div>
                    <div className="text-center my-2">
                      <p className="text-2xl">{e.title}</p>
                      <p>{e.subtitle}</p>
                    </div>
                  </div>
                </button>
              )
            );
          })}

      </div>
      <div className="hidden md:block w-0 md:w-1/3 lg:w-1/4 p-4">
        <div className=" sticky top-6">
          <ComInput
            icon={"search"}
            label="Seach for Puzzle"
            placeholder="Sudoku. Word Search. etc."
            value={search}
            setValue={setSearch}
          />
          <ComCheckboxes
            label="Categories"
            value={checkBoxes}
            setValue={setCheckBoxes}
          />
          <div className="border border-secCol1-300 p-2 m-2 rounded-lg shadow-md">
            <h2 className="text-xl mb-4">What to do here?</h2>
            <p className="text-sm text-justify">
              In this section, you can create new puzzle boards that you can
              download later or use on Page Maker. Just click a puzzle, it will
              open a new page where you can change the settings of your game to
              your liking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickBoard;
