<template>
  <CocktailsBasePage
    title="Favorites"
    description="Search your favorite cocktails"
  >
  </CocktailsBasePage>
</template>

<script setup>
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
</script>
