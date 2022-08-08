import Component from "../lib/component.js";
import store from "../store/index.js";

export default function Board() {
  Component.call(this, {
    store,
    element: document.querySelector("#board"),
  });
}

// Board extends Component
Board.prototype = Object.create(Component.prototype);

// If you don't set Board.prototype.constructor to Board,
// it will take the prototype.constructor of Component (parent).
// To avoid that, we set the prototype.constructor to Rectangle (child).
Board.prototype.constructor = Board;

Board.prototype.render = function () {
  this.setBoardMark();
};

Board.prototype.setBoardMark = function () {
  this.element.dataset.playerTurn = store.state.turn;
};
