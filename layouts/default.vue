<template>
  <div class="bg-dark-900 text-gray-300 font-sans antialiased min-h-screen flex flex-col">
    <div class="bg-brand-purple/10 border-b border-brand-purple/20 text-xs py-2">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <div class="flex items-center gap-4 overflow-hidden h-5 w-1/2">
                <span class="text-brand-cyan font-bold whitespace-nowrap"><i class="fas fa-bolt mr-1"></i> LIVE:</span>
                <div class="flex flex-col relative w-full h-5 overflow-hidden">
                   <div :key="currentLiveText" class="live-item absolute w-full">
                      <span class="text-gray-400" v-html="currentLiveText"></span>
                   </div>
                </div>
            </div>
            <div class="flex gap-4">
                <a href="#" class="hover:text-white"><i class="fab fa-telegram mr-1"></i> Support Telegram</a>
                <a href="#" class="hover:text-white"><i class="fas fa-shield-alt mr-1"></i> Chính sách bảo hành</a>
            </div>
        </div>
    </div>

    <header class="sticky top-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-white/5">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between gap-8">
                <NuxtLink to="/" class="flex items-center gap-2 group">
                    <div class="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-cyan rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(127,90,240,0.5)] group-hover:scale-105 transition-transform">
                        N
                    </div>
                    <span class="text-xl font-bold text-white tracking-wider">MMO<span class="text-brand-cyan">DUYLON</span></span>
                </NuxtLink>

                <div class="flex-1 max-w-2xl hidden md:block">
                    <div class="relative group">
                        <input type="text" placeholder="Tìm kiếm tài nguyên..." class="w-full bg-dark-800 text-white border border-white/10 rounded-full py-3 px-6 pl-12 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all shadow-inner">
                        <i class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-purple"></i>
                        <div class="absolute right-2 top-1/2 -translate-y-1/2 bg-dark-700 px-2 py-1 rounded text-xs text-gray-500 border border-white/5">CTRL + K</div>
                    </div>
                </div>

                <div class="flex items-center gap-4">
                    <button class="relative p-2 text-gray-400 hover:text-white transition"><i class="fas fa-shopping-cart text-xl"></i><span class="absolute -top-1 -right-1 bg-brand-cyan text-dark-900 text-xs font-bold px-1.5 rounded-full">3</span></button>
                    <div class="h-8 w-[1px] bg-white/10 mx-2"></div>
                    <button class="bg-brand-purple hover:bg-purple-600 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-purple-500/20 text-sm"><i class="fas fa-wallet mr-2"></i> Nạp Tiền</button>
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
import Footer from '~/components/Footer.vue';

// Logic Fake Live Feed
const names = ['nam_mmo', 'tuan_ads', 'hacker_lo', 'facebook_king'];
const actions = ['vừa mua 50 Clone', 'vừa mua BM2500', 'vừa tải Source Code'];
const currentLiveText = ref('User <span class="text-white font-mono">hoang***</span> vừa mua <span class="text-brand-green">100 Via FB XMDT</span> - 2 phút trước');

onMounted(() => {
    setInterval(() => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        currentLiveText.value = `User <span class="text-white font-mono">${randomName}***</span> ${randomAction} - 1 phút trước`;
    }, 4000);
});
</script>