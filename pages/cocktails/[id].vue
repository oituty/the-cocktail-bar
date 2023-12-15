
<template>
  <CocktailsBasePage
    has-back-button
    :sidebar-img-url="cocktail?.strDrinkThumb"
  >
    <CocktailDetails v-if="cocktail" :cocktail="cocktail"></CocktailDetails>
  </CocktailsBasePage>
</template>

<script lang="ts" setup>
import { type Cocktail } from "~/server/api/model/cocktail";

const cocktail = ref<Cocktail | null>(null);
const isLoading = ref(true);

onMounted(getCocktail);
const router = useRouter()
const { $toastify } = useNuxtApp();

async function getCocktail() {
  const params = new URLSearchParams();
  const id = router.currentRoute.value.params?.id as string;

  if (id) {
    params.append('id', id);
  }

  setTimeout(async () => {
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
    isLoading.value = false;

  }, 500);

}
</script>