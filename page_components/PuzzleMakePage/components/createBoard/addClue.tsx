interface IAddClue {
  answer;
  setAnswer;
  clue;
  setClue;
  fD;
  setFD;
}

const addClue = ({ answer, setAnswer, clue, setClue, fD, setFD }: IAddClue) => {
  const newClue = clue
    .replace(/^\s*[\r\n]/gm, "")
    .trim()
    .split(/\r?\n/);
  const newAnswer = answer
    .replace(/^\s*[\r\n]/gm, "")
    .trim()
    .split(/\r?\n/);

  if (
    newClue.length === 0 ||
    newAnswer.length === 0 ||
    clue.length === 0 ||
    answer.length === 0
  ) {
    alert("Clue or Answer is empty");
  } else if (newClue.length !== newAnswer.length) {
    alert("Clue and Answer must have the same amount of lines");
  } else {
    let obj = [];
    for (let i = 0; i < newClue.length; i++) {
      obj.push({ clue: newClue[i], answer: newAnswer[i] });
    }

    setFD({
      ...fD,
      ["wordList"]: [...fD.wordList, ...obj],
    });

    setClue("");
    setAnswer("");
  }
};

export default addClue;
