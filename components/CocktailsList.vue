<template>
  <div class="flex flex-col gap-y-10">
    <div v-if="!isLocalList" class="grid gap-6 lg:grid-cols-7">
      <Search class="lg:col-span-4" @updateSearchTerm="onSearch"></Search>
      <SelectCategory class="lg:col-span-3" @categorySelected="onSelectCategory" />
    </div>
    <ul
      class="grid w-full gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3"
    >
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

function onSelectCategory(category?: string) {
  getCocktailsApiList({category})
}


const debouncedSearch = useDebounce((searchTerm?: string) => {
  getCocktailsApiList({ searchTerm });
}, 500);

function onSearch(searchTerm?: string) {
  debouncedSearch(searchTerm);
}

async function getCocktailsApiList(query?: {category?: string, searchTerm?: string}) {
  isLoading.value = true;

  const params = new URLSearchParams();

  if (query?.category) {
    params.append('category', query.category);
  }

  if (query?.searchTerm) {
    params.append('searchTerm', query.searchTerm);
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
