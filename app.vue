<template>
  <div>
    <NuxtWelcome />
    <div class="favorites">
      <div v-for="favorite in favoritesList" :key="favorite" class="favorite">
        {{ favorite }}
        <button @click="removeFromFavorites(favorite)">Fechar</button>
      </div>
    </div>
    <button @click="addToFavorites((favoritesList.length + 1).toString())">
      Adicionar favorito
    </button>
  </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from '~/stores/favorites';

const favoritesStore = useFavoritesStore();

import { onMounted } from 'vue';

onMounted(() => {
  favoritesStore.initializeFavorites();
});

const addToFavorites = (cocktailId: string) => {
  favoritesStore.addFavorite(cocktailId);
};

const removeFromFavorites = (cocktailId: string) => {
  favoritesStore.removeFavorite(cocktailId);
};

const favoritesList = computed(() => favoritesStore.listFavorites());

</script>
<style>
.favorites {
  position: fixed;
  top: 0;
  right: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.favorite {
  background-color: #f0f0f0;
  padding: 8px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
}
</style>
