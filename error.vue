<script setup lang="ts">
const handleError = () => {
  // Hàm clearError của Nuxt giúp reset trạng thái lỗi và về trang chủ
  clearError({ redirect: '/' })
}

const reloadPage = () => {
  window.location.reload()
}
</script>

<template>
  <NuxtLayout name="error">
    <div class="animate-fade-in-up relative mx-auto w-full max-w-lg p-4">
      <div
        class="group relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/60 p-8 text-center shadow-2xl shadow-orange-500/10 backdrop-blur-2xl transition-all duration-500 hover:shadow-orange-500/20 sm:p-12 dark:border-slate-700/60 dark:bg-slate-900/60"
      >
        <div
          class="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[12rem] font-black tracking-tighter text-slate-900/[0.03] dark:text-white/[0.03]"
        >
          500
        </div>

        <div class="relative z-10 flex flex-col items-center">
          <div class="group/icon relative mb-8">
            <div
              class="absolute inset-0 animate-pulse rounded-[2rem] bg-orange-500 opacity-20 blur-xl transition-opacity duration-500 group-hover/icon:opacity-40"
            ></div>

            <div
              class="relative flex h-24 w-24 transform items-center justify-center rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 shadow-lg shadow-orange-500/30 ring-4 ring-white/30 transition-transform duration-500 group-hover/icon:-rotate-3 group-hover/icon:scale-110 dark:ring-white/10"
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
                  stroke-width="2"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01"
                />
              </svg>

              <div
                class="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-red-500 text-white shadow-sm dark:border-slate-800"
              >
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <h1 class="mb-3 text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Máy chủ gặp sự cố
          </h1>
          <p
            class="mx-auto mb-8 max-w-xs text-base font-medium leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
          >
            Hệ thống đang bảo trì hoặc gặp lỗi không mong muốn. Hãy thử lại sau ít phút.
            <br />
            <span class="mt-2 block font-mono text-xs opacity-70" v-if="error"
              >Error Code: {{ error.statusCode }}</span
            >
          </p>

          <div class="flex w-full flex-col justify-center gap-3 sm:flex-row">
            <button
              @click="reloadPage"
              class="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/50 px-6 py-3.5 font-bold text-slate-600 transition-all hover:border-slate-300 hover:bg-white active:scale-95 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-700"
            >
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>Tải lại trang</span>
            </button>

            <button
              @click="handleError"
              class="flex items-center justify-center gap-2 rounded-2xl border border-transparent bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3.5 font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:from-orange-400 hover:to-amber-400 hover:shadow-orange-500/50 active:scale-95"
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
  </NuxtLayout>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
