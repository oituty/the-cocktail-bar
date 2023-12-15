<template>
  <div class="flex flex-col relative h-screen overflow-hidden">
    <NuxtImg src="/closed_banner.svg" alt="Closed bar banner" v-if="!isBarOpened" width="500" class="absolute top-0 left-0 z-20" />
    <Navbar />
    <div class="flex relative flex-1 overflow-hidden">
      <transition name="page" v-if="isBarOpened">
        <main class="flex flex-1 overflow-hidden">
          <slot />
        </main>
      </transition>

      <transition name="slide">
        <ClosedBarBanner
          class="absolute z-10 w-full right-0 h-full"
          v-show="!isBarOpened"
        />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const barStore = useBarStore();

const isBarOpened = computed(() => barStore.isBarOpen);
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
