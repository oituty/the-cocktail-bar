<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <Navbar has-error />

    <div
      class="gap-y-10 min-h-screen px-4 flex flex-1 flex-col justify-center items-center"
    >
      <h2 class="!font-light !text-primary text-sm">
        Mystery Cocktail
        <span class="font-bold underline">Vanished!</span>
      </h2>

      <div class="w-full relative justify-center items-center flex">
        <NuxtImg
          alt="Cocktails illustrations"
          src="/cocktails.png"
          class="rotate-180"
          width="400"
        />
        <div
          class="bg-background-tertiary flex justify-center items-center top-[25%] h-auto min-h-[4rem] absolute py-2 px-10 w-full max-w-md rounded-lg"
        >
          <h1 class="!font-black text-primary uppercase !text-xl text-center">
            ERROR {{ error.statusCode }}
          </h1>
        </div>
      </div>

      <div class="flex flex-col justify-end text-center gap-y-6 items-center">
        <p class="md:max-w-xl">
          You've stumbled upon the one cocktail that's eluded our virtual bar.
          This drink might be an urban legend or just a concoction so innovative
          it evaporated before we could jot down the recipe. But fear not, we
          have an array of other flavors and mixes waiting to be discovered by
          you!
        </p>

        <button @click="goToBar" class="text-primary font-extrabold hover:underline"
          >Return to Bar</button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['error']);

useHead({
  title: 'Error',
  meta: [
    {
      name: 'description',
      content: 'Page not found',
    },
  ],
});

const barStore = useBarStore()
const router = useRouter()

function goToBar() {
  barStore.openBar();
  router.push("/cocktails")
}
</script>
