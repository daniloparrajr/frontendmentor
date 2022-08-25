export default {
  nextTurn(state, payload) {
    state.turn = payload === "x" ? "o" : "x";

    return state;
  },
  setP1Mark(state, mark) {
    state.p1Mark = mark;

    return state;
  },
  setOpponent(state, opponent) {
    state.opponent = opponent;

    return state;
  },
  resetModal(state, payload) {
    state.resetModal = payload;
    state.showModal = payload;

    return state;
  },
  startNewGame(state, payload) {
    state.p1Mark = payload.p1Mark;
    state.opponent = payload.opponent;
    state.opponentMark = payload.opponentMark;

    return state;
  },
  setRoundWinner(state, details) {
    state.roundWinner = details.winner;
    state.roundWinnerMark = details.winnerMark;
    state.showModal = true;

    if (details.winnerMark === "x") {
      state.xScore++;
    } else if (details.winnerMark === "o") {
      state.oScore++;
    }

    return state;
  },
  setNextRound(state, payload) {
    state.nextRound = payload;

    if (payload === true) {
      state.showModal = false;
      state.turn = "x";
      state.roundWinner = "none";
    }

    return state;
  },
  setRoundDraw(state) {
    state.showModal = true;
    state.drawScore++;
    state.roundWinner = "tie";
    return state;
  },
  setResetGame(state, payload) {
    if (payload === true) {
      state.p1Mark = "x";
      state.opponent = "p2";
      state.opponentMark = "o";
      state.turn = "x";
      state.drawScore = 0;
      state.xScore = 0;
      state.oScore = 0;
      state.showModal = false;
      state.roundWinner = "none";
      state.resetGame = true;
      state.nextRound = false;
      state.resetModal = false;
      state.newGame = true;
    } else {
      state.resetGame = false;
    }

    return state;
  },
};
