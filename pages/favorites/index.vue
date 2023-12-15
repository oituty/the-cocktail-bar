<template>
  <CocktailsBasePage
    title="Favorites"
    description="Your Favorites, Your Way: A personalized collection of cocktails you love, tailored to your tastes."
    sidebar-img-url="/background-image.png"
  >
    <CocktailsList is-local-list :cocktails-default-list="favorites" />
  </CocktailsBasePage>
</template>

<script setup lang="ts">
import { type Cocktail } from '~/server/api/model/cocktail';

useHead({
  title: 'Favorites',
  meta: [
    {
      name: 'description',
      content: 'List your favorites cocktails',
    },
  ],
});

definePageMeta({
  middleware: 'check-bar-open',
});

const favoritesStore = useFavoritesStore();

const favorites = computed(() => favoritesStore.listFavorites());
</script>
