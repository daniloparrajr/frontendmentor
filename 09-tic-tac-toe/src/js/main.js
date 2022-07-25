import "../css/main.css";
import "../icons/icon-restart.svg";
import board from "./components/board";
import turnIndicator from "./components/turnIndicator";
import resetBtn from "./components/resetBtn";

document.addEventListener("DOMContentLoaded", function () {
  resetBtn.init();
  turnIndicator.init();
  board.init();
});
