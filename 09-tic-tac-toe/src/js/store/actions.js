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
  roundWinner(context, winnerMark) {
    context.commit("setRoundWinner", winnerMark);
    context.commit("setWinnerScore", winnerMark);
    context.commit("setModal", true);
  },
  roundDraw(context, payload) {
    context.commit("setDraw", payload);
    context.commit("setModal", payload);
  },
  nextRound(context, payload) {
    context.commit("nextRound", payload);
  },
  resetModal(context, payload) {
    context.commit("resetModal", payload);
  },
  startNewGame(context, payload) {
    context.commit("setNewGame", true);
    context.commit("setP1Mark", payload.p1Mark);
    context.commit("setOpponent", payload.opponent);
  },
  resetGame(context, payload) {
    context.commit("resetGame", payload);
    context.commit("resetScores", payload);
    context.commit("setModal", false);
    context.commit("setNewGame", true);
  },
};
