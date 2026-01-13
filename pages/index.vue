<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col lg:flex-row gap-8">
        
        <Sidebar />

        <div class="flex-1">
            
            <div class="mb-8 rounded-2xl overflow-hidden relative h-64 border border-white/10 shadow-2xl group">
                <div class="absolute inset-0 bg-gradient-to-r from-brand-fb to-purple-900 opacity-90"></div>
                <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                <div class="relative z-10 p-8 h-full flex flex-col justify-center items-start">
                    <span class="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded mb-3 animate-pulse">HOT DEAL</span>
                    <h2 class="text-4xl font-bold text-white mb-2">BM50 & BM350 Kháng Limit</h2>
                    <p class="text-gray-200 mb-6 max-w-lg">Bao camp xanh, bao tụt limit. Hàng cổ 2018-2022. Đã verify mail.</p>
                    <button class="bg-white text-brand-fb font-bold px-6 py-2 rounded-full hover:bg-gray-100 transition shadow-lg">Mua Ngay (-20%)</button>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" class="absolute -right-10 -bottom-10 w-64 opacity-20 rotate-12 transition-transform group-hover:rotate-0" alt="FB">
            </div>

            <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <div class="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
                    <button class="px-4 py-1.5 rounded-full bg-brand-purple text-white font-medium text-sm whitespace-nowrap">Tất cả</button>
                    <button class="px-4 py-1.5 rounded-full bg-dark-800 border border-white/10 hover:border-brand-fb hover:text-white transition text-sm whitespace-nowrap">Facebook</button>
                    <button class="px-4 py-1.5 rounded-full bg-dark-800 border border-white/10 hover:border-red-500 hover:text-white transition text-sm whitespace-nowrap">Youtube</button>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-sm text-gray-500">Sắp xếp:</span>
                    <select class="bg-dark-800 border border-white/10 rounded text-sm text-white px-2 py-1 outline-none">
                        <option>Mới nhất</option>
                        <option>Giá thấp -> Cao</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <ProductCard v-for="p in products" :key="p.id" v-bind="p" />
            </div>

            <div class="mt-12 flex justify-center">
                 <nav class="flex gap-2">
                    <a href="#" class="w-10 h-10 flex items-center justify-center rounded-lg bg-dark-800 border border-white/10 text-gray-400 hover:text-white hover:border-brand-purple transition"><i class="fas fa-chevron-left"></i></a>
                    <a href="#" class="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-purple text-white font-bold shadow-lg shadow-purple-500/30">1</a>
                    <a href="#" class="w-10 h-10 flex items-center justify-center rounded-lg bg-dark-800 border border-white/10 text-gray-400 hover:text-white hover:border-brand-purple transition">2</a>
                    <a href="#" class="w-10 h-10 flex items-center justify-center rounded-lg bg-dark-800 border border-white/10 text-gray-400 hover:text-white hover:border-brand-purple transition"><i class="fas fa-chevron-right"></i></a>
                </nav>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue';

const products = ref([
    { id: 1, type: 'fb', title: 'BM50 Kháng 902 Live Ads', price: '85.000đ', oldPrice: '150.000đ', badge: 'CÒN HÀNG', tags: ['2019', 'VN', 'No Limit'], specs: ['Đã xác minh danh tính', 'Bao add thẻ không hold', 'Bảo hành login 24h'] },
    { id: 2, type: 'yt', title: 'Kênh Youtube BKT (Bật kiếm tiền)', price: '2.500.000đ', badge: 'HOT', tags: ['US', 'Content'], specs: ['1000 Subs / 4000h Watch time', 'Đã nối gà (Adsense)', 'Không gậy bản quyền'] },
    { id: 3, type: 'code', title: 'Source Web Gạch Thẻ Tự Động', price: '500.000đ', oldPrice: '1.000.000đ', badge: 'v2.5', tags: ['PHP', 'Laravel', 'Auto API'], specs: ['Tích hợp API 30 nhà mạng', 'Bảo mật 2FA, Anti-DDoS', 'Hỗ trợ setup A-Z'] },
    { id: 4, type: 'google', title: 'Gmail Cổ 2015-2018 (Ngâm lâu)', price: '5.000đ', badge: 'SLL', tags: ['Random IP', 'Trust cao'], specs: ['Đã bao gồm Mail khôi phục', 'Reg dịch vụ 100% ăn', 'Định dạng: User|Pass|MailKP'] },
    { id: 5, type: 'tiktok', title: 'Tài Khoản TikTok US Ads (BC)', price: '150.000đ', oldPrice: '300.000đ', badge: 'HOT', tags: ['US IP', 'Business Center'], specs: ['Đã verify thuế US', 'Nạp tiền chạy ngay', 'Kèm hướng dẫn nuôi'] },
    { id: 6, type: 'proxy', title: 'Proxy IPv6 Dân Cư Xoay', price: '45.000đ', badge: 'NEW', tags: ['Rotating', 'Private'], specs: ['Speed 100Mbps+', 'Không giới hạn băng thông', 'Đổi IP sau mỗi request'] },
])
</script>