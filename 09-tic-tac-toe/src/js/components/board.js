import pubsub from "../library/pubsub";

let turn = true; // true is x
const gameboard = document.querySelector("#board");
const boardItems = gameboard.querySelectorAll(".board-cell");
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const insertPlayerMark = (turn, item) => item.classList.add(turn ? "x" : "o");

const setBoardTurnMark = (turn, board) =>
  (board.dataset.playerTurn = turn ? "x" : "o");

const swapPlayerTurn = () => (turn = !turn);

const checkWin = () => {
  return WINNING_COMBINATIONS.some((combinations) => {
    return combinations.every((index) => {
      return boardItems[index].classList.contains(turn ? "x" : "o");
    });
  });
};

const checkDraw = () => {
  return [...boardItems].every((boardItem) => {
    return (
      boardItem.classList.contains("x") || boardItem.classList.contains("o")
    );
  });
};

const resetGame = () => {
  boardItems.forEach((boardItem) => {
    boardItem.classList.remove("x");
    boardItem.classList.remove("o");
  });
  turn = true;
  startGame();
};

const handleTurn = (e) => {
  insertPlayerMark(turn, e.currentTarget);

  if (checkWin()) {
    console.log("We have a winner!");
  } else {
    if (checkDraw()) {
      console.log("Its a draw!");
      resetGame();
      return false;
    }
  }

  swapPlayerTurn();
  setBoardTurnMark(turn, gameboard);
};

const startGame = () => {
  setBoardTurnMark(turn, gameboard);

  boardItems.forEach((boardItem) => {
    boardItem.addEventListener("click", handleTurn, { once: true });
  });
};
