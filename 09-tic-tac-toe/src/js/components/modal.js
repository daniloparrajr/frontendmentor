import Component from "../lib/component.js";
import store from "../store/index.js";

export default function Modal() {
  Component.call(this, {
    store,
    element: document.querySelector("#modal"),
  });
}

Modal.prototype = Object.create(Component.prototype);
Modal.prototype.constructor = Modal;

Modal.prototype.render = function () {
  if (store.state.showModal === true) {
    this.show();
  } else {
    this.hide();
  }
};

Modal.prototype.setMessage = function () {
  if (store.state.roundWinner === "tie") {
  }

  if (store.state.roundWinner === "p1") {
  }
};

Modal.prototype.show = function () {
  this.element.classList.remove("hidden");
};

Modal.prototype.hide = function () {
  this.element.classList.add("hidden");
};
