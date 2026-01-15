<template>
  <div class="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0B1120] font-sans transition-colors duration-300">

    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/30 dark:bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>

      <div class="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/30 dark:bg-indigo-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>

      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/20 dark:bg-pink-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
    </div>

    <main class="relative z-10 w-full max-w-7xl p-4 flex justify-center">
      <slot />
    </main>

    <div class="absolute bottom-6 left-0 right-0 text-center z-10">
      <p class="text-slate-400 dark:text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
        Secured by MMO DUYLON system
      </p>
    </div>

  </div>
</template>

<style scoped>
/* Animation cho các quả cầu nền di chuyển mềm mại */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob {
  animation: blob 10s infinite;
}
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
</style>