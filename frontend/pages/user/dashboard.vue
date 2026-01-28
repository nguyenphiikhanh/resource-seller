<script setup lang="ts">
import { 
  ShoppingBag, 
  Wallet, 
  Clock, 
  ArrowUpRight, 
  Package, 
  CheckCircle2, 
  AlertTriangle,
  History,
  TrendingUp,
  CreditCard
} from 'lucide-vue-next'

definePageMeta({
  layout: 'member'
})

const stats = [
  { name: 'Đã mua', value: '12', icon: ShoppingBag, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { name: 'Số dư ví', value: '1,250,000đ', icon: Wallet, color: 'text-green-500', bg: 'bg-green-500/10' },
  { name: 'Đơn chờ xử lý', value: '0', icon: Clock, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  { name: 'Tổng nạp', value: '5,000,000đ', icon: CreditCard, color: 'text-purple-500', bg: 'bg-purple-500/10' },
]

const recentOrders = [
  { id: 'ORD-9912', product: 'Via FB Ngoại - XMDT', date: '28/01/2026', price: '120,000đ', status: 'Hoàn thành' },
  { id: 'ORD-9842', product: 'TikTok US Ads BC', date: '25/01/2026', price: '350,000đ', status: 'Hoàn thành' },
  { id: 'ORD-9711', product: 'Gmail Cổ 2012', date: '20/01/2026', price: '15,000đ', status: 'Lỗi - Đã hoàn tiền' },
]
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div>
      <h1 class="text-3xl font-extrabold tracking-tight">Chào buổi sáng, Khanh! 👋</h1>
      <p class="text-muted-foreground mt-1">Đây là tổng quan hoạt động mua hàng của bạn.</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <template v-for="stat in stats" :key="stat.name">
        <UiCard class="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-4">
            <div :class="`h-12 w-12 rounded-2xl ${stat.bg} flex items-center justify-center`">
              <component :is="stat.icon" :class="`h-6 w-6 ${stat.color}`" />
            </div>
            <div>
              <p class="text-sm font-medium text-muted-foreground">{{ stat.name }}</p>
              <p class="text-2xl font-bold tracking-tight">{{ stat.value }}</p>
            </div>
          </div>
        </UiCard>
      </template>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Recent Orders Table -->
      <UiCard class="lg:col-span-2 overflow-hidden border-0 shadow-sm">
        <div class="p-6 border-b flex justify-between items-center">
          <h2 class="font-bold text-lg flex items-center gap-2">
            <History class="h-5 w-5 text-primary" /> Đơn hàng mới mua
          </h2>
          <NuxtLink to="/user/orders" class="text-sm font-bold text-primary hover:underline">Xem tất cả</NuxtLink>
        </div>
        <UiTable>
          <UiTableHeader class="bg-muted/30">
            <UiTableRow>
              <UiTableHead>Mã đơn</UiTableHead>
              <UiTableHead>Sản phẩm</UiTableHead>
              <UiTableHead>Ngày mua</UiTableHead>
              <UiTableHead>Giá</UiTableHead>
              <UiTableHead class="text-right">Trạng thái</UiTableHead>
            </UiTableRow>
          </UiTableHeader>
          <UiTableBody>
            <UiTableRow v-for="order in recentOrders" :key="order.id" class="hover:bg-muted/10 transition-colors">
              <UiTableCell class="font-mono font-medium text-xs">{{ order.id }}</UiTableCell>
              <UiTableCell class="font-bold">{{ order.product }}</UiTableCell>
              <UiTableCell class="text-muted-foreground">{{ order.date }}</UiTableCell>
              <UiTableCell class="font-bold">{{ order.price }}</UiTableCell>
              <UiTableCell class="text-right">
                <UiBadge 
                  :variant="order.status.includes('Lỗi') ? 'destructive' : 'secondary'"
                  class="font-bold px-2 py-0.5"
                >
                  {{ order.status }}
                </UiBadge>
              </UiTableCell>
            </UiTableRow>
          </UiTableBody>
        </UiTable>
      </UiCard>

      <!-- Quick Actions / Support -->
      <div class="space-y-6">
        <UiCard class="p-6 bg-primary text-white border-0 shadow-lg shadow-primary/20 relative overflow-hidden group">
          <div class="absolute -right-8 -top-8 h-32 w-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
          <h3 class="font-bold text-xl mb-2 relative z-10">Bán hàng ngay!</h3>
          <p class="text-primary-foreground/80 text-sm mb-6 relative z-10">
            Bạn có tài nguyên MMO chất lượng? Hãy đăng ký gian hàng và bắt đầu kiếm tiền ngay hôm nay.
          </p>
          <NuxtLink to="/user/become-seller" class="relative z-10">
            <UiButton variant="secondary" class="w-full font-bold h-11">Đăng ký Seller</UiButton>
          </NuxtLink>
        </UiCard>

        <UiCard class="p-6 border-0 shadow-sm space-y-4">
          <h3 class="font-bold flex items-center gap-2">
            <AlertTriangle class="h-4 w-4 text-yellow-500" /> Cần trợ giúp?
          </h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border/50 group cursor-pointer hover:border-primary/50 transition-colors">
              <div class="h-8 w-8 rounded-lg bg-background flex items-center justify-center shrink-0 border">
                <TrendingUp class="h-4 w-4 text-primary" />
              </div>
              <div>
                <p class="text-xs font-bold">Hướng dẫn sử dụng</p>
                <p class="text-[10px] text-muted-foreground mt-0.5">Xem cách mua hàng và nạp tiền</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border/50 group cursor-pointer hover:border-primary/50 transition-colors">
              <div class="h-8 w-8 rounded-lg bg-background flex items-center justify-center shrink-0 border">
                <CheckCircle2 class="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p class="text-xs font-bold">Chính sách bảo hành</p>
                <p class="text-[10px] text-muted-foreground mt-0.5">Cam kết hỗ trợ 24/7</p>
              </div>
            </div>
          </div>
        </UiCard>
      </div>
    </div>
  </div>
</template>
