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
    <div class="relative w-full max-w-lg mx-auto p-4 animate-fade-in-up">

      <div class="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/60 dark:border-slate-700/60 rounded-[2.5rem] shadow-2xl shadow-orange-500/10 p-8 sm:p-12 text-center overflow-hidden relative group transition-all duration-500 hover:shadow-orange-500/20">

        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none tracking-tighter z-0">
          500
        </div>

        <div class="relative z-10 flex flex-col items-center">

          <div class="mb-8 relative group/icon">
            <div class="absolute inset-0 bg-orange-500 rounded-[2rem] blur-xl opacity-20 group-hover/icon:opacity-40 animate-pulse transition-opacity duration-500"></div>

            <div class="relative w-24 h-24 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-[2rem] flex items-center justify-center shadow-lg shadow-orange-500/30 transform transition-transform duration-500 group-hover/icon:scale-110 group-hover/icon:-rotate-3 ring-4 ring-white/30 dark:ring-white/10">
              <svg class="w-10 h-10 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01" />
              </svg>

              <div class="absolute -top-2 -right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-sm">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
          </div>

          <h1 class="text-3xl font-extrabold text-slate-800 dark:text-white mb-3 tracking-tight">
            Máy chủ gặp sự cố
          </h1>
          <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-medium max-w-xs mx-auto">
            Hệ thống đang bảo trì hoặc gặp lỗi không mong muốn. Hãy thử lại sau ít phút.
            <br/>
            <span class="text-xs opacity-70 font-mono mt-2 block" v-if="error">Error Code: {{ error.statusCode }}</span>
          </p>

          <div class="flex flex-col sm:flex-row gap-3 w-full justify-center">

            <button
                @click="reloadPage"
                class="px-6 py-3.5 rounded-2xl font-bold text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Tải lại trang</span>
            </button>

            <button
                @click="handleError"
                class="px-8 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all active:scale-95 flex items-center justify-center gap-2 border border-transparent"
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
  </NuxtLayout>
</template>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>