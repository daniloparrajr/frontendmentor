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
  if (store.state.resetModal === true) {
    const template = document.querySelector("#modalRestartMessage");
    const clone = template.content.cloneNode(true);

    this.element.appendChild(clone);
    return true;
  }

  if (store.state.roundWinner === "tie") {
    const template = document.querySelector("#modalTieMessage");
    const clone = template.content.cloneNode(true);

    this.element.appendChild(clone);
    return true;
  }

  if (store.state.roundWinner === "p1" || store.state.roundWinner === "p2") {
    const template = document.querySelector("#modalWinnerMessage");
    const clone = template.content.cloneNode(true);
    let modalText;
    let modalIcon = "#icon-";

    if (store.state.roundWinner === "p1") {
      modalText = "PLAYER 1 WINS!";
      modalIcon += store.state.p1Mark;

      if (store.state.p1Mark === "x") {
        clone.querySelector(".js-modal-title").classList.add("text-primary");
      }

      if (store.state.p1Mark === "o") {
        clone.querySelector(".js-modal-title").classList.add("text-secondary");
      }
    } else {
      modalText = "PLAYER 2 WINS!";
      modalIcon += store.state.opponentMark;

      if (store.state.opponentMark === "x") {
        clone.querySelector(".js-modal-title").classList.add("text-primary");
      }

      if (store.state.opponentMark === "o") {
        clone.querySelector(".js-modal-title").classList.add("text-secondary");
      }
    }

    clone.querySelector(".js-modal-text").textContent = modalText;
    clone
      .querySelector(".js-modal-icon use")
      .setAttribute("xlink:href", modalIcon);

    this.element.appendChild(clone);
    return true;
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
  this.closeButtons = this.element.querySelectorAll(".js-btn-close");

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

  this.closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      store.dispatch("resetModal", false);
    });
  });
};
