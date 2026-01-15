<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col gap-8 lg:flex-row">
      <div class="hidden lg:block">
        <Sidebar />
      </div>

      <div class="flex-1">
        <div
          class="group relative mb-8 h-64 overflow-hidden rounded-2xl border border-gray-200 shadow-xl transition-all dark:border-white/10 dark:shadow-2xl"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-brand-fb to-purple-900 opacity-90"
          ></div>
          <div
            class="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"
          ></div>

          <div class="relative z-10 flex h-full flex-col items-start justify-center p-8">
            <span
              class="mb-3 animate-pulse rounded bg-yellow-400 px-2 py-1 text-xs font-bold text-black"
              >HOT DEAL</span
            >
            <h2 class="mb-2 text-4xl font-bold text-white shadow-sm">BM50 & BM350 Kháng Limit</h2>
            <p class="mb-6 max-w-lg text-gray-100 shadow-sm">
              Bao camp xanh, bao tụt limit. Hàng cổ 2018-2022. Đã verify mail.
            </p>
            <button
              class="rounded-full border-2 border-transparent bg-white px-6 py-2 font-bold text-brand-fb shadow-lg transition hover:border-brand-fb/20 hover:bg-gray-100"
            >
              Mua Ngay (-20%)
            </button>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
            class="absolute -bottom-10 -right-10 w-64 rotate-12 opacity-20 transition-transform group-hover:rotate-0"
            alt="FB"
          />
        </div>

        <div class="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div class="scrollbar-hide flex w-full gap-2 overflow-x-auto pb-2 md:w-auto md:pb-0">
            <button
              class="whitespace-nowrap rounded-full bg-brand-purple px-4 py-1.5 text-sm font-medium text-white shadow-md shadow-purple-500/20"
            >
              Tất cả
            </button>

            <button
              class="whitespace-nowrap rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-600 shadow-sm transition hover:border-brand-fb hover:text-brand-fb dark:border-white/10 dark:bg-dark-800 dark:text-gray-300 dark:shadow-none dark:hover:text-white"
            >
              Facebook
            </button>

            <button
              class="whitespace-nowrap rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-600 shadow-sm transition hover:border-red-500 hover:text-red-500 dark:border-white/10 dark:bg-dark-800 dark:text-gray-300 dark:shadow-none dark:hover:text-white"
            >
              Youtube
            </button>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-gray-600 dark:text-gray-500">Sắp xếp:</span>
            <select
              class="rounded border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-900 shadow-sm outline-none transition focus:border-brand-purple dark:border-white/10 dark:bg-dark-800 dark:text-white dark:shadow-none"
            >
              <option>Mới nhất</option>
              <option>Giá thấp -> Cao</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <ProductCard v-for="p in products" :key="p.id" v-bind="p" />
        </div>

        <div class="mt-12 flex justify-center">
          <nav class="flex gap-2">
            <a
              href="#"
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-brand-purple hover:bg-gray-50 hover:text-brand-purple dark:border-white/10 dark:bg-dark-800 dark:text-gray-400 dark:shadow-none dark:hover:bg-dark-700"
            >
              <i class="fas fa-chevron-left"></i>
            </a>

            <a
              href="#"
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-purple font-bold text-white shadow-lg shadow-purple-500/30"
              >1</a
            >

            <a
              href="#"
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-brand-purple hover:bg-gray-50 hover:text-brand-purple dark:border-white/10 dark:bg-dark-800 dark:text-gray-400 dark:shadow-none dark:hover:bg-dark-700"
              >2</a
            >

            <a
              href="#"
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-brand-purple hover:bg-gray-50 hover:text-brand-purple dark:border-white/10 dark:bg-dark-800 dark:text-gray-400 dark:shadow-none dark:hover:bg-dark-700"
            >
              <i class="fas fa-chevron-right"></i>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'

// Data giữ nguyên
const products = ref([
  {
    id: 1,
    type: 'fb',
    title: 'BM50 Kháng 902 Live Ads',
    price: '85.000đ',
    oldPrice: '150.000đ',
    badge: 'CÒN HÀNG',
    tags: ['2019', 'VN', 'No Limit'],
    specs: ['Đã xác minh danh tính', 'Bao add thẻ không hold', 'Bảo hành login 24h'],
  },
  {
    id: 2,
    type: 'yt',
    title: 'Kênh Youtube BKT (Bật kiếm tiền)',
    price: '2.500.000đ',
    badge: 'HOT',
    tags: ['US', 'Content'],
    specs: ['1000 Subs / 4000h Watch time', 'Đã nối gà (Adsense)', 'Không gậy bản quyền'],
  },
  {
    id: 3,
    type: 'code',
    title: 'Source Web Gạch Thẻ Tự Động',
    price: '500.000đ',
    oldPrice: '1.000.000đ',
    badge: 'v2.5',
    tags: ['PHP', 'Laravel', 'Auto API'],
    specs: ['Tích hợp API 30 nhà mạng', 'Bảo mật 2FA, Anti-DDoS', 'Hỗ trợ setup A-Z'],
  },
  {
    id: 4,
    type: 'google',
    title: 'Gmail Cổ 2015-2018 (Ngâm lâu)',
    price: '5.000đ',
    badge: 'SLL',
    tags: ['Random IP', 'Trust cao'],
    specs: ['Đã bao gồm Mail khôi phục', 'Reg dịch vụ 100% ăn', 'Định dạng: User|Pass|MailKP'],
  },
  {
    id: 5,
    type: 'tiktok',
    title: 'Tài Khoản TikTok US Ads (BC)',
    price: '150.000đ',
    oldPrice: '300.000đ',
    badge: 'HOT',
    tags: ['US IP', 'Business Center'],
    specs: ['Đã verify thuế US', 'Nạp tiền chạy ngay', 'Kèm hướng dẫn nuôi'],
  },
  {
    id: 6,
    type: 'proxy',
    title: 'Proxy IPv6 Dân Cư Xoay',
    price: '45.000đ',
    badge: 'NEW',
    tags: ['Rotating', 'Private'],
    specs: ['Speed 100Mbps+', 'Không giới hạn băng thông', 'Đổi IP sau mỗi request'],
  },
])
</script>
