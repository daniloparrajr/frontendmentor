import Component from "../lib/component.js";
import store from "../store/index.js";

export default function Game() {
  Component.call(this, {
    store,
    element: document.querySelector("#newGameScreen"),
  });

  this.markPicker = document.querySelector("#markPicker");
  this.newGameVsPlayerBtn = document.querySelector("#newGameVsPlayerBtn");
  this.newGameVsCpuBtn = document.querySelector("#newGameVsCpuBtn");
  this.resetModalBtn = document.querySelector("#resetModalBtn");
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
  const self = this;
  this.markPicker.addEventListener("click", this.toggleMark.bind(this));

  this.newGameVsPlayerBtn.addEventListener("click", () => {
    self.newGame("p2");
  });

  this.newGameVsCpuBtn.addEventListener("click", () => {
    self.newGame("cpu");
  });

  this.resetModalBtn.addEventListener("click", () => {
    store.dispatch("resetModal", true);
  });
};

Game.prototype.render = function () {
  if (store.state.resetGame === true) {
    this.showNewGameScreen();
  }
};

Game.prototype.showNewGameScreen = function () {
  this.element.classList.remove("hidden");
};

Game.prototype.hideNewGameScreen = function () {
  this.element.classList.add("hidden");
};

Game.prototype.toggleMark = function (e) {
  const picker = e.currentTarget;
  let prevMark = picker.getAttribute("aria-checked");
  this.p1Mark = prevMark !== "true" ? "x" : "o";
  picker.setAttribute("aria-checked", prevMark !== "true");
};

Game.prototype.newGame = function (opponent) {
  this.hideNewGameScreen();
  const opponentMark = this.p1Mark === "x" ? "o" : "x";
  store.dispatch("startNewGame", {
    p1Mark: this.p1Mark,
    opponent,
    opponentMark,
  });
};
