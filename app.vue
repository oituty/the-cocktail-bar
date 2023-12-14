<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>



<script setup lang="ts">
import { useFavoritesStore } from '~/stores/favorites';

const favoritesStore = useFavoritesStore();

import { onMounted } from 'vue';

useHead({
  htmlAttrs: {
    lang: 'pt',
  },
  title: 'TheCocktail Bar',
  titleTemplate: (title) =>
    title !== 'TheCocktail Bar' ? `${title} · TheCocktail Bar` : title,
  meta: [
    {
      name: 'description',
      content: 'Encontre os melhores coquetéis do theCocktailDb',
    },
  ],
});

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
@import '~/assets/css/tailwind.css'; /** Necessário para gerar os arquivos css no deploy **/

.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>