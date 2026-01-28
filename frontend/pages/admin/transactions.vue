<script setup lang="ts">
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Search, 
  Filter, 
  CreditCard, 
  Wallet, 
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

const transactions = [
  { id: 'TRX-1022', type: 'Nạp tiền', user: 'khanh_mmo', amount: '+1,000,000đ', method: 'VCB banking', status: 'Thành công', time: '28/01 10:15' },
  { id: 'ORD-9912', type: 'Mua hàng', user: 'duy_dev', amount: '-120,000đ', method: 'Ví hệ thống', status: 'Thành công', time: '28/01 10:12' },
  { id: 'WDR-005', type: 'Rút tiền', user: 'admin_test', amount: '-5,000,000đ', method: 'Momo', status: 'Chờ xử lý', time: '28/01 09:30' },
  { id: 'TRX-1011', type: 'Hoàn tiền', user: 'scammer_99', amount: '+15,000đ', method: 'Hệ thống hoàn', status: 'Thành công', time: '27/01 23:45' },
]
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
    <div>
      <h1 class="text-3xl font-black tracking-tight">Lịch sử giao dịch toàn sàn</h1>
      <p class="text-muted-foreground mt-1">Kiểm soát dòng tiền, nạp rút và thanh toán của toàn bộ người dùng.</p>
    </div>

    <!-- Filters -->
    <div class="flex flex-col md:flex-row gap-4 items-center bg-card p-4 rounded-2xl shadow-sm border">
      <div class="relative flex-1 w-full">
        <Search class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Tìm mã giao dịch, tên user..." class="pl-10 h-11 bg-muted/30 border-0 rounded-xl" />
      </div>
      <div class="flex gap-2">
        <Button variant="outline" class="h-11 rounded-xl gap-2 font-bold border-slate-200">
          <Filter class="h-4 w-4" /> Loại giao dịch
        </Button>
      </div>
    </div>

    <!-- Table -->
    <Card class="border-0 shadow-md overflow-hidden">
      <Table>
        <TableHeader class="bg-indigo-50 dark:bg-slate-900 font-black">
          <TableRow>
            <TableHead>Giao dịch</TableHead>
            <TableHead>Người thực hiện</TableHead>
            <TableHead>Số tiền</TableHead>
            <TableHead>Phương thức</TableHead>
            <TableHead>Thời gian</TableHead>
            <TableHead class="text-right">Trạng thái</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="t in transactions" :key="t.id" class="hover:bg-muted/5 transition-colors border-b last:border-0">
            <TableCell>
              <div class="flex items-center gap-3">
                <div :class="`h-9 w-9 rounded-lg flex items-center justify-center ${t.amount.startsWith('+') ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}`">
                  <ArrowUpRight v-if="t.amount.startsWith('+')" class="h-4 w-4" />
                  <ArrowDownRight v-else class="h-4 w-4" />
                </div>
                <div>
                   <p class="font-bold text-xs uppercase italic">{{ t.type }}</p>
                   <p class="text-[10px] font-mono text-muted-foreground">ID: {{ t.id }}</p>
                </div>
              </div>
            </TableCell>
            <TableCell class="font-bold text-indigo-600">@{{ t.user }}</TableCell>
            <TableCell class="font-black text-sm">{{ t.amount }}</TableCell>
            <TableCell class="text-xs font-medium">{{ t.method }}</TableCell>
            <TableCell class="text-[10px] font-bold text-muted-foreground">{{ t.time }}</TableCell>
            <TableCell class="text-right">
              <Badge 
                :variant="t.status === 'Thành công' ? 'secondary' : 'outline'"
                class="font-black text-[10px] px-2 py-0.5 border-0"
                :class="t.status === 'Thành công' ? 'bg-green-500/10 text-green-600' : 'bg-amber-500/10 text-amber-600'"
              >
                {{ t.status }}
              </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  </div>
</template>
