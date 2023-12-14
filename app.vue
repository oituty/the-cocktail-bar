<template>
  <NuxtPage />
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