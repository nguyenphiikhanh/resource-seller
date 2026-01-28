<script setup lang="ts">
import { ref } from 'vue'
import { 
  CheckCircle2, 
  XCircle, 
  Eye, 
  Search, 
  Clock, 
  Store, 
  User, 
  ShieldCheck,
  AlertTriangle,
  ArrowRight
} from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

const requests = [
  { 
    id: 'REQ-01', 
    shopName: 'MMO Master Store', 
    user: 'khanh_mmo', 
    category: 'Facebook Ads', 
    date: '28/01/2026', 
    experience: 'Kinh nghiệm 5 năm chạy ads, nguồn hàng ổn định từ agency ngoại.',
    status: 'Chờ duyệt' 
  },
  { 
    id: 'REQ-02', 
    shopName: 'Account Pro', 
    user: 'duy_dev', 
    category: 'Source Code', 
    date: '27/01/2026', 
    experience: 'Developer chuyên thiết kế web gạch thẻ, auto thanh toán. Cam kết bảo hành 12 tháng.',
    status: 'Đã duyệt' 
  },
]

const isModalOpen = ref(false)
const selectedRequest = ref(null)

const viewRequest = (req) => {
  selectedRequest.value = req
  isModalOpen.value = true
}
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-black tracking-tight">Yêu cầu mở gian hàng</h1>
        <p class="text-muted-foreground mt-1">Duyệt hoặc từ chối các yêu cầu trở thành Seller từ người dùng.</p>
      </div>
      
      <div class="flex gap-2 bg-muted p-1 rounded-xl">
        <button class="px-4 py-2 text-xs font-bold rounded-lg bg-background shadow-sm text-primary">Đang chờ (12)</button>
        <button class="px-4 py-2 text-xs font-bold rounded-lg text-muted-foreground hover:bg-background/50">Đã duyệt</button>
        <button class="px-4 py-2 text-xs font-bold rounded-lg text-muted-foreground hover:bg-background/50">Từ chối</button>
      </div>
    </div>

    <Card class="border-0 shadow-md overflow-hidden">
      <Table>
        <TableHeader class="bg-primary/5 dark:bg-slate-900 border-b">
          <TableRow>
            <TableHead>Người đăng ký</TableHead>
            <TableHead>Gian hàng dự kiến</TableHead>
            <TableHead>Lĩnh vực</TableHead>
            <TableHead>Ngày gửi</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead class="text-right">Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="req in requests" :key="req.id" class="hover:bg-muted/5 transition-colors border-b last:border-0">
            <TableCell>
              <div class="flex items-center gap-3">
                <Avatar class="h-8 w-8 border">
                  <AvatarFallback class="bg-primary/10 text-primary text-[10px] font-black">{{ req.user.substring(0, 2).toUpperCase() }}</AvatarFallback>
                </Avatar>
                <div>
                  <p class="font-bold text-sm leading-tight text-slate-800 dark:text-slate-100">{{ req.user }}</p>
                  <p class="text-[10px] text-muted-foreground mt-0.5">ID: 102{{ req.id.split('-')[1] }}</p>
                </div>
              </div>
            </TableCell>
            <TableCell class="font-bold text-sm">{{ req.shopName }}</TableCell>
            <TableCell>
              <Badge variant="outline" class="text-[10px] font-bold border-primary/20 text-primary/80 bg-primary/5">{{ req.category }}</Badge>
            </TableCell>
            <TableCell class="text-xs text-muted-foreground font-medium">{{ req.date }}</TableCell>
            <TableCell>
              <Badge 
                :variant="req.status === 'Chờ duyệt' ? 'secondary' : 'outline'"
                class="font-black px-2 py-0.5 border-0"
                :class="req.status === 'Chờ duyệt' ? 'bg-amber-500/10 text-amber-600' : 'bg-green-500/10 text-green-600'"
              >
                {{ req.status }}
              </Badge>
            </TableCell>
            <TableCell class="text-right">
              <Button variant="ghost" size="sm" class="h-9 gap-1.5 font-black text-primary hover:bg-primary/5 rounded-lg" @click="viewRequest(req)">
                <Eye class="h-4 w-4" /> Chi tiết
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>

    <!-- Request Details Modal -->
    <Dialog v-model:open="isModalOpen">
      <DialogContent class="sm:max-w-[600px] p-0 overflow-hidden rounded-3xl border-0 shadow-2xl">
        <div v-if="selectedRequest" class="animate-in zoom-in-95 duration-200">
          <div class="bg-primary p-8 text-white relative">
            <div class="absolute right-0 top-0 h-full w-40 bg-white/5 skew-x-[-20deg] translate-x-10"></div>
            <div class="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30 shadow-lg">
              <Store class="h-8 w-8 text-white" />
            </div>
            <h2 class="text-2xl font-black tracking-tight text-center">Xác minh yêu cầu Seller</h2>
            <p class="text-center text-white/70 text-sm mt-1">Yêu cầu ID: {{ selectedRequest.id }}</p>
          </div>
          
          <div class="p-8 space-y-6">
            <div class="grid grid-cols-2 gap-6">
              <div class="space-y-1">
                <p class="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Tên gian hàng</p>
                <p class="font-bold text-slate-800 dark:text-slate-100">{{ selectedRequest.shopName }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Chủ sở hữu</p>
                <p class="font-bold text-slate-800 dark:text-slate-100">@{{ selectedRequest.user }}</p>
              </div>
            </div>

            <div class="space-y-3">
              <p class="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Mô tả kinh nghiệm / Cam kết</p>
              <div class="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 italic text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                "{{ selectedRequest.experience }}"
              </div>
            </div>

            <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 flex gap-3">
              <AlertTriangle class="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p class="text-xs text-amber-700 font-black uppercase tracking-tighter">Lưu ý rủi ro:</p>
                <p class="text-[11px] text-amber-700/80 leading-relaxed mt-1">
                   Hãy kiểm tra <b>lịch sử mua hàng</b> và <b>số điện thoại</b> của người dùng trước khi duyệt. Seller mới nên bị giới hạn số lượng sản phẩm đăng bán.
                </p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 pt-4">
              <Button variant="outline" class="h-14 font-black rounded-2xl gap-2 border-slate-200 text-slate-600 hover:bg-slate-50">
                <XCircle class="h-5 w-5 text-red-500" /> Từ chối
              </Button>
              <Button class="h-14 font-black rounded-2xl gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                <CheckCircle2 class="h-5 w-5" /> Chấp nhận
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>
