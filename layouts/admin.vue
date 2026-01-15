<template>
  <div class="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300 font-sans text-gray-800 dark:text-gray-200 overflow-x-hidden">

    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div class="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    </div>

    <div
        v-if="isSidebarOpen"
        @click="isSidebarOpen = false"
        class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity"
    ></div>

    <div
        v-if="isProfileMenuOpen"
        @click="isProfileMenuOpen = false"
        class="fixed inset-0 z-40 cursor-default"
    ></div>

    <div
        class="fixed inset-y-0 left-0 z-50 w-64 shadow-2xl transform transition-transform duration-300 ease-in-out"
        :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <AdminSidebar @close="isSidebarOpen = false" />
    </div>

    <div
        class="flex flex-col min-h-screen transition-all duration-300 relative z-10"
        :class="isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'"
    >

      <header class="h-20 px-4 sm:px-8 flex items-center justify-between bg-white/70 dark:bg-slate-900/70 backdrop-blur-md sticky top-0 z-30 border-b border-gray-200/50 dark:border-slate-700/50">

        <div class="flex items-center gap-4">
          <button
              @click="toggleSidebar"
              class="p-2 -ml-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none transition-colors"
          >
            <svg v-if="!isSidebarOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>

          <h1 class="text-xl font-semibold text-gray-800 dark:text-white truncate">
            Admin Panel
          </h1>
        </div>

        <div class="flex items-center space-x-3 sm:space-x-4">
          <ClientOnly>
            <button @click="toggleTheme" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-all">
              <i :class="colorMode.value === 'dark' ? 'fas fa-moon' : 'fas fa-sun text-yellow-500'"></i>
            </button>
          </ClientOnly>

          <div class="relative z-50">
            <button
                @click="isProfileMenuOpen = !isProfileMenuOpen"
                class="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px] hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
            >
              <img :src="user?.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${user?.user_metadata?.full_name ? String(user.user_metadata.full_name).substring(0, 1) : 'User'}`"
                  class="rounded-full h-full w-full border-2 border-white dark:border-slate-800 object-cover"
                  alt="Avatar"
              >
            </button>

            <Transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
            >
              <div
                  v-if="isProfileMenuOpen"
                  class="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-slate-800 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-100 dark:border-slate-700 overflow-hidden"
              >
                <div class="px-4 py-3 border-b border-gray-100 dark:border-slate-700">
                  <p class="text-sm leading-5 text-gray-500 dark:text-gray-400">Đăng nhập với</p>
                  <p class="text-sm font-medium leading-5 text-gray-900 dark:text-white truncate">admin@example.com</p>
                </div>

                <div class="py-1">
                  <a href="#" class="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 transition-colors">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Hồ sơ cá nhân
                  </a>

                  <button
                      @click="handleLogout"
                      class="w-full group flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-left"
                  >
                    <svg class="mr-3 h-5 w-5 text-red-400 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Đăng xuất
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </header>

      <main class="flex-1 p-4 sm:p-8">
        <slot />
      </main>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {ROUTER_LIST} from "~/constants/router.const";

const {authStore} = useAppStore();
const router = useRouter()
const colorMode = useColorMode()

const user = computed(() => authStore.user);
// Sidebar + Profile Dropdown
const isSidebarOpen = ref(true)
const isProfileMenuOpen = ref(false) // <--- Mới thêm

onMounted(() => {
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }
})

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const handleLogout = async () => {
  try {
    isProfileMenuOpen.value = false; // Đóng menu
    await authStore.logout().then(async () => {
      await router.push(ROUTER_LIST.HOME);
    });
  } catch{}
}
</script>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob { animation: blob 7s infinite; }
.animation-delay-2000 { animation-delay: 2s; }
</style>