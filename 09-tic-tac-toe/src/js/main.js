import { helloWorld } from './modules/helpers';
import '../css/main.css';
import '../icons/icon-restart.svg';

document.addEventListener('DOMContentLoaded', () => {
    const turn = true; // true is x
    const boardItems = document.querySelectorAll('.gameboard-item');

    boardItems.forEach(boardItem => {
        boardItem.addEventListener('click', function() {
            if (!turn) {

            }
        });
    });
});