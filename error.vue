<!-- <template>
  <div
    class="prose p-10 text-center flex gap-6 flex-col justify-center items-center min-h-screen h-full"
  >
    <h1>Coquetel Desaparecido!</h1>
    <h2>
      {{ error.statusCode }}
    </h2>
    <p class="max-w-xl">
      Você acabou de encontrar o único coquetel que não conseguimos rastrear em
      nosso bar virtual. Este coquetel pode ser uma lenda urbana ou simplesmente
      uma mistura tão inovadora que evaporou antes de podermos anotar a receita.
      Mas não se preocupe, temos muitos outros sabores e misturas esperando por
      você!
    </p>
    <NuxtLink to="/" class="bg-primary px-6 py-4 rounded-md text-secondary font-bold">Volte para o Bar Seguro</NuxtLink>
  </div>
</template> -->

<template>
  <div class="gap-y-10 min-h-screen flex flex-1 flex-col justify-center items-center">

    <h2 class="!font-light !text-primary text-sm">
      Coquetel 
        <span class="font-bold underline">Desaparecido!</span>
      </h2>

    <div class="w-full relative justify-center items-center flex">
      <NuxtImg alt="Cocktails illustrations" src="/cocktails.png" class="rotate-180" width="400" />
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
        Você acabou de encontrar o único coquetel que não conseguimos rastrear em nosso bar virtual. Este coquetel pode ser uma lenda urbana ou simplesmente uma mistura tão inovadora que evaporou antes de podermos anotar a receita. Mas não se preocupe, temos muitos outros sabores e misturas esperando por você!"
      </p>

      <NuxtLink to="/" class="text-primary font-extrabold hover:underline">Back to bar</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['error']);
</script>
