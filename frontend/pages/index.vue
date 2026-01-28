<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import {
  Facebook, Youtube, Smartphone, Code2, Server, ShoppingCart, Filter, ChevronRight,
  ShieldCheck, Globe, Layers, Star, CheckCircle2, X, Zap as ZapIcon, Clock
} from 'lucide-vue-next'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

// --- MOCK DATA ---
const liveFeed = [
  { user: 'hoang***', action: 'vừa mua', item: '10 Via XMDT', time: '2 phút trước' },
  { user: 'nam_mmo', action: 'vừa tải', item: 'Tool Auto Reg', time: '5 phút trước' },
  { user: 'admin', action: 'đã restock', item: '500 Gmail Cổ', time: 'vừa xong' },
]

const categories = [
  { name: 'Facebook Ads', icon: Facebook, count: 120, active: true },
  { name: 'Google / Youtube', icon: Youtube, count: 45, active: false },
  { name: 'TikTok Shop', icon: Smartphone, count: 32, active: false },
  { name: 'Source Code / Tool', icon: Code2, count: 18, active: false },
  { name: 'Proxy / VPS', icon: Server, count: 80, active: false },
]

// --- MOCK DATA GENERATOR ---
const baseProducts = [
  { id: 1, title: 'BM50 Kháng 902 Live Ads', type: 'facebook', icon: Facebook, badges: ['2019', 'VN', 'No Limit'], specs: ['Đã xác minh danh tính (XMDT)', 'Bao add thẻ không hold', 'Bảo hành login 24h'], price: 85000, oldPrice: 150000, tag: 'CÒN HÀNG', color: 'text-blue-600', bgIcon: 'bg-blue-100 dark:bg-blue-900/20' },
  { id: 2, title: 'Kênh Youtube Bật Kiếm Tiền (BKT)', type: 'youtube', icon: Youtube, badges: ['US', 'Content', 'Nối Gà'], specs: ['1000 Subs / 4000h Watch time', 'Đã nối gà (Adsense)', 'Không gậy bản quyền'], price: 2500000, oldPrice: null, tag: 'HOT', color: 'text-red-600', bgIcon: 'bg-red-100 dark:bg-red-900/20' },
  { id: 3, title: 'Source Web Gạch Thẻ Tự Động', type: 'code', icon: Code2, badges: ['PHP', 'Laravel', 'Auto API'], specs: ['Tích hợp API 30 nhà mạng', 'Bảo mật 2FA, Anti-DDoS', 'Hỗ trợ setup A-Z'], price: 500000, oldPrice: 1000000, tag: 'v2.5', color: 'text-green-600', bgIcon: 'bg-green-100 dark:bg-green-900/20' },
  { id: 4, title: 'Gmail Cổ 2015-2018 (Ngâm lâu)', type: 'google', icon: Globe, badges: ['Random IP', 'Trust cao'], specs: ['Đã bao gồm Mail khôi phục', 'Reg dịch vụ 100% ăn', 'Định dạng: User|Pass|MailKP'], price: 5000, unit: '/1 acc', oldPrice: null, tag: 'SLL', color: 'text-orange-500', bgIcon: 'bg-orange-100 dark:bg-orange-900/20' },
  { id: 5, title: 'Tài Khoản TikTok US Ads (BC)', type: 'tiktok', icon: Smartphone, badges: ['US IP', 'Business Center'], specs: ['Đã verify thuế US', 'Nạp tiền chạy ngay', 'Kèm hướng dẫn nuôi'], price: 150000, oldPrice: 300000, tag: 'HOT', color: 'text-black dark:text-white', bgIcon: 'bg-gray-200 dark:bg-gray-700' },
  { id: 6, title: 'Proxy IPv6 Dân Cư Xoay', type: 'proxy', icon: Server, badges: ['Rotating', 'Private'], specs: ['Speed 100Mbps+', 'Không giới hạn băng thông', 'Đổi IP sau mỗi request'], price: 45000, unit: '/tháng', oldPrice: null, tag: 'NEW', color: 'text-purple-600', bgIcon: 'bg-purple-100 dark:bg-purple-900/20' },
]

const allProducts = Array.from({ length: 100 }, (_, i) => {
  const base = baseProducts[i % baseProducts.length]
  return { ...base, id: i + 1, title: `${base.title} #${i + 1}` }
})

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val)
}

// --- INFINITE SCROLL LOGIC ---
const pageSize = 12
const displayedCount = ref(pageSize)
const isLoading = ref(false)

const visibleProducts = computed(() => allProducts.slice(0, displayedCount.value))

const isMobileSidebarOpen = ref(false)

// --- HOT DEALS CAROUSEL ---
const activeSlide = ref(0)
const hotDeals = [
  {
    id: 1,
    title: 'BM50 & BM350 Kháng Limit',
    category: 'Facebook Ads',
    shop: 'MMO Master Store',
    shopAvatar: 'MS',
    description: 'Hàng cổ 2018-2022. Đã verify mail. Thích hợp chạy hàng VPCS. Bao đổi trả trong 24h.',
    price: '85.000đ',
    color: 'from-red-600 to-rose-800',
    icon: Facebook
  },
  {
    id: 2,
    title: 'Tool Reg Clone Max Speed',
    category: 'Source Code',
    shop: 'Duy Dev Shop',
    shopAvatar: 'DD',
    description: 'Tốc độ 1000 clone/h. Hỗ trợ giải captcha nhiều loại. Update miễn phí trọn đời.',
    price: '1.500.000đ',
    color: 'from-blue-600 to-indigo-800',
    icon: Code2
  },
  {
    id: 3,
    title: 'Kênh Youtube BKT 10k Subs',
    category: 'Youtube',
    shop: 'Youtube King',
    shopAvatar: 'YK',
    description: 'Lượt xem thật 100%. Đã bật kiếm tiền, xanh $ sạch. Tặng kèm tool reup.',
    price: '5.200.000đ',
    color: 'from-amber-500 to-orange-700',
    icon: Youtube
  }
]

onMounted(() => {
  setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % hotDeals.length
  }, 5000)
})

const loadMore = () => {
  if (displayedCount.value >= allProducts.length || isLoading.value) return
  
  isLoading.value = true
  setTimeout(() => {
    displayedCount.value += pageSize
    isLoading.value = false
  }, 800)
}
</script>

<template>
  <div class="min-h-screen bg-background relative overflow-hidden">
    <!-- Fluid background effects -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-pulse"></div>
      <div class="absolute bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full [animation-delay:2s]"></div>
    </div>

    <!-- Live Ticker Section -->
    <div class="w-full bg-slate-50 dark:bg-slate-950 border-b border-muted/50 py-4 relative z-10 overflow-hidden group">
      <div class="container flex items-center gap-6">
        <div class="bg-primary/10 p-2 rounded-xl flex items-center gap-2 border border-primary/20 shrink-0 shadow-sm">
          <div class="h-2 w-2 rounded-full bg-primary animate-ping"></div>
          <span class="text-[10px] font-black text-primary uppercase tracking-[0.2em] italic">LIVE:</span>
        </div>
        
        <div class="flex-1 overflow-hidden relative">
          <div class="flex gap-12 whitespace-nowrap animate-marquee group-hover:pause">
            <div v-for="(feed, i) in [...liveFeed, ...liveFeed]" :key="i" class="flex items-center gap-3">
              <span class="text-xs font-black text-primary uppercase italic tracking-tighter">{{ feed.user }}</span>
              <span class="text-xs font-bold text-muted-foreground">{{ feed.action }}</span>
              <span class="text-xs font-black text-foreground italic">"{{ feed.item }}"</span>
              <span class="text-[10px] font-black text-muted-foreground/30 font-mono tracking-tighter uppercase">{{ feed.time }}</span>
            </div>
          </div>
        </div>

        <div class="hidden lg:flex items-center gap-4 text-muted-foreground/50 font-black text-[10px] uppercase tracking-[0.2em]">
          <a href="#" class="hover:text-primary transition-colors">Telegram</a>
          <span class="w-1 h-1 rounded-full bg-muted-foreground/20"></span>
          <a href="#" class="hover:text-primary transition-colors">Support</a>
        </div>
      </div>
    </div>

    <div class="container py-10 relative z-10">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar -->
        <aside class="hidden lg:block w-80 shrink-0 space-y-8 animate-in slide-in-from-left duration-700">
          <Card class="p-6 border-0 bg-card/50 backdrop-blur-xl shadow-xl shadow-black/5 rounded-[2rem]">
            <h3 class="font-black mb-6 uppercase text-xs tracking-[0.2em] text-muted-foreground/60 flex items-center gap-3 italic">
              <Layers class="h-5 w-5 text-primary" /> Phân Loại
            </h3>
            <div class="space-y-2">
              <button v-for="cat in categories" :key="cat.name" 
                      class="w-full flex items-center justify-between p-4 rounded-2xl text-sm font-black transition-all group border border-transparent"
                      :class="cat.active 
                        ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02] border-primary/20' 
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground hover:translate-x-1'">
                <div class="flex items-center gap-3">
                  <div class="h-8 w-8 rounded-lg flex items-center justify-center transition-colors px-0 group-hover:bg-white/20" :class="cat.active ? 'bg-white/20' : 'bg-muted text-foreground'">
                    <component :is="cat.icon" class="h-4 w-4" />
                  </div>
                  {{ cat.name }}
                </div>
                <Badge :variant="cat.active ? 'secondary' : 'outline'" class="text-[10px] px-2 py-0 border-0 h-5 min-w-[30px] justify-center">
                  {{ cat.count }}
                </Badge>
              </button>
            </div>
          </Card>

          <Card class="p-6 border-0 bg-card/50 backdrop-blur-xl shadow-xl shadow-black/5 rounded-[2rem]">
            <h3 class="font-black mb-6 uppercase text-xs tracking-[0.2em] text-muted-foreground/60 flex items-center gap-3 italic">
              <Filter class="h-5 w-5 text-primary" /> Khoảng Giá
            </h3>
            <div class="space-y-6 px-1">
              <div class="flex items-center justify-between text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                <span>0đ</span>
                <span>Max</span>
              </div>
              <Slider :default-value="[0, 100]" :max="100" :step="1" class="py-2" />
              <div class="grid grid-cols-2 gap-3">
                <div class="relative">
                  <Input type="number" placeholder="Min" class="h-11 bg-background border-0 rounded-xl pl-8 font-bold text-xs" />
                  <span class="absolute left-3 top-3.5 text-[10px] font-black text-muted-foreground">đ</span>
                </div>
                <div class="relative">
                  <Input type="number" placeholder="Max" class="h-11 bg-background border-0 rounded-xl pl-8 font-bold text-xs" />
                  <span class="absolute left-3 top-3.5 text-[10px] font-black text-muted-foreground">đ</span>
                </div>
              </div>
              <Button class="w-full font-black h-12 text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90">Áp dụng lọc</Button>
            </div>
          </Card>

          <div class="relative overflow-hidden rounded-[2rem] h-64 group cursor-pointer border shadow-xl shadow-black/5">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <Badge class="bg-primary border-0 mb-3 px-3 py-1 text-[10px] font-black tracking-widest uppercase italic animation-bounce">Hot Tool</Badge>
              <h4 class="font-black text-lg text-white leading-tight uppercase italic tracking-tighter">Auto Reg Clone <br>Max Speed 2026</h4>
            </div>
          </div>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 min-w-0 space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <!-- Hot Deals Carousel -->
          <div class="relative overflow-hidden rounded-[2.5rem] border-0 shadow-[0_20px_50px_rgba(0,0,0,0.1)] group/carousel h-[520px] md:h-[450px]">
             <div 
              class="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) h-full"
              :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
            >
              <div v-for="deal in hotDeals" :key="deal.id" class="w-full h-full flex-shrink-0 relative">
                <div :class="`absolute inset-0 bg-gradient-to-br ${deal.color}`"></div>
                <div class="absolute inset-0 backdrop-blur-[2px] opacity-30"></div>
                
                <div class="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-14 gap-8 h-full">
                  <div class="space-y-6 max-w-xl text-center md:text-left">
                    <div class="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                      <Badge class="bg-yellow-400 text-black border-0 font-black animate-pulse text-[10px] px-3 py-1 uppercase tracking-widest italic group-hover:scale-110 transition-transform">
                        ⚡ HOT DEAL HÔM NAY
                      </Badge>
                      <span class="text-[10px] font-black text-white/60 uppercase tracking-widest italic">{{ deal.category }}</span>
                    </div>

                    <h2 class="text-4xl md:text-6xl font-black tracking-tightest leading-[0.9] text-white italic uppercase drop-shadow-2xl">
                      {{ deal.title }}
                    </h2>
                    <p class="text-white/70 text-sm md:text-base font-bold leading-relaxed line-clamp-2 md:line-clamp-none">
                      {{ deal.description }}
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
                      <div class="bg-white/10 backdrop-blur-xl rounded-[1.5rem] p-4 border border-white/20 flex items-center gap-4 group cursor-pointer hover:bg-white/20 transition-all">
                        <Avatar class="h-12 w-12 border-2 border-white/30 shadow-2xl">
                          <AvatarFallback class="bg-white text-primary font-black">{{ deal.shopAvatar }}</AvatarFallback>
                        </Avatar>
                        <div class="text-left pr-4 border-r border-white/10">
                          <p class="text-[9px] font-black text-white/50 uppercase tracking-widest">Store</p>
                          <p class="font-black text-white text-sm uppercase tracking-tighter">{{ deal.shop }}</p>
                        </div>
                        <div class="text-left">
                          <p class="text-[9px] font-black text-white/50 uppercase tracking-widest">Price</p>
                          <p class="font-black text-yellow-400 text-lg tracking-tighter">{{ deal.price }}</p>
                        </div>
                      </div>
                    </div>

                    <div class="flex gap-4 justify-center md:justify-start">
                       <Button size="lg" class="bg-white text-slate-900 hover:bg-slate-100 font-black rounded-2xl px-10 h-14 shadow-2xl shadow-black/20 uppercase tracking-widest text-xs transition-transform hover:scale-105 active:scale-95">MUA NGAY</Button>
                       <Button variant="outline" size="lg" class="border-white/20 text-white bg-white/5 backdrop-blur-md rounded-2xl px-8 h-14 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors">CHI TIẾT</Button>
                    </div>
                  </div>

                  <div class="hidden lg:flex relative h-full items-center justify-center">
                    <div class="w-64 h-64 bg-white/10 backdrop-blur-3xl rounded-[3rem] border border-white/20 flex items-center justify-center rotate-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 hover:rotate-0 hover:scale-110 group-hover:animate-float">
                      <component :is="deal.icon" class="h-28 w-28 text-white drop-shadow-2xl" />
                      <div class="absolute -top-3 -right-3 h-12 w-12 rounded-2xl bg-white flex items-center justify-center shadow-xl rotate-[-15deg]">
                         <Star class="h-6 w-6 text-yellow-400 fill-amber-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
              <button v-for="(_, i) in hotDeals" :key="i" @click="activeSlide = i" 
                      class="h-2 transition-all duration-500 rounded-full"
                      :class="activeSlide === i ? 'w-12 bg-white shadow-[0_0_15px_white]' : 'w-2 bg-white/20 hover:bg-white/40'"></button>
            </div>
          </div>

          <!-- Section Heading -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
            <div class="animate-in slide-in-from-left duration-700">
              <h3 class="text-3xl font-black uppercase italic tracking-tighter flex items-center gap-3">
                KHO TÀI NGUYÊN <div class="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              </h3>
              <p class="text-muted-foreground text-sm font-bold mt-1">Hàng ngàn sản phẩm chất lượng đang chờ đón bạn.</p>
            </div>

            <div class="flex items-center gap-2 animate-in slide-in-from-right duration-700">
               <div class="relative group">
                 <Filter class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                 <Input placeholder="Tìm nhanh..." class="pl-10 h-11 border-0 bg-muted/50 rounded-xl w-60 font-bold focus-visible:ring-1 focus-visible:ring-primary/20" />
               </div>
               <Select default-value="newest">
                <SelectTrigger class="w-40 h-11 bg-muted/50 border-0 rounded-xl font-black text-xs uppercase cursor-pointer">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent class="rounded-xl border-primary/10">
                  <SelectItem value="newest">Mới Nhất</SelectItem>
                  <SelectItem value="hot">Bán Chạy</SelectItem>
                  <SelectItem value="price-asc">Giá Thấp</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <!-- Product Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <Card v-for="(product, idx) in visibleProducts" :key="product.id" 
                  class="group relative bg-card border-0 shadow-xl shadow-black/[0.02] hover:shadow-2xl hover:shadow-primary/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700"
                  :style="{ animationDelay: `${(idx % 12) * 50}ms` }">
              
              <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <CardContent class="p-8 flex flex-col h-full relative z-10">
                <div class="flex items-start justify-between mb-6">
                  <div :class="`h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-700 shadow-inner group-hover:scale-110 group-hover:rotate-6 ${product.bgIcon}`">
                    <component :is="product.icon" :class="`h-7 w-7 ${product.color}`" />
                  </div>
                  <Badge variant="outline" class="bg-primary/5 text-primary border-primary/10 text-[10px] font-black italic px-3 py-1 rounded-xl uppercase tracking-widest">
                    {{ product.tag }}
                  </Badge>
                </div>

                <div class="space-y-4 flex-1">
                  <h4 class="font-black text-lg leading-tight group-hover:text-primary transition-colors min-h-[3rem] line-clamp-2">
                    {{ product.title }}
                  </h4>
                  
                  <div class="flex flex-wrap gap-2">
                    <span v-for="b in product.badges" :key="b" class="text-[9px] font-black bg-muted/50 text-muted-foreground/60 px-2 py-0.5 rounded-lg border uppercase tracking-wider">
                      {{ b }}
                    </span>
                  </div>

                  <ul class="space-y-2.5 pt-2">
                    <li v-for="spec in product.specs" :key="spec" class="flex items-start gap-3 text-xs font-bold text-muted-foreground/70 group-hover:text-foreground transition-all">
                      <CheckCircle2 class="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0 group-hover:scale-110" />
                      {{ spec }}
                    </li>
                  </ul>
                </div>

                <div class="mt-8 pt-6 border-t border-dashed border-muted/50 flex items-center justify-between">
                  <div class="flex flex-col">
                    <span v-if="product.oldPrice" class="text-[10px] text-muted-foreground line-through font-bold">
                      {{ formatCurrency(product.oldPrice) }}
                    </span>
                    <div class="flex items-baseline gap-1">
                      <span class="text-2xl font-black text-primary tracking-tighter">
                        {{ formatCurrency(product.price).replace('₫', '') }}
                      </span>
                      <span class="text-[10px] font-black text-primary uppercase italic">vnđ</span>
                      <span v-if="product.unit" class="text-[10px] text-muted-foreground font-black uppercase ml-1 opacity-40">
                        {{ product.unit }}
                      </span>
                    </div>
                  </div>

                  <Button class="h-12 w-12 rounded-2xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all transform group-hover:rotate-[360deg] duration-700 shadow-xl shadow-primary/5 active:scale-90" size="icon">
                    <ShoppingCart class="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <!-- Loading More UI -->
          <div class="py-12 flex flex-col items-center justify-center gap-6">
             <Button v-if="displayedCount < allProducts.length"
                     @click="loadMore"
                     :disabled="isLoading"
                     variant="outline"
                     class="h-14 px-12 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] border-2 border-primary/20 hover:border-primary hover:bg-primary/5 shadow-2xl shadow-primary/5 transition-all active:scale-95 group">
                <template v-if="isLoading">
                   <div class="flex gap-1.5 mr-3">
                    <div class="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.2s]"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  ĐANG KIỂM KHO...
                </template>
                <span v-else class="flex items-center gap-3">
                  XEM THÊM SẢN PHẨM <ChevronRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
             </Button>
             
             <div v-if="displayedCount >= allProducts.length" class="flex flex-col items-center gap-2 opacity-30">
                <div class="h-px w-40 bg-gradient-to-r from-transparent via-muted-foreground to-transparent"></div>
                <p class="text-[9px] font-black uppercase tracking-[0.4em] italic">You've reached the end of the stock</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
  display: flex;
}

.pause {
  animation-play-state: paused;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(6deg); }
  50% { transform: translateY(-15px) rotate(8deg); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.tracking-tightest {
  letter-spacing: -0.05em;
}
</style>