<template>
  <div class="relative h-12 w-12">
    <NuxtImg :src="userImage" alt="Avatar"
      class="h-12 w-12 rounded-full object-cover" />

    <span
      :class="[
        'h-3 w-3 rounded-full absolute bottom-0 right-0 border border-white',
        isOnline ? 'bg-success' : 'bg-error',
      ]"
    >
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  userImage: {
    type: String,
    required: true
  },
  isOnline: {
    type: Boolean,
    default: false
  }
})
</script>
