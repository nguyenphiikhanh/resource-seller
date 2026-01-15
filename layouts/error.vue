<template>
  <div
    class="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-slate-50 font-sans transition-colors duration-300 dark:bg-[#0B1120]"
  >
    <div class="pointer-events-none absolute inset-0 z-0">
      <div
        class="animate-blob absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-purple-500/30 mix-blend-multiply blur-[120px] dark:bg-purple-600/20 dark:mix-blend-screen"
      ></div>

      <div
        class="animate-blob animation-delay-2000 absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-500/30 mix-blend-multiply blur-[120px] dark:bg-indigo-600/20 dark:mix-blend-screen"
      ></div>

      <div
        class="animate-blob animation-delay-4000 absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 mix-blend-multiply blur-[100px] dark:bg-pink-600/10 dark:mix-blend-screen"
      ></div>
    </div>

    <main class="relative z-10 flex w-full max-w-7xl justify-center p-4">
      <slot />
    </main>

    <div class="absolute bottom-6 left-0 right-0 z-10 text-center">
      <p
        class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 opacity-70 dark:text-slate-600"
      >
        Secured by MMO DUYLON system
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Animation cho các quả cầu nền di chuyển mềm mại */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.animate-blob {
  animation: blob 10s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
