import "../css/main.css";
import "../icons/icon-restart.svg";
import pubsub from "./library/pubsub";

const board = {
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
    this.setBoardMark();
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

document.addEventListener("DOMContentLoaded", function () {
  board.init();
});
