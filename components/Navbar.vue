<template>
  <nav class="bg-background-secondary h-fit md:px-10 px-6 py-6 grid md:grid-cols-12">
    <div class="md:col-span-6 lg:col-span-3 flex gap-x-4 items-center">
      <Avatar
        :is-online="isBarOpened"
        user-image="/profile-picture.jpg"
      ></Avatar>
      <div>
        <h2 class="font-normal !text-white">
          <span class="font-light">The</span>Cocktail
        </h2>
        <p class="!text-gray font-light">
          Bar {{ hasError ? "not found" : isBarOpened ? "opened" : "closed" }}
        </p>
      </div>
    </div>
    <div class="col-span-6 flex justify-end lg:justify-center items-center">
      <ul v-if="isBarOpened" class="hidden md:flex gap-x-10">
        <li v-for="{ path, label } in routers" :key="path">
          <NuxtLink
            :to="path"
            :title="label"
            class="text-white font-bold hover:underline"
            active-class=" transition-all !text-primary"
          >
            {{ label }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="col-span-3 justify-end items-center hidden lg:flex">
      <NuxtLink
        external
        target="_blank"
        href="https://chat.openai.com/g/g-s5kSC9fJ8-the-cocktail-gpt"
        class="text-white font-bold hover:opacity-70 transition-all"
        title="Acessar o GPT do TheCocktail Bar"
      >
        TheCocktail GPT
      </NuxtLink>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { useBarStore } from '~/stores/barState';

defineProps({
  hasError: {
    type: Boolean,
    required: false,
  },
});

const routers = [
  { path: '/cocktails', label: 'Cocktails' },
  { path: '/favorites', label: 'Favorites' },
];

const barStore = useBarStore();
const isBarOpened = computed(() => barStore.isBarOpen);
</script>
