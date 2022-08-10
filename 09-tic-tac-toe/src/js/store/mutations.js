export default {
  nextTurn(state, payload) {
    state.turn = payload === "x" ? "o" : "x";

    return state;
  },
  setP1Mark(state, payload) {
    state.p1Mark = payload;

    return state;
  },
  setOpponent(state, payload) {
    state.opponent = payload;

    return state;
  },
  setRoundWinner(state, winnerMark) {
    if (state.opponent === "p2") {
      if (
        (winnerMark === "x" && state.p1Mark === "x") ||
        (winnerMark === "o" && state.p1Mark === "o")
      ) {
        state.roundWinner = "p1";
      } else {
        state.roundWinner = "p2";
      }
    }

    return state;
  },
  setWinnerScore(state, winnerMark) {
    if (winnerMark === "x") {
      state.xScore++;
    } else if (winnerMark === "o") {
      state.oScore++;
    }

    return state;
  },
  setDraw(state, payload) {
    state.drawScore++;
    state.roundWinner = "tie";
    return state;
  },
  setModal(state, payload) {
    state.showModal = payload;

    return state;
  },
  nextRound(state, payload) {
    state.nextRound = payload;

    if (payload === true) {
      state.showModal = false;
      state.turn = "x";
    }

    return state;
  },
};
