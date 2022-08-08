export default {
  swapTurn(state, payload) {
    state.turn = !payload;

    return state;
  },
  setPlayerOneMark(state, payload) {
    state.playerOneMark = payload;

    return state;
  },
};
