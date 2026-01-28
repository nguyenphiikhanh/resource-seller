<script setup lang="ts">
import { ref } from 'vue'
import { 
  History, 
  Search, 
  Download, 
  Key, 
  Eye, 
  ExternalLink,
  MessageSquareWarning,
  CheckCircle2,
  AlertTriangle,
  ShoppingBag
} from 'lucide-vue-next'

definePageMeta({
  layout: 'member'
})

const orders = [
  { 
    id: 'ORD-9912', 
    product: 'Via FB Ngoại - XMDT', 
    date: '28/01/2026', 
    price: '120,000đ', 
    status: 'Hoàn thành',
    items: ['10005231221|pass123|2FA_CODE|mail@example.com|passmail'],
    type: 'account'
  },
  { 
    id: 'ORD-9842', 
    product: 'TikTok US Ads BC', 
    date: '25/01/2026', 
    price: '350,000đ', 
    status: 'Hoàn thành',
    items: ['Business Center ID: 1234567890'],
    type: 'info'
  },
  { 
    id: 'ORD-9711', 
    product: 'Gmail Cổ 2012', 
    date: '20/01/2026', 
    price: '15,000đ', 
    status: 'Đã hoàn tiền',
    reason: 'Sai mật khẩu, shop không đổi kịp',
    type: 'refunded'
  },
]

const isItemModalOpen = ref(false)
const selectedOrder = ref(null)

const viewItem = (order) => {
  selectedOrder.value = order
  isItemModalOpen.value = true
}

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
  // Show toast notification normally, but we'll just alert for now
}
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-extrabold tracking-tight">Lịch sử mua hàng</h1>
        <p class="text-muted-foreground mt-1">Quản lý các tài nguyên bạn đã mua và lấy thông tin tài khoản.</p>
      </div>
      
      <div class="relative max-w-sm">
        <Search class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Tìm mã đơn hàng..." class="pl-10 h-12 bg-card border-0 shadow-sm" />
      </div>
    </div>

    <Card class="border-0 shadow-sm overflow-hidden">
      <Table>
        <TableHeader class="bg-muted/50">
          <TableRow>
            <TableHead class="w-24">Mã đơn</TableHead>
            <TableHead>Sản phẩm</TableHead>
            <TableHead>Ngày mua</TableHead>
            <TableHead>Tổng tiền</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead class="text-right">Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="order in orders" :key="order.id" class="hover:bg-muted/10 transition-colors">
            <TableCell class="font-mono text-xs font-bold">{{ order.id }}</TableCell>
            <TableCell>
              <div class="font-bold">{{ order.product }}</div>
              <div class="text-[10px] uppercase text-muted-foreground font-bold flex items-center gap-1 mt-0.5">
                <ShoppingBag class="h-3 w-3" /> MMO Master Store
              </div>
            </TableCell>
            <TableCell class="text-muted-foreground">{{ order.date }}</TableCell>
            <TableCell class="font-bold text-primary">{{ order.price }}</TableCell>
            <TableCell>
              <Badge 
                :variant="order.status === 'Hoàn thành' ? 'secondary' : 'outline'"
                class="font-bold border-0 px-2.5 py-1"
                :class="order.status === 'Hoàn thành' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'"
              >
                {{ order.status }}
              </Badge>
            </TableCell>
            <TableCell class="text-right">
              <div class="flex justify-end gap-2">
                <Button 
                  v-if="order.status === 'Hoàn thành'" 
                  variant="default" 
                  size="sm" 
                  class="h-9 gap-1.5 font-bold rounded-lg"
                  @click="viewItem(order)"
                >
                  <Key class="h-3.5 w-3.5" /> Lấy hàng
                </Button>
                <Button 
                  v-else 
                  variant="outline" 
                  size="sm" 
                  class="h-9 gap-1.5 font-bold rounded-lg border-red-500/20 text-red-600 hover:bg-red-50"
                  disabled
                >
                  Khiếu nại
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>

    <!-- Item Details Modal -->
    <Dialog v-model:open="isItemModalOpen">
      <DialogContent class="sm:max-w-[600px] p-0 overflow-hidden rounded-3xl">
        <div v-if="selectedOrder" class="animate-in zoom-in-95 duration-200">
          <div class="bg-primary p-8 text-white relative">
            <div class="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
              <Key class="h-8 w-8 text-white" />
            </div>
            <h2 class="text-2xl font-bold tracking-tight text-center">Thông tin tài nguyên</h2>
            <p class="text-center text-primary-foreground/70 text-sm mt-1">Đơn hàng: {{ selectedOrder.id }}</p>
          </div>
          
          <div class="p-8 space-y-6">
            <div>
              <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold flex items-center gap-2">
                  <CheckCircle2 class="h-4 w-4 text-green-500" /> Dữ liệu đã mua
                </h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  class="h-8 gap-1.5 text-xs font-bold"
                  @click="copyToClipboard(selectedOrder.items.join('\n'))"
                >
                  <Download class="h-3.5 w-3.5" /> Copy tất cả
                </Button>
              </div>
              
              <div class="bg-muted p-5 rounded-2xl font-mono text-sm break-all whitespace-pre-wrap border border-dashed border-muted-foreground/30 relative group">
                {{ selectedOrder.items.join('\n') }}
                <button 
                  class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background p-1.5 rounded-lg shadow-sm border"
                  title="Copy"
                  @click="copyToClipboard(selectedOrder.items.join('\n'))"
                >
                  <ExternalLink class="h-3.5 w-3.5 text-primary" />
                </button>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10 flex gap-3">
              <AlertTriangle class="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
              <div>
                <p class="text-xs text-yellow-700 font-bold">Lưu ý bảo mật:</p>
                <p class="text-[11px] text-yellow-700/80 leading-relaxed mt-1">
                  Vui lòng kiểm tra tài nguyên ngay sau khi mua. Chúng tôi chỉ bảo hành lỗi đăng nhập trong 24h. Hãy đổi mật khẩu sau khi kiểm tra xong.
                </p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 pt-4">
              <Button variant="outline" class="h-12 font-bold rounded-2xl gap-2" @click="isItemModalOpen = false">
                Đóng
              </Button>
              <Button class="h-12 font-bold rounded-2xl gap-2 bg-blue-600 hover:bg-blue-700">
                <MessageSquareWarning class="h-4 w-4" /> Báo lỗi/Khiếu nại
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>

  </div>
</template>
