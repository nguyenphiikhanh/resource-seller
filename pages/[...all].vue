<script setup lang="ts">
import { ROUTER_LIST } from "~/constants/router.const";

definePageMeta({
  layout: 'error'
})

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push(ROUTER_LIST.HOME)
  }
}

const goHome = () => {
  router.push(ROUTER_LIST.HOME)
}
</script>

<template>
  <div class="relative w-full max-w-lg">

    <div class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/60 dark:border-slate-700/60 rounded-[2.5rem] shadow-2xl shadow-indigo-500/10 p-8 sm:p-12 text-center overflow-hidden relative group transition-all duration-500 hover:shadow-indigo-500/20">

      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none tracking-tighter z-0">
        403
      </div>

      <div class="relative z-10 flex flex-col items-center">

        <div class="mb-8 relative group/icon">
          <div class="absolute inset-0 bg-fuchsia-500 rounded-[2rem] blur-xl opacity-20 group-hover/icon:opacity-40 animate-pulse transition-opacity duration-500"></div>

          <div class="relative w-24 h-24 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500 rounded-[2rem] flex items-center justify-center shadow-lg shadow-fuchsia-500/30 transform transition-transform duration-500 group-hover/icon:scale-110 group-hover/icon:rotate-6 ring-4 ring-white/30 dark:ring-white/10">
            <svg class="w-10 h-10 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 4h.01" />
            </svg>

            <div class="absolute top-3 right-3 w-4 h-4 bg-white/30 rounded-full blur-[2px]"></div>
          </div>
        </div>

        <h1 class="text-3xl font-extrabold text-slate-800 dark:text-white mb-3 tracking-tight">
          Trang không tồn tại.
        </h1>
        <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-medium max-w-xs mx-auto">
          Trang bạn đang cố gắng truy cập không tồn tại hoặc đã bị xóa.
        </p>

        <div class="flex flex-col sm:flex-row gap-3 w-full justify-center">

          <button
              @click="goBack"
              class="px-6 py-3.5 rounded-2xl font-bold text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Quay lại</span>
          </button>

          <button
              @click="goHome"
              class="px-8 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all active:scale-95 flex items-center justify-center gap-2 border border-transparent"
          >
            <svg class="w-5 h-5 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Về trang chủ</span>
          </button>

        </div>
      </div>
    </div>
  </div>
</template>