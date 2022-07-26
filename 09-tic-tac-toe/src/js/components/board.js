import pubsub from "../library/pubsub";

export default {
  init: function () {
    this.turn = true; // x is true, o is false
    this.element = document.querySelector("#board");
    this.cells = document.querySelectorAll(".board-cell");
    this.winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    this.events();
    this.clearEvents();
    this.setBoardMark();
    pubsub.subscribe("resetGame", this.resetGame.bind(this));
  },
  clearEvents: function () {
    this.cells.forEach((cell) => {
      cell.removeEventListener("click", this.handleTurn);
    });
  },
  events: function () {
    this.cells.forEach((cell) => {
      cell.addEventListener("click", this.handleTurn.bind(this), {
        once: true,
      });
    });
  },
  addMark: function (e) {
    e.currentTarget.classList.add(this.turn ? "x" : "o");
  },
  setBoardMark: function () {
    this.element.dataset.playerTurn = this.turn ? "x" : "o";
    pubsub.publish("setBoardMark", this.turn);
  },
  checkWin: function () {
    return this.winCombinations.some((combinations) => {
      return combinations.every((index) => {
        return this.cells[index].classList.contains(this.turn ? "x" : "o");
      });
    });
  },
  checkDraw: function () {
    return [...this.cells].every((cell) => {
      return cell.classList.contains("x") || cell.classList.contains("o");
    });
  },
  resetGame: function () {
    this.turn = true;
    this.setBoardMark();
    this.clearBoardCells();
    this.clearEvents();
    this.events();
  },
  clearBoardCells: function () {
    this.cells.forEach((cell) => {
      cell.classList.remove("x");
      cell.classList.remove("o");
    });
  },
  handleTurn: function (e) {
    pubsub.publish("playerTurn", this.turn);
    this.addMark(e);

    if (this.checkWin()) {
      pubsub.publish("playerWin", this.turn);
    } else {
      if (this.checkDraw()) {
        pubsub.publish("playerDraw");
      }
    }

    this.turn = !this.turn;
    this.setBoardMark();
  },
};
