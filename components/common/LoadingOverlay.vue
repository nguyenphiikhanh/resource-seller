<template>
  <Transition name="fade">
    <div
      v-if="loadingStore.globalLoading"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div class="flex flex-col items-center rounded-2xl bg-white p-6 shadow-2xl dark:bg-dark-800">
        <div
          class="mb-3 h-10 w-10 animate-spin rounded-full border-4 border-brand-purple border-t-transparent"
        ></div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { loadingStore } = useAppStore()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
