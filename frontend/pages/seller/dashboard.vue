<script setup lang="ts">
import { 
  TrendingUp, 
  ShoppingBag, 
  Users, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight,
  BarChart3,
  Package,
  CheckCircle2,
  Bell
} from 'lucide-vue-next'

definePageMeta({
  layout: 'member'
})

const stats = [
  { name: 'Doanh thu tháng', value: '45,250,000đ', change: '+12.5%', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-500/10' },
  { name: 'Đơn hàng mới', value: '128', change: '+18.2%', icon: ShoppingBag, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { name: 'Số dư khả dụng', value: '12,500,000đ', change: 'Rút ngay', icon: Wallet, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { name: 'Tỷ lệ hoàn hàng', value: '0.8%', change: '-2.1%', icon: ArrowDownRight, color: 'text-red-500', bg: 'bg-red-500/10' },
]

const recentSales = [
  { id: 'ORD-9912', product: 'Via FB Ngoại - XMDT', customer: 'khanh_mmo', price: '120,000đ', time: '2 phút trước' },
  { id: 'ORD-9910', product: 'TikTok US Ads BC', customer: 'hoang_dev', price: '350,000đ', time: '15 phút trước' },
  { id: 'ORD-9908', product: 'BM50 Kháng Limit', customer: 'marketing_pro', price: '850,000đ', time: '1 giờ trước' },
]
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-extrabold tracking-tight">Kênh Người Bán 🚀</h1>
        <p class="text-muted-foreground mt-1">Chào mừng bạn trở lại, MMO Master Store. Xem hiệu quả kinh doanh của bạn hôm nay.</p>
      </div>
      
      <div class="flex items-center gap-3">
        <Button variant="outline" class="font-bold gap-2 h-11 rounded-xl">
          <BarChart3 class="h-4 w-4" /> Báo cáo chi tiết
        </Button>
        <NuxtLink to="/seller/products/create">
          <Button class="font-bold gap-2 h-11 rounded-xl shadow-lg shadow-primary/20">
            <Package class="h-4 w-4" /> Đăng sản phẩm mới
          </Button>
        </NuxtLink>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <template v-for="stat in stats" :key="stat.name">
        <Card class="p-6 border-0 shadow-sm relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 h-16 w-16 bg-muted/50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          <div class="flex items-center justify-between mb-4 relative z-10">
            <div :class="`h-10 w-10 rounded-xl ${stat.bg} flex items-center justify-center`">
              <component :is="stat.icon" :class="`h-5 w-5 ${stat.color}`" />
            </div>
            <Badge variant="secondary" class="font-bold text-[10px] px-2 py-0">
              {{ stat.change }}
            </Badge>
          </div>
          <div class="relative z-10">
            <p class="text-xs font-bold text-muted-foreground uppercase tracking-wider">{{ stat.name }}</p>
            <p class="text-2xl font-black mt-1">{{ stat.value }}</p>
          </div>
        </Card>
      </template>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Sales Chart Mockup -->
      <Card class="lg:col-span-2 p-8 border-0 shadow-sm flex flex-col min-h-[400px]">
        <div class="flex justify-between items-center mb-10">
          <h2 class="font-bold text-lg">Biểu đồ doanh thu (7 ngày qua)</h2>
          <div class="flex gap-2">
            <div class="flex items-center gap-1.5 text-xs font-medium bg-muted px-2 py-1 rounded-md">
              <div class="h-2 w-2 rounded-full bg-primary"></div> Tuần này
            </div>
            <div class="flex items-center gap-1.5 text-xs font-medium bg-muted px-2 py-1 rounded-md opacity-50">
              <div class="h-2 w-2 rounded-full bg-muted-foreground"></div> Tuần trước
            </div>
          </div>
        </div>
        
        <!-- Simple Bar Graph Mockup -->
        <div class="flex-1 flex items-end gap-3 md:gap-6 px-4">
          <div v-for="(val, i) in [40, 65, 45, 80, 55, 95, 70]" :key="i" class="flex-1 flex flex-col items-center gap-3 group">
            <div 
              class="w-full bg-muted rounded-t-lg relative overflow-hidden transition-all duration-500 group-hover:bg-primary/20"
              :style="{ height: val + '%' }"
            >
              <div class="absolute bottom-0 left-0 w-full bg-primary transition-all duration-1000 delay-100 ease-out h-0 group-hover:h-full" :style="{ height: val + '%' }"></div>
            </div>
            <span class="text-[10px] font-bold text-muted-foreground">T{{ i+2 }}</span>
          </div>
        </div>
      </Card>

      <!-- Recent Sales List -->
      <Card class="p-6 border-0 shadow-sm space-y-6">
        <h2 class="font-bold text-lg flex items-center gap-2">
          <BarChart3 class="h-5 w-5 text-primary" /> Đơn hàng vừa bán
        </h2>
        <div class="space-y-5">
          <div v-for="sale in recentSales" :key="sale.id" class="flex items-start gap-4 p-3 rounded-2xl hover:bg-muted/50 transition-colors cursor-pointer group">
            <div class="h-10 w-10 rounded-xl bg-background border flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/50">
              <ShoppingBag class="h-5 w-5 text-muted-foreground" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-bold truncate leading-tight">{{ sale.product }}</p>
              <p class="text-xs text-muted-foreground mt-1">Khách: <span class="font-medium text-foreground">{{ sale.customer }}</span></p>
            </div>
            <div class="text-right shrink-0">
              <p class="text-sm font-black text-primary">{{ sale.price }}</p>
              <p class="text-[10px] text-muted-foreground mt-1">{{ sale.time }}</p>
            </div>
          </div>
        </div>
        <Button variant="ghost" class="w-full text-xs font-bold text-muted-foreground uppercase tracking-widest mt-4">
          Quản lý tất cả đơn hàng
        </Button>
      </Card>
    </div>
  </div>
</template>
