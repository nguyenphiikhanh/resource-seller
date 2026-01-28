<script setup lang="ts">
import { ref } from 'vue'
import { 
  Mail, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2,
  AlertCircle
} from 'lucide-vue-next'

definePageMeta({
  layout: 'guest'
})

const email = ref('')
const isLoading = ref(false)
const isSent = ref(false)

const handleReset = () => {
  if (!email.value) return
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    isSent.value = true
  }, 1500)
}
</script>

<template>
  <Card class="border-0 shadow-2xl overflow-hidden bg-background/60 backdrop-blur-xl">
    <div class="h-1.5 w-full bg-primary/20">
      <div class="h-full bg-primary animate-in slide-in-from-left duration-1000" :style="{ width: isSent ? '100%' : '30%' }"></div>
    </div>
    
    <CardContent class="p-8 md:p-10">
      <div v-if="!isSent" class="animate-in fade-in slide-in-from-bottom-2">
        <div class="mb-8">
          <NuxtLink to="/login" class="inline-flex items-center text-xs font-bold text-muted-foreground hover:text-primary transition-colors gap-1 mb-4 uppercase tracking-wider">
            <ArrowLeft class="h-3.5 w-3.5" /> Quay lại đăng nhập
          </NuxtLink>
          <h1 class="text-3xl font-extrabold tracking-tight">Quên mật khẩu?</h1>
          <p class="text-muted-foreground mt-2 font-medium">Nhập email để nhận liên kết khôi phục tài khoản của bạn.</p>
        </div>

        <form @submit.prevent="handleReset" class="space-y-6">
          <div class="space-y-2">
            <Label for="email" class="font-bold text-xs uppercase tracking-wider text-muted-foreground">Email của bạn</Label>
            <div class="relative group">
              <Mail class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <Input 
                id="email" 
                v-model="email"
                type="email" 
                placeholder="example@mail.com" 
                class="pl-10 h-14 bg-muted/30 border-0 focus-visible:ring-1 focus-visible:ring-primary rounded-xl text-lg"
                required
              />
            </div>
          </div>

          <div class="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex gap-3">
            <AlertCircle class="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
            <p class="text-xs text-blue-700/80 leading-relaxed font-medium">
              Vui lòng kiểm tra kỹ cả thư mục <b>Spam</b> hoặc <b>Quảng cáo</b> nếu bạn không tìm thấy email trong hộp thư đến.
            </p>
          </div>

          <Button 
            type="submit" 
            class="w-full h-14 rounded-2xl font-extrabold text-lg shadow-lg shadow-primary/20 gap-3 group"
            :disabled="isLoading"
          >
            <template v-if="isLoading">
              <span class="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              Đang gửi...
            </template>
            <template v-else>
              Gửi liên kết khôi phục <ArrowRight class="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </template>
          </Button>
        </form>
      </div>

      <div v-else class="text-center py-6 animate-in zoom-in-95 duration-500">
        <div class="h-20 w-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 class="h-10 w-10 text-green-500" />
        </div>
        <h2 class="text-2xl font-extrabold tracking-tight mb-4">Kiểm tra Email!</h2>
        <p class="text-muted-foreground mb-8 text-sm leading-relaxed max-w-xs mx-auto">
          Chúng tôi đã gửi liên kết khôi phục mật khẩu đến <br><b class="text-foreground">{{ email }}</b>.
        </p>
        <Button 
          variant="outline" 
          class="w-full h-12 rounded-xl font-bold gap-2"
          @click="isSent = false"
        >
          <ArrowLeft class="h-4 w-4" /> Thử lại với email khác
        </Button>
        
        <div class="mt-8 border-t pt-8">
          <NuxtLink to="/login" class="text-primary font-bold text-sm hover:underline underline-offset-4">
            Quay lại trang Đăng nhập
          </NuxtLink>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
