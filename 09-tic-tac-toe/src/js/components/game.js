import Component from "../lib/component.js";
import store from "../store/index.js";

export default function Game() {
  Component.call(this, {
    store,
    element: document.querySelector("#newGameScreen"),
  });

  this.markPicker = document.querySelector("#markPicker");
  this.newGameVsPlayerBtn = document.querySelector("#newGameVsPlayerBtn");
  this.playerOneMark = store.state.playerOneMark;
  this.events();
}

// Board extends Component
Game.prototype = Object.create(Component.prototype);

// If you don't set Board.prototype.constructor to Board,
// it will take the prototype.constructor of Component (parent).
// To avoid that, we set the prototype.constructor to Rectangle (child).
Game.prototype.constructor = Game;

Game.prototype.events = function () {
  this.markPicker.addEventListener("click", this.toggleMark.bind(this));

  this.newGameVsPlayerBtn.addEventListener(
    "click",
    this.newGameVsPlayer.bind(this)
  );
};

Game.prototype.toggleMark = function (e) {
  const picker = e.currentTarget;
  let prevMark = picker.getAttribute("aria-checked");
  this.playerOneMark = prevMark !== "true" ? "x" : "o";
  picker.setAttribute("aria-checked", prevMark !== "true");
};

Game.prototype.newGameVsPlayer = function () {
  this.element.classList.add("hidden");
  store.dispatch("setPlayerOneMark", this.playerOneMark);
};
