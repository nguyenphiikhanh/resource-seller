<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import {
  Facebook, Youtube, Smartphone, Code2, Server,
  Zap, ShoppingCart, Filter, Search, ChevronRight,
  ShieldCheck, Globe, Clock, Layers, Star
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

const products = [
  {
    id: 1,
    title: 'BM50 Kháng 902 Live Ads',
    type: 'facebook',
    icon: Facebook,
    badges: ['2019', 'VN', 'No Limit'],
    specs: ['Đã xác minh danh tính (XMDT)', 'Bao add thẻ không hold', 'Bảo hành login 24h'],
    price: 85000,
    oldPrice: 150000,
    tag: 'CÒN HÀNG',
    color: 'text-blue-600',
    bgIcon: 'bg-blue-100 dark:bg-blue-900/20'
  },
  {
    id: 2,
    title: 'Kênh Youtube Bật Kiếm Tiền (BKT)',
    type: 'youtube',
    icon: Youtube,
    badges: ['US', 'Content', 'Nối Gà'],
    specs: ['1000 Subs / 4000h Watch time', 'Đã nối gà (Adsense)', 'Không gậy bản quyền'],
    price: 2500000,
    oldPrice: null,
    tag: 'HOT',
    color: 'text-red-600',
    bgIcon: 'bg-red-100 dark:bg-red-900/20'
  },
  {
    id: 3,
    title: 'Source Web Gạch Thẻ Tự Động',
    type: 'code',
    icon: Code2,
    badges: ['PHP', 'Laravel', 'Auto API'],
    specs: ['Tích hợp API 30 nhà mạng', 'Bảo mật 2FA, Anti-DDoS', 'Hỗ trợ setup A-Z'],
    price: 500000,
    oldPrice: 1000000,
    tag: 'v2.5',
    color: 'text-green-600',
    bgIcon: 'bg-green-100 dark:bg-green-900/20'
  },
  {
    id: 4,
    title: 'Gmail Cổ 2015-2018 (Ngâm lâu)',
    type: 'google',
    icon: Globe,
    badges: ['Random IP', 'Trust cao'],
    specs: ['Đã bao gồm Mail khôi phục', 'Reg dịch vụ 100% ăn', 'Định dạng: User|Pass|MailKP'],
    price: 5000,
    unit: '/1 acc',
    oldPrice: null,
    tag: 'SLL',
    color: 'text-orange-500',
    bgIcon: 'bg-orange-100 dark:bg-orange-900/20'
  },
  {
    id: 5,
    title: 'Tài Khoản TikTok US Ads (BC)',
    type: 'tiktok',
    icon: Smartphone,
    badges: ['US IP', 'Business Center'],
    specs: ['Đã verify thuế US', 'Nạp tiền chạy ngay', 'Kèm hướng dẫn nuôi'],
    price: 150000,
    oldPrice: 300000,
    tag: 'HOT',
    color: 'text-black dark:text-white',
    bgIcon: 'bg-gray-200 dark:bg-gray-700'
  },
  {
    id: 6,
    title: 'Proxy IPv6 Dân Cư Xoay',
    type: 'proxy',
    icon: Server,
    badges: ['Rotating', 'Private'],
    specs: ['Speed 100Mbps+', 'Không giới hạn băng thông', 'Đổi IP sau mỗi request'],
    price: 45000,
    unit: '/tháng',
    oldPrice: null,
    tag: 'NEW',
    color: 'text-purple-600',
    bgIcon: 'bg-purple-100 dark:bg-purple-900/20'
  },
]

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

        <aside class="w-full lg:w-80 flex-shrink-0 space-y-8">

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

        <div class="flex-1 space-y-8">

          <div class="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-red-600 to-rose-800 text-white shadow-xl">
            <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div class="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

            <div class="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 gap-8">
              <div class="space-y-5 max-w-xl">
                <Badge class="bg-yellow-400 text-black hover:bg-yellow-500 border-0 font-bold animate-pulse text-sm px-3 py-1">
                  ⚡ HOT DEAL HÔM NAY
                </Badge>
                <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  BM50 & BM350 <br> Kháng Limit
                </h2>
                <p class="text-red-100 text-base md:text-lg font-medium leading-relaxed">
                  Hàng cổ 2018-2022. Đã verify mail. Thích hợp chạy hàng VPCS. Bao đổi trả trong 24h.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
                  <Button variant="secondary" size="lg" class="font-bold shadow-lg rounded-2xl px-8 text-base h-12 bg-white text-red-700 hover:bg-red-50">
                    Mua Ngay (Giảm 20%)
                  </Button>
                  <NuxtLink to="/login">
                    <Button variant="outline" size="lg" class="font-bold rounded-2xl px-8 text-base h-12 border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20">
                      Đăng nhập mua hàng
                    </Button>
                  </NuxtLink>
                </div>
              </div>
              <div class="hidden md:block relative">
                <div class="w-40 h-40 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center rotate-6 shadow-2xl transition-transform hover:rotate-0">
                  <Facebook class="h-20 w-20 text-white" />
                </div>
              </div>
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
                v-for="product in products"
                :key="product.id"
                class="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1"
            >
              <div v-if="product.tag" class="absolute top-4 right-4 z-10">
                <Badge :class="product.tag === 'HOT' ? 'bg-red-500' : 'bg-primary/10 text-primary border-primary/20'" class="text-xs font-bold px-2.5 py-1 border shadow-sm">
                  {{ product.tag }}
                </Badge>
              </div>

              <CardContent class="p-6">
                <div class="flex items-start gap-5 mb-5">
                  <div :class="`w-14 h-14 rounded-2xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-105 shadow-sm ${product.bgIcon}`">
                    <component :is="product.icon" :class="`h-7 w-7 ${product.color}`" />
                  </div>
                  <div>
                    <h4 class="font-bold text-base md:text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {{ product.title }}
                    </h4>
                    <div class="flex flex-wrap gap-2 mt-2.5">
                      <span
                          v-for="(badge, idx) in product.badges" :key="idx"
                          class="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md border font-medium"
                      >
                        {{ badge }}
                      </span>
                    </div>
                  </div>
                </div>

                <div class="bg-muted/30 rounded-xl p-4 mb-5 text-sm text-muted-foreground space-y-2 font-mono border border-dashed">
                  <p v-for="(spec, sIdx) in product.specs" :key="sIdx" class="flex items-start gap-2.5">
                    <span class="text-primary mt-0.5">•</span> {{ spec }}
                  </p>
                </div>

                <div class="flex items-end justify-between mt-auto pt-4 border-t border-dashed">
                  <div>
                    <span v-if="product.oldPrice" class="block text-xs text-muted-foreground line-through mb-0.5">
                      {{ formatCurrency(product.oldPrice) }}
                    </span>
                    <div class="flex items-baseline gap-1.5">
                      <span class="text-xl md:text-2xl font-extrabold text-primary">
                        {{ formatCurrency(product.price) }}
                      </span>
                      <span v-if="product.unit" class="text-sm text-muted-foreground font-normal">
                        {{ product.unit }}
                      </span>
                    </div>
                  </div>
                  <Button size="icon" class="rounded-xl shadow-md group-hover:bg-primary group-hover:text-white transition-all h-10 w-10">
                    <ShoppingCart class="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div class="flex justify-center mt-12">
            <div class="flex items-center gap-3">
              <Button variant="outline" size="icon" class="h-10 w-10" disabled><ChevronRight class="h-5 w-5 rotate-180" /></Button>
              <Button variant="default" size="icon" class="h-10 w-10 font-bold shadow-md text-base">1</Button>
              <Button variant="ghost" size="icon" class="h-10 w-10 text-muted-foreground text-base">2</Button>
              <Button variant="ghost" size="icon" class="h-10 w-10 text-muted-foreground text-base">3</Button>
              <Button variant="outline" size="icon" class="h-10 w-10"><ChevronRight class="h-5 w-5" /></Button>
            </div>
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