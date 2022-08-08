import "../css/main.css";
import "../icons/icon-restart.svg";
import "../icons/icon-x.svg";
import "../icons/icon-o.svg";

import Game from "./components/game";
import Board from "./components/board";

// import turnIndicator from "./components/turnIndicator";
// import resetBtn from "./components/resetBtn";
// import stats from "./components/stats";
// import game from "./components/newGameScreen";
// import modal from "./components/modal";
//
// game.init();
// modal.init();
// stats.init();
// resetBtn.init();
// turnIndicator.init();
// board.init(true);

const gameInstance = new Game();
const boardInstance = new Board();

boardInstance.render();
gameInstance.render();
