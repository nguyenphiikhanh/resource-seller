<script setup lang="ts">
import { ref } from 'vue'
import { 
  Store, 
  Image as ImageIcon, 
  Layout, 
  Megaphone, 
  Save, 
  CheckCircle2,
  Info,
  ShieldCheck
} from 'lucide-vue-next'

definePageMeta({
  layout: 'member'
})

const shopData = ref({
  name: 'MMO Master Store',
  slogan: 'Cung cấp tài nguyên MMO uy tín, chất lượng số 1 Việt Nam.',
  announcement: '🔥 Giảm giá ngay 10% cho đơn hàng đầu tiên! Chào mừng bạn đến với MMO Master Store.',
  contact: 't.me/mmomaster_support'
})
</script>

<template>
  <div class="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
    <div>
      <h1 class="text-3xl font-extrabold tracking-tight">Cấu hình gian hàng</h1>
      <p class="text-muted-foreground mt-1 font-medium">Tùy chỉnh thương hiệu và thông báo để thu hút khách hàng.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-6">
        <Card class="p-8 border-0 shadow-sm space-y-8">
          <div class="space-y-6">
            <h3 class="font-bold text-lg flex items-center gap-2 border-l-4 border-primary pl-4">
              Nhận diện thương hiệu
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-4">
                <Label class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Logo gian hàng</Label>
                <div class="h-32 w-32 bg-muted rounded-2xl border-2 border-dashed flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden">
                  <ImageIcon class="h-8 w-8 text-muted-foreground group-hover:scale-110 transition-transform" />
                  <p class="text-[10px] font-bold text-muted-foreground mt-2 uppercase">Thay đổi</p>
                </div>
              </div>
              <div class="space-y-4">
                <Label class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Ảnh bìa (Banner)</Label>
                <div class="h-32 w-full bg-muted rounded-2xl border-2 border-dashed flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden">
                  <Layout class="h-8 w-8 text-muted-foreground group-hover:scale-110 transition-transform" />
                  <p class="text-[10px] font-bold text-muted-foreground mt-2 uppercase">Thay đổi banner</p>
                </div>
              </div>
            </div>

            <div class="space-y-4 pt-4">
              <div class="space-y-2">
                <Label class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tên gian hàng</Label>
                <Input v-model="shopData.name" class="h-12 bg-muted/30 border-0 rounded-xl font-bold" />
              </div>
              <div class="space-y-2">
                <Label class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Slogan / Khẩu hiệu</Label>
                <Input v-model="shopData.slogan" class="h-12 bg-muted/30 border-0 rounded-xl font-medium" />
              </div>
              <div class="space-y-2">
                <Label class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Thông tin liên hệ (Telegram/Zalo)</Label>
                <Input v-model="shopData.contact" class="h-12 bg-muted/30 border-0 rounded-xl font-mono text-sm" />
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="font-bold text-lg flex items-center gap-2 border-l-4 border-primary pl-4">
              Thông báo & Marketing
            </h3>
            <div class="space-y-2">
              <Label class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Thông báo nổi bật (Announcement)</Label>
              <div class="relative group">
                <Megaphone class="absolute left-3.5 top-3.5 h-4 w-4 text-primary" />
                <textarea 
                  v-model="shopData.announcement" 
                  rows="3" 
                  class="w-full bg-muted/30 border-0 rounded-xl p-4 pl-10 text-sm font-medium focus:ring-1 focus:ring-primary outline-none"
                ></textarea>
              </div>
              <p class="text-[10px] text-muted-foreground italic">Nội dung này sẽ hiển thị ở đầu trang chi tiết gian hàng của bạn.</p>
            </div>
          </div>
        </Card>
      </div>

      <div class="space-y-6">
        <Card class="p-6 border-0 shadow-sm space-y-6 overflow-hidden relative">
          <div class="absolute -right-10 -bottom-10 h-32 w-32 bg-green-500/5 rounded-full blur-2xl"></div>
          <h3 class="font-bold text-sm uppercase tracking-widest text-muted-foreground">Trạng thái gian hàng</h3>
          
          <div class="flex items-center gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/10">
            <div class="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
            <div>
              <p class="text-sm font-bold text-green-700">Đang hoạt động</p>
              <p class="text-[10px] text-green-600/70 font-medium">Gian hàng của bạn đang hiển thị công khai.</p>
            </div>
          </div>

          <div class="space-y-3 pt-2">
            <div class="flex items-center gap-3 text-xs font-medium">
              <CheckCircle2 class="h-4 w-4 text-blue-500" />
              Tỷ lệ phản hồi: <span class="font-bold">98%</span>
            </div>
            <div class="flex items-center gap-3 text-xs font-medium">
              <ShieldCheck class="h-4 w-4 text-primary" />
              Hạn bảo hành mặc định: <span class="font-bold">24 Giờ</span>
            </div>
          </div>

          <Separator />

          <Button class="w-full h-12 rounded-2xl font-bold gap-2 shadow-lg shadow-primary/20">
            <Save class="h-4 w-4" /> Lưu cấu hình
          </Button>
        </Card>

        <Card class="p-5 bg-blue-500/5 border border-blue-500/10 flex gap-3">
          <Info class="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
          <p class="text-xs text-blue-700/80 leading-relaxed font-medium">
            Mẹo: Một gian hàng có <b>Banner đẹp</b> và <b>Thông báo rõ ràng</b> sẽ giúp tăng niềm tin cho khách hàng mới.
          </p>
        </Card>
      </div>
    </div>
  </div>
</template>
