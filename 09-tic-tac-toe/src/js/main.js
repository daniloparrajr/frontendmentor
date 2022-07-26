import "../css/main.css";
import "../icons/icon-restart.svg";
import board from "./components/board";
import turnIndicator from "./components/turnIndicator";
import resetBtn from "./components/resetBtn";
import stats from "./components/stats";

document.addEventListener("DOMContentLoaded", function () {
  stats.init();
  resetBtn.init();
  turnIndicator.init();
  board.init();
});
