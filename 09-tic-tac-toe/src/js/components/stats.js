import pubsub from "../library/pubsub";

export default {
  init: function () {
    this.element = document.querySelector("#gameStats");
    this.xStat = this.element.querySelector("#xStat");
    this.oStat = this.element.querySelector("#oStat");
    this.tieStat = this.element.querySelector("#tieStat");

    pubsub.subscribe("playerWin", this.updateWinnerStat.bind(this));
    pubsub.subscribe("playerDraw", this.updateTieStat.bind(this));
    pubsub.subscribe("resetGame", this.resetStats.bind(this));
  },
  resetStats: function () {
    this.xStat.querySelector(".js-stat-value").textContent = 0;
    this.oStat.querySelector(".js-stat-value").textContent = 0;
    this.tieStat.querySelector(".js-stat-value").textContent = 0;
  },
  updateWinnerStat: function (winner) {
    if (winner) {
      let xStatValEl = this.xStat.querySelector(".js-stat-value");
      xStatValEl.textContent = Number.parseInt(xStatValEl.textContent) + 1;
    } else {
      let oStatValEl = this.oStat.querySelector(".js-stat-value");
      oStatValEl.textContent = Number.parseInt(oStatValEl.textContent) + 1;
    }
  },
  updateTieStat: function () {
    let tieStatValEl = this.tieStat.querySelector(".js-stat-value");
    tieStatValEl.textContent = Number.parseInt(tieStatValEl.textContent) + 1;
  },
  updateStatLabel: function (stat) {},
};
