<template>
  <div
    class="relative flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased transition-colors duration-300 dark:bg-dark-900 dark:text-gray-300"
  >
    <div
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
      class="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm transition-opacity lg:hidden"
    ></div>

    <aside
      class="fixed inset-y-0 left-0 z-[70] w-72 transform overflow-y-auto border-r border-gray-200 bg-white p-5 transition-transform duration-300 ease-in-out lg:hidden dark:border-white/10 dark:bg-dark-900"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <Sidebar />
    </aside>

    <div class="border-b border-brand-purple/20 bg-brand-purple/10 py-2 text-xs">
      <div class="container mx-auto flex items-center justify-between px-4">
        <CommonLiveTicker />
        <div class="hidden gap-4 md:flex">
          <a href="#" class="hover:text-brand-purple dark:hover:text-white"
            ><i class="fab fa-telegram mr-1"></i> Support Telegram</a
          >
        </div>
      </div>
    </div>

    <header
      class="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-white/5 dark:bg-dark-900/90"
    >
      <div class="container mx-auto px-4 py-3 md:py-4">
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <button
              @click="isSidebarOpen = true"
              class="rounded-lg border border-gray-200 p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden dark:border-white/10 dark:text-white dark:hover:bg-white/10"
            >
              <i class="fas fa-bars text-xl"></i>
            </button>

            <NuxtLink to="/" class="group flex items-center gap-2">
              <div
                class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-purple to-brand-cyan text-lg font-bold text-white shadow-[0_0_15px_rgba(127,90,240,0.5)] transition-transform group-hover:scale-105 md:h-10 md:w-10 md:text-xl"
              >
                N
              </div>
              <span
                class="text-lg font-bold tracking-wider text-gray-800 md:text-xl dark:text-white"
                >MMO<span class="text-brand-cyan">DUYLON</span></span
              >
            </NuxtLink>
          </div>

          <div class="hidden max-w-2xl flex-1 md:block">
            <div class="group relative">
              <input
                type="text"
                placeholder="Tìm kiếm tài nguyên..."
                class="w-full rounded-full border border-gray-200 bg-gray-100 px-6 py-2.5 pl-12 text-sm text-gray-900 shadow-inner transition-all focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple dark:border-white/10 dark:bg-dark-800 dark:text-white"
              />
              <i
                class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-purple"
              ></i>
              <div
                class="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-gray-200 bg-white px-2 py-1 text-xs text-gray-500 dark:border-white/5 dark:bg-dark-700"
              >
                CTRL + K
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 md:gap-4">
            <button
              class="p-2 text-gray-500 hover:text-gray-900 md:hidden dark:text-gray-400 dark:hover:text-white"
            >
              <i class="fas fa-search text-lg"></i>
            </button>

            <button
              class="relative p-2 text-gray-500 transition hover:text-brand-purple dark:text-gray-400 dark:hover:text-white"
            >
              <i class="fas fa-shopping-cart text-lg md:text-xl"></i>
              <span
                class="absolute -right-1 -top-1 rounded-full bg-brand-cyan px-1.5 text-[10px] font-bold text-dark-900"
                >3</span
              >
            </button>

            <ClientOnly>
              <button
                @click="toggleTheme"
                class="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
                title="Đổi giao diện"
              >
                <i
                  v-if="$colorMode.value === 'dark'"
                  class="fas fa-sun text-lg text-yellow-400"
                ></i>
                <i v-else class="fas fa-moon text-lg text-indigo-600"></i>
              </button>
            </ClientOnly>

            <div
              v-if="user"
              class="mx-1 hidden h-8 w-[1px] bg-gray-300 sm:block dark:bg-white/10"
            ></div>

            <ClientOnly>
              <div v-if="user" class="relative" ref="dropdownRef">
                <button
                  @click="isUserMenuOpen = !isUserMenuOpen"
                  class="group flex items-center gap-2 rounded-full border border-transparent py-1 pl-1 pr-1 transition-all hover:bg-gray-100 md:pr-3 dark:hover:bg-white/5"
                  :class="{
                    'border-gray-200 bg-gray-100 dark:border-white/10 dark:bg-white/5':
                      isUserMenuOpen,
                  }"
                >
                  <img
                    :src="
                      user.user_metadata?.avatar_url ||
                      `https://ui-avatars.com/api/?name=${user.user_metadata?.full_name ? String(user.user_metadata.full_name).substring(0, 1) : 'User'}`
                    "
                    class="h-8 w-8 rounded-full border border-gray-200 object-cover md:h-9 md:w-9 dark:border-white/10"
                    alt="Avatar"
                  />
                  <div class="hidden flex-col items-start text-xs md:flex">
                    <span class="max-w-[100px] truncate font-bold text-gray-800 dark:text-white">
                      {{ user.user_metadata?.full_name || 'Thành viên' }}
                    </span>
                    <span class="font-medium text-brand-purple">0 đ</span>
                  </div>
                  <i
                    class="fas fa-chevron-down ml-1 text-xs text-gray-400 transition-transform duration-300"
                    :class="{ 'rotate-180': isUserMenuOpen }"
                  ></i>
                </button>

                <div
                  v-if="isUserMenuOpen"
                  class="absolute right-0 top-full z-50 mt-2 w-64 origin-top-right transform overflow-hidden rounded-xl border border-gray-100 bg-white shadow-2xl transition-all dark:border-white/10 dark:bg-dark-800"
                >
                  <div
                    class="border-b border-gray-100 bg-gray-50 px-4 py-3 md:hidden dark:border-white/5 dark:bg-dark-900/50"
                  >
                    <p class="truncate font-bold text-gray-900 dark:text-white">
                      {{ user.user_metadata?.full_name }}
                    </p>
                    <p class="truncate text-xs text-gray-500 dark:text-gray-400">
                      {{ user.email }}
                    </p>
                    <p class="mt-1 text-xs font-bold text-brand-purple">Số dư: 0 đ</p>
                  </div>

                  <div class="space-y-1 p-2">
                    <NuxtLink
                      to="/profile"
                      class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
                    >
                      <i class="fas fa-user-circle w-5 text-gray-400"></i> Thông tin cá nhân
                    </NuxtLink>
                    <NuxtLink
                      to="/admin"
                      class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
                    >
                      <i class="fas fa-user-tie w-5 text-gray-400"></i> Trang quản trị
                    </NuxtLink>
                    <NuxtLink
                      to="/orders"
                      class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
                    >
                      <i class="fas fa-person-booth w-5 text-gray-400"></i> Quản lý gian hàng
                    </NuxtLink>
                    <NuxtLink
                      to="/orders"
                      class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
                    >
                      <i class="fas fa-history w-5 text-gray-400"></i> Lịch sử đơn hàng
                    </NuxtLink>
                    <NuxtLink
                      to="/deposit"
                      class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
                    >
                      <i class="fas fa-wallet w-5 text-gray-400"></i> Nạp tiền
                    </NuxtLink>
                  </div>

                  <div class="border-t border-gray-100 p-2 dark:border-white/5">
                    <button
                      @click="handleLogout"
                      class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50 dark:hover:bg-red-500/10"
                    >
                      <i class="fas fa-sign-out-alt w-5"></i> Đăng xuất
                    </button>
                  </div>
                </div>

                <div
                  v-if="isUserMenuOpen"
                  @click="isUserMenuOpen = false"
                  class="fixed inset-0 z-40 cursor-default"
                ></div>
              </div>

              <div v-else class="flex items-center gap-2 md:gap-3">
                <NuxtLink
                  v-if="!isAuthPage"
                  :to="ROUTER_LIST.LOGIN"
                  class="rounded-lg bg-gradient-to-r from-brand-purple to-brand-cyan px-4 py-2 text-sm font-bold text-white shadow-lg shadow-purple-500/30 transition-transform hover:scale-105"
                >
                  Đăng nhập
                </NuxtLink>
              </div>
            </ClientOnly>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ROUTER_LIST } from '~/constants/router.const.ts'

const { authStore } = useAppStore()
const router = useRouter()
const route = useRoute()
const colorMode = useColorMode()
const isSidebarOpen = ref(false)

// State cho Dropdown Menu
const isUserMenuOpen = ref(false)

const user = computed(() => authStore.user)
const isAuthPage = computed(() => {
  return [ROUTER_LIST.LOGIN, ROUTER_LIST.REGISTER].includes(route.path)
})

// Hàm toggle theme
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// Hàm Logout
const handleLogout = async () => {
  try {
    isUserMenuOpen.value = false // Đóng menu
    await authStore.logout().then(async () => {
      await router.push(ROUTER_LIST.HOME)
    })
  } catch {}
}

router.afterEach(() => {
  isSidebarOpen.value = false
  isUserMenuOpen.value = false
})
</script>
