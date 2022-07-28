import pubsub from "../library/pubsub";

export default {
  element: document.querySelector("#modal"),
  init: function () {
    pubsub.subscribe("playerWin", this.playerWin.bind(this));
  },
  playerWin: function (winner) {
    let message = ``;
    if (winner) {
      message = "";
    }
    this.show();
  },
  show: function () {
    this.element.classList.remove("hidden");
  },
  hide: function () {
    this.element.classList.add("hidden");
  },
};
