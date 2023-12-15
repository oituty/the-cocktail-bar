<template>
  <CocktailsBasePage
    title="Favorites"
    description="Search your favorite cocktails"
    sidebar-img-url="/background-image.png"
  >
    <CocktailsList api-url="/api/cocktails" />
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

const favorites = ref<Cocktail[]>([]);

onMounted(getCocktailsList);
const { $toastify } = useNuxtApp();

async function getCocktailsList(searchQuery?: string) {
  const params = new URLSearchParams();

  if (searchQuery) {
    params.append('query', searchQuery);
  }

  const url = `/api/cocktails?${params.toString()}`;

  const { data } = await useFetch<{ body: any; status: any; error?: any }>(
    url,
    {
      cache: 'force-cache', // cache for 5 minutes
    }
  );

  if (data.value?.error) {
    $toastify(data.value?.error, { type: 'error' });
    console.error(data.value?.error);
    return;
  }

  favorites.value = data.value?.body.concat(data.value?.body);
}
</script>
