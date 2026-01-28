<script setup lang="ts">
import { ref } from 'vue'
import { 
  Settings, 
  Globe,
  CreditCard, 
  ShieldCheck,
  Save,
  Zap,
  Server,
  Key,
  Palette,
  Bell,
  Zap as ZapIcon
} from 'lucide-vue-next'

const { popups } = usePopups()

definePageMeta({
  layout: 'admin'
})

const systemSettings = ref({
  siteName: 'MMO DUYLON',
  siteUrl: 'https://mmo-duylon.vn',
  feePercent: '5',
  minWithdraw: '100,000',
  maintenance: false
})
</script>

<template>
  <div class="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 pb-20">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-black tracking-tight flex items-center gap-3">
          Cấu hình hệ thống <Settings class="h-8 w-8 text-primary" />
        </h1>
        <p class="text-muted-foreground mt-1">Quản lý toàn bộ tham số, phí sàn và bảo mật nền tảng.</p>
      </div>
      <div v-if="systemSettings.maintenance" class="bg-red-500 text-white px-6 py-2 rounded-full text-xs font-black animate-pulse flex items-center gap-2">
        <ShieldCheck class="h-4 w-4" /> ĐANG BẢO TRÌ
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Admin Settings Sidebar -->
      <div class="lg:col-span-1">
        <nav class="flex flex-col gap-2 sticky top-24">
          <button class="flex items-center gap-3 px-5 py-4 text-sm font-black rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
            <Globe class="h-4 w-4" /> Tổng quan
          </button>
          <button class="flex items-center gap-3 px-5 py-4 text-sm font-bold rounded-2xl text-muted-foreground hover:bg-muted transition-colors">
            <CreditCard class="h-4 w-4" /> Thanh toán / Phí
          </button>
          <button class="flex items-center gap-3 px-5 py-4 text-sm font-bold rounded-2xl text-muted-foreground hover:bg-muted transition-colors">
            <Server class="h-4 w-4" /> API / Webhook
          </button>
          <button class="flex items-center gap-3 px-5 py-4 text-sm font-bold rounded-2xl text-muted-foreground hover:bg-muted transition-colors">
            <Key class="h-4 w-4" /> SMTP / Mail
          </button>
          <button class="flex items-center gap-3 px-5 py-4 text-sm font-bold rounded-2xl text-muted-foreground hover:bg-muted transition-colors">
            <Palette class="h-4 w-4" /> Giao diện
          </button>
        </nav>
      </div>

      <!-- Settings Content -->
      <div class="lg:col-span-3 space-y-8">
        <Card class="border-0 shadow-lg overflow-hidden">
          <div class="p-8 border-b bg-muted/30">
            <h2 class="font-black text-xl mb-6 flex items-center gap-2">
               Thông tin cơ bản <div class="h-1.5 w-1.5 rounded-full bg-primary"></div>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-2">
                <Label class="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Tên Website</Label>
                <Input v-model="systemSettings.siteName" class="h-12 bg-card border-0 rounded-xl font-bold text-primary shadow-sm" />
              </div>
              <div class="space-y-2">
                <Label class="text-[10px] font-black uppercase tracking-widest text-muted-foreground">URL Website</Label>
                <Input v-model="systemSettings.siteUrl" class="h-12 bg-card border-0 rounded-xl font-mono text-xs shadow-sm" />
              </div>
              <div class="space-y-2">
                <Label class="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Phí sàn mặc định (%)</Label>
                <div class="relative">
                  <Input v-model="systemSettings.feePercent" type="number" class="h-12 bg-card border-0 rounded-xl font-black pr-12 shadow-sm" />
                  <span class="absolute right-4 top-3 text-sm font-black text-primary">%</span>
                </div>
              </div>
              <div class="space-y-2">
                <Label class="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Rút tối thiểu (VNĐ)</Label>
                <div class="relative">
                  <Input v-model="systemSettings.minWithdraw" class="h-12 bg-card border-0 rounded-xl font-black pr-12 shadow-sm" />
                  <span class="absolute right-4 top-3 text-xs font-bold text-muted-foreground">đ</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-8 space-y-8">
             <div class="flex items-center justify-between p-6 rounded-3xl bg-primary/5 border border-primary/10">
               <div class="space-y-1">
                 <p class="font-black text-primary/80">Chế độ bảo trì</p>
                 <p class="text-xs text-primary/60 font-medium">Tạm đóng Website để nâng cấp. Người dùng sẽ thấy trang báo lỗi.</p>
               </div>
               <Switch v-model:checked="systemSettings.maintenance" />
             </div>

             <div class="flex justify-end gap-3">
               <Button variant="outline" class="h-14 px-8 font-black rounded-2xl border-slate-200">Hủy bỏ</Button>
               <Button class="h-14 px-10 font-black rounded-2xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 gap-2">
                 <Save class="h-5 w-5" /> Lưu cấu hình
               </Button>
             </div>
          </div>
        </Card>

        <!-- Popup Management -->
        <Card class="border-0 shadow-lg overflow-hidden">
          <div class="p-8 border-b bg-muted/30">
            <h2 class="font-black text-xl mb-6 flex items-center gap-2">
               Quản lý Popup thông báo <div class="h-1.5 w-1.5 rounded-full bg-primary"></div>
            </h2>
            <div class="space-y-6">
              <div v-for="popup in popups" :key="popup.id" class="p-6 rounded-[2rem] border bg-card hover:border-primary/20 transition-all group">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-4">
                    <div class="h-12 w-12 rounded-[1.2rem] bg-primary/10 flex items-center justify-center text-primary">
                      <component :is="popup.type === 'banner' ? Globe : Bell" class="h-6 w-6" />
                    </div>
                    <div>
                      <p class="font-black text-sm uppercase tracking-tighter">{{ popup.title }}</p>
                      <p class="text-[10px] font-bold text-muted-foreground uppercase">Loại: {{ popup.type }} | Hiển thị: {{ popup.pages.join(', ') }}</p>
                    </div>
                  </div>
                  <Switch v-model:checked="popup.active" />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-1">
                    <Label class="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Nội dung</Label>
                    <Input v-model="popup.content" class="h-11 bg-muted/30 border-0 rounded-xl font-medium text-xs" />
                  </div>
                  <div class="space-y-1" v-if="popup.type === 'banner'">
                    <Label class="text-[10px] font-black uppercase text-muted-foreground tracking-widest">URL Hình ảnh (Banner)</Label>
                    <Input v-model="popup.imageUrl" class="h-11 bg-muted/30 border-0 rounded-xl font-mono text-[10px]" />
                  </div>
                </div>
              </div>
              
              <div class="p-6 rounded-[2rem] border border-dashed border-primary/20 flex flex-col items-center justify-center gap-4 hover:bg-primary/5 transition-colors cursor-pointer group">
                  <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <ZapIcon class="h-6 w-6" />
                  </div>
                  <p class="text-xs font-black uppercase tracking-widest text-primary">Thêm Popup mới</p>
              </div>
            </div>
          </div>
        </Card>

        <!-- Advanced Alert -->
        <Card class="p-6 bg-amber-500/5 border border-amber-500/20 flex gap-4 relative overflow-hidden">
          <div class="absolute right-0 top-0 h-full w-20 bg-amber-500/5 skew-x-[-15deg]"></div>
          <Zap class="h-10 w-10 text-amber-600 shrink-0" />
          <div class="space-y-1 relative z-10">
            <h3 class="font-black text-amber-700 uppercase tracking-tighter italic">Cảnh báo hệ thống</h3>
            <p class="text-xs text-amber-700/70 leading-relaxed font-medium">
               Các thay đổi về <b>Phí sàn</b> sẽ có hiệu lực ngay lập tức đối với tất cả các đơn hàng phát sinh sau khi lưu. Hãy thông báo cho Seller trước khi thực hiện thay đổi lớn.
            </p>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>
