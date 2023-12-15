<template>
  <div class="gap-y-10 flex flex-1 flex-col justify-center items-center">
    <div class="w-full relative justify-center items-center flex">
      <NuxtImg alt="Cocktails illustrations" src="/cocktails.png" width="400" />
      <div
        class="bg-background-tertiary flex justify-center items-center bottom-[25%] h-auto min-h-[4rem] absolute py-2 px-10 w-full max-w-md rounded-lg"
      >
        <h1 class="!font-black text-primary uppercase !text-xl text-center">
          {{ cocktail?.strDrink }}
        </h1>
      </div>
    </div>

    <div class="flex flex-col justify-end text-center gap-y-6 items-center">
      <h2 class="!font-light !text-primary text-sm">
        Served in a
        <span class="font-bold underline">{{ cocktail?.strGlass }}</span>
      </h2>
      <ul class="flex flex-wrap justify-center gap-x-4" title="Recipe">
        <li v-for="recipe in recipeList" :key="recipe">
          <h3 class="!font-light min-w-max">
            {{ recipe }}
          </h3>
        </li>
      </ul>
      <p class="md:max-w-xl">
        {{ cocktail?.strInstructions }}
      </p>

      <div class="flex flex-wrap justify-center gap-4">
        <span title="Tags"
          class="bg-background-tertiary text-primary w-fit rounded-lg px-4 py-2"
          v-for="tag in tagsList"
          :key="tag"
          >{{ tag }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Cocktail } from '~/server/api/model/cocktail';

const props = defineProps({
  cocktail: {
    type: Object as () => Cocktail,
    required: true,
  },
});

const recipeList = getCocktailRecipe(props.cocktail);
const tagsList = getFormatTags(props.cocktail);

function getCocktailRecipe(cocktail: Cocktail): string[] {
  const recipe: string[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}` as keyof Cocktail;
    const measureKey = `strMeasure${i}` as keyof Cocktail;

    const ingredient = cocktail[ingredientKey]?.toUpperCase();
    const measure = cocktail[measureKey];

    if (ingredient) {
      recipe.push(`${measure ? measure + ' - ' : ''}${ingredient}`);
    }
  }

  return recipe;
}

function getFormatTags(cocktail: Cocktail): string[] {
  if (cocktail.strTags && cocktail.strTags.trim() !== '') {
    return cocktail.strTags.split(',');
  } else {
    return [];
  }
}
</script>
