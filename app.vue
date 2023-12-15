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

onBeforeMount(() => {
  favoritesStore.initializeFavorites();
});

</script>
<style>
@import '~/assets/css/tailwind.css'; /** Necessário para gerar os arquivos css no deploy **/
</style>