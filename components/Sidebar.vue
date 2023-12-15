<template>
  <header
    class="h-full w-full bg-gray bg-cover bg-center bg-no-repeat justify-center items-end p-10"
    :style="backgroundStyles"
  ></header>
</template>
<script setup lang="ts">

const props = defineProps({
  imgUrl: {
    type: String,
    required: false,
  },
});

const img = useImage();
const backgroundStyles = computed(() => {

  if (!props.imgUrl) {
    return ""
  }
  const imgUrl = img(props.imgUrl);
  return { backgroundImage: `url('${imgUrl}')` };
});
</script>
