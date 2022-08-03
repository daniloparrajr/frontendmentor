import pubsub from "../library/pubsub";

export default {
  element: document.querySelector("#board"),
  cells: document.querySelectorAll(".board-cell"),
  winningPatterns: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  init: function () {
    pubsub.subscribe("newGameVsPlayer", this.startGame.bind(this));
    pubsub.subscribe("resetGame", this.resetGame.bind(this));
  },
  startGame: function (turn) {
    this.turn = turn; // x is true, o is false
    this.events();
    this.setBoardMark();
  },
  clearEvents: function () {
    this.cells.forEach((cell) => {
      cell.removeEventListener("click", this);
    });
  },
  events: function () {
    this.cells.forEach((cell) => {
      cell.addEventListener("click", this, {
        once: true,
      });
    });
  },
  addMark: function (target) {
    target.classList.add(this.turn ? "x" : "o");
  },
  setBoardMark: function () {
    this.element.dataset.playerTurn = this.turn ? "x" : "o";
    pubsub.publish("setBoardMark", this.turn);
  },
  markWinnerPattern: function () {
    const winnerPattern = this.getWinnerPattern();
    console.log(winnerPattern);
    if (winnerPattern !== null) {
      winnerPattern.forEach((patternIndex) => {
        this.cells[patternIndex].classList.add("inverted");
      });
    }
  },
  getWinnerPattern: function () {
    let pattern = null;
    this.winningPatterns.every((winningPattern) => {
      let check = winningPattern.every((index) => {
        return this.cells[index].classList.contains(this.turn ? "x" : "o");
      });

      if (check) {
        pattern = winningPattern;
        return false;
      }

      return true;
    });

    return pattern;
  },
  checkWin: function () {
    return this.winningPatterns.some((winningPattern) => {
      return winningPattern.every((index) => {
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
      cell.classList.remove("inverted");
    });
  },
  handleEvent: function (event) {
    pubsub.publish("playerTurn", this.turn);

    this.addMark(event.currentTarget);

    if (this.checkWin()) {
      this.clearEvents();
      this.markWinnerPattern();

      pubsub.publish("playerWin", this.turn);
    } else if (this.checkDraw()) {
      pubsub.publish("playerDraw");
    } else {
      this.turn = !this.turn;
      this.setBoardMark();
    }
  },
};
