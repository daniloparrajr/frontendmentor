import "../css/main.css";
import "../icons/icon-restart.svg";
import "../icons/icon-x.svg";
import "../icons/icon-o.svg";

import Game from "./components/game";
import Board from "./components/board";
import turnIndicator from "./components/turnIndicator";
import Stats from "./components/stats";
import Modal from "./components/modal";

const gameInstance = new Game();
const boardInstance = new Board();
const turnIndicatorInstance = new turnIndicator();
const statsInstance = new Stats();
const modalInstance = new Modal();

boardInstance.render();
gameInstance.render();
turnIndicatorInstance.render();
statsInstance.render();
modalInstance.render();
