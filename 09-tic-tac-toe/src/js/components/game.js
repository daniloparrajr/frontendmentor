import Component from "../lib/component.js";
import store from "../store/index.js";

export default function Game() {
  Component.call(this, {
    store,
    element: document.querySelector("#newGameScreen"),
  });

  this.markPicker = document.querySelector("#markPicker");
  this.newGameVsPlayerBtn = document.querySelector("#newGameVsPlayerBtn");
  this.p1Mark = store.state.p1Mark;
  this.events();
}

// Game extends Component
Game.prototype = Object.create(Component.prototype);

// If you don't set Game.prototype.constructor to Game,
// it will take the prototype.constructor of Component (parent).
// To avoid that, we set the prototype.constructor to Game (child).
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
  this.p1Mark = prevMark !== "true" ? "x" : "o";
  picker.setAttribute("aria-checked", prevMark !== "true");
};

Game.prototype.newGameVsPlayer = function () {
  this.element.classList.add("hidden");
  store.dispatch("setP1Mark", this.p1Mark);
  store.dispatch("setOpponent", "p2");
};
