import pubsub from "../library/pubsub";

export default {
  init: function () {
    this.element = document.querySelector("#resetGameBtn");
    this.event();
  },
  event: function () {
    this.element.addEventListener("click", function () {
      pubsub.publish("resetGame", true);
    });
  },
};
