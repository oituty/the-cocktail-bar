<template>
  <div
    v-if="isLoading"
    class="card border-2 relative flex justify-center border-gray aspect-[9/12] w-full"
  >
    <div
      class="hover-filter rounded-t-full absolute h-full w-[90%] mx-auto bg-gray opacity-40 bg-cover bg-no-repeat bg-center z-0"
    ></div>
    <div class="z-10 animate-pulse flex flex-col justify-between w-full">
      <div class="w-2/4 m-2 h-10 bg-secondary"></div>

      <div class="pb-2">
        <div class="flex justify-end m-4">
          <button class="rounded-full bg-secondary w-10 h-10"></button>
        </div>
        <div
          class="w-full h-10 bg-secondary text-center !font-bold !text-secondary"
        ></div>
      </div>
    </div>
  </div>

  <div
    v-else-if="cocktail"
    :class="['card  border-2 relative flex justify-center border-secondary aspect-[9/12] w-full', isFavorite ? 'bg-secondary' : 'bg-black']"
  >
    <div
      class="hover-filter rounded-t-full absolute bottom-0 h-[85%] w-[90%] mx-auto bg-error bg-cover bg-no-repeat bg-center z-0"
      :style="backgroundStyles"
    ></div>
    <div class="z-10 flex flex-col justify-between w-full">
      <NuxtLink :to="`${currentPath}/${cocktail.idDrink}`" class="flex-1">
        <h3 :class="['p-4 font-secondary font-extrabold !text-xl', isFavorite ? '!text-primary ' : '!text-secondary ']">
          {{ cocktail.strDrink }}
        </h3>
      </NuxtLink>

      <div class="pb-2">
        <div class="flex justify-end m-4">
          <button
            :class="[
              'rounded-full w-10 h-10 flex justify-center items-center transition-all',
              isFavorite ? 'bg-primary' : 'bg-secondary',
            ]"
            @click="toggleFavorite"
          >
            <NuxtImg :alt="`Picture of cocktail ${cocktail.strDrink}`" title="Favorite"
              :src="isFavorite ? '/cocktail_favorited.png' : '/cocktail.png'" width="20"
            ></NuxtImg>
          </button>
        </div>
        <h3
          class="w-full p-2 bg-primary text-center !font-bold !text-secondary"
        >
          {{ cocktail.strCategory }}
        </h3>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { type Cocktail } from '~/server/api/model/cocktail';

const props = defineProps({
  cocktail: {
    type: Object as () => Cocktail,
    required: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const img = useImage();
const router = useRouter();
const currentPath = router.currentRoute.value.path

const backgroundStyles = computed(() => {
  if (!props.cocktail) {
    return '';
  }
  const imgUrl = img(props.cocktail.strDrinkThumb);
  return { backgroundImage: `url('${imgUrl}/preview')` };
});

const favoritesStore = useFavoritesStore();
const isFavorite = computed(() =>
  favoritesStore.isFavorite(props.cocktail?.idDrink ?? '')
);

function toggleFavorite() {
  if (!props.cocktail) {
    return;
  }
  favoritesStore.toggleFavorite(props.cocktail);
}
</script>

<style scoped lang="postcss">
.card .hover-filter {
  @apply grayscale transition-all;
}

.card:hover .hover-filter {
  @apply grayscale-0;
}
</style>
