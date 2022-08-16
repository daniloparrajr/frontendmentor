import Component from "../lib/component.js";
import store from "../store/index.js";

export default function Board() {
  this.winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  Component.call(this, {
    store,
    element: document.querySelector("#board"),
  });

  this.cells = this.element.querySelectorAll(".board-cell");

  this.bindEvents();
}

Board.prototype = Object.create(Component.prototype);
Board.prototype.constructor = Board;

Board.prototype.render = function () {
  this.setBoardMark();

  if (
    store.state.opponent === "cpu" &&
    store.state.turn === store.state.opponentMark &&
    store.state.newGame === true
  ) {
    store.dispatch("setNewGame", false);
    this.cpuTurn();
  }

  if (store.state.nextRound === true) {
    this.resetBoard();
    store.dispatch("nextRound", false);
  }

  if (store.state.resetGame === true) {
    this.resetBoard();
    store.dispatch("resetGame", false);
  }
};

Board.prototype.setBoardMark = function () {
  this.element.dataset.playerTurn = store.state.turn;
};

Board.prototype.addMark = function (cell) {
  cell.classList.add(store.state.turn);
};

Board.prototype.checkWin = function () {
  return this.winningPatterns.some((winningPattern) => {
    return winningPattern.every((index) => {
      return this.cells[index].classList.contains(store.state.turn);
    });
  });
};

Board.prototype.checkDraw = function () {
  return [...this.cells].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("o");
  });
};

Board.prototype.bindEvents = function () {
  this.cells.forEach((cell) => {
    cell.addEventListener("click", this, {
      once: true,
    });
  });
};

Board.prototype.clearEvents = function () {
  this.cells.forEach((cell) => {
    cell.removeEventListener("click", this);
  });
};

Board.prototype.getWinnerPattern = function () {
  let pattern = null;
  this.winningPatterns.every((winningPattern) => {
    let check = winningPattern.every((index) => {
      return this.cells[index].classList.contains(store.state.turn);
    });

    if (check) {
      pattern = winningPattern;
      return false;
    }

    return true;
  });

  return pattern;
};

Board.prototype.clearCellsClasses = function () {
  this.cells.forEach((cell) => {
    cell.classList.remove("x", "o", "inverted");
  });
};

Board.prototype.resetBoard = function () {
  this.clearCellsClasses();
  this.clearEvents();
  this.bindEvents();
};

Board.prototype.markWinnerPattern = function () {
  const winnerPattern = this.getWinnerPattern();

  if (winnerPattern !== null) {
    winnerPattern.forEach((patternIndex) => {
      this.cells[patternIndex].classList.add("inverted");
    });
  }
};

Board.prototype.getEmptyCells = function () {
  return [...this.cells].filter((cell) => {
    return !(cell.classList.contains("x") || cell.classList.contains("o"));
  });
};

Board.prototype.getRandomEmptyCell = function () {
  const emptyCells = this.getEmptyCells();
  const min = 0;
  const max = Math.floor(emptyCells.length);
  const randomCellIndex = Math.floor(Math.random() * (max - min) + min);
  return emptyCells[randomCellIndex];
};

Board.prototype.cpuTurn = function () {
  this.addMark(this.getRandomEmptyCell());
  this.checkRoundWinner();
};

Board.prototype.nextTurn = function () {
  store.dispatch("nextTurn", store.state.turn);

  if (
    store.state.opponent === "cpu" &&
    store.state.turn === store.state.opponentMark
  ) {
    this.cpuTurn();
  } else {
    this.setBoardMark();
  }
};

Board.prototype.checkRoundWinner = function () {
  if (this.checkWin()) {
    this.markWinnerPattern();
    store.dispatch("roundWinner", store.state.turn);
  } else if (this.checkDraw()) {
    store.dispatch("roundDraw", true);
  } else {
    this.nextTurn();
  }
};

Board.prototype.handleEvent = function (event) {
  if (
    event.currentTarget.classList.contains("x") ||
    event.currentTarget.classList.contains("o")
  ) {
    return false;
  }

  this.addMark(event.currentTarget);
  this.checkRoundWinner();
};
