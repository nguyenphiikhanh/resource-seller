<template>
  <div 
    class="h-full flex flex-col bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-white/5 p-4 relative group transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none" 
    :class="theme.cardClass"
  >
    <div class="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded border" :class="badgeClass">
        {{ badge }}
    </div>

    <div class="flex items-start gap-4 mb-4 shrink-0">
        <div class="w-12 h-12 bg-gray-50 dark:bg-dark-700 rounded-lg flex items-center justify-center border border-gray-200 dark:border-white/10 shrink-0 transition-colors">
            <i :class="[icon, theme.text, 'text-2xl', theme.dropShadow]"></i>
        </div>
        
        <div class="pr-14 relative group/tooltip flex-1 min-h-[3.5rem] flex flex-col justify-center"> 
            
            <h4 class="text-gray-900 dark:text-white font-bold leading-tight group-hover:opacity-80 transition line-clamp-2 cursor-help">
                {{ title }}
            </h4>

            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-[220px] hidden group-hover/tooltip:block z-50">
                <div class="bg-gray-900 text-white text-xs p-3 rounded-lg border border-white/20 shadow-2xl relative text-center leading-relaxed">
                    {{ title }}
                    <div class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900"></div>
                </div>
            </div>

            <div class="flex flex-wrap gap-1 mt-1.5">
                <span v-for="tag in tags" :key="tag" class="text-[10px] bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 px-1.5 rounded transition-colors">{{ tag }}</span>
            </div>
        </div>
    </div>

    <div class="flex-1 bg-gray-50 dark:bg-dark-900/50 rounded p-2 mb-4 text-xs text-gray-500 dark:text-gray-400 space-y-1 font-mono transition-colors">
        <p v-for="(spec, idx) in specs" :key="idx">• {{ spec }}</p>
    </div>

    <div class="flex items-center justify-between mt-auto pt-2 border-t border-gray-100 dark:border-white/5 transition-colors">
        <div>
            <span v-if="oldPrice" class="block text-xs text-gray-400 dark:text-gray-500 line-through">{{ oldPrice }}</span>
            <span class="text-lg font-bold text-blue-600 dark:text-brand-cyan transition-colors">{{ price }}</span>
        </div>
        
        <button class="text-white p-2 rounded-lg transition shadow-lg transform active:scale-95" :class="theme.btnClass">
            <i class="fas fa-cart-plus"></i>
        </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    type: { type: String, default: 'fb' }, // fb, yt, tiktok, code, google, proxy
    title: String,
    price: String,
    oldPrice: String,
    badge: { type: String, default: 'CÒN HÀNG' },
    tags: Array,
    specs: Array
})

// Logic màu sắc từng loại (Cập nhật text color cho Light Mode)
const themes = {
    fb: { 
        cardClass: 'fb-card', 
        text: 'text-brand-fb', 
        btnClass: 'bg-brand-fb hover:bg-blue-600 shadow-blue-500/20' 
    },
    yt: { 
        cardClass: 'yt-card', 
        text: 'text-red-500', 
        btnClass: 'bg-red-600 hover:bg-red-700 shadow-red-500/20' 
    },
    tiktok: { 
        cardClass: 'tiktok-card', 
        // QUAN TRỌNG: Icon TikTok màu đen ở Light, trắng ở Dark
        text: 'text-gray-900 dark:text-white', 
        dropShadow: 'drop-shadow-[2px_2px_0_rgba(255,0,0,0.5)]', 
        btnClass: 'bg-pink-600 hover:bg-pink-700 shadow-pink-500/20' 
    },
    code: { 
        cardClass: 'code-card', 
        text: 'text-brand-green', 
        btnClass: 'bg-brand-green hover:bg-green-600 shadow-green-500/20' 
    },
    google: { 
        cardClass: 'google-card', 
        text: 'text-orange-500', // Chỉnh đậm hơn chút cho dễ nhìn trên nền trắng
        btnClass: 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/20' 
    },
    proxy: { 
        cardClass: 'proxy-card', 
        text: 'text-blue-500', 
        btnClass: 'bg-blue-500 hover:bg-blue-600 shadow-blue-500/20' 
    },
}

const theme = computed(() => themes[props.type] || themes.fb)

const icon = computed(() => {
    const map = { fb: 'fab fa-facebook', yt: 'fab fa-youtube', tiktok: 'fab fa-tiktok', code: 'fas fa-code', google: 'fab fa-google', proxy: 'fas fa-network-wired' }
    return map[props.type] || 'fas fa-box'
})

// Badge style: Điều chỉnh border để rõ hơn trên nền trắng
const badgeClass = computed(() => {
    if (props.badge === 'HOT') return 'bg-red-50 dark:bg-red-500/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-500/30'
    if (props.badge === 'SLL') return 'bg-green-50 dark:bg-green-500/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-500/30'
    // Default (CÒN HÀNG)
    return 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/30'
})
</script>