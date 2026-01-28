<script setup>
const { popups, visiblePopups } = usePopups()
const route = useRoute()
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- Global Popup Backdrop (Shared) -->
    <Transition
      enter-active-class="duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="visiblePopups.length > 0" class="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"></div>
    </Transition>

    <!-- Global Popups Layer -->
    <template v-for="popup in popups" :key="popup.id">
      <GlobalPopup v-if="popup.active && popup.pages.includes(route.path)" :popup="popup" />
    </template>
  </div>
</template>