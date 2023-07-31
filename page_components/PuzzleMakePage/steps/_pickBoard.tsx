
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
  {
    title: "Thermometer",
    subtitle: "Find the value from given thermometers",
    image: "thermometer - Copy.PNG",
    link: "thermometer",
    categories: [categories.Numbergames, categories.Visualgames],
  },
  {
    title: "Protractor",
    subtitle: "Find the value from given angles",
    image: "protractor - Copy.PNG",
    link: "chada",
    categories: [categories.Numbergames, categories.Visualgames],
  },
  {
    title: "Ruller",
    subtitle: "Find the value from given scales",
    image: "ruller - Copy.PNG",
    link: "ruller",
    categories: [categories.Numbergames, categories.Visualgames],
  },

];

function PickBoard({ setBoardType, purchaseList }) {
  const [checkBoxes, setCheckBoxes] = useState(catStates);
  const [search, setSearch] = useState("");

  return (
    <div className="grid grid-cols-4">

      <div className="col-span-3 grid grid-cols-3 gap-2 p-4">
        {boards &&
          boards.map((e, i) => {
            return (
              (Object.keys(checkBoxes).every((c) => checkBoxes[c] === false) ||
                e.categories.some(
                  (c) => checkBoxes[c] && e.categories.indexOf(c) > -1
                )) &&
              //   purchaseList.indexOf(e.link) > -1 &&
              e.title.toLowerCase().indexOf(search.toLowerCase()) > -1 && (
                <>
                  <button
                    key={`board_${i}`}
                    className="w-full relative h-full max-h-32 bg-purple-100"
                    onClick={setBoardType.bind(this, e.link)}
                  >
                    <div className="p-3 h-full overflow-hidden transform transition-transform hover:scale-105 cursor-pointer shadow-md">
                   
                      <div className="text-center my-2">
                        <p className="text-2xl">{e.title}</p>
                        <p>{e.subtitle}</p>
                      </div>
                    </div>
                  </button>

                </>
              )
            );
          })}

      </div>
      
      <div className="hidden md:flex col-span-1">
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
