<template>
  <div
    class="group relative flex h-full flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/5 dark:bg-dark-800 dark:shadow-none"
    :class="theme.cardClass"
  >
    <div
      class="absolute right-3 top-3 rounded border px-2 py-0.5 text-[10px] font-bold"
      :class="badgeClass"
    >
      {{ badge }}
    </div>

    <div class="mb-4 flex shrink-0 items-start gap-4">
      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 transition-colors dark:border-white/10 dark:bg-dark-700"
      >
        <i :class="[icon, theme.text, 'text-2xl', theme.dropShadow]"></i>
      </div>

      <div class="group/tooltip relative flex min-h-[3.5rem] flex-1 flex-col justify-center pr-14">
        <h4
          class="line-clamp-2 cursor-help font-bold leading-tight text-gray-900 transition group-hover:opacity-80 dark:text-white"
        >
          {{ title }}
        </h4>

        <div
          class="absolute bottom-full left-1/2 z-50 mb-3 hidden w-max max-w-[220px] -translate-x-1/2 group-hover/tooltip:block"
        >
          <div
            class="relative rounded-lg border border-white/20 bg-gray-900 p-3 text-center text-xs leading-relaxed text-white shadow-2xl"
          >
            {{ title }}
            <div
              class="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-gray-900"
            ></div>
          </div>
        </div>

        <div class="mt-1.5 flex flex-wrap gap-1">
          <span
            v-for="tag in tags"
            :key="tag"
            class="rounded bg-gray-100 px-1.5 text-[10px] text-gray-600 transition-colors dark:bg-white/5 dark:text-gray-400"
            >{{ tag }}</span
          >
        </div>
      </div>
    </div>

    <div
      class="mb-4 flex-1 space-y-1 rounded bg-gray-50 p-2 font-mono text-xs text-gray-500 transition-colors dark:bg-dark-900/50 dark:text-gray-400"
    >
      <p v-for="(spec, idx) in specs" :key="idx">• {{ spec }}</p>
    </div>

    <div
      class="mt-auto flex items-center justify-between border-t border-gray-100 pt-2 transition-colors dark:border-white/5"
    >
      <div>
        <span v-if="oldPrice" class="block text-xs text-gray-400 line-through dark:text-gray-500">{{
          oldPrice
        }}</span>
        <span class="text-lg font-bold text-blue-600 transition-colors dark:text-brand-cyan">{{
          price
        }}</span>
      </div>

      <button
        class="transform rounded-lg p-2 text-white shadow-lg transition active:scale-95"
        :class="theme.btnClass"
      >
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
  specs: Array,
})

// Logic màu sắc từng loại (Cập nhật text color cho Light Mode)
const themes = {
  fb: {
    cardClass: 'fb-card',
    text: 'text-brand-fb',
    btnClass: 'bg-brand-fb hover:bg-blue-600 shadow-blue-500/20',
  },
  yt: {
    cardClass: 'yt-card',
    text: 'text-red-500',
    btnClass: 'bg-red-600 hover:bg-red-700 shadow-red-500/20',
  },
  tiktok: {
    cardClass: 'tiktok-card',
    // QUAN TRỌNG: Icon TikTok màu đen ở Light, trắng ở Dark
    text: 'text-gray-900 dark:text-white',
    dropShadow: 'drop-shadow-[2px_2px_0_rgba(255,0,0,0.5)]',
    btnClass: 'bg-pink-600 hover:bg-pink-700 shadow-pink-500/20',
  },
  code: {
    cardClass: 'code-card',
    text: 'text-brand-green',
    btnClass: 'bg-brand-green hover:bg-green-600 shadow-green-500/20',
  },
  google: {
    cardClass: 'google-card',
    text: 'text-orange-500', // Chỉnh đậm hơn chút cho dễ nhìn trên nền trắng
    btnClass: 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/20',
  },
  proxy: {
    cardClass: 'proxy-card',
    text: 'text-blue-500',
    btnClass: 'bg-blue-500 hover:bg-blue-600 shadow-blue-500/20',
  },
}

const theme = computed(() => themes[props.type] || themes.fb)

const icon = computed(() => {
  const map = {
    fb: 'fab fa-facebook',
    yt: 'fab fa-youtube',
    tiktok: 'fab fa-tiktok',
    code: 'fas fa-code',
    google: 'fab fa-google',
    proxy: 'fas fa-network-wired',
  }
  return map[props.type] || 'fas fa-box'
})

// Badge style: Điều chỉnh border để rõ hơn trên nền trắng
const badgeClass = computed(() => {
  if (props.badge === 'HOT')
    return 'bg-red-50 dark:bg-red-500/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-500/30'
  if (props.badge === 'SLL')
    return 'bg-green-50 dark:bg-green-500/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-500/30'
  // Default (CÒN HÀNG)
  return 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/30'
})
</script>
