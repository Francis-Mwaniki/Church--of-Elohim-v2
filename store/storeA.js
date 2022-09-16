import { defineStore } from "pinia";

export const useStore = defineStore("counter", {
  state: () => ({
    count: 2,
  }),
  getters: {
    doubleCounter(state) {
      return state.count * 2;
    },
  },
});
