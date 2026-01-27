<script setup lang="ts">
import {APP_NAME} from "@/constants/app";
</script>
<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4 lg:p-8">
    <div class="mb-8 flex items-center gap-2 font-bold text-xl tracking-tighter">
      <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-red-600 text-white shadow-lg shadow-primary/20">
        <span class="text-sm">M</span>
      </div>
      <span class="hidden sm:inline-block">MMO <span class="text-primary">{{APP_NAME}}</span></span>
    </div>
    <div class="w-full max-w-md space-y-6">
      <slot />
    </div>

  </div>
</template>