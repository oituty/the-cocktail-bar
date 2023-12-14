<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <Navbar />
    <div class="flex flex-1 overflow-hidden">
      <div class="grid relative md:grid-cols-2 h-full w-full">
        <Sidebar class="hidden md:flex" />
        <transition name="slide">
          <ClosedBarBanner class="absolute z-10 w-full md:w-2/4 right-0 h-full" v-show="!isBarOpened" />
        </transition>
        <transition name="page">
          <main v-if="isBarOpened" class="overflow-auto">
          <slot />
        </main>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const barStore = useBarStore();

const isBarOpened = computed(() => barStore.isBarOpen);
</script>

<style>

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(98%);
}

.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}

</style>