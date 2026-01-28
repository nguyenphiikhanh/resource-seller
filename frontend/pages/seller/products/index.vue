<script setup lang="ts">
import { ref } from 'vue'
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Edit3, 
  Trash2, 
  Eye, 
  Package,
  CheckCircle2,
  AlertCircle
} from 'lucide-vue-next'

definePageMeta({
  layout: 'member'
})

const products = [
  { id: 'P01', name: 'Via FB Ngoại Cổ - XMDT', price: '120,000đ', stock: 25, status: 'Đang bán', category: 'Facebook' },
  { id: 'P02', name: 'TikTok US Ads BC', price: '350,000đ', stock: 0, status: 'Hết hàng', category: 'TikTok' },
  { id: 'P03', name: 'BM50 Kháng Limit', price: '850,000đ', stock: 3, status: 'Đang bán', category: 'Facebook' },
  { id: 'P04', name: 'Source Web Gạch Thẻ Auto', price: '500,000đ', stock: 99, status: 'Chờ duyệt', category: 'Source Code' },
]
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-extrabold tracking-tight">Quản lý sản phẩm</h1>
        <p class="text-muted-foreground mt-1">Danh sách tất cả tài nguyên bạn đang kinh doanh trên sàn.</p>
      </div>
      
      <NuxtLink to="/seller/products/create">
        <UiButton class="font-bold gap-2 h-12 px-6 rounded-2xl shadow-lg shadow-primary/20">
          <Plus class="h-5 w-5" /> Thêm sản phẩm mới
        </UiButton>
      </NuxtLink>
    </div>

    <!-- Filters -->
    <div class="flex flex-col sm:flex-row gap-4 items-center bg-card p-4 rounded-2xl shadow-sm border">
      <div class="relative flex-1 w-full">
        <Search class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
        <UiInput placeholder="Tìm tên sản phẩm, mã ID..." class="pl-10 h-11 bg-muted/30 border-0 rounded-xl" />
      </div>
      <div class="flex gap-2 w-full sm:w-auto">
        <UiSelect>
          <UiSelectTrigger class="h-11 w-full sm:w-40 bg-muted/30 border-0 rounded-xl">
            <UiSelectValue placeholder="Trạng thái" />
          </UiSelectTrigger>
          <UiSelectContent>
            <UiSelectItem value="all">Tất cả</UiSelectItem>
            <UiSelectItem value="active">Đang bán</UiSelectItem>
            <UiSelectItem value="out">Hết hàng</UiSelectItem>
            <UiSelectItem value="pending">Chờ duyệt</UiSelectItem>
          </UiSelectContent>
        </UiSelect>
      </div>
    </div>

    <!-- Table -->
    <UiCard class="border-0 shadow-sm overflow-hidden">
      <UiTable>
        <UiTableHeader class="bg-muted/50">
          <UiTableRow>
            <UiTableHead>Sản phẩm</UiTableHead>
            <UiTableHead>Lĩnh vực</UiTableHead>
            <UiTableHead>Giá bán</UiTableHead>
            <UiTableHead>Tồn kho</UiTableHead>
            <UiTableHead>Trạng thái</UiTableHead>
            <UiTableHead class="text-right">Hành động</UiTableHead>
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="product in products" :key="product.id" class="hover:bg-muted/5 transition-colors">
            <UiTableCell>
              <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-lg bg-muted flex items-center justify-center border shrink-0">
                  <Package class="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p class="font-bold text-sm leading-tight">{{ product.name }}</p>
                  <p class="text-[10px] font-mono text-muted-foreground mt-1">#{{ product.id }}</p>
                </div>
              </div>
            </UiTableCell>
            <UiTableCell>
              <UiBadge variant="outline" class="text-[10px] font-bold uppercase tracking-wider">{{ product.category }}</UiBadge>
            </UiTableCell>
            <UiTableCell class="font-bold text-primary">{{ product.price }}</UiTableCell>
            <UiTableCell>
              <span :class="product.stock === 0 ? 'text-red-500 font-bold' : 'font-medium'">{{ product.stock }}</span>
            </UiTableCell>
            <UiTableCell>
              <UiBadge 
                :variant="product.status === 'Đang bán' ? 'secondary' : 'outline'"
                class="font-bold px-2 py-0.5 border-0"
                :class="{
                  'bg-green-500/10 text-green-600': product.status === 'Đang bán',
                  'bg-red-500/10 text-red-600': product.status === 'Hết hàng',
                  'bg-yellow-500/10 text-yellow-600': product.status === 'Chờ duyệt'
                }"
              >
                {{ product.status }}
              </UiBadge>
            </UiTableCell>
            <UiTableCell class="text-right">
              <UiDropdownMenu>
                <UiDropdownMenuTrigger as-child>
                  <UiButton variant="ghost" size="icon" class="h-8 w-8 rounded-full">
                    <MoreVertical class="h-4 w-4" />
                  </UiButton>
                </UiDropdownMenuTrigger>
                <UiDropdownMenuContent align="end" class="w-40">
                  <UiDropdownMenuItem class="gap-2">
                    <Edit3 class="h-4 w-4" /> Chỉnh sửa
                  </UiDropdownMenuItem>
                  <UiDropdownMenuItem class="gap-2">
                    <Eye class="h-4 w-4" /> Xem ngoài sàn
                  </UiDropdownMenuItem>
                  <UiDropdownMenuSeparator />
                  <UiDropdownMenuItem class="gap-2 text-destructive focus:bg-destructive/10">
                    <Trash2 class="h-4 w-4" /> Xóa sản phẩm
                  </UiDropdownMenuItem>
                </UiDropdownMenuContent>
              </UiDropdownMenu>
            </UiTableCell>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    </UiCard>
  </div>
</template>
