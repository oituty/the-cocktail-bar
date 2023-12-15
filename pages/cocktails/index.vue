<template>
  <CocktailsBasePage title="Cocktails" description="Search our cocktails" sidebar-img-url="/background-image.png">
    <CocktailsList api-url="/api/cocktails" />
  </CocktailsBasePage>
</template>

<script setup lang="ts">

useHead({
  title: 'Cocktails',
  meta: [
    {
      name: 'description',
      content: 'List of all cocktails of the TheCocktailDB',
    },
  ],
});

definePageMeta({
  middleware: 'check-bar-open',
});


</script>
