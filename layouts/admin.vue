<template>
  <div
    class="min-h-screen overflow-x-hidden bg-gray-50 font-sans text-gray-800 transition-colors duration-300 dark:bg-slate-900 dark:text-gray-200"
  >
    <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        class="animate-blob absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-purple-400/30 opacity-70 mix-blend-multiply blur-3xl filter"
      ></div>
      <div
        class="animate-blob animation-delay-2000 absolute right-[-10%] top-[-10%] h-96 w-96 rounded-full bg-indigo-400/30 opacity-70 mix-blend-multiply blur-3xl filter"
      ></div>
    </div>

    <div
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
      class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden"
    ></div>

    <div
      v-if="isProfileMenuOpen"
      @click="isProfileMenuOpen = false"
      class="fixed inset-0 z-40 cursor-default"
    ></div>

    <div
      class="fixed inset-y-0 left-0 z-50 w-64 transform shadow-2xl transition-transform duration-300 ease-in-out"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <AdminSidebar @close="isSidebarOpen = false" />
    </div>

    <div
      class="relative z-10 flex min-h-screen flex-col transition-all duration-300"
      :class="isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'"
    >
      <header
        class="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200/50 bg-white/70 px-4 backdrop-blur-md sm:px-8 dark:border-slate-700/50 dark:bg-slate-900/70"
      >
        <div class="flex items-center gap-4">
          <button
            @click="toggleSidebar"
            class="-ml-2 rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:bg-slate-800"
          >
            <svg
              v-if="!isSidebarOpen"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>

          <h1 class="truncate text-xl font-semibold text-gray-800 dark:text-white">Admin Panel</h1>
        </div>

        <div class="flex items-center space-x-3 sm:space-x-4">
          <ClientOnly>
            <button
              @click="toggleTheme"
              class="rounded-full p-2 transition-all hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              <i
                :class="colorMode.value === 'dark' ? 'fas fa-moon' : 'fas fa-sun text-yellow-500'"
              ></i>
            </button>
          </ClientOnly>

          <div class="relative z-50">
            <button
              @click="isProfileMenuOpen = !isProfileMenuOpen"
              class="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:h-10 sm:w-10 dark:focus:ring-offset-slate-900"
            >
              <img
                :src="
                  user?.user_metadata?.avatar_url ||
                  `https://ui-avatars.com/api/?name=${user?.user_metadata?.full_name ? String(user.user_metadata.full_name).substring(0, 1) : 'User'}`
                "
                class="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-800"
                alt="Avatar"
              />
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
                class="absolute right-0 mt-2 w-48 origin-top-right overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-slate-700 dark:bg-slate-800"
              >
                <div class="border-b border-gray-100 px-4 py-3 dark:border-slate-700">
                  <p class="text-sm leading-5 text-gray-500 dark:text-gray-400">Đăng nhập với</p>
                  <p class="truncate text-sm font-medium leading-5 text-gray-900 dark:text-white">
                    admin@example.com
                  </p>
                </div>

                <div class="py-1">
                  <a
                    href="#"
                    class="group flex items-center px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:text-gray-200 dark:hover:bg-slate-700"
                  >
                    <svg
                      class="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Hồ sơ cá nhân
                  </a>

                  <button
                    @click="handleLogout"
                    class="group flex w-full items-center px-4 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                  >
                    <svg
                      class="mr-3 h-5 w-5 text-red-400 group-hover:text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
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
import { ROUTER_LIST } from '~/constants/router.const'

const { authStore } = useAppStore()
const router = useRouter()
const colorMode = useColorMode()

const user = computed(() => authStore.user)
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
    isProfileMenuOpen.value = false // Đóng menu
    await authStore.logout().then(async () => {
      await router.push(ROUTER_LIST.HOME)
    })
  } catch {}
}
</script>

<style scoped>
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
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
