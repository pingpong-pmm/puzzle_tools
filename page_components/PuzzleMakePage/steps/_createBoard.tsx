
import ComInput from "../../../components/Inputs/Input";
import { useEffect, useState } from "react";
import ComButton from "../../../components/Button1";
import { capitalize } from "../../../lib/utilities";
import { CUSTOM_WORD_LIST } from "../../../data/Constants";
import {
  Alert,
  Button,
  FileInput,
  Label,
  Modal,
  Spinner,
  Table,
  Textarea,
  TextInput,
} from "flowbite-react";
// import parse from "html-react-parser";

import Link from "next/link";
import createForm from "../components/createBoard/createForm";
import addQuote from "../components/createBoard/addQuote";
import addClue from "../components/createBoard/addClue";
import {boardCollectionDB} from "../../../db/idb";
// import { fontFamily } from "html2canvas/dist/types/css/property-descriptors/font-family";
// import LoadingSpinner from "../../../components/utils/LoadingBar";
// import LoadingBar from "../../../components/utils/LoadingBar";

let collection: any = [];
let creatingNow = false;

function BoardCreate({ info, token, boardType, onCreateFinish }) {
  const [loaded, setLoaded] = useState(false);
  const [genGame, setGenGame] = useState(false);
  let board = boardType;
  let [boardData, setBoardData] = useState<any>(false);
  const [fD, setFD] = useState<any>(false);
  const [sudBor, setSudBor] = useState<any>(false);
  const [howMany, setHowMany] = useState(1);
  const [creating, setCreating] = useState(false);
  const [created, setCreated] = useState<any>(0);
  // const [remTok, setRemTok] = useState(
  //   info.subscription.user_type < 3
  //     ? info.subscription.token_board
  //     : "Unlimited"
  // );
  const [redirect, setRedirect] = useState<any>(false);
  const [colName, setColName] = useState(`${capitalize(board)} Collection`);
  const [showBoard, setShowBoard] = useState(true);
  const [clue, setClue] = useState("");
  const [answer, setAnswer] = useState("");
  const [isPurchased, setIsPurchased] = useState(false);
  const [isFontUploading, setIsFontUploading] = useState(false);
  const [showFontConsent, setShowFontConsent] = useState(false);
  const [formData, setFormData] = useState(null);

  board = capitalize(board);

  async function loadBoard() {
    try {
      let bD = await import(`/lib/boardData/${board}`);
      setBoardData(bD.data);
      setFD(bD.data.state);
      // TODO
      // let purchased = await Accounts.features.checkByName(token, boardType);
      // if (purchased.simple.length > 0) {
      //   setIsPurchased(true);
      // }
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    collection = [];
    creatingNow = false;

    loadBoard();
  }, []);

  let dNow = new Date();

  const uploadFont = async () => {
    setShowFontConsent(false);
    setIsFontUploading(true);
    // TODO
    // _request({
    //   token: token,
    //   url: `/api/upload/tmp/fonts`,
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => {
    //     const fontFamily = res.url
    //       .split("/")
    //       .pop()
    //       .split(".")[0]
    //       .split("-")[1]
    //       .replaceAll("%20", " ");
    //     setFD({
    //       ...fD,
    //       fontUrl: res.url,
    //       fontFamily: fontFamily || "custom",
    //     });
    //   })
    //   .catch((err) => {
    //     alert("Error uploading file");
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     setIsFontUploading(false);
    //     setShowFontConsent(false);
    //     setFormData(null);
    //   });
  };

  const fileInputChanged = (event) => {
    if (event.target.files[0]) {
      const formDataFont = new FormData();
      formDataFont.append("upload", event.target.files[0]);
      setFormData(formDataFont);
      setShowFontConsent(true);
    }
  };

  const changeValue = (toChange) => (value) => {
    if (boardData.code === "019" || boardData.code === "012") {
      if (fD.opAdd === "True" && fD.opSub === "True" && fD.opMul === "True") {
        setFD({ ...fD, [toChange]: value });
      } else if (
        !(
          (fD.opAdd === "False" && value === "False" && fD.opMul === "False") ||
          (fD.opAdd === "False" && fD.opSub === "False" && value === "False") ||
          (fD.opMul === "False" && fD.opSub === "False" && value === "False")
        )
      ) {
        setFD({ ...fD, [toChange]: value });
      } else {
        alert("All Clues can't be ignored. Must have at least one clue.");
      }
    } else if (boardData.code === "001" || boardData.code === "015") {
      if (toChange === "maxWords" && value > fD.maxWords) {
        if (
          parseInt(value) > parseInt(fD.boardHeight) &&
          parseInt(value) > parseInt(fD.boardWidth)
        ) {
          const res = confirm(
            `Warning: You need to increase board width and or board height to fit the amount of words you are trying to find. Or reduce the words to find number to a lower amount.`
          );
          if (res) {
            setFD({ ...fD, [toChange]: value });
          }
        } else {
          setFD({ ...fD, [toChange]: value });
        }
      } else {
        setFD({ ...fD, [toChange]: value });
      }
    } else {
      setFD({ ...fD, [toChange]: value });
    }
  };

  const isWordListEmpty = () => {
    if (fD.language === CUSTOM_WORD_LIST || fD.author === CUSTOM_WORD_LIST) {
      return fD.wordList.length === 0;
    }
    return false;
  };

  const generateSampleBoard = () => {
    if (isWordListEmpty()) {
      alert("Word list is empty");
    } else {
      setGenGame(true);
      setTimeout(async () => {
        try {
          let data = await boardData.create(fD);
          setGenGame(false);
          setSudBor(data);
        } catch (e) {
          console.log(e);
          setGenGame(false);
        }
      }, 5);
    }
  };

  const createBoardData = () => {
    if (isWordListEmpty()) {
      alert("Word list is empty");
    } else {
      setCreating(true);
      collection = [];
      setCreated(1);
      creatingNow = true;
    }
  };

  async function addBoard() {
    if (created <= howMany) {
      try {
        if (created === 1 && sudBor) {
          // code,
          //     data,
          //     dataVersion,
          collection.push(
              {
               code: boardData.code,
                data: sudBor,
                dataVersion: boardData.version
              }
          );
        } else {
          collection.push(
              {
               code: boardData.code,
                data: await boardData.create(fD),
                dataVersion: boardData.version
              }
          );
        }

        setCreated(created + 1);
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        // collection.push(
        //   Account.board.boardTemplate(
        //     boardData.code,
        //     await boardData.create(fD),
        //     boardData.version
        //   )
        // );
        creatingNow && uploadBoard(collection);
        creatingNow = false;
        setCreated("[Uploading to Server]");
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    boardData && addBoard();
  }, [created]);

  async function uploadBoard(collection) {
    // TODO

    const title = `${colName} [${dNow.getFullYear()}/${
        dNow.getMonth() + 1
    }/${dNow.getDate()} ${dNow.getHours()}:${dNow.getMinutes()}:${dNow.getSeconds()}]`
    const id = await boardCollectionDB.boardCollectionDB.add({
      title: title,
      boardCollection: collection
    })
    // console.log({id})
    // let resp = await Account.board.createCollection(
    //   token,
    //   title
    //   ,
    //   collection
    // );
    // let _info = await Account.getInfo(token, true);
    if (id) {
      setRedirect(id);
      onCreateFinish(id);
      // _info.full.data.subscription.user_type === 0 &&
      //   setRemTok(_info.full.data.subscription.token_board);
    } else {
      alert("Error: unable to create data " );
    }
    setCreating(false);
  }

  function downloadBoards() {
    onCreateFinish(redirect);
  }

  const onChangeClue = (e) => {
    setClue(e.target.value.toUpperCase());
  };

  const onChangeAnswer = (e) => {
    setAnswer(e.target.value.toUpperCase());
  };

  return (
    <>
      <Modal
        show={showFontConsent}
        position="center"
        onClose={() => {
          setShowFontConsent(false);
          (document.getElementById("fontFile") as HTMLInputElement).value =
            null;
        }}
      >
        <Modal.Header>Please confirm the following information</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              By uploading a custom font, you agree to the following:
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              I acknowledge that I am the owner of the font or have the right to
              use it for my intended purpose.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={uploadFont}>I accept</Button>
          <Button
            color="gray"
            onClick={() => {
              setShowFontConsent(false);
              (document.getElementById("fontFile") as HTMLInputElement).value =
                null;
            }}
          >
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

      {/*<LoadingBar isLoading={isFontUploading} title={"Uploading Font..."} />*/}

      {genGame && (
        <div className="fixed w-screen top-0 bg-white bg-opacity-10 z-30 h-screen flex justify-center items-center">
          <div className="w-10 h-10 bg-secCol1-500 animate-spin"></div>
        </div>
      )}
      {loaded ? (
        <div className="flex flex-col md:flex-row mt-8 mb-8">
          <div className="md:w-1/2 w-full">
            <div className="w-4/5 mx-auto sticky top-6">
              {boardData && sudBor ? (
                <>
                  <div className="relative">


                    <boardData.viewerView
                      board={sudBor}
                      showBoard={showBoard}
                    />
                  </div>
                </>
              ) : (
                <div className="border border-secCol1-300 p-2 m-2 rounded-lg shadow-md">
                  <h2 className="text-xl mb-4">What to do here?</h2>
                  <p className="text-sm text-justify my-2">
                    This is where you create your new puzzles. On your right,
                    you can see some settings that will determine the final
                    output of your puzzles.
                  </p>
                  <p className="text-sm text-justify my-2">
                    To have a preview, press &quot;Generate Sample&quot;.
                  </p>
                  <p className="text-sm text-justify my-2">
                    Then if you&apos;re satisfied with the design you are
                    seeing, press &quot;Generate Board Data&quot; and wait for
                    it to create all of your new boards.
                  </p>
                  <p className="text-sm text-justify my-2">
                    After creating the boards, you can choose to download the
                    boards by clicking &quot;Download Boards&quot; that will
                    appear later after generating.
                  </p>
                </div>
              )}

              {boardData && sudBor.solution && (
                <button
                  onClick={setShowBoard.bind(this, !showBoard)}
                  className="overflow-hidden border border-gray-500 hover:shadow-xl mt-4 p-1 rounded-lg"
                >
                  <span
                    className={`${
                      showBoard
                        ? "bg-primCol1-500 text-white"
                        : "bg-transparent"
                    } p-1 rounded-lg`}
                  >
                    Board
                  </span>
                  <span
                    className={`${
                      !showBoard
                        ? "bg-primCol1-500 text-white"
                        : "bg-transparent"
                    } p-1 rounded-lg`}
                  >
                    Solution
                  </span>
                </button>
              )}

              {fD.language === CUSTOM_WORD_LIST ||
              (fD.author && fD.author === CUSTOM_WORD_LIST) ? (
                boardData.code === "002" ? (
                  <div className="mt-5">
                    <Table>
                      <Table.Head>
                        <Table.HeadCell>#NO:</Table.HeadCell>
                        <Table.HeadCell>Clue</Table.HeadCell>
                        <Table.HeadCell>Answer</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        {fD.wordList.length === 0 ? (
                          <Table.Row>
                            <Table.Cell colSpan={3}>
                              <Alert color="warning" rounded={false}>
                                <span>
                                  <span className="font-medium">Sorry!</span>{" "}
                                  Word list is empty.
                                </span>
                              </Alert>
                            </Table.Cell>
                          </Table.Row>
                        ) : null}
                        {fD.wordList.map((obj, i) => (
                          <Table.Row
                            key={i}
                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                          >
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {i + 1}
                            </Table.Cell>
                            <Table.Cell>{obj.clue}</Table.Cell>
                            <Table.Cell>{obj.answer}</Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>

                    <div className="flex flex-col gap-4 mt-5">
                      <div>
                        <div className="mb-2 block">
                          {fD.customWordNotes.map((note, i) => (
                            <>
                              <Alert color="failure" rounded={true}>
                                <span>
                                  <span className="">{note.note}</span>
                                </span>
                              </Alert>
                            </>
                          ))}
                          <Label
                            htmlFor="clue"
                            color="green"
                            value="Enter Clue:"
                          />
                        </div>
                        <Textarea
                          onChange={onChangeClue}
                          value={clue}
                          id="clue"
                          rows={3}
                          placeholder="Enter your clue here. (one per line)"
                          required={true}
                          color="green"
                          helperText={
                            "Clue must not be empty and Both length should be same"
                          }
                        />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label
                            htmlFor="answer"
                            color="red"
                            value="Enter your answer:"
                          />
                        </div>
                        <Textarea
                          onChange={onChangeAnswer}
                          value={answer}
                          id="answer"
                          rows={3}
                          placeholder="Enter your answer here. (one per line)"
                          required={true}
                          color="red"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row mt-2 justify-end">
                      <Button
                        onClick={() =>
                          addClue({
                            answer,
                            setAnswer,
                            clue,
                            setClue,
                            fD,
                            setFD,
                          })
                        }
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                ) : boardData.code === "008" ? (
                  <div className="mt-5">
                    <Table>
                      <Table.Head>
                        <Table.HeadCell>#NO:</Table.HeadCell>
                        <Table.HeadCell>AUTHOR</Table.HeadCell>
                        <Table.HeadCell>Quote</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        {fD.wordList.length === 0 ? (
                          <Table.Row>
                            <Table.Cell colSpan={3}>
                              <Alert color="warning" rounded={false}>
                                <span>
                                  <span className="font-medium">Sorry!</span>{" "}
                                  Word list is empty.
                                </span>
                              </Alert>
                            </Table.Cell>
                          </Table.Row>
                        ) : null}
                        {fD.wordList.map((obj, i) => (
                          <Table.Row
                            key={i}
                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                          >
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {i + 1}
                            </Table.Cell>
                            <Table.Cell>{obj.author}</Table.Cell>
                            <Table.Cell>{obj.quote}</Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>

                    <div className="flex flex-col gap-4 mt-5">
                      <div>
                        <div className="mb-2 block">
                          <Label
                            htmlFor="clue"
                            color="green"
                            value="Enter Author Name:"
                          />
                        </div>
                        <TextInput
                          onChange={onChangeClue}
                          value={clue}
                          id="clue"
                          placeholder="Enter author name here..."
                          required={true}
                          color="green"
                          helperText={"author name must not be empty"}
                        />
                      </div>
                      <div>
                        <div className="mb-2 block">
                          <Label
                            htmlFor="answer"
                            color="red"
                            value="Enter your quote:"
                          />
                        </div>
                        <TextInput
                          onChange={onChangeAnswer}
                          value={answer}
                          id="answer"
                          placeholder="Enter your quote here..."
                          required={true}
                          color="red"
                          helperText={"Quote must not be empty"}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-end">
                      <Button
                        onClick={() =>
                          addQuote({
                            fD,
                            setFD,
                            clue,
                            setClue,
                            answer,
                            setAnswer,
                          })
                        }
                        disabled={fD.wordList.length !== 0}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-10">
                    <div id="textarea">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="wordlist"
                          value="Your custom word list:"
                        />
                        {fD.customWordNotes.map((note, i) => (
                          <>
                            <Alert color="failure" rounded={true}>
                              <span>
                                <span className="">{note.note}</span>
                              </span>
                            </Alert>
                          </>
                        ))}
                      </div>
                      <Textarea
                        onChange={(event) =>
                          changeValue("wordList")(event.target.value)
                        }
                        id="wordlist"
                        placeholder="Enter your custom word list here..."
                        required={true}
                        rows={4}
                      />
                    </div>
                  </div>
                )
              ) : null}
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="w-4/5 bg-white shadow-lg rounded-lg p-4 m-auto mt-4">

              <div>
                <div className="m-2 mt-4">
                  <ComInput
                    icon="tag"
                    label="File Name"
                    value={colName}
                    setValue={setColName}
                  />
                </div>
              </div>
              {boardData &&
                boardData.form.map((e, i) => {
                  return (
                    <div key={`form_${i}`}>
                      <h4 className="text-lg">{e.title}</h4>
                      <hr />
                      <div className="m-2 mt-4 md:grid md:grid-cols-2 md:gap-3">
                        {e.template.map((ee, ii) => {
                          if (ee.id === "fontUrl") {
                            return (
                              <div id="fileUpload" className="mx-2" key={ii}>
                                <div className="mb-2">
                                  <Label htmlFor="fontFile" value={ee.title} />
                                </div>

                                <FileInput
                                  sizing="sm"
                                  onChange={fileInputChanged}
                                  accept={ee.accept}
                                  id="fontFile"
                                  helperText={ee.hint || ""}
                                />
                              </div>
                            );
                          }
                          return createForm({
                            ee: ee,
                            id: `form_${i}_${ii}`,
                            fD: fD,
                            changeValue: changeValue,
                          });
                        })}
                      </div>
                    </div>
                  );
                })}

              <br />
              <ComButton
                action={generateSampleBoard}
                text="Generate Sample"
                bgColor="bg-secCol1-600 w-full"
                extraParams={false}
              />
              <br />
              <br />

              {true ? (
                !creating ? (
                  <>
                    {boardData &&
                    boardData.code === "002" &&
                    fD.language === CUSTOM_WORD_LIST ? null : (
                      <ComInput
                        icon="star"
                        label="Create How Many (1-1000)"
                        placeholder="Pick a number"
                        type="number"
                        value={howMany}
                        params={{ min: 1, max: 1000 }}
                        setValue={(e) => {
                          if (e > 1000) {
                            alert("You can only create 1000 boards at a time");
                          } else if (e < 1) {
                            alert("You must create at least 1 board");
                          } else {
                            setHowMany(e);
                          }
                        }}
                      />
                    )}

                    {/*<p className="my-2 text-center">Remaining Tokens: {remTok}</p>*/}
                    <ComButton
                      action={createBoardData}
                      text="Generate Board Data"
                      bgColor={`bg-secCol1-600 w-full`}
                      extraParams={false}
                    />

                    {redirect ? (
                      <ComButton
                        action={downloadBoards}
                        text="Download Boards"
                        bgColor={`bg-primCol1-800 w-full`}
                        extraParams={false}
                      />
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center">
                      <p className="animate-ping bg-secCol1 w-3 h-3 mr-2">
                        &nbsp;
                      </p>
                      Creating {created}
                      <p className="animate-ping bg-primCol1 w-3 h-3 ml-2">
                        &nbsp;
                      </p>
                    </div>

                    <div className="w-full border h-1 mt-2">
                      <div
                        className="bg-primCol1 h-1"
                        style={{ width: `${(created - 1 / howMany) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )
              ) : null}
            </div>
            {fD.note && (
              <div className="w-4/5 m-auto mt-4 border-solid border-2 rounded p-2 border-secCol1-500">
                {fD.note && fD.note}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <div className="w-5 h-5 bg-secCol1-500 animate-spin"></div>
        </div>
      )}
    </>
  );
}

export default BoardCreate;
