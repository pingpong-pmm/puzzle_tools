
import ComButton from "../../../components/Button1";
import { formatDate } from "../../../lib/utilities";
import { useEffect, useState } from "react";
import { boardCollectionDB } from "../../../db/idb";

function BoardList({ token, setFinishBoard }) {
  const [boardList, setBoardList] = useState<any>(false);

  async function loadData() {
    // todo
    // let bL = await Account.board.getCollectionList(token, [0, 99]);
    let bL: any = await boardCollectionDB.boardCollectionDB.toCollection().toArray()
    bL = {
      simple: bL
    }
    setBoardList(bL);
  }

  useEffect(() => {
    loadData();
  }, []);

  const [confirmPopUp, setConfirmPopUp] = useState(false);
  const [loading, setLoading] = useState(false);

  function deleteBoard() {
    // TODO: work
    // setConfirmPopUp(false);
    // setLoading(true);
    // setBoardList([]);
    // setTimeout(async () => {
    //   Account.board.deleteCollection(token, confirmPopUp).then(() => {
    //     loadData().finally(() => {
    //       setLoading(false);
    //     });
    //   });
    // }, 10);
  }

  return (
    <div className="min-h-screen w-full">
      {/*{confirmPopUp && (*/}
      {/*  <CompPopUp*/}
      {/*    message={`Confirm Delete`}*/}
      {/*    yesText={"Yes, I'm sure"}*/}
      {/*    noText={"No, cancel"}*/}
      {/*    yesAction={deleteBoard}*/}
      {/*    noAction={setConfirmPopUp.bind(this, false)}*/}
      {/*    hintText={"Are you sure you want to delete this item?"}*/}
      {/*  />*/}
      {/*)}*/}
      {/*<LoadingBar isLoading={loading} title={"Deleting..."} />*/}
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-5">
          {boardList ? (
            boardList.simple && boardList.simple.length > 0 ? (
              boardList.simple.map((e, i) => (
                <>
                  <div
                    key={`dlist_${i}`}
                    className="bg-white m-1 border shadow-md p-4"
                  >
                    <p className="text-xl p-2">{e.title}</p>
                    <div className="flex flex-col md:flex-row">
                      <div className="text-left text-sm px-4 flex-1">
                        <p>Total Boards: {e.boardCollection.length}</p>

                      </div>
                      <div className="flex justify-end p-4 flex-1 items-center">
                        <ComButton
                          text="Download"
                          action={setFinishBoard.bind(this, e.id)}
                        />
                        <ComButton
                          action={setConfirmPopUp.bind(this, e.id)}
                          bgColor="bg-primCol1 hover:bg-primCol1-600"
                          text="Delete"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Temperature  */}
                  {/* <div
                    key={`dlist_${i}`}
                    className="bg-white m-1 border shadow-md p-4"
                  >
                    <p className="text-xl p-2">Temperature</p>
                    <div className="flex flex-col md:flex-row">
                      <div className="text-left text-sm px-4 flex-1">
                        <p>Total Boards: {e.boardCollection.length}</p>

                      </div>
                      <div className="flex justify-end p-4 flex-1 items-center">
                        <ComButton
                          text="Download"
                          action={setFinishBoard.bind(this, e.id)}
                        />
                        <ComButton
                          action={setConfirmPopUp.bind(this, e.id)}
                          bgColor="bg-primCol1 hover:bg-primCol1-600"
                          text="Delete"
                        />
                      </div>
                    </div>
                  </div> */}
                </>
              ))
            ) : (
              <p>No Boards created yet.</p>
            )
          ) : (
            <p>Loading the Boards</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BoardList;
