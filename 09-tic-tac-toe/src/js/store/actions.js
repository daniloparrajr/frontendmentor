export default {
  swapTurn(context, payload) {
    context.commit("swapTurn", payload);
  },
  setPlayerOneMark(context, payload) {
    context.commit("setPlayerOneMark", payload);
  },
};
