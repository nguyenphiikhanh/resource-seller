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

const firstName = ref('')
const lastName = ref('')
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
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
  <div class="space-y-10">
    <div class="text-center">
      <h2 class="text-4xl font-black tracking-tightest">Tham gia ngay</h2>
      <p class="text-muted-foreground mt-3 font-bold text-sm tracking-tight">Trở thành thành viên của cộng đồng MMO uy tín. 🤝</p>
    </div>

    <form @submit.prevent="handleRegister" class="space-y-6">
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-3">
          <Label for="firstName" class="font-black text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 ml-1">Họ & Tên đệm</Label>
          <Input 
            id="firstName" 
            v-model="firstName"
            placeholder="Nguyễn Văn" 
            class="h-14 bg-muted/30 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-[1.25rem] font-black text-sm px-6"
          />
        </div>
        <div class="space-y-3">
          <Label for="lastName" class="font-black text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 ml-1">Tên</Label>
          <Input 
            id="lastName" 
            v-model="lastName"
            placeholder="Tài Duy" 
            class="h-14 bg-muted/30 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-[1.25rem] font-black text-sm px-6"
          />
        </div>
      </div>

      <div class="space-y-3">
        <Label for="username" class="font-black text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 ml-1">Định danh tài khoản</Label>
        <div class="relative group">
          <div class="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-muted-foreground group-focus-within:text-primary transition-all duration-300">
            <User class="h-5 w-5" />
          </div>
          <Input 
            id="username" 
            v-model="username"
            placeholder="duylon_mmo" 
            class="pl-16 h-14 bg-muted/30 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-[1.25rem] font-black text-sm"
          />
        </div>
      </div>

      <div class="space-y-3">
        <Label for="email" class="font-black text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 ml-1">Địa chỉ Email</Label>
        <div class="relative group">
          <div class="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-muted-foreground group-focus-within:text-primary transition-all duration-300">
            <Mail class="h-5 w-5" />
          </div>
          <Input 
            id="email" 
            v-model="email"
            type="email" 
            placeholder="example@mail.com" 
            class="pl-16 h-14 bg-muted/30 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-[1.25rem] font-black text-sm"
          />
        </div>
      </div>

      <div class="space-y-3">
        <Label for="password" class="font-black text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 ml-1">Khóa bảo mật</Label>
        <div class="relative group">
          <div class="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-muted-foreground group-focus-within:text-primary transition-all duration-300">
            <Lock class="h-5 w-5" />
          </div>
          <Input 
            id="password" 
            v-model="password"
            type="password" 
            placeholder="••••••••" 
            class="pl-16 h-14 bg-muted/30 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-[1.25rem] font-black text-sm"
          />
        </div>
      </div>

      <div class="p-5 rounded-[1.5rem] bg-primary/[0.03] border border-primary/10 space-y-4">
        <div class="flex items-center gap-2 text-[10px] font-black text-primary italic uppercase tracking-widest">
          <ShieldCheck class="h-4 w-4" /> Đặc quyền thành viên
        </div>
        <ul class="space-y-2">
          <li class="text-[11px] font-bold text-muted-foreground flex items-center gap-3"><CheckCircle2 class="h-3.5 w-3.5 text-green-500" /> Tự động lấy hàng sau khi thanh toán</li>
          <li class="text-[11px] font-bold text-muted-foreground flex items-center gap-3"><CheckCircle2 class="h-3.5 w-3.5 text-green-500" /> Hoàn tiền vào ví nếu sản phẩm lỗi</li>
        </ul>
      </div>

      <div 
        class="relative flex flex-col gap-4 p-6 rounded-[1.5rem] border transition-all cursor-pointer group"
        :class="agreeTerms ? 'bg-primary/[0.03] border-primary/20 shadow-sm' : 'bg-muted/20 border-transparent hover:bg-muted/40'"
        @click="agreeTerms = !agreeTerms"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div 
              class="h-6 w-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300"
              :class="agreeTerms ? 'bg-primary border-primary scale-110 shadow-lg shadow-primary/30' : 'border-muted-foreground/20 bg-background'"
            >
              <CheckCircle2 v-if="agreeTerms" class="h-4 w-4 text-white" />
            </div>
            <p class="text-[10px] font-black uppercase tracking-widest text-muted-foreground/80">Điều khoản sử dụng</p>
          </div>
          <div v-if="agreeTerms" class="text-[10px] font-black text-primary animate-in fade-in zoom-in duration-300 italic">ACCEPTED</div>
        </div>
        
        <p class="text-[11px] font-bold leading-relaxed text-muted-foreground/60 pl-10">
          Tôi xác nhận đã đọc và hoàn toàn đồng ý với <a href="#" class="text-primary hover:underline font-black" @click.stop>Điều khoản dịch vụ</a> và <a href="#" class="text-primary hover:underline font-black" @click.stop>Chính sách bảo mật</a>.
        </p>
      </div>

      <Button 
        type="submit" 
        class="w-full h-15 rounded-[1.25rem] font-black text-lg shadow-2xl shadow-primary/30 gap-3 group bg-primary hover:bg-primary/90 transition-all active:scale-[0.98] mt-4"
        :disabled="isLoading || !agreeTerms"
      >
        <template v-if="isLoading">
          <span class="h-5 w-5 border-4 border-white/20 border-t-white rounded-full animate-spin"></span>
          ĐANG XỬ LÝ...
        </template>
        <template v-else>
          TẠO TÀI KHOẢN NGAY <ArrowRight class="h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </template>
      </Button>
    </form>

    <div class="text-center pt-8 border-t border-dashed border-muted-foreground/20">
      <p class="text-xs font-bold text-muted-foreground">
        Đã có tài khoản? 
        <NuxtLink to="/login" class="text-primary font-black hover:underline underline-offset-4 ml-1">Đăng nhập</NuxtLink>
      </p>
    </div>
  </div>
</template>
