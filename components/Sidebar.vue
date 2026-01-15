<template>
  <aside class="w-full flex-shrink-0 space-y-8 lg:w-64">
    <div
      class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-white/5 dark:bg-dark-800 dark:shadow-none"
    >
      <h3
        class="mb-4 flex items-center text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white"
      >
        <i class="fas fa-layer-group mr-2 text-brand-cyan"></i> Danh Mục
      </h3>
      <ul class="space-y-2">
        <li>
          <a
            href="#"
            class="flex items-center justify-between rounded-lg border border-brand-fb/20 bg-brand-fb/10 p-2 font-medium text-brand-fb"
          >
            <span><i class="fab fa-facebook mr-2"></i> Facebook Ads</span>
            <span class="rounded-full bg-brand-fb/20 px-2 py-0.5 text-xs">120</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            class="group flex items-center justify-between rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
          >
            <span><i class="fab fa-google mr-2 text-red-500"></i> Youtube</span>
            <span
              class="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500 transition-colors group-hover:text-gray-900 dark:bg-dark-900 dark:text-gray-400 dark:group-hover:text-gray-300"
              >45</span
            >
          </a>
        </li>

        <li>
          <a
            href="#"
            class="group flex items-center justify-between rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
          >
            <span><i class="fab fa-tiktok mr-2 text-gray-900 dark:text-white"></i> TikTok</span>
            <span
              class="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500 transition-colors group-hover:text-gray-900 dark:bg-dark-900 dark:text-gray-400 dark:group-hover:text-gray-300"
              >32</span
            >
          </a>
        </li>

        <li>
          <a
            href="#"
            class="group flex items-center justify-between rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
          >
            <span><i class="fas fa-code mr-2 text-brand-green"></i> Code / Tool</span>
            <span
              class="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500 transition-colors group-hover:text-gray-900 dark:bg-dark-900 dark:text-gray-400 dark:group-hover:text-gray-300"
              >18</span
            >
          </a>
        </li>
      </ul>
    </div>

    <div
      class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-white/5 dark:bg-dark-800 dark:shadow-none"
    >
      <h3 class="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
        Khoảng Giá
      </h3>
      <div class="mb-4 flex gap-2">
        <input
          type="number"
          placeholder="0"
          class="w-full rounded border border-gray-300 bg-gray-50 px-2 py-1 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-brand-purple dark:border-white/10 dark:bg-dark-900 dark:text-white dark:placeholder-gray-600"
        />

        <input
          type="number"
          placeholder="5M"
          class="w-full rounded border border-gray-300 bg-gray-50 px-2 py-1 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-brand-purple dark:border-white/10 dark:bg-dark-900 dark:text-white dark:placeholder-gray-600"
        />
      </div>
      <button
        class="dark:hover:bg-dark-600 w-full rounded bg-gray-100 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 dark:bg-dark-700 dark:text-white"
      >
        Áp dụng
      </button>
    </div>

    <div class="group relative h-40 cursor-pointer overflow-hidden rounded-xl shadow-md">
      <img
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        class="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-110 dark:opacity-60"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent dark:from-dark-900 dark:to-transparent"
      ></div>

      <div class="absolute bottom-4 left-4">
        <span
          class="mb-1 block text-xs font-bold uppercase text-brand-green shadow-black drop-shadow-md"
          >New Tool</span
        >
        <h4 class="font-bold leading-tight text-white drop-shadow-md">
          Auto Reg Clone <br />Max Speed 2024
        </h4>
      </div>
    </div>
  </aside>
</template>
