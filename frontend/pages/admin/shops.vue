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
        <Input placeholder="Tìm tên shop, chủ sở hữu..." class="pl-10 h-11 bg-muted/30 border-0 rounded-xl" />
      </div>
      <div class="flex gap-2">
        <Select>
          <SelectTrigger class="h-11 w-40 bg-muted/30 border-0 rounded-xl font-bold">
            <SelectValue placeholder="Trạng thái" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả</SelectItem>
            <SelectItem value="active">Hoạt động</SelectItem>
            <SelectItem value="pending">Chờ duyệt</SelectItem>
            <SelectItem value="banned">Đã khóa</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    <!-- Table -->
    <Card class="border-0 shadow-md overflow-hidden">
      <Table>
        <TableHeader class="bg-indigo-50 dark:bg-slate-900">
          <TableRow>
            <TableHead>Gian hàng</TableHead>
            <TableHead>Chủ sở hữu</TableHead>
            <TableHead>Sản phẩm</TableHead>
            <TableHead>Đánh giá</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead class="text-right">Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="shop in shops" :key="shop.id" class="hover:bg-muted/5 transition-colors border-b last:border-0">
            <TableCell>
              <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-xl bg-muted flex items-center justify-center border shrink-0">
                   <Store class="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p class="font-bold text-sm leading-tight">{{ shop.name }}</p>
                  <p class="text-[10px] text-muted-foreground mt-0.5">Ngày tham gia: {{ shop.joinDate }}</p>
                </div>
              </div>
            </TableCell>
            <div class="flex items-center self-center h-full pt-4">
               <span class="text-sm font-bold text-indigo-600">@{{ shop.owner }}</span>
            </div>
            <TableCell class="font-bold">{{ shop.products }}</TableCell>
            <TableCell>
              <div class="flex items-center gap-1">
                <Star class="h-3 w-3 fill-amber-400 text-amber-400" />
                <span class="text-xs font-bold">{{ shop.rating || 'N/A' }}</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge 
                :variant="shop.status === 'Hoạt động' ? 'secondary' : 'outline'"
                class="font-black text-[10px] px-2 py-0.5 border-0"
                :class="shop.status === 'Hoạt động' ? 'bg-green-500/10 text-green-600' : 'bg-amber-500/10 text-amber-600'"
              >
                {{ shop.status }}
              </Badge>
            </TableCell>
            <TableCell class="text-right">
              <div class="flex justify-end gap-2">
                <Button variant="ghost" size="icon" class="h-8 w-8 rounded-full">
                  <ExternalLink class="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" class="h-8 w-8 rounded-full text-red-500">
                  <Ban class="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  </div>
</template>
