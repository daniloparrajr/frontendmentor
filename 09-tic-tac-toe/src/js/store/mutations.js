export default {
  swapTurn(state, payload) {
    state.turn = !payload;

    return state;
  },
};
