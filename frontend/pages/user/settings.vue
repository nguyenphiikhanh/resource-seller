<script setup lang="ts">
import { ref } from 'vue'
import { 
  User, 
  Settings, 
  Lock, 
  Bell, 
  Shield, 
  Save, 
  Camera,
  Mail,
  Smartphone
} from 'lucide-vue-next'

definePageMeta({
  layout: 'member'
})

const profile = ref({
  fullName: 'Nguyen Phuc Khanh',
  username: 'khanh_mmo',
  email: 'khanh@example.com',
  phone: '0987654321',
  bio: 'Chuyên gia săn deal MMO, Facebook Ads, TikTok Shop.'
})
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div>
      <h1 class="text-3xl font-extrabold tracking-tight">Cài đặt tài khoản</h1>
      <p class="text-muted-foreground mt-1">Cập nhật thông tin cá nhân và cấu hình bảo mật của bạn.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Inner Sidebar -->
      <div class="md:col-span-1">
        <nav class="flex flex-col gap-2 sticky top-24">
          <button class="flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl bg-primary/10 text-primary border border-primary/20">
            <User class="h-4 w-4" /> Hồ sơ
          </button>
          <button class="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-muted-foreground hover:bg-muted transition-colors">
            <Shield class="h-4 w-4" /> Bảo mật
          </button>
          <button class="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-muted-foreground hover:bg-muted transition-colors">
            <Bell class="h-4 w-4" /> Thông báo
          </button>
        </nav>
      </div>

      <!-- Settings Content -->
      <div class="md:col-span-3 space-y-6">
        <Card class="border-0 shadow-sm overflow-hidden">
          <div class="p-6 md:p-8 bg-muted/30 border-b">
            <h2 class="font-bold text-lg mb-4">Thông tin cá nhân</h2>
            <div class="flex items-center gap-6">
              <div class="relative group">
                <Avatar class="h-24 w-24 border-4 border-background shadow-lg">
                  <AvatarFallback class="bg-primary text-white text-2xl font-black">NK</AvatarFallback>
                </Avatar>
                <button class="absolute bottom-0 right-0 h-8 w-8 bg-primary text-white rounded-full flex items-center justify-center border-2 border-background shadow-md hover:scale-110 transition-transform">
                  <Camera class="h-4 w-4" />
                </button>
              </div>
              <div class="space-y-1">
                <p class="text-sm text-muted-foreground font-medium">Ảnh đại diện</p>
                <p class="text-xs text-muted-foreground">PNG, JPG tối đa 2MB. 400x400px khuyến nghị.</p>
              </div>
            </div>
          </div>
          <div class="p-6 md:p-8 space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <Label class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Họ tên hiển thị</Label>
                <div class="relative">
                  <User class="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input v-model="profile.fullName" class="pl-10 h-11 bg-muted/20 border-0 rounded-xl font-medium" />
                </div>
              </div>
              <div class="space-y-2">
                <Label class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tên đăng nhập</Label>
                <div class="relative">
                  <Settings class="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input v-model="profile.username" readonly class="pl-10 h-11 bg-muted/50 border-0 rounded-xl font-mono text-xs opacity-70" />
                </div>
              </div>
              <div class="space-y-2">
                <Label class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</Label>
                <div class="relative">
                  <Mail class="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input v-model="profile.email" class="pl-10 h-11 bg-muted/20 border-0 rounded-xl font-medium" />
                </div>
              </div>
              <div class="space-y-2">
                <Label class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Số điện thoại</Label>
                <div class="relative">
                  <Smartphone class="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input v-model="profile.phone" class="pl-10 h-11 bg-muted/20 border-0 rounded-xl font-medium" />
                </div>
              </div>
            </div>
            
            <div class="space-y-2">
              <Label class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Giới thiệu (Bio)</Label>
              <textarea 
                v-model="profile.bio" 
                rows="3" 
                class="w-full bg-muted/20 border-0 rounded-xl p-4 text-sm font-medium focus:ring-1 focus:ring-primary outline-none"
              ></textarea>
            </div>

            <div class="flex justify-end pt-4 border-t border-dashed">
              <Button class="h-12 px-8 font-bold rounded-2xl gap-2 shadow-lg shadow-primary/20">
                <Save class="h-4 w-4" /> Lưu thay đổi
              </Button>
            </div>
          </div>
        </Card>

        <Card class="p-6 md:p-8 border-0 shadow-sm border-l-4 border-l-red-500 bg-red-50 dark:bg-red-900/10">
          <div class="flex items-start gap-4">
            <div class="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
              <Lock class="h-5 w-5 text-red-600" />
            </div>
            <div class="flex-1 space-y-1">
              <h3 class="font-bold text-red-700">Đổi mật khẩu</h3>
              <p class="text-xs text-red-600/80 leading-relaxed font-medium">Bạn nên thường xuyên thay đổi mật khẩu để bảo vệ tài khoản khỏi các rủi ro bảo mật.</p>
              <div class="pt-4">
                <Button variant="outline" class="h-10 px-6 font-bold rounded-xl border-red-500/20 text-red-600 hover:bg-red-100">Cập nhật mật khẩu</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>
