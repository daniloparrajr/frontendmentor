export default {
  nextTurn(context, payload) {
    context.commit("nextTurn", payload);
  },
  setP1Mark(context, payload) {
    context.commit("setP1Mark", payload);
  },
  setOpponent(context, payload) {
    context.commit("setOpponent", payload);
  },
  roundWinner(context, details) {
    context.commit("setRoundWinner", details);
  },
  roundDraw(context) {
    context.commit("setRoundDraw");
  },
  nextRound(context, payload) {
    context.commit("setNextRound", payload);
  },
  resetModal(context, payload) {
    context.commit("resetModal", payload);
  },
  startNewGame(context, payload) {
    context.commit("startNewGame", payload);
  },
  resetGame(context, payload) {
    context.commit("setResetGame", payload);
  },
};
