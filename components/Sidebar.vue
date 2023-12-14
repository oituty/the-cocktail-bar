<template>
  <header
    class="h-full w-full bg-black bg-cover bg-center bg-no-repeat justify-center items-end p-10"
    :style="backgroundStyles"
  ></header>
</template>
<script setup lang="ts">
import { useBarStore } from '~/stores/barState';

const barStore = useBarStore();
const isBarOpened = computed(() => barStore.isBarOpen);

const img = useImage();

const backgroundStyles = computed(() => {
  const imgUrl = img('/background-image.png');
  return { backgroundImage: `url('${imgUrl}')` };
});
</script>
