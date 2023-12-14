<template>
  <CocktailsBasePage title="Cocktails" description="Search our cocktails">
  </CocktailsBasePage>
</template>

<script setup>

useHead({
  title: 'Cocktails',
  meta: [
    {
      name: 'description',
      content: 'List of all cocktails of the TheCocktailDB'
    }
  ]
})

definePageMeta({
  middleware: 'check-bar-open'
});
</script>

