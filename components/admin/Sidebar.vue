<script setup lang="ts">
import { ROUTER_LIST } from '~/constants/router.const'

const emit = defineEmits(['close'])
</script>

<template>
  <aside
    class="flex h-full flex-col border-r border-gray-200 bg-white/80 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/80"
  >
    <div class="flex h-20 items-center border-b border-gray-100 px-8 dark:border-slate-700/50">
      <NuxtLink
        to="/"
        class="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-2xl font-bold text-transparent"
      >
        <span>Trang quản trị</span>
      </NuxtLink>
    </div>

    <nav class="custom-scrollbar flex-1 space-y-2 overflow-y-auto px-4 py-6">
      <NuxtLink
        to="/admin"
        @click="emit('close')"
        class="group flex items-center rounded-xl px-4 py-3 text-gray-600 transition-all hover:bg-indigo-50 dark:text-gray-300 dark:hover:bg-indigo-500/10"
        active-class="bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium shadow-sm"
      >
        <svg
          class="mr-3 h-6 w-6 transition-colors group-hover:text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
        <span>Tổng quan</span>
      </NuxtLink>

      <NuxtLink
        to="/admin/users"
        @click="emit('close')"
        class="group flex items-center rounded-xl px-4 py-3 text-gray-600 transition-all hover:bg-indigo-50 dark:text-gray-300 dark:hover:bg-indigo-500/10"
        active-class="bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium shadow-sm"
      >
        <svg
          class="mr-3 h-6 w-6 transition-colors group-hover:text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <span>Thành viên</span>
      </NuxtLink>

      <div class="mt-4 border-t border-gray-100 pt-4 dark:border-slate-700">
        <p class="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Hệ thống
        </p>
        <a
          href="#"
          class="flex items-center rounded-xl px-4 py-3 text-gray-600 transition-all hover:bg-indigo-50 dark:text-gray-300 dark:hover:bg-indigo-500/10"
        >
          <svg class="mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Cài đặt</span>
        </a>
        <NuxtLink
          :to="ROUTER_LIST.HOME"
          class="group flex items-center rounded-xl px-4 py-3 text-gray-600 transition-all hover:bg-indigo-50 dark:text-gray-300 dark:hover:bg-indigo-500/10"
        >
          <svg
            class="mr-3 h-6 w-6 text-gray-400 transition-colors group-hover:text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span class="font-medium">Về trang chủ</span>
        </NuxtLink>
      </div>
    </nav>
  </aside>
</template>
