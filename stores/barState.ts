import { defineStore } from 'pinia';

export const useBarStore = defineStore('barState', {
  state: () => {
    return {
      isOpen: false
    };
  },
  actions: {
    openBar() {
      this.isOpen = true;
    },
    closeBar() {
      this.isOpen = false;
    }
  },
  getters: {
    isBarOpen: (state) => state.isOpen
  }
});
