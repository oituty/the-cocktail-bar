<template>
  <CocktailsBasePage has-back-button back-button-text="Back to favorites" :sidebar-img-url="cocktail?.strDrinkThumb">
    <CocktailDetails v-if="cocktail" :cocktail="cocktail"></CocktailDetails>
  </CocktailsBasePage>
</template>

<script lang="ts" setup>
import { type Cocktail } from '~/server/api/model/cocktail';

useHead({
  title: 'Cocktail',
  meta: [
    {
      name: 'description',
      content: 'Cocktail details',
    },
  ],
});

definePageMeta({
  middleware: 'check-bar-open',
});

const cocktail = ref<Cocktail | null>(null);

onMounted(getCocktail);
const router = useRouter();
const { $toastify } = useNuxtApp();

async function getCocktail() {
  const params = new URLSearchParams();
  const id = router.currentRoute.value.params?.id as string;

  if (id) {
    params.append('id', id);
  }

  const url = `/api/cocktail?${params.toString()}`;

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

  cocktail.value = data.value?.body;
}
</script>
