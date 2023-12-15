import { defineStore } from 'pinia';
import type { Cocktail } from '~/server/api/model/cocktail'; // Supondo que você tenha um tipo 'Cocktail'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as Cocktail[],
  }),
  getters: {
    isFavorite: (state) => (cocktailId: string) => state.favorites.some(cocktail => cocktail.idDrink === cocktailId),
  },
  actions: {
    initializeFavorites() {
      const storedFavorites = localStorage.getItem('favorites');
      if (storedFavorites) {
        this.favorites = JSON.parse(storedFavorites);
      }
    },
    toggleFavorite(cocktail: Cocktail) {
      if (this.isFavorite(cocktail.idDrink)) {
        this.removeFavorite(cocktail.idDrink)
      } else {
        this.addFavorite(cocktail)
      }
    },

    addFavorite(cocktail: Cocktail) {
      if (!this.isFavorite(cocktail.idDrink)) {
        this.favorites.push(cocktail);
        this.saveFavoritesToLocalStorage();
      }
    },
    removeFavorite(cocktailId: string) {
      this.favorites = this.favorites.filter(cocktail => cocktail.idDrink !== cocktailId);
      this.saveFavoritesToLocalStorage();
    },
    listFavorites() {
      return this.favorites;
    },
    saveFavoritesToLocalStorage() {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
  },
});
