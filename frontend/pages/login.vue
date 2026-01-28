<script setup lang="ts">
import { ref } from 'vue'
import { 
  User, 
  Lock, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  AlertCircle 
} from 'lucide-vue-next'

definePageMeta({
  layout: 'guest'
})

const { login } = useAuth()
const showPassword = ref(false)
const email = ref('')
const password = ref('')
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
  <UiCard class="border-0 shadow-2xl overflow-hidden bg-background/60 backdrop-blur-xl w-full max-w-md">
    <div class="h-1.5 w-full bg-primary/20">
      <div class="h-full bg-primary animate-in slide-in-from-left duration-1000" style="width: 100%"></div>
    </div>
    
    <UiCardContent class="p-8 md:p-10">
      <div class="mb-8">
        <h1 class="text-3xl font-extrabold tracking-tight">Đăng nhập</h1>
        <p class="text-muted-foreground mt-2 font-medium">Chào mừng bạn quay trở lại với hệ thống.</p>
        <div class="mt-4 bg-muted/50 p-3 rounded-xl border border-primary/20">
           <p class="text-[10px] font-black uppercase text-primary mb-1">Demo login</p>
           <p class="text-xs font-bold text-muted-foreground italic">Gõ "admin" để vào Admin, "seller" để vào Seller.</p>
        </div>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <div class="space-y-2">
          <UiLabel for="email" class="font-bold text-xs uppercase tracking-wider text-muted-foreground">Email / Tên đăng nhập</UiLabel>
          <div class="relative group">
            <User class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <UiInput 
              id="email" 
              v-model="email"
              type="text" 
              placeholder="nhap-ten-cua-ban@example.com" 
              class="pl-10 h-12 bg-muted/30 border-0 focus-visible:ring-1 focus-visible:ring-primary rounded-xl"
            />
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex justify-between items-center">
            <UiLabel for="password" class="font-bold text-xs uppercase tracking-wider text-muted-foreground">Mật khẩu</UiLabel>
            <NuxtLink to="/forgot-password" class="text-xs font-bold text-primary hover:underline underline-offset-4">Quên mật khẩu?</NuxtLink>
          </div>
          <div class="relative group">
            <Lock class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <UiInput 
              id="password" 
              v-model="password"
              :type="showPassword ? 'text' : 'password'" 
              placeholder="••••••••" 
              class="pl-10 h-12 bg-muted/30 border-0 focus-visible:ring-1 focus-visible:ring-primary rounded-xl"
            />
            <button 
              type="button" 
              class="absolute right-3.5 top-3.5 text-muted-foreground hover:text-foreground"
              @click="showPassword = !showPassword"
            >
              <Eye v-if="!showPassword" class="h-4 w-4" />
              <EyeOff v-else class="h-4 w-4" />
            </button>
          </div>
        </div>

        <div class="flex items-center space-x-2 py-2">
          <input type="checkbox" id="remember" class="h-4 w-4 rounded border-muted-foreground/30 accent-primary" />
          <UiLabel for="remember" class="text-sm font-medium leading-none cursor-pointer">Duy trì đăng nhập</UiLabel>
        </div>

        <UiButton 
          type="submit" 
          class="w-full h-14 rounded-2xl font-extrabold text-lg shadow-lg shadow-primary/20 gap-3 group"
          :disabled="isLoading"
        >
          <template v-if="isLoading">
            <span class="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            Đang đăng nhập...
          </template>
          <template v-else>
            Đăng nhập <ArrowRight class="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </template>
        </UiButton>
      </form>

      <div class="mt-8 text-center border-t pt-8">
        <p class="text-sm text-muted-foreground">
          Chưa có tài khoản? 
          <NuxtLink to="/register" class="text-primary font-bold hover:underline underline-offset-4 ml-1">Đăng ký ngay</NuxtLink>
        </p>
      </div>
    </UiCardContent>
  </UiCard>

  <div class="mt-8 flex justify-center gap-6 text-muted-foreground/50">
    <a href="#" class="hover:text-primary transition-colors"><AlertCircle class="h-5 w-5" /></a>
    <a href="#" class="hover:text-primary transition-colors font-bold text-xs uppercase tracking-tighter self-center">Terms</a>
    <a href="#" class="hover:text-primary transition-colors font-bold text-xs uppercase tracking-tighter self-center">Privacy</a>
  </div>
</template>
