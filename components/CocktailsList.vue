<template>
  <div>
    <ul class="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      <template v-if="isLoading">
        <li v-for="number in 10" :key="number">
          <Card :is-loading="isLoading" />
        </li>
      </template>
      <template v-else>
        <li v-for="cocktail in cocktails" :key="cocktail.idDrink">
          <Card :cocktail="cocktail" :is-loading="isLoading" />
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { type Cocktail } from '~/server/api/model/cocktail';

const props = defineProps({
  apiUrl: {
    type: String,
    required: false,
  },
  cocktailsDefaultList: {
    type: Array as () => Cocktail[],
    required: false,
  },
  isLocalList: Boolean,
});

const cocktails = ref<Cocktail[]>([]);
const isLoading = ref(true);

onMounted(getCocktailsList);
const { $toastify } = useNuxtApp();

function getCocktailsList() {
  if (props.isLocalList) {
    cocktails.value = props.cocktailsDefaultList ?? [];
    isLoading.value = false;
    return;
  }
  getCocktailsApiList();
}

async function getCocktailsApiList(searchQuery?: string) {
  const params = new URLSearchParams();

  if (searchQuery) {
    params.append('query', searchQuery);
  }

  setTimeout(async () => {
    const url = `${props.apiUrl}?${params.toString()}`;

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

    cocktails.value = data.value?.body;
    isLoading.value = false;
  }, 500);
}
</script>
