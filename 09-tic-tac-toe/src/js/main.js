import "../css/main.css";
import "../icons/icon-restart.svg";
import board from "./components/board";
import turnIndicator from "./components/turnIndicator";

document.addEventListener("DOMContentLoaded", function () {
  turnIndicator.init();
  board.init();
});
