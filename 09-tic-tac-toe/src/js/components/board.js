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

Board.prototype.markWinnerPattern = function () {
  const winnerPattern = this.getWinnerPattern();

  if (winnerPattern !== null) {
    winnerPattern.forEach((patternIndex) => {
      this.cells[patternIndex].classList.add("inverted");
    });
  }
};

Board.prototype.handleEvent = function (event) {
  this.addMark(event.currentTarget);

  if (this.checkWin()) {
    this.clearEvents();
    this.markWinnerPattern();
    store.dispatch("roundWinner", store.state.turn);
  } else if (this.checkDraw()) {
    store.dispatch("setDraw", "");
  } else {
    store.dispatch("nextTurn", store.state.turn);
    this.setBoardMark();
  }
};
