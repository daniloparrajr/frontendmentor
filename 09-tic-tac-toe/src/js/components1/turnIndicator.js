import pubsub from "../library/pubsub";

export default {
  init: function () {
    this.element = document.querySelector("#turnIndicator");
    pubsub.subscribe("setBoardMark", this.changeTurn.bind(this));
  },
  changeTurn: function (turn) {
    this.element.classList.remove("x");
    this.element.classList.remove("o");

    this.element.classList.add(turn ? "x" : "o");
  },
};
