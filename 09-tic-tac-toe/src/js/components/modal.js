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
    this.setMessage();
    this.bindEvents();
    this.show();
  } else {
    this.hide();
  }
};

Modal.prototype.setMessage = function () {
  if (store.state.roundWinner === "tie") {
  }

  if (store.state.roundWinner === "p1" || store.state.roundWinner === "p2") {
    const template = document.querySelector("#modalWinnerMessage");
    const clone = template.content.cloneNode(true);
    let modalText;
    let modalIcon = "#icon-";

    if (store.state.roundWinner === "p1") {
      modalText = "PLAYER 1 WINS!";
      modalIcon += store.state.p1Mark;
      clone.querySelector(".js-modal-title").classList.add("text-primary");
    } else {
      modalText = "PLAYER 2 WINS!";
      modalIcon += store.state.opponentMark;
      clone.querySelector(".js-modal-title").classList.add("text-secondary");
    }

    clone.querySelector(".js-modal-text").textContent = modalText;
    clone
      .querySelector(".js-modal-icon use")
      .setAttribute("xlink:href", modalIcon);

    this.element.appendChild(clone);
  }
};

Modal.prototype.show = function () {
  this.element.classList.remove("hidden");
};

Modal.prototype.hide = function () {
  this.element.classList.add("hidden");
};

Modal.prototype.bindEvents = function () {
  this.quitButtons = this.element.querySelectorAll(".js-btn-quit");
  this.continueButtons = this.element.querySelectorAll(".js-btn-continue");

  this.quitButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      store.dispatch("resetGame", true);
    });
  });

  this.continueButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      store.dispatch("nextRound", true);
    });
  });
};
