import Component from "../lib/component.js";
import store from "../store/index.js";

export default function turnIndicator() {
  Component.call(this, {
    store,
    element: document.querySelector("#turnIndicator"),
  });
}

turnIndicator.prototype = Object.create(Component.prototype);
turnIndicator.prototype.constructor = turnIndicator;

turnIndicator.prototype.render = function () {
  this.element.classList.remove("x", "o");
  this.element.classList.add(store.state.turn);
};
