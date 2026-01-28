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
  <Card class="border-0 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden bg-background/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 dark:border-white/5 w-full">
    <!-- Top progress bar -->
    <div class="h-1.5 w-full bg-muted">
      <div class="h-full bg-primary animate-in slide-in-from-left duration-1000" style="width: 60%"></div>
    </div>
    
    <CardContent class="p-8 md:p-10">
      <div class="mb-8">
        <h1 class="text-3xl font-extrabold tracking-tight">Tham gia ngay</h1>
        <p class="text-muted-foreground mt-2 font-medium">Trở thành thành viên của cộng đồng MMO uy tín.</p>
      </div>

      <form @submit.prevent="handleRegister" class="space-y-6">
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-2">
            <Label for="firstName" class="font-black text-[10px] uppercase tracking-widest text-muted-foreground/70 ml-1">Họ & Tên đệm</Label>
            <Input 
              id="firstName" 
              v-model="firstName"
              placeholder="Nguyễn Văn" 
              class="h-14 bg-muted/40 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-2xl font-bold px-5"
            />
          </div>
          <div class="space-y-2">
            <Label for="lastName" class="font-black text-[10px] uppercase tracking-widest text-muted-foreground/70 ml-1">Tên</Label>
            <Input 
              id="lastName" 
              v-model="lastName"
              placeholder="Tài Duy" 
              class="h-14 bg-muted/40 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-2xl font-bold px-5"
            />
          </div>
        </div>

        <div class="space-y-2">
          <Label for="username" class="font-black text-[10px] uppercase tracking-widest text-muted-foreground/70 ml-1">Tên người dùng</Label>
          <div class="relative group">
            <User class="absolute left-4 top-4 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input 
              id="username" 
              v-model="username"
              placeholder="duylon_mmo" 
              class="pl-12 h-14 bg-muted/40 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-2xl font-bold"
            />
          </div>
        </div>

        <div class="space-y-2">
          <Label for="email" class="font-black text-[10px] uppercase tracking-widest text-muted-foreground/70 ml-1">Email</Label>
          <div class="relative group">
            <Mail class="absolute left-4 top-4 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input 
              id="email" 
              v-model="email"
              type="email" 
              placeholder="example@mail.com" 
              class="pl-12 h-14 bg-muted/40 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-2xl font-bold"
            />
          </div>
        </div>

        <div class="space-y-2">
          <Label for="password" class="font-black text-[10px] uppercase tracking-widest text-muted-foreground/70 ml-1">Mật khẩu</Label>
          <div class="relative group">
            <Lock class="absolute left-4 top-4 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input 
              id="password" 
              v-model="password"
              type="password" 
              placeholder="••••••••" 
              class="pl-12 h-14 bg-muted/40 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-2xl font-bold"
            />
          </div>
        </div>

        <div class="space-y-2">
          <Label for="confirmPassword" class="font-black text-[10px] uppercase tracking-widest text-muted-foreground/70 ml-1">Xác nhận mật khẩu</Label>
          <div class="relative group">
            <Lock class="absolute left-4 top-4 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input 
              id="confirmPassword" 
              v-model="confirmPassword"
              type="password" 
              placeholder="••••••••" 
              class="pl-12 h-14 bg-muted/40 border-0 focus-visible:ring-2 focus-visible:ring-primary/20 rounded-2xl font-bold"
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

        <div 
          class="relative flex flex-col gap-4 p-5 rounded-[2rem] border transition-all cursor-pointer group"
          :class="agreeTerms ? 'bg-primary/[0.03] border-primary/30 shadow-sm' : 'bg-muted/30 border-transparent hover:bg-muted/50'"
          @click="agreeTerms = !agreeTerms"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div 
                class="h-6 w-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300"
                :class="agreeTerms ? 'bg-primary border-primary scale-110' : 'border-muted-foreground/30 bg-background'"
              >
                <CheckCircle2 v-if="agreeTerms" class="h-4 w-4 text-white" />
              </div>
              <p class="text-[11px] font-black uppercase tracking-widest text-muted-foreground/80">Điều khoản sử dụng</p>
            </div>
            <div v-if="agreeTerms" class="text-[10px] font-black text-primary animate-in fade-in zoom-in duration-300">ĐÃ CHẤP NHẬN</div>
          </div>
          
          <p class="text-xs font-medium leading-relaxed text-muted-foreground/70 pl-9">
            Tôi xác nhận đã đọc và hoàn toàn đồng ý thỏa thuận với <a href="#" class="text-primary hover:underline font-bold" @click.stop>Điều khoản dịch vụ</a> và <a href="#" class="text-primary hover:underline font-bold" @click.stop>Chính sách bảo mật</a> của sàn.
          </p>
        </div>

        <Button 
          type="submit" 
          class="w-full h-14 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 gap-3 group bg-primary hover:bg-primary/90 transition-all active:scale-[0.98]"
          :disabled="isLoading || !agreeTerms"
        >
          <template v-if="isLoading">
            <span class="h-5 w-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
            ĐANG XỬ LÝ...
          </template>
          <template v-else>
            ĐĂNG KÝ NGAY <ArrowRight class="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </template>
        </Button>
      </form>

      <div class="mt-8 text-center border-t pt-8">
        <p class="text-sm text-muted-foreground">
          Đã có tài khoản? 
          <NuxtLink to="/login" class="text-primary font-bold hover:underline underline-offset-4 ml-1">Đăng nhập</NuxtLink>
        </p>
      </div>
    </CardContent>
  </Card>
</template>
