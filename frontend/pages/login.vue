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
  <Card class="border-0 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden bg-background/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 dark:border-white/5">
    <!-- Top progress-like bar -->
    <div class="h-1.5 w-full bg-muted">
      <div class="h-full bg-primary animate-in slide-in-from-left duration-1000" style="width: 100%"></div>
    </div>
    
    <CardContent class="p-8 md:p-12">
      <div class="mb-10 text-center">
        <h1 class="text-4xl font-black ml--1 tracking-tight">Đăng nhập</h1>
        <p class="text-muted-foreground mt-3 font-bold text-sm">Rất vui được gặp lại bạn! 👋</p>
        
        <div class="mt-8 bg-primary/[0.03] dark:bg-primary/[0.05] p-4 rounded-2xl border border-primary/10 flex items-start gap-3 text-left group hover:border-primary/30 transition-colors">
          <div class="bg-primary/10 p-2 rounded-xl mt-0.5">
            <AlertCircle class="h-4 w-4 text-primary" />
          </div>
          <div>
            <p class="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Dành cho Tester</p>
            <p class="text-xs font-bold text-muted-foreground leading-relaxed">
              Gõ <span class="text-primary">"admin"</span> để vào Admin, <span class="text-primary">"seller"</span> cho Seller.
            </p>
          </div>
        </div>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div class="space-y-2.5">
          <div class="flex items-center justify-between ml-1">
            <Label for="email" class="font-black text-[10px] uppercase tracking-widest text-muted-foreground/70">Tài khoản</Label>
          </div>
          <div class="relative group">
            <User class="absolute left-4 top-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input 
              id="email" 
              v-model="email"
              type="text" 
              placeholder="Username hoặc Email" 
              class="pl-12 h-14 bg-muted/40 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-2xl font-bold"
            />
          </div>
        </div>

        <div class="space-y-2.5">
          <div class="flex justify-between items-center ml-1">
            <Label for="password" class="font-black text-[10px] uppercase tracking-widest text-muted-foreground/70">Mật khẩu</Label>
            <NuxtLink to="/forgot-password" class="text-xs font-bold text-primary hover:text-primary/80 transition-colors">Quên mật khẩu?</NuxtLink>
          </div>
          <div class="relative group">
            <Lock class="absolute left-4 top-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input 
              id="password" 
              v-model="password"
              :type="showPassword ? 'text' : 'password'" 
              placeholder="••••••••" 
              class="pl-12 h-14 bg-muted/40 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-2xl font-bold"
            />
            <button 
              type="button" 
              class="absolute right-4 top-4 text-muted-foreground hover:text-primary transition-colors p-1"
              @click="showPassword = !showPassword"
            >
              <Eye v-if="!showPassword" class="h-5 w-5" />
              <EyeOff v-else class="h-5 w-5" />
            </button>
          </div>
        </div>

        <div 
          class="relative flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer group"
          :class="remember ? 'bg-primary/[0.03] border-primary/30 shadow-sm' : 'bg-muted/30 border-transparent hover:bg-muted/50'"
          @click="remember = !remember"
        >
          <div class="flex items-center gap-3">
            <div 
              class="h-5 w-5 rounded-md border-2 flex items-center justify-center transition-all duration-300"
              :class="remember ? 'bg-primary border-primary scale-110' : 'border-muted-foreground/30 bg-background'"
            >
              <CheckCircle2 v-if="remember" class="h-3 w-3 text-white" />
            </div>
            <p class="text-sm font-bold text-muted-foreground/80 select-none">Duy trì đăng nhập</p>
          </div>
          <div v-if="remember" class="text-[10px] font-black text-primary animate-in fade-in zoom-in duration-300">ĐÃ BẬT</div>
        </div>

        <Button 
          type="submit" 
          class="w-full h-14 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 gap-3 group bg-primary hover:bg-primary/90 transition-all active:scale-[0.98]"
          :disabled="isLoading"
        >
          <template v-if="isLoading">
            <span class="h-5 w-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
            ĐANG XỬ LÝ...
          </template>
          <template v-else>
            ĐĂNG NHẬP <ArrowRight class="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </template>
        </Button>
      </form>

      <div class="mt-10 text-center border-t border-muted pt-8">
        <p class="text-sm font-bold text-muted-foreground">
          Chưa có tài khoản? 
          <NuxtLink to="/register" class="text-primary hover:underline underline-offset-4 ml-1">Đăng ký ngay</NuxtLink>
        </p>
      </div>
    </CardContent>
  </Card>
</template>
