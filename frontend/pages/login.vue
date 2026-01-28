<script setup lang="ts">
import { ref } from 'vue'
import { 
  User, 
  Lock, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  AlertCircle,
  CheckCircle2
} from 'lucide-vue-next'

definePageMeta({
  layout: 'guest'
})

const { login } = useAuth()
const showPassword = ref(false)
const email = ref('')
const password = ref('')
const remember = ref(false)
const isLoading = ref(false)

const handleLogin = () => {
  isLoading.value = true
  // Mock login delay
  setTimeout(() => {
    let role = 'user'
    if (email.value.includes('admin')) role = 'admin'
    else if (email.value.includes('seller')) role = 'seller'
    
    login(role)
    isLoading.value = false
    
    if (role === 'admin') navigateTo('/admin/dashboard')
    else if (role === 'seller') navigateTo('/seller/dashboard')
    else navigateTo('/user/dashboard')
  }, 1000)
}
</script>

<template>
  <div class="space-y-10">
    <div class="text-center">
      <h2 class="text-4xl font-black tracking-tightest">Đăng nhập</h2>
      <p class="text-muted-foreground mt-3 font-bold text-sm tracking-tight">Rất vui được gặp lại bạn! 👋</p>
      
      <div class="mt-8 bg-primary/[0.03] dark:bg-primary/[0.05] p-5 rounded-[1.5rem] border border-primary/10 flex items-start gap-4 text-left group hover:border-primary/20 transition-all duration-300">
        <div class="bg-primary/10 p-2.5 rounded-xl shrink-0">
          <AlertCircle class="h-5 w-5 text-primary" />
        </div>
        <div>
          <p class="text-[10px] font-black uppercase tracking-widest text-primary mb-1 italic">Dành cho Tester</p>
          <p class="text-xs font-bold text-muted-foreground leading-relaxed">
            Gõ <span class="text-primary">"admin"</span> để vào Admin, <span class="text-primary">"seller"</span> cho Seller.
          </p>
        </div>
      </div>
    </div>

    <form @submit.prevent="handleLogin" class="space-y-6">
      <div class="space-y-3">
        <div class="flex items-center justify-between px-1">
          <Label for="email" class="font-black text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">Định danh tài khoản</Label>
        </div>
        <div class="relative group">
          <div class="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-muted-foreground group-focus-within:text-primary transition-all duration-300">
            <User class="h-5 w-5" />
          </div>
          <Input 
            id="email" 
            v-model="email"
            type="text" 
            placeholder="Username hoặc Email" 
            class="pl-16 h-14 bg-muted/30 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-[1.25rem] font-black text-sm tracking-tight"
          />
        </div>
      </div>

      <div class="space-y-3">
        <div class="flex justify-between items-center px-1">
          <Label for="password" class="font-black text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">Khóa bảo mật</Label>
          <NuxtLink to="/forgot-password" class="text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary/80 transition-all">Quên mật khẩu?</NuxtLink>
        </div>
        <div class="relative group">
          <div class="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-muted-foreground group-focus-within:text-primary transition-all duration-300">
            <Lock class="h-5 w-5" />
          </div>
          <Input 
            id="password" 
            v-model="password"
            :type="showPassword ? 'text' : 'password'" 
            placeholder="••••••••" 
            class="pl-16 h-14 bg-muted/30 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-[1.25rem] font-black text-sm"
          />
          <button 
            type="button" 
            class="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            @click="showPassword = !showPassword"
          >
            <Eye v-if="!showPassword" class="h-5 w-5" />
            <EyeOff v-else class="h-5 w-5" />
          </button>
        </div>
      </div>

      <div 
        class="flex items-center justify-between p-4 rounded-[1.25rem] border transition-all cursor-pointer group"
        :class="remember ? 'bg-primary/5 border-primary/20 shadow-sm shadow-primary/5' : 'bg-muted/20 border-transparent hover:bg-muted/40'"
        @click="remember = !remember"
      >
        <div class="flex items-center gap-3">
          <div 
            class="h-5 w-5 rounded-md border-2 flex items-center justify-center transition-all duration-300"
            :class="remember ? 'bg-primary border-primary scale-110 shadow-lg shadow-primary/30' : 'border-muted-foreground/20 bg-background'"
          >
            <CheckCircle2 v-if="remember" class="h-3 w-3 text-white" />
          </div>
          <p class="text-xs font-black text-muted-foreground tracking-tight select-none">Duy trì trạng thái truy cập</p>
        </div>
        <div v-if="remember" class="text-[10px] font-black text-primary animate-in fade-in zoom-in duration-300 italic">ACTIVE</div>
      </div>

      <Button 
        type="submit" 
        class="w-full h-15 rounded-[1.25rem] font-black text-lg shadow-2xl shadow-primary/30 gap-3 group bg-primary hover:bg-primary/90 transition-all active:scale-[0.98] mt-4"
        :disabled="isLoading"
      >
        <template v-if="isLoading">
          <span class="h-5 w-5 border-4 border-white/20 border-t-white rounded-full animate-spin"></span>
          ĐANG XỬ LÝ...
        </template>
        <template v-else>
          ĐĂNG NHẬP NGAY <ArrowRight class="h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </template>
      </Button>
    </form>

    <div class="text-center pt-8 border-t border-dashed border-muted-foreground/20">
      <p class="text-xs font-bold text-muted-foreground">
        Chưa có tài khoản? 
        <NuxtLink to="/register" class="text-primary font-black hover:underline underline-offset-4 ml-1">Đăng ký thành viên</NuxtLink>
      </p>
    </div>
  </div>
</template>
