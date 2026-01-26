<template>
  <div class="flex min-h-screen flex-col bg-background font-sans antialiased selection:bg-primary selection:text-white">

    <AppHeader />

    <main class="flex-1">
      <slot />
    </main>

    <AppFooter />

  </div>
</template>
<script setup lang="ts">
import AppHeader from "@/components/default/AppHeader.vue";
import AppFooter from "@/components/default/AppFooter.vue";
</script>