import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: new Set<string>(),
  }),
  getters: {
    isFavorite: (state) => {
      return (cocktailId: string) => state.favorites.has(cocktailId);
    },
  },
  actions: {
    initializeFavorites() {
      const storedFavorites = localStorage.getItem('favorites');
      if (storedFavorites) {
        this.favorites = new Set(JSON.parse(storedFavorites));
      }
    },
    addFavorite(cocktailId: string) {
      this.favorites.add(cocktailId);
      this.saveFavoritesToLocalStorage();
    },
    removeFavorite(cocktailId: string) {
      this.favorites.delete(cocktailId);
      this.saveFavoritesToLocalStorage();
    },
    listFavorites() {
      return Array.from(this.favorites);
    },
    saveFavoritesToLocalStorage() {
      localStorage.setItem('favorites', JSON.stringify(Array.from(this.favorites)));
    },
  },
});
