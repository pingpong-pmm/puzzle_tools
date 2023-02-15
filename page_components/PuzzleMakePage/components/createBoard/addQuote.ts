interface IAddQuote {
  fD;
  setFD;
  clue;
  setClue;
  answer;
  setAnswer;
}

const addQuote = ({
  fD,
  setFD,
  clue,
  setClue,
  answer,
  setAnswer,
}: IAddQuote) => {
  setFD({
    ...fD,
    ["wordList"]: [...fD.wordList, { author: clue, quote: answer }],
  });
  setClue("");
  setAnswer("");
};

export default addQuote;
