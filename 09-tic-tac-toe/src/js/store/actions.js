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
  setDraw(context, payload) {
    context.commit("setDraw", payload);
  },
  nextRound(context, payload) {
    context.commit("nextRound", payload);
  },
};
