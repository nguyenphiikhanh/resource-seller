<script setup lang="ts">
import { 
  TrendingUp, 
  Users, 
  Store, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownRight,
  ShieldCheck,
  AlertCircle,
  BarChart3,
  Globe,
  Zap,
  Clock
} from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

const stats = [
  { name: 'Phí sàn thu được', value: '150,250,000đ', change: '+15.2%', icon: CreditCard, color: 'text-primary', bg: 'bg-primary/10' },
  { name: 'Tổng người dùng', value: '5,280', change: '+250 tuần này', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { name: 'Gian hàng mới', value: '12', change: '6 đang chờ duyệt', icon: Store, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { name: 'Giao dịch lỗi', value: '3', change: '-2.1%', icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-500/10' },
]

const recentActions = [
  { user: 'Admin Khanh', action: 'Duyệt gian hàng', target: 'MMO Master Store', time: '5 phút trước' },
  { user: 'Hệ thống', action: 'Tự động hoàn tiền đơn', target: '#ORD-9888', time: '12 phút trước' },
  { user: 'Admin Duy', action: 'Khóa người dùng', target: 'scammer_99', time: '1 giờ trước' },
]
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-black tracking-tight flex items-center gap-3">
          Admin Dashboard <div class="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
        </h1>
        <p class="text-muted-foreground mt-1">Tổng quan toàn bộ hệ thống và chỉ số kinh doanh sàn.</p>
      </div>
      
      <div class="flex items-center gap-3">
        <Button class="bg-primary hover:bg-primary/90 text-white font-bold gap-2 h-11 rounded-xl shadow-lg shadow-primary/20">
          <Zap class="h-4 w-4" /> Reset Cache hệ thống
        </Button>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <template v-for="stat in stats" :key="stat.name">
        <Card class="p-6 border-0 shadow-md relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
          <div class="absolute -right-6 -top-6 h-20 w-20 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          <div class="flex items-center justify-between mb-4 relative z-10">
            <div :class="`h-12 w-12 rounded-2xl ${stat.bg} flex items-center justify-center border border-primary/5`">
              <component :is="stat.icon" :class="`h-6 w-6 ${stat.color}`" />
            </div>
            <p class="text-[10px] font-black uppercase text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
              {{ stat.change }}
            </p>
          </div>
          <div class="relative z-10">
            <p class="text-xs font-bold text-muted-foreground uppercase tracking-wider">{{ stat.name }}</p>
            <p class="text-2xl font-black mt-1 text-slate-800 dark:text-slate-100">{{ stat.value }}</p>
          </div>
        </Card>
      </template>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- System Traffic -->
      <Card class="lg:col-span-2 p-8 border-0 shadow-md flex flex-col justify-center min-h-[400px] bg-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-primary/10 to-slate-900"></div>
        <div class="relative z-10">
          <div class="flex justify-between items-center mb-10">
             <h2 class="font-bold text-xl flex items-center gap-3">
               <Globe class="h-6 w-6 text-primary/80" /> Lưu lượng hệ thống (Real-time)
             </h2>
             <div class="flex gap-4">
               <div class="text-right">
                 <p class="text-[10px] uppercase font-bold text-primary/80">Đang Online</p>
                 <p class="text-lg font-black tracking-tighter">842</p>
               </div>
               <div class="text-right border-l border-white/10 pl-4">
                 <p class="text-[10px] uppercase font-bold text-primary/80">Yêu cầu/giây</p>
                 <p class="text-lg font-black tracking-tighter">1.2k</p>
               </div>
             </div>
          </div>
          
          <!-- Mockup wave/line chart -->
          <div class="h-40 flex items-end gap-1 px-2">
            <div v-for="(h, i) in [20, 35, 45, 30, 60, 80, 75, 40, 50, 65, 85, 95, 70, 55, 40, 30, 25]" :key="i" 
                 class="flex-1 bg-primary/40 rounded-t-sm transition-all duration-700 hover:bg-primary/60"
                 :style="{ height: h + '%' }">
            </div>
          </div>
          <div class="flex justify-between text-[10px] uppercase font-black text-primary/80 mt-6 px-2 tracking-widest">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>23:59</span>
          </div>
        </div>
      </Card>

      <!-- Recent Audit Logs -->
      <Card class="p-6 border-0 shadow-md space-y-6 flex flex-col">
        <h2 class="font-bold text-lg flex items-center gap-2">
          <Clock class="h-5 w-5 text-primary" /> Nhật ký hoạt động
        </h2>
        <div class="space-y-6 flex-1">
          <div v-for="log in recentActions" :key="log.time" class="flex items-start gap-4 relative">
            <div class="absolute left-4 top-10 bottom-0 w-0.5 bg-muted"></div>
            <div class="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0 border border-primary/20 relative z-10">
              <ShieldCheck class="h-4 w-4 text-primary" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-bold text-slate-800 dark:text-slate-100">{{ log.user }}</p>
              <p class="text-xs text-muted-foreground mt-0.5">{{ log.action }}: <span class="font-medium text-primary">{{ log.target }}</span></p>
              <p class="text-[10px] text-muted-foreground mt-2 uppercase font-black">{{ log.time }}</p>
            </div>
          </div>
        </div>
        <Button variant="ghost" class="w-full text-[10px] font-black text-primary uppercase tracking-widest bg-primary/5 hover:bg-primary/10 mt-4 rounded-xl">
          Toàn bộ nhật ký hệ thống
        </Button>
      </Card>
    </div>
  </div>
</template>
