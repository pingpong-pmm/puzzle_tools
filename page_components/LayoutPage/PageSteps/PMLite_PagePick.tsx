import DragAndDropBoardList from "../Components/DragAndDropBoardList";

export default function PMLite_PagePick({
  pageList,
  addBoard,
  deleteBoard,
  toProcess,
  setToProcess,
  curId,
  setCurId,
}) {
  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <h2 className="text-center text-2xl">Pick Book Content(s)</h2>
      <div className="flex">
        <div className="flex-1 gap-1 mt-6 px-0 lg:px-8">
          <div className="text-center">Click here to add them to your book</div>
          {pageList.map((e, i) => (
            <p
              onClick={addBoard.bind(this, e.title)}
              key={`pagty_${i}`}
              className={`w-full border shadow-md rounded-md flex flex-col justify-center items-center h-8 bg-secCol1-300 cursor-pointer break-all text-sm lg:text-base `}
            >
              {e.title}
            </p>
          ))}
        </div>
        <div className="flex-1 relative pt-6">
          <div className="sticky top-0">
            <div className="text-center">Your current book content list</div>
            <DragAndDropBoardList
              curId={curId}
              setCurId={setCurId}
              toProcess={toProcess}
              setToProcess={setToProcess}
              deleteBoard={deleteBoard}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
