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
  setWinner(state, winner) {
    if (winner === "x") {
      state.xScore++;
    } else if (winner === "o") {
      state.oScore++;
    }

    return state;
  },
  setDraw(state, payload) {
    state.drawScore++;

    return state;
  },
};
