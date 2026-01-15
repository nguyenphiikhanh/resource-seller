<script setup lang="ts">
import { ROUTER_LIST } from '~/constants/router.const'

definePageMeta({
  layout: 'error',
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
    <div
      class="group relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/60 p-8 text-center shadow-2xl shadow-indigo-500/10 backdrop-blur-2xl transition-all duration-500 hover:shadow-indigo-500/20 sm:p-12 dark:border-slate-700/60 dark:bg-slate-900/60"
    >
      <div
        class="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[12rem] font-black tracking-tighter text-slate-900/[0.03] dark:text-white/[0.03]"
      >
        403
      </div>

      <div class="relative z-10 flex flex-col items-center">
        <div class="group/icon relative mb-8">
          <div
            class="absolute inset-0 animate-pulse rounded-[2rem] bg-fuchsia-500 opacity-20 blur-xl transition-opacity duration-500 group-hover/icon:opacity-40"
          ></div>

          <div
            class="relative flex h-24 w-24 transform items-center justify-center rounded-[2rem] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500 shadow-lg shadow-fuchsia-500/30 ring-4 ring-white/30 transition-transform duration-500 group-hover/icon:rotate-6 group-hover/icon:scale-110 dark:ring-white/10"
          >
            <svg
              class="h-10 w-10 text-white drop-shadow-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 4h.01"
              />
            </svg>

            <div class="absolute right-3 top-3 h-4 w-4 rounded-full bg-white/30 blur-[2px]"></div>
          </div>
        </div>

        <h1 class="mb-3 text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
          Trang không tồn tại.
        </h1>
        <p
          class="mx-auto mb-8 max-w-xs text-base font-medium leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
        >
          Trang bạn đang cố gắng truy cập không tồn tại hoặc đã bị xóa.
        </p>

        <div class="flex w-full flex-col justify-center gap-3 sm:flex-row">
          <button
            @click="goBack"
            class="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/50 px-6 py-3.5 font-bold text-slate-600 transition-all hover:border-slate-300 hover:bg-white active:scale-95 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-700"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Quay lại</span>
          </button>

          <button
            @click="goHome"
            class="flex items-center justify-center gap-2 rounded-2xl border border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5 hover:from-indigo-500 hover:to-violet-500 hover:shadow-indigo-500/50 active:scale-95"
          >
            <svg class="h-5 w-5 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Về trang chủ</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
