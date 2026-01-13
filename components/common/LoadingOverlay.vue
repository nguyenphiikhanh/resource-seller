<template>
  <Transition name="fade">
    <div v-if="loadingStore.globalLoading" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div class="bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-2xl flex flex-col items-center">
        <div class="w-10 h-10 border-4 border-brand-purple border-t-transparent rounded-full animate-spin mb-3"></div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const {loadingStore} = useAppStore();
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>