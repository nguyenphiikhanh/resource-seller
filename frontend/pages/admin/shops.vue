<script setup lang="ts">
import { 
  Store, 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  Ban, 
  CheckCircle2, 
  Star,
  ShoppingBag,
  ExternalLink
} from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

const shops = [
  { id: 'S01', name: 'MMO Master Store', owner: 'khanh_mmo', products: 24, rating: 4.8, status: 'Hoạt động', joinDate: '20/01/2026' },
  { id: 'S02', name: 'Account Pro', owner: 'duy_dev', products: 12, rating: 4.5, status: 'Hoạt động', joinDate: '22/01/2026' },
  { id: 'S03', name: 'Cheap Assets', owner: 'mmo_newbie', products: 5, rating: 0, status: 'Chờ duyệt', joinDate: '28/01/2026' },
]
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-black tracking-tight">Quản lý gian hàng</h1>
        <p class="text-muted-foreground mt-1">Theo dõi hoạt động, doanh số và trạng thái của các Seller trên nền tảng.</p>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex flex-col md:flex-row gap-4 items-center bg-card p-4 rounded-2xl shadow-sm border">
      <div class="relative flex-1 w-full">
        <Search class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
        <UiInput placeholder="Tìm tên shop, chủ sở hữu..." class="pl-10 h-11 bg-muted/30 border-0 rounded-xl" />
      </div>
      <div class="flex gap-2">
        <UiSelect>
          <UiSelectTrigger class="h-11 w-40 bg-muted/30 border-0 rounded-xl font-bold">
            <UiSelectValue placeholder="Trạng thái" />
          </UiSelectTrigger>
          <UiSelectContent>
            <UiSelectItem value="all">Tất cả</UiSelectItem>
            <UiSelectItem value="active">Hoạt động</UiSelectItem>
            <UiSelectItem value="pending">Chờ duyệt</UiSelectItem>
            <UiSelectItem value="banned">Đã khóa</UiSelectItem>
          </UiSelectContent>
        </UiSelect>
      </div>
    </div>

    <!-- Table -->
    <UiCard class="border-0 shadow-md overflow-hidden">
      <UiTable>
        <UiTableHeader class="bg-indigo-50 dark:bg-slate-900">
          <UiTableRow>
            <UiTableHead>Gian hàng</UiTableHead>
            <UiTableHead>Chủ sở hữu</UiTableHead>
            <UiTableHead>Sản phẩm</UiTableHead>
            <UiTableHead>Đánh giá</UiTableHead>
            <UiTableHead>Trạng thái</UiTableHead>
            <UiTableHead class="text-right">Hành động</UiTableHead>
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="shop in shops" :key="shop.id" class="hover:bg-muted/5 transition-colors border-b last:border-0">
            <UiTableCell>
              <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-xl bg-muted flex items-center justify-center border shrink-0">
                   <Store class="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p class="font-bold text-sm leading-tight">{{ shop.name }}</p>
                  <p class="text-[10px] text-muted-foreground mt-0.5">Ngày tham gia: {{ shop.joinDate }}</p>
                </div>
              </div>
            </UiTableCell>
            <div class="flex items-center self-center h-full pt-4">
               <span class="text-sm font-bold text-indigo-600">@{{ shop.owner }}</span>
            </div>
            <UiTableCell class="font-bold">{{ shop.products }}</UiTableCell>
            <UiTableCell>
              <div class="flex items-center gap-1">
                <Star class="h-3 w-3 fill-amber-400 text-amber-400" />
                <span class="text-xs font-bold">{{ shop.rating || 'N/A' }}</span>
              </div>
            </UiTableCell>
            <UiTableCell>
              <UiBadge 
                :variant="shop.status === 'Hoạt động' ? 'secondary' : 'outline'"
                class="font-black text-[10px] px-2 py-0.5 border-0"
                :class="shop.status === 'Hoạt động' ? 'bg-green-500/10 text-green-600' : 'bg-amber-500/10 text-amber-600'"
              >
                {{ shop.status }}
              </UiBadge>
            </UiTableCell>
            <UiTableCell class="text-right">
              <div class="flex justify-end gap-2">
                <UiButton variant="ghost" size="icon" class="h-8 w-8 rounded-full">
                  <ExternalLink class="h-4 w-4" />
                </UiButton>
                <UiButton variant="ghost" size="icon" class="h-8 w-8 rounded-full text-red-500">
                  <Ban class="h-4 w-4" />
                </UiButton>
              </div>
            </UiTableCell>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    </UiCard>
  </div>
</template>
