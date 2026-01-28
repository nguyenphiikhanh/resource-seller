<script setup lang="ts">
import { ref } from 'vue'
import { 
  User, 
  Mail, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Smartphone
} from 'lucide-vue-next'

definePageMeta({
  layout: 'guest'
})

const username = ref('')
const email = ref('')
const password = ref('')
const agreeTerms = ref(false)
const isLoading = ref(false)

const handleRegister = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    navigateTo('/login')
  }, 1500)
}
</script>

<template>
  <UiCard class="border-0 shadow-2xl overflow-hidden bg-background/60 backdrop-blur-xl">
    <div class="h-1.5 w-full bg-primary/20">
      <div class="h-full bg-primary animate-in slide-in-from-left duration-1000" style="width: 50%"></div>
    </div>
    
    <UiCardContent class="p-8 md:p-10">
      <div class="mb-8">
        <h1 class="text-3xl font-extrabold tracking-tight">Tham gia ngay</h1>
        <p class="text-muted-foreground mt-2 font-medium">Trở thành thành viên của cộng đồng MMO uy tín.</p>
      </div>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <div class="space-y-1.5">
          <UiLabel for="username" class="font-bold text-xs uppercase tracking-wider text-muted-foreground">Tên người dùng</UiLabel>
          <div class="relative group">
            <User class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <UiInput 
              id="username" 
              v-model="username"
              placeholder="duylon_mmo" 
              class="pl-10 h-12 bg-muted/30 border-0 focus-visible:ring-1 focus-visible:ring-primary rounded-xl"
            />
          </div>
        </div>

        <div class="space-y-1.5">
          <UiLabel for="email" class="font-bold text-xs uppercase tracking-wider text-muted-foreground">Email</UiLabel>
          <div class="relative group">
            <Mail class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <UiInput 
              id="email" 
              v-model="email"
              type="email" 
              placeholder="example@mail.com" 
              class="pl-10 h-12 bg-muted/30 border-0 focus-visible:ring-1 focus-visible:ring-primary rounded-xl"
            />
          </div>
        </div>

        <div class="space-y-1.5">
          <UiLabel for="password" class="font-bold text-xs uppercase tracking-wider text-muted-foreground">Mật khẩu</UiLabel>
          <div class="relative group">
            <Lock class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <UiInput 
              id="password" 
              v-model="password"
              type="password" 
              placeholder="••••••••" 
              class="pl-10 h-12 bg-muted/30 border-0 focus-visible:ring-1 focus-visible:ring-primary rounded-xl"
            />
          </div>
        </div>

        <div class="p-4 rounded-xl bg-primary/5 border border-primary/10 space-y-3">
          <div class="flex items-center gap-2 text-xs font-bold text-primary italic uppercase tracking-tighter">
            <ShieldCheck class="h-3.5 w-3.5" /> Đặc quyền thành viên
          </div>
          <ul class="space-y-1">
            <li class="text-[11px] text-muted-foreground flex items-center gap-2"><CheckCircle2 class="h-3 w-3 text-green-500" /> Tự động lấy hàng sau khi thanh toán</li>
            <li class="text-[11px] text-muted-foreground flex items-center gap-2"><CheckCircle2 class="h-3 w-3 text-green-500" /> Hoàn tiền vào ví nếu sản phẩm lỗi</li>
          </ul>
        </div>

        <div class="flex items-start space-x-2 py-2">
          <input type="checkbox" id="terms" v-model="agreeTerms" class="mt-1 h-4 w-4 rounded border-muted-foreground/30 accent-primary" />
          <UiLabel for="terms" class="text-xs font-medium leading-relaxed cursor-pointer text-muted-foreground">
            Tôi đồng ý với <a href="#" class="text-primary font-bold hover:underline">Điều khoản dịch vụ</a> và <a href="#" class="text-primary font-bold hover:underline">Chính sách bảo mật</a>.
          </UiLabel>
        </div>

        <UiButton 
          type="submit" 
          class="w-full h-14 rounded-2xl font-extrabold text-lg shadow-lg shadow-primary/20 gap-3 group"
          :disabled="isLoading || !agreeTerms"
        >
          <template v-if="isLoading">
            <span class="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            Đang xử lý...
          </template>
          <template v-else>
            Đăng ký thành viên <ArrowRight class="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </template>
        </UiButton>
      </form>

      <div class="mt-8 text-center border-t pt-8">
        <p class="text-sm text-muted-foreground">
          Đã có tài khoản? 
          <NuxtLink to="/login" class="text-primary font-bold hover:underline underline-offset-4 ml-1">Đăng nhập</NuxtLink>
        </p>
      </div>
    </UiCardContent>
  </UiCard>
</template>
