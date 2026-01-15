<template>
  <div class="bg-gray-50 dark:bg-dark-900 text-gray-800 dark:text-gray-300 font-sans antialiased min-h-screen flex flex-col relative transition-colors duration-300">

    <div
        v-if="isSidebarOpen"
        @click="isSidebarOpen = false"
        class="fixed inset-0 bg-black/80 z-[60] lg:hidden backdrop-blur-sm transition-opacity"
    ></div>

    <aside
        class="fixed inset-y-0 left-0 z-[70] w-72 bg-white dark:bg-dark-900 border-r border-gray-200 dark:border-white/10 p-5 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto"
        :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <Sidebar />
    </aside>

    <div class="bg-brand-purple/10 border-b border-brand-purple/20 text-xs py-2">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <CommonLiveTicker />
        <div class="hidden md:flex gap-4">
          <a href="#" class="hover:text-brand-purple dark:hover:text-white"><i class="fab fa-telegram mr-1"></i> Support Telegram</a>
        </div>
      </div>
    </div>

    <header class="sticky top-0 z-50 bg-white/90 dark:bg-dark-900/90 backdrop-blur-md border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div class="container mx-auto px-4 py-3 md:py-4">
        <div class="flex items-center justify-between gap-4">

          <div class="flex items-center gap-3">
            <button @click="isSidebarOpen = true" class="lg:hidden text-gray-700 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition border border-gray-200 dark:border-white/10">
              <i class="fas fa-bars text-xl"></i>
            </button>

            <NuxtLink to="/" class="flex items-center gap-2 group">
              <div class="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-brand-purple to-brand-cyan rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-[0_0_15px_rgba(127,90,240,0.5)] group-hover:scale-105 transition-transform">
                N
              </div>
              <span class="text-lg md:text-xl font-bold text-gray-800 dark:text-white tracking-wider">MMO<span class="text-brand-cyan">DUYLON</span></span>
            </NuxtLink>
          </div>

          <div class="flex-1 max-w-2xl hidden md:block">
            <div class="relative group">
              <input type="text" placeholder="Tìm kiếm tài nguyên..." class="w-full bg-gray-100 dark:bg-dark-800 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-full py-2.5 px-6 pl-12 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all shadow-inner text-sm">
              <i class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-purple"></i>
              <div class="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-dark-700 px-2 py-1 rounded text-xs text-gray-500 border border-gray-200 dark:border-white/5">CTRL + K</div>
            </div>
          </div>

          <div class="flex items-center gap-2 md:gap-4">
            <button class="md:hidden text-gray-500 dark:text-gray-400 p-2 hover:text-gray-900 dark:hover:text-white"><i class="fas fa-search text-lg"></i></button>

            <button class="relative p-2 text-gray-500 dark:text-gray-400 hover:text-brand-purple dark:hover:text-white transition">
              <i class="fas fa-shopping-cart text-lg md:text-xl"></i>
              <span class="absolute -top-1 -right-1 bg-brand-cyan text-dark-900 text-[10px] font-bold px-1.5 rounded-full">3</span>
            </button>

            <ClientOnly>
              <button
                  @click="toggleTheme"
                  class="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  title="Đổi giao diện"
              >
                <i v-if="$colorMode.value === 'dark'" class="fas fa-sun text-yellow-400 text-lg"></i>
                <i v-else class="fas fa-moon text-indigo-600 text-lg"></i>
              </button>
            </ClientOnly>

            <div v-if="user" class="hidden sm:block h-8 w-[1px] bg-gray-300 dark:bg-white/10 mx-1"></div>

            <ClientOnly>
              <div v-if="user" class="relative" ref="dropdownRef">
                <button
                    @click="isUserMenuOpen = !isUserMenuOpen"
                    class="flex items-center gap-2 pl-1 pr-1 md:pr-3 py-1 rounded-full border border-transparent hover:bg-gray-100 dark:hover:bg-white/5 transition-all group"
                    :class="{'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10': isUserMenuOpen}"
                >
                  <img
                      :src="user.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${user.user_metadata?.full_name ? String(user.user_metadata.full_name).substring(0, 1) : 'User'}`"
                      class="w-8 h-8 md:w-9 md:h-9 rounded-full border border-gray-200 dark:border-white/10 object-cover"
                      alt="Avatar"
                  >
                  <div class="hidden md:flex flex-col items-start text-xs">
                                    <span class="font-bold text-gray-800 dark:text-white max-w-[100px] truncate">
                                        {{ user.user_metadata?.full_name || 'Thành viên' }}
                                    </span>
                    <span class="text-brand-purple font-medium">0 đ</span>
                  </div>
                  <i class="fas fa-chevron-down text-gray-400 text-xs ml-1 transition-transform duration-300" :class="{'rotate-180': isUserMenuOpen}"></i>
                </button>

                <div
                    v-if="isUserMenuOpen"
                    class="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-dark-800 rounded-xl shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden z-50 transform origin-top-right transition-all"
                >
                  <div class="md:hidden px-4 py-3 border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-dark-900/50">
                    <p class="font-bold text-gray-900 dark:text-white truncate">{{ user.user_metadata?.full_name }}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ user.email }}</p>
                    <p class="text-xs text-brand-purple font-bold mt-1">Số dư: 0 đ</p>
                  </div>

                  <div class="p-2 space-y-1">
                    <NuxtLink to="/profile" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition">
                      <i class="fas fa-user-circle w-5 text-gray-400"></i> Thông tin cá nhân
                    </NuxtLink>
                    <NuxtLink to="/admin" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition">
                      <i class="fas fa-user-tie w-5 text-gray-400"></i> Trang quản trị
                    </NuxtLink>
                    <NuxtLink to="/orders" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition">
                      <i class="fas fa-person-booth w-5 text-gray-400"></i> Quản lý gian hàng
                    </NuxtLink>
                    <NuxtLink to="/orders" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition">
                      <i class="fas fa-history w-5 text-gray-400"></i> Lịch sử đơn hàng
                    </NuxtLink>
                    <NuxtLink to="/deposit" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition">
                      <i class="fas fa-wallet w-5 text-gray-400"></i> Nạp tiền
                    </NuxtLink>
                  </div>

                  <div class="border-t border-gray-100 dark:border-white/5 p-2">
                    <button @click="handleLogout" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 transition">
                      <i class="fas fa-sign-out-alt w-5"></i> Đăng xuất
                    </button>
                  </div>
                </div>

                <div v-if="isUserMenuOpen" @click="isUserMenuOpen = false" class="fixed inset-0 z-40 cursor-default"></div>
              </div>

              <div v-else class="flex items-center gap-2 md:gap-3">
                <NuxtLink v-if="!isAuthPage"
                    :to="ROUTER_LIST.LOGIN"
                    class="px-4 py-2 bg-gradient-to-r from-brand-purple to-brand-cyan text-white text-sm font-bold rounded-lg shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform"
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

    <Footer/>
  </div>
</template>

<script setup>
import {ROUTER_LIST} from "~/constants/router.const.ts";

const {authStore} = useAppStore();
const router = useRouter();
const route = useRoute();
const colorMode = useColorMode();
const isSidebarOpen = ref(false);

// State cho Dropdown Menu
const isUserMenuOpen = ref(false);

const user = computed(() => authStore.user);
const isAuthPage = computed(() => {
  return [ROUTER_LIST.LOGIN, ROUTER_LIST.REGISTER].includes(route.path);
});

// Hàm toggle theme
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

// Hàm Logout
const handleLogout = async () => {
  try {
    isUserMenuOpen.value = false; // Đóng menu
    await authStore.logout().then(async () => {
      await router.push(ROUTER_LIST.HOME);
    });
  } catch{}
}

router.afterEach(() => {
  isSidebarOpen.value = false;
  isUserMenuOpen.value = false;
});

</script>