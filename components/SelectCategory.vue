<template>
  <div>
    <select v-model="selectedOption" @change="onSelectChange">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
const isLoading = ref(true);

onMounted(getCategories);
const { $toastify } = useNuxtApp();

const selectedOption = ref(null);
const options = ref<string[]>([]);

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
};

const emit = defineEmits(['categorySelected']);
</script>
