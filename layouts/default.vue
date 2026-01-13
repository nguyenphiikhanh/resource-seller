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
        <div class="flex justify-between items-center mb-6 border-b border-gray-200 dark:border-white/10 pb-4">
            <span class="text-gray-900 dark:text-white font-bold text-lg"><i class="fas fa-bars mr-2"></i> Menu</span>
            <button @click="isSidebarOpen = false" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-white/5 p-2 rounded-lg">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <Sidebar />
    </aside>

    <div class="bg-brand-purple/10 border-b border-brand-purple/20 text-xs py-2">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <div class="flex items-center gap-4 overflow-hidden h-5 w-full md:w-1/2">
                <span class="text-brand-cyan font-bold whitespace-nowrap"><i class="fas fa-bolt mr-1"></i> LIVE:</span>
                <div class="flex flex-col relative w-full h-5 overflow-hidden">
                   <div :key="currentLiveText" class="live-item absolute w-full">
                      <span class="text-gray-600 dark:text-gray-400" v-html="currentLiveText"></span>
                   </div>
                </div>
            </div>
            <div class="hidden md:flex gap-4">
                <a href="#" class="hover:text-brand-purple dark:hover:text-white"><i class="fab fa-telegram mr-1"></i> Support Telegram</a>
                <a href="#" class="hover:text-brand-purple dark:hover:text-white"><i class="fas fa-shield-alt mr-1"></i> Chính sách bảo hành</a>
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
                    
                    <div class="hidden sm:block h-8 w-[1px] bg-gray-300 dark:bg-white/10 mx-2"></div>

                    <button 
                        @click="toggleTheme" 
                        class="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                        title="Đổi giao diện"
                    >
                        <i v-if="$colorMode.value === 'dark'" class="fas fa-sun text-yellow-400 text-lg"></i>
                        <i v-else class="fas fa-moon text-indigo-600 text-lg"></i>
                    </button>
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
// Import Color Mode của Nuxt
const colorMode = useColorMode();

// Hàm chuyển đổi giao diện
const toggleTheme = () => {
    // Nếu đang là dark thì chuyển sang light và ngược lại
    // colorMode.preference sẽ lưu vào localStorage để nhớ cho lần sau
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

// ... Các code cũ giữ nguyên ...
const isSidebarOpen = ref(false);
const router = useRouter();
router.afterEach(() => {
    isSidebarOpen.value = false;
});

const names = ['nam_mmo', 'tuan_ads', 'hacker_lo', 'facebook_king'];
const actions = ['vừa mua 50 Clone', 'vừa mua BM2500', 'vừa tải Source Code'];
// Lưu ý: Cập nhật text color trong biến string HTML này nếu cần
const currentLiveText = ref('User <span class="text-gray-900 dark:text-white font-mono">hoang***</span> vừa mua <span class="text-brand-green">100 Via FB XMDT</span> - 2 phút trước');

onMounted(() => {
    setInterval(() => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        // Sửa lại class text-white thành dark:text-white để hợp theme sáng
        currentLiveText.value = `User <span class="text-gray-900 dark:text-white font-mono">${randomName}***</span> ${randomAction} - 1 phút trước`;
    }, 4000);
});
</script>