<script setup lang="ts">
import { ref } from 'vue'
import { 
  History, 
  Search, 
  TrendingUp, 
  User, 
  ShoppingBag, 
  MessageCircle, 
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  MoreVertical,
  Filter
} from 'lucide-vue-next'

definePageMeta({
  layout: 'member'
})

const orders = [
  { id: 'ORD-9912', product: 'Via FB Ngoại - XMDT', customer: 'khanh_mmo', price: '120,000đ', time: '28/01/2026 10:15', status: 'Hoàn thành' },
  { id: 'ORD-9910', product: 'TikTok US Ads BC', customer: 'hoang_dev', price: '350,000đ', time: '28/01/2026 09:45', status: 'Hoàn thành' },
  { id: 'ORD-9905', product: 'BM50 Kháng Limit', customer: 'admin_test', price: '850,000đ', time: '27/01/2026 22:30', status: 'Khiếu nại' },
  { id: 'ORD-9888', product: 'Gmail Cổ 2012', customer: 'mmo_newbie', price: '15,000đ', time: '27/01/2026 18:12', status: 'Đã hoàn tiền' },
]
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-extrabold tracking-tight">Quản lý đơn hàng bán</h1>
        <p class="text-muted-foreground mt-1 text-sm font-medium">Theo dõi doanh thu và xử lý khiếu nại từ khách hàng.</p>
      </div>
      
      <div class="flex items-center gap-3">
        <UiButton variant="outline" class="font-bold gap-2 h-11 rounded-xl">
          <TrendingUp class="h-4 w-4" /> Thống kê bán hàng
        </UiButton>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex flex-col lg:flex-row gap-4 items-center bg-card p-4 rounded-2xl shadow-sm border">
      <div class="relative flex-1 w-full">
        <Search class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
        <UiInput placeholder="Tìm ID đơn hàng, tên khách hàng..." class="pl-10 h-11 bg-muted/30 border-0 rounded-xl" />
      </div>
      <div class="flex gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
        <UiButton variant="outline" class="h-10 rounded-xl gap-2 text-xs font-bold border-muted-foreground/20">
          <Filter class="h-3.5 w-3.5" /> Bộ lọc
        </UiButton>
        <UiSelect>
          <UiSelectTrigger class="h-10 w-40 bg-muted/30 border-0 rounded-xl text-xs font-bold">
            <UiSelectValue placeholder="Tất cả trạng thái" />
          </UiSelectTrigger>
          <UiSelectContent>
            <UiSelectItem value="all">Tất cả</UiSelectItem>
            <UiSelectItem value="success">Hoàn thành</UiSelectItem>
            <UiSelectItem value="dispute">Khiếu nại</UiSelectItem>
            <UiSelectItem value="refund">Đã hoàn tiền</UiSelectItem>
          </UiSelectContent>
        </UiSelect>
      </div>
    </div>

    <!-- Table -->
    <UiCard class="border-0 shadow-sm overflow-hidden">
      <UiTable>
        <UiTableHeader class="bg-muted/50">
          <UiTableRow>
            <UiTableHead>Thông tin đơn hàng</UiTableHead>
            <UiTableHead>Khách hàng</UiTableHead>
            <UiTableHead>Giá bán</UiTableHead>
            <UiTableHead>Thời gian</UiTableHead>
            <UiTableHead>Trạng thái</UiTableHead>
            <UiTableHead class="text-right">Thao tác</UiTableHead>
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="order in orders" :key="order.id" class="hover:bg-muted/5 transition-colors">
            <UiTableCell>
              <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 shrink-0">
                  <ShoppingBag class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p class="font-bold text-sm leading-tight">{{ order.product }}</p>
                  <p class="text-[10px] font-mono text-muted-foreground mt-1">#{{ order.id }}</p>
                </div>
              </div>
            </UiTableCell>
            <UiTableCell>
              <div class="flex items-center gap-2">
                <User class="h-3.5 w-3.5 text-muted-foreground" />
                <span class="text-sm font-medium">{{ order.customer }}</span>
              </div>
            </UiTableCell>
            <UiTableCell class="font-bold text-primary">{{ order.price }}</UiTableCell>
            <UiTableCell class="text-xs text-muted-foreground">{{ order.time }}</UiTableCell>
            <UiTableCell>
              <UiBadge 
                :variant="order.status === 'Hoàn thành' ? 'secondary' : 'outline'"
                class="font-bold px-2.5 py-1 border-0"
                :class="{
                  'bg-green-500/10 text-green-600': order.status === 'Hoàn thành',
                  'bg-yellow-500/10 text-yellow-600': order.status === 'Khiếu nại',
                  'bg-red-500/10 text-red-600': order.status === 'Đã hoàn tiền',
                }"
              >
                <AlertTriangle v-if="order.status === 'Khiếu nại'" class="h-3 w-3 mr-1" />
                {{ order.status }}
              </UiBadge>
            </UiTableCell>
            <UiTableCell class="text-right">
              <div class="flex justify-end gap-2">
                <UiButton v-if="order.status === 'Khiếu nại'" variant="default" size="sm" class="h-8 gap-1 text-[10px] font-bold bg-primary hover:bg-primary/90 rounded-lg">
                  <MessageCircle class="h-3 w-3" /> Phản hồi
                </UiButton>
                <UiButton v-if="order.status === 'Khiếu nại'" variant="outline" size="sm" class="h-8 gap-1 text-[10px] font-bold border-red-500/20 text-red-600 hover:bg-red-50 rounded-lg">
                  <RotateCcw class="h-3 w-3" /> Hoàn tiền
                </UiButton>
                <UiButton variant="ghost" size="icon" class="h-8 w-8 rounded-full">
                  <MoreVertical class="h-4 w-4" />
                </UiButton>
              </div>
            </UiTableCell>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    </UiCard>

    <!-- Support Help -->
    <UiCard class="p-6 bg-muted/50 border-2 border-dashed flex flex-col items-center text-center">
      <div class="h-10 w-10 bg-background rounded-full flex items-center justify-center mb-3 border shadow-sm">
        <Info class="h-5 w-5 text-primary" />
      </div>
      <h3 class="font-bold text-base mb-1">Quy định xử lý khiếu nại</h3>
      <p class="text-xs text-muted-foreground max-w-xl">
        Người bán có 24h để phản hồi khiếu nại của khách hàng. Sau 24h nếu không phản hồi, hệ thống sẽ <b>tự động hoàn tiền</b> cho người mua. Hãy thường xuyên kiểm tra thông báo.
      </p>
    </UiCard>
  </div>
</template>
