<script setup lang="ts">
import { ref } from 'vue'
import { 
  Wallet, 
  CreditCard, 
  ArrowUpCircle, 
  History, 
  TrendingUp, 
  ChevronRight,
  Info,
  CheckCircle2
} from 'lucide-vue-next'

definePageMeta({
  layout: 'member'
})

const balance = ref('1,250,000đ')

const paymentMethods = [
  { id: 'bank', name: 'Ngân hàng (Vietcombank)', icon: CreditCard, description: 'Nạp qua quét mã QR, tự động 24/7' },
  { id: 'momo', name: 'Ví MoMo', icon: CreditCard, description: 'Nạp qua ví MoMo, xử lý trong 1 phút' },
  { id: 'crypto', name: 'Crypto (USDT)', icon: CreditCard, description: 'Nạp qua mạng BSC (BEP20)' },
]

const recentTransactions = [
  { id: 'TRX-1022', description: 'Nạp tiền qua VCB', amount: '+1,000,000đ', date: '28/01/2026', status: 'Thành công' },
  { id: 'TRX-1011', description: 'Thanh toán đơn ORD-9912', amount: '-120,000đ', date: '28/01/2026', status: 'Thành công' },
  { id: 'TRX-0988', description: 'Nạp tiền qua MoMo', amount: '+500,000đ', date: '25/01/2026', status: 'Thành công' },
]

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
}
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h1 class="text-3xl font-extrabold tracking-tight">Ví tiền của tôi</h1>
        <p class="text-muted-foreground mt-1">Quản lý số dư và lịch sử giao dịch nạp/rút.</p>
      </div>
      
      <div class="bg-primary p-6 rounded-2xl text-white shadow-xl shadow-primary/20 flex items-center gap-6 min-w-[300px]">
        <div class="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center border border-white/30">
          <Wallet class="h-6 w-6" />
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">Số dư khả dụng</p>
          <p class="text-3xl font-black">{{ balance }}</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Top-up Methods -->
      <div class="lg:col-span-2 space-y-6">
        <h2 class="text-xl font-bold flex items-center gap-2">
          <ArrowUpCircle class="h-5 w-5 text-primary" /> Nạp tiền vào tài khoản
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <template v-for="method in paymentMethods" :key="method.id">
            <Card class="p-5 border-2 border-transparent hover:border-primary/30 transition-all cursor-pointer group bg-card shadow-sm">
              <div class="flex items-start gap-4">
                <div class="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                  <component :is="method.icon" class="h-5 w-5" />
                </div>
                <div class="flex-1">
                  <h3 class="font-bold text-base leading-tight">{{ method.name }}</h3>
                  <p class="text-xs text-muted-foreground mt-1 leading-relaxed">{{ method.description }}</p>
                </div>
                <ChevronRight class="h-5 w-5 text-muted-foreground self-center opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Card>
          </template>
        </div>

        <Card class="p-8 border-dashed border-2 bg-muted/30 flex flex-col items-center text-center">
          <div class="h-12 w-12 bg-background rounded-full flex items-center justify-center mb-4 border shadow-sm">
            <Info class="h-6 w-6 text-primary" />
          </div>
          <h3 class="font-bold text-lg mb-2">QUY ĐỊNH NẠP TIỀN</h3>
          <ul class="text-sm text-muted-foreground space-y-2 max-w-md">
            <li class="flex items-center justify-center gap-2"><CheckCircle2 class="h-4 w-4 text-green-500" /> Hệ thống nạp tự động qua QR Code.</li>
            <li class="flex items-center justify-center gap-2"><CheckCircle2 class="h-4 w-4 text-green-500" /> Thời gian xử lý trung bình: 10 - 30 giây.</li>
            <li class="flex items-center justify-center gap-2"><CheckCircle2 class="h-4 w-4 text-green-500" /> Tỷ giá: 1 VNĐ = 1 điểm trong hệ thống.</li>
          </ul>
        </Card>
      </div>

      <!-- Transaction History (Partial) -->
      <div class="space-y-6">
        <h2 class="text-xl font-bold flex items-center gap-2">
          <History class="h-5 w-5 text-primary" /> Giao dịch gần đây
        </h2>
        
        <Card class="p-2 border-0 shadow-sm overflow-hidden">
          <div class="space-y-1">
            <div v-for="trx in recentTransactions" :key="trx.id" class="p-4 flex items-center justify-between hover:bg-muted/30 rounded-xl transition-colors">
              <div class="flex items-center gap-3">
                <div :class="`h-8 w-8 rounded-lg flex items-center justify-center ${trx.amount.startsWith('+') ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}`">
                  <TrendingUp v-if="trx.amount.startsWith('+')" class="h-4 w-4" />
                  <TrendingUp v-else class="h-4 w-4 rotate-180" />
                </div>
                <div>
                  <p class="text-sm font-bold leading-none">{{ trx.description }}</p>
                  <p class="text-[10px] text-muted-foreground mt-1">{{ trx.date }}</p>
                </div>
              </div>
              <div class="text-right">
                <p :class="`text-sm font-bold ${trx.amount.startsWith('+') ? 'text-green-600' : 'text-foreground'}`">{{ trx.amount }}</p>
                <p class="text-[10px] text-muted-foreground">ID: {{ trx.id }}</p>
              </div>
            </div>
          </div>
          <div class="p-4 border-t">
            <Button variant="ghost" class="w-full text-xs font-bold text-muted-foreground uppercase tracking-widest h-8">
              Xem toàn bộ lịch sử
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>
