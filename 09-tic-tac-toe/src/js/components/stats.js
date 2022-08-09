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
  let xStatLabelEl = this.xStat.querySelector(".js-stat-label");
  let oStatLabelEl = this.oStat.querySelector(".js-stat-label");

  if (store.state.p1Mark === "x" && store.state.opponent === "p2") {
    xStatLabelEl.textContent = "(P1)";
    oStatLabelEl.textContent = "(P2)";
  } else if (store.state.p1Mark === "o" && store.state.opponent === "p2") {
    xStatLabelEl.textContent = "(P2)";
    oStatLabelEl.textContent = "(P1)";
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
