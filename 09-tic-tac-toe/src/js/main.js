import "../css/main.css";
import "../icons/icon-restart.svg";
import "../icons/icon-x.svg";
import "../icons/icon-o.svg";

import board from "./components/board";
import turnIndicator from "./components/turnIndicator";
import resetBtn from "./components/resetBtn";
import stats from "./components/stats";
import newGameScreen from "./components/newGameScreen";

document.addEventListener("DOMContentLoaded", function () {
  newGameScreen.init();
  stats.init();
  resetBtn.init();
  turnIndicator.init();
  board.init(true);
});
