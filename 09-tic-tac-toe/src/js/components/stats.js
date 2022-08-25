import Component from "../lib/component.js";
import store from "../store/index.js";

export default function stats() {
  Component.call(this, {
    store,
    element: document.querySelector("#gameStats"),
  });

  this.xStat = this.element.querySelector("#xStat");
  this.oStat = this.element.querySelector("#oStat");
  this.tieStat = this.element.querySelector("#tieStat");
}

stats.prototype = Object.create(Component.prototype);
stats.prototype.constructor = stats;

stats.prototype.render = function () {
  this.updateStatLabel();
  this.updateStats();
};

stats.prototype.updateStatLabel = function () {
  let xStatLabel = this.xStat.querySelector(".js-stat-label");
  let oStatLabel = this.oStat.querySelector(".js-stat-label");

  if (store.state.p1Mark === "x") {
    xStatLabel.textContent = "(P1)";

    if (store.state.opponent === "cpu") {
      oStatLabel.textContent = "(CPU)";
    }

    if (store.state.opponent === "p2") {
      oStatLabel.textContent = "(P2)";
    }
  } else {
    oStatLabel.textContent = "(P1)";

    if (store.state.opponent === "cpu") {
      xStatLabel.textContent = "(CPU)";
    }

    if (store.state.opponent === "p2") {
      xStatLabel.textContent = "(P2)";
    }
  }
};

stats.prototype.updateStats = function () {
  let xStatValEl = this.xStat.querySelector(".js-stat-value");
  let oStatValEl = this.oStat.querySelector(".js-stat-value");
  let tieStatValEl = this.tieStat.querySelector(".js-stat-value");

  xStatValEl.textContent = store.state.xScore;
  oStatValEl.textContent = store.state.oScore;
  tieStatValEl.textContent = store.state.drawScore;
};
