<template>
  <div class="grid relative overflow-hidden md:grid-cols-2 h-full w-full">
    <div class="p-10 hidden md:flex"><Sidebar :img-url="sidebarImgUrl" /></div>

    <div class="p-4 md:p-10 flex flex-col overflow-auto">
      <button v-if="hasBackButton" class="text-primary flex items-center mb-10" @click="router.back"><Icon name="maki:arrow" color="primary" class="mr-2 rotate-180" /> Back to cocktails </button>
      <h1 v-if="title" class="mb-4">{{ title }}</h1>
      <p v-if="description" class="mb-10">{{ description }}</p>
      <slot />
    </div>
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
    required: false,
  },
  sidebarImgUrl: {
    type: String,
    required: false
  },
  hasBackButton: {
    type: Boolean,
    default: false
  }
});

const router = useRouter()
</script>
