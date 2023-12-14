<template>
  <div class="p-10">
    <h1 class="mb-4">{{ title }}</h1>
    <p v-if="description" class="mb-10">{{ description }}</p>
    <slot />
  </div>
</template>
<script setup lang="ts">

defineProps({
  description: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    default: false,
  },
});

</script>
