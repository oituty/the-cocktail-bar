<template>
  <div
    class="bg-background-primary gap-y-10 flex flex-col justify-between items-center py-20 px-10"
  >
    <h1 class="!text-title max-w-[15rem] text-center !text-5xl">The Cocktail</h1>

    <div class="w-full relative justify-center items-center flex">
        <NuxtImg alt="Cocktails illustrations" src="/cocktails.png" width="400" />
        <button class="bg-background-tertiary bottom-[25%] absolute !text-xl py-6 px-10 w-full max-w-md rounded-lg uppercase !font-black text-primary" @click="openTheBar">Open the bar <Icon name="maki:arrow" color="primary" class="ml-2" /></button>
    </div>

    <div class="flex flex-col justify-end text-center gap-y-1  items-center">
        <h5 class="!font-light text-sm mb-4">Developed by:</h5>
        <h2>TAYNÁ A. RODRIGUES</h2>
        <a href="mailto:tayna.tech@gmail.com">tayna.tech@gmail.com</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const barStore = useBarStore();
const router = useRouter();

function openTheBar() {
  barStore.openBar();
  router.push('/cocktails');
}
</script>