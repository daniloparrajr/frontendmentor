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
  setWinner(context, payload) {
    context.commit("setWinner", payload);
  },
  setDraw(context, payload) {
    context.commit("setDraw", payload);
  },
};
