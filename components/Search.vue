<template>
  <div class="flex relative w-full items-center">
    <Icon
      name="tabler:search"
      size="1.4rem"
      color="#C64530"
      class="ml-4 absolute"
    />

    <input
      type="text"
      v-model="searchTerm"
      @input="emitSearchTerm"
      placeholder="Search"
      class="flex-grow px-12 py-4 border-2 border-secondary rounded-md"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchTerm = ref('');
const emit = defineEmits(['updateSearchTerm']);

const emitSearchTerm = () => {
  emit('updateSearchTerm', searchTerm.value);
};
</script>

<style scoped lang="postcss">
input:focus {
  outline: none !important;

  @apply border-primary;
}
</style>
