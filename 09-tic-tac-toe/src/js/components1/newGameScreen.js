import pubsub from "../library/pubsub";

export default {
  screen: document.querySelector("#newGameScreen"),
  playerOneMark: true,
  init: function () {
    this.markPicker = this.screen.querySelector("#markPicker");
    this.newGameVsPlayerBtn = this.screen.querySelector("#newGameVsPlayerBtn");

    this.events();
  },
  events: function () {
    this.markPicker.addEventListener("click", this.toggleMark.bind(this));

    this.newGameVsPlayerBtn.addEventListener(
      "click",
      this.newGameVsPlayer.bind(this)
    );
  },
  toggleMark: function (e) {
    const picker = e.currentTarget;
    let mark = picker.getAttribute("aria-checked");
    let playerOneMark = mark !== "true";
    this.playerOneMark = playerOneMark;
    picker.setAttribute("aria-checked", playerOneMark);
  },
  newGameVsPlayer: function () {
    this.screen.classList.add("hidden");
    pubsub.publish("newGameVsPlayer", this.playerOneMark);
  },
};
