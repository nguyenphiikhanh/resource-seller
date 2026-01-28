<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import {
  Facebook, Youtube, Smartphone, Code2, Server, ShoppingCart, Filter, ChevronRight,
  ShieldCheck, Globe, Layers, Star, CheckCircle2
} from 'lucide-vue-next'

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

// --- INFINITE SCROLL LOGIC ---
const pageSize = 12
const displayedCount = ref(pageSize)
const isLoading = ref(false)

const visibleProducts = computed(() => allProducts.slice(0, displayedCount.value))

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
  // Mock artificial delay
  setTimeout(() => {
    displayedCount.value += pageSize
    isLoading.value = false
  }, 800)
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
}
</script>

<template>
  <div class="bg-muted/10 min-h-screen">

    <!-- Magnificent Live Feed Bar -->
    <div class="relative h-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-primary/10 overflow-hidden shadow-sm z-40">
      <div class="container h-full flex items-center justify-between">
        <!-- Live Badge -->
        <div class="flex items-center gap-3 shrink-0">
          <div class="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-lg border border-primary/20">
            <div class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-primary text-white"></span>
            </div>
            <span class="text-[10px] font-black uppercase tracking-widest text-primary italic">Live Feed</span>
          </div>
          <div class="h-4 w-px bg-primary/20"></div>
        </div>

        <!-- Animated Content Area (Horizontal Carousel Ticker) -->
        <div class="flex-1 overflow-hidden h-full relative mx-4">
          <!-- Fade Edges -->
          <div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background/95 to-transparent z-10"></div>
          <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background/95 to-transparent z-10"></div>
          
          <div class="h-full flex items-center gap-12 whitespace-nowrap animate-horizontal-scroll pr-12">
            <!-- Quadruple the items for a long, seamless horizontal strip -->
            <div v-for="(feed, i) in [...liveFeed, ...liveFeed, ...liveFeed, ...liveFeed]" :key="i" class="flex items-center gap-4 group">
              <div class="flex items-center gap-2">
                <div class="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                <span class="text-[11px] font-bold text-muted-foreground uppercase tracking-tighter">
                  User <span class="text-foreground font-black">{{ feed.user }}</span>
                </span>
              </div>
              <div class="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-2xl border border-primary/10 shadow-sm transition-all group-hover:scale-105 group-hover:bg-primary/10 group-hover:border-primary/30">
                <span class="text-[10px] font-black text-primary/60 italic uppercase tracking-widest">{{ feed.action }}</span>
                <span class="text-xs font-black text-primary">{{ feed.item }}</span>
              </div>
              <span class="text-[10px] font-black text-muted-foreground/30 font-mono tracking-tighter">{{ feed.time }}</span>
            </div>
          </div>
        </div>

        <!-- Social/Support Links -->
        <div class="hidden lg:flex items-center gap-6 text-muted-foreground font-black text-[10px] uppercase tracking-widest">
          <a href="#" class="hover:text-primary transition-all flex items-center gap-2 group">
            <div class="h-6 w-6 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <ShieldCheck class="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary" />
            </div>
            Bảo hành
          </a>
          <a href="#" class="hover:text-primary transition-all flex items-center gap-2 group text-[#0088cc]">
            <div class="h-6 w-6 rounded-lg bg-[#0088cc]/10 flex items-center justify-center">
              <Globe class="h-3.5 w-3.5" />
            </div>
            Telegram
          </a>
        </div>
      </div>
    </div>

    <div class="container py-8 md:py-10">
      <div class="flex flex-col lg:flex-row gap-8">

        <aside class="w-full lg:w-80 shrink-0 space-y-8">

          <Card class="p-5 border-l-4 border-l-primary shadow-sm">
            <h3 class="font-bold mb-5 uppercase text-sm tracking-wider text-muted-foreground flex items-center gap-2">
              <Layers class="h-5 w-5 text-primary" /> Danh Mục
            </h3>
            <ul class="space-y-2">
              <li v-for="(cat, i) in categories" :key="i">
                <button
                    class="w-full flex items-center justify-between p-3 rounded-xl text-base font-medium transition-all duration-200"
                    :class="cat.active
                    ? 'bg-primary/10 text-primary border border-primary/20 shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'"
                >
                  <div class="flex items-center gap-3">
                    <component :is="cat.icon" class="h-5 w-5" />
                    {{ cat.name }}
                  </div>
                  <Badge variant="secondary" class="bg-background/80 text-xs px-2 py-0.5">{{ cat.count }}</Badge>
                </button>
              </li>
            </ul>
          </Card>

          <Card class="p-5 shadow-sm">
            <h3 class="font-bold mb-5 uppercase text-sm tracking-wider text-muted-foreground flex items-center gap-2">
              <Filter class="h-5 w-5 text-primary" /> Khoảng Giá
            </h3>
            <div class="space-y-6">
              <div class="flex items-center justify-between text-sm text-muted-foreground font-medium">
                <span>0đ</span>
                <span>5.000.000đ</span>
              </div>
              <Slider :default-value="[0, 100]" :max="100" :step="1" class="py-2" />
              <div class="flex gap-3">
                <Input type="number" placeholder="Min" class="h-10 text-sm bg-background" />
                <Input type="number" placeholder="Max" class="h-10 text-sm bg-background" />
              </div>
              <Button class="w-full font-bold h-10 text-base shadow-md shadow-primary/20">Áp dụng</Button>
            </div>
          </Card>

          <div class="relative overflow-hidden rounded-xl h-60 group cursor-pointer border shadow-sm">
            <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Ads"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-5 left-5 text-white">
              <Badge class="bg-green-500 hover:bg-green-600 border-0 mb-2 px-3 py-1 text-xs">New Tool</Badge>
              <h4 class="font-bold text-lg leading-tight">Auto Reg Clone <br>Max Speed 2026</h4>
            </div>
          </div>
        </aside>

        <div class="flex-1 min-w-0 space-y-8">

          <!-- Hot Deals Carousel -->
          <div class="relative overflow-hidden rounded-[2.5rem] border shadow-2xl group/carousel h-[520px] md:h-[450px]">
            <div 
              class="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) h-full"
              :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
            >
              <div 
                v-for="(deal, i) in hotDeals" 
                :key="deal.id"
                class="w-full h-full flex-shrink-0 relative"
              >
                <div :class="`absolute inset-0 bg-gradient-to-r ${deal.color} opacity-90`"></div>
                <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                
                <div class="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between p-6 md:p-12 gap-8 h-full overflow-hidden">
                  <div class="space-y-4 md:space-y-6 max-w-xl text-center md:text-left">
                    <div class="flex items-center gap-3">
                      <Badge class="bg-yellow-400 text-black hover:bg-yellow-500 border-0 font-black animate-pulse text-[10px] px-3 py-1 uppercase tracking-widest">
                        ⚡ HOT DEAL HÔM NAY
                      </Badge>
                      <div class="h-1 w-1 rounded-full bg-white/40"></div>
                      <span class="text-[10px] font-black text-white/70 uppercase tracking-widest italic">{{ deal.category }}</span>
                    </div>

                    <div class="space-y-1">
                       <h2 class="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-white italic">
                        {{ deal.title }}
                      </h2>
                      <p class="text-white/80 text-xs md:text-base font-medium leading-relaxed line-clamp-2 md:line-clamp-none">
                        {{ deal.description }}
                      </p>
                    </div>

                    <!-- Pinned Shop Info -->
                    <div class="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 w-fit mx-auto md:mx-0 group">
                      <Avatar class="h-10 w-10 md:h-12 md:w-12 border-2 border-white/30 shadow-lg shrink-0">
                        <AvatarFallback class="bg-white text-primary font-black text-xs md:text-sm">{{ deal.shopAvatar }}</AvatarFallback>
                      </Avatar>
                      <div class="text-left">
                        <div class="flex items-center gap-1.5 md:gap-2">
                           <p class="text-[8px] md:text-[10px] font-black text-white/70 leading-tight uppercase">PINNED SHOP:</p>
                           <Badge class="bg-green-500 text-[8px] h-3.5 px-1 border-0 leading-none">VERIFIED</Badge>
                        </div>
                        <p class="font-bold text-white text-sm md:text-base truncate max-w-[120px] md:max-w-none">{{ deal.shop }}</p>
                      </div>
                      <div class="h-8 md:h-10 w-px bg-white/20"></div>
                      <div class="px-1 md:px-2 text-left">
                         <p class="text-[8px] md:text-[10px] font-bold text-white/60 uppercase">GIÁ TỐT</p>
                         <p class="text-sm md:text-lg font-black text-yellow-300 tracking-tighter">{{ deal.price }}</p>
                      </div>
                    </div>

                    <div class="flex flex-row gap-3 items-center justify-center md:justify-start pt-2">
                      <Button variant="secondary" class="font-black shadow-xl rounded-xl md:rounded-2xl px-4 md:px-8 text-[11px] md:text-sm h-11 md:h-14 bg-white text-slate-900 hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shrink-0">
                        XEM SHOP
                      </Button>
                      <Button variant="outline" class="font-black rounded-xl md:rounded-2xl px-4 md:px-8 text-[11px] md:text-sm h-11 md:h-14 border-white/40 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all shrink-0">
                        CHI TIẾT
                      </Button>
                    </div>
                  </div>

                  <div class="hidden lg:block relative shrink-0">
                    <div class="w-40 h-40 md:w-48 md:h-48 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 flex items-center justify-center rotate-6 shadow-2xl transition-transform hover:rotate-0">
                      <component :is="deal.icon" class="h-20 w-20 md:h-24 md:h-24 text-white" />
                      <div class="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl rotate-[-12deg]">
                        <Star class="h-6 w-6 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Carousel UI Indicators -->
            <div class="absolute bottom-6 right-10 z-20 flex gap-2">
              <button 
                v-for="(_, i) in hotDeals" 
                :key="i"
                @click="activeSlide = i"
                class="h-1.5 transition-all duration-300 rounded-full"
                :class="activeSlide === i ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'"
              ></button>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row justify-between items-center gap-4 bg-card p-3 rounded-xl border shadow-sm">
            <div class="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-hide px-1">
              <Button variant="default" class="rounded-full px-6 shadow-md font-bold text-sm h-9">Tất cả</Button>
              <Button variant="ghost" class="rounded-full px-6 text-muted-foreground hover:bg-blue-50 hover:text-blue-600 text-sm h-9">Facebook</Button>
              <Button variant="ghost" class="rounded-full px-6 text-muted-foreground hover:bg-red-50 hover:text-red-600 text-sm h-9">Youtube</Button>
              <Button variant="ghost" class="rounded-full px-6 text-muted-foreground hover:bg-green-50 hover:text-green-600 text-sm h-9">Tools</Button>
            </div>

            <div class="flex items-center gap-3 shrink-0">
              <span class="text-sm font-medium text-muted-foreground">Sắp xếp:</span>
              <Select default-value="newest">
                <SelectTrigger class="w-[160px] h-10 text-sm bg-muted/50 border-0">
                  <SelectValue placeholder="Chọn" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Mới nhất</SelectItem>
                  <SelectItem value="price-asc">Giá thấp -> Cao</SelectItem>
                  <SelectItem value="best-seller">Bán chạy nhất</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <Card
                v-for="product in visibleProducts"
                :key="product.id"
                class="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 flex flex-col h-[460px]"
            >
              <!-- Decorative background element -->
              <div class="absolute -right-8 -top-8 h-32 w-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>

              <div v-if="product.tag" class="absolute top-4 right-4 z-10">
                <Badge :class="product.tag === 'HOT' ? 'bg-primary text-white' : 'bg-background/80 text-foreground backdrop-blur-md border-primary/20'" class="text-[10px] font-black tracking-widest px-3 py-1 border shadow-sm uppercase">
                  {{ product.tag }}
                </Badge>
              </div>

              <CardContent class="p-0 flex flex-col h-full">
                <!-- Top Section: Icon & Category -->
                <div class="p-6 pb-4">
                  <div class="flex items-center gap-4 mb-4">
                    <div :class="`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-sm ${product.bgIcon}`">
                      <component :is="product.icon" :class="`h-6 w-6 ${product.color}`" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-1.5 mb-1">
                        <Star class="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span class="text-[10px] font-black text-muted-foreground uppercase tracking-tighter">4.9 (1.2k bán)</span>
                      </div>
                      <h4 class="font-black text-base leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem]">
                        {{ product.title }}
                      </h4>
                    </div>
                  </div>

                  <!-- Badges -->
                  <div class="flex flex-wrap gap-1.5 h-7 overflow-hidden">
                    <span
                        v-for="(badge, idx) in product.badges" :key="idx"
                        class="text-[9px] font-black bg-muted/50 text-muted-foreground px-2 py-0.5 rounded-lg border uppercase tracking-wider"
                    >
                      {{ badge }}
                    </span>
                  </div>
                </div>

                <!-- Specs Section -->
                <div class="px-6 flex-1">
                  <div class="bg-muted/20 rounded-2xl p-4 text-[11px] text-muted-foreground space-y-2 border border-dashed border-primary/5 h-[120px] overflow-hidden">
                    <p v-for="(spec, sIdx) in product.specs" :key="sIdx" class="flex items-start gap-3 leading-snug">
                       <CheckCircle2 class="h-3.5 w-3.5 text-primary/60 mt-0.5 shrink-0" />
                       <span class="line-clamp-2 italic">{{ spec }}</span>
                    </p>
                  </div>
                </div>

                <!-- Footer: Price & Buy Action -->
                <div class="p-6 pt-4 mt-auto">
                  <div class="flex items-center justify-between gap-4">
                    <div class="flex flex-col">
                      <span v-if="product.oldPrice" class="text-[10px] text-muted-foreground line-through font-bold">
                        {{ formatCurrency(product.oldPrice) }}
                      </span>
                      <div class="flex items-baseline gap-1">
                        <span class="text-xl font-black text-primary tracking-tighter">
                          {{ formatCurrency(product.price).replace('₫', '') }}
                        </span>
                        <span class="text-[10px] font-black text-primary uppercase">vnđ</span>
                        <span v-if="product.unit" class="text-[10px] text-muted-foreground font-black uppercase ml-1">
                          {{ product.unit }}
                        </span>
                      </div>
                    </div>
                    
                    <Button class="rounded-xl px-5 h-11 font-black shadow-lg shadow-primary/20 gap-2 overflow-hidden relative group/btn">
                      <div class="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                      <ShoppingCart class="h-4 w-4 relative z-10" />
                      <span class="text-xs relative z-10">MUA</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <!-- Load More Button -->
          <div class="flex flex-col items-center justify-center py-12 gap-4">
            <Button 
              v-if="displayedCount < allProducts.length"
              @click="loadMore"
              :disabled="isLoading"
              variant="outline"
              class="h-12 px-10 rounded-2xl font-black text-sm uppercase tracking-widest border-2 border-primary/20 hover:border-primary hover:bg-primary/5 shadow-lg shadow-primary/5 gap-3 transition-all active:scale-95"
            >
              <template v-if="isLoading">
                <div class="flex gap-1">
                  <div class="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></div>
                  <div class="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
                  <div class="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
                </div>
                <span>Đang tải...</span>
              </template>
              <template v-else>
                <span>Xem thêm sản phẩm</span>
                <ChevronRight class="h-4 w-4 rotate-90" />
              </template>
            </Button>
            
            <p v-if="displayedCount >= allProducts.length" class="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground italic">
              Bạn đã xem hết 100 sản phẩm
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animation cho Live Feed */
@keyframes horizontalScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-horizontal-scroll {
  animation: horizontalScroll 40s linear infinite;
  display: flex;
  width: max-content;
}

.animate-horizontal-scroll:hover {
  animation-play-state: paused;
}
</style>