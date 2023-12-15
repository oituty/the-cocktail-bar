<template>
  <div class="relative w-full flex items-center justify-center">
    <!-- Ícone à esquerda -->
    <Icon
      name="material-symbols:local-drink-outline"
      size="1.4rem"
      color="#C64530"
      class="absolute left-0 ml-4 pointer-events-none"
    />

    <select ref="selectElement"
      @focus="isFocused = true"
      @change="onSelectChange"
      @blur="isFocused = false"
      class="w-full px-12 py-4 border-2 border-secondary appearance-none rounded-md"
    >
      <option value="" default selected>Categories</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>

    <!-- Ícone da seta à direita -->
    <Icon
      name="tabler:arrow-down"
      :class="{ 'rotate-180': isFocused }"
      size="1.4rem"
      color="#C64530"
      class="absolute transition-all right-0 mr-4 pointer-events-none"
    />
  </div>
</template>

<script lang="ts" setup>
const isLoading = ref(true);

onMounted(getCategories);
const { $toastify } = useNuxtApp();
const selectElement = ref()
const selectedOption = ref(null);
const options = ref<string[]>([]);
const isFocused = ref(false);

async function getCategories() {
  setTimeout(async () => {
    const { data } = await useFetch<{ body: any; status: any; error?: any }>(
      '/api/categories',
      {
        cache: 'force-cache', // cache for 5 minutes
      }
    );

    if (data.value?.error) {
      $toastify(data.value?.error, { type: 'error' });
      console.error(data.value?.error);
      return;
    }

    options.value = data.value?.body;
    isLoading.value = false;
  }, 500);
}

const onSelectChange = (event: any) => {
  selectedOption.value = event.target.value;
  emit('categorySelected', selectedOption.value);
  if (selectElement.value) {
    selectElement.value.blur();
    }
  isFocused.value = false;
};



const emit = defineEmits(['categorySelected']);
</script>

<style scoped lang="postcss">
option[default] {
  display: none;
}

select:focus { 
  outline: none !important;

  @apply border-primary;
 }
</style>
