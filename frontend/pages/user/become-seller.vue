<script setup lang="ts">
import { ref } from 'vue'
import { 
  Store, 
  Send, 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  BadgeAlert,
  HelpCircle,
  ArrowRight
} from 'lucide-vue-next'

definePageMeta({
  layout: 'member'
})

const shopName = ref('')
const slogan = ref('')
const category = ref('')
const experience = ref('')
const isSubmitted = ref(false)
const isLoading = ref(false)

const handleSubmit = () => {
  if (!shopName.value) return
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    isSubmitted.value = true
  }, 2000)
}
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
    <div v-if="!isSubmitted">
      <div class="mb-10 text-center">
        <div class="h-20 w-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border-2 border-primary/20 shadow-lg shadow-primary/5">
          <Store class="h-10 w-10 text-primary" />
        </div>
        <h1 class="text-4xl font-black tracking-tight">Đăng ký bán hàng</h1>
        <p class="text-muted-foreground mt-2 max-w-lg mx-auto font-medium">
          Mở rộng kinh doanh và tiếp cận hàng ngàn khách hàng tiềm năng trên hệ thống <span class="text-primary font-bold">MMO DUYLON</span>.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Form Section -->
        <div class="lg:col-span-2">
          <UiCard class="p-8 border-0 shadow-xl overflow-hidden relative">
            <div class="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-bl-full"></div>
            
            <form @submit.prevent="handleSubmit" class="space-y-6 relative z-10">
              <div class="space-y-2">
                <UiLabel for="shopName" class="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                  Tên gian hàng <span class="text-primary">*</span>
                </UiLabel>
                <div class="relative group">
                  <Store class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <UiInput 
                    id="shopName" 
                    v-model="shopName"
                    placeholder="Ví dụ: MMO Master Store" 
                    class="pl-10 h-12 bg-muted/30 border-0 focus-visible:ring-1 focus-visible:ring-primary rounded-xl font-bold"
                    required
                  />
                </div>
              </div>

              <div class="space-y-2">
                <UiLabel for="category" class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Lĩnh vực kinh doanh</UiLabel>
                <UiSelect v-model="category">
                  <UiSelectTrigger class="h-12 bg-muted/30 border-0 rounded-xl font-medium">
                    <UiSelectValue placeholder="Chọn lĩnh vực chính" />
                  </UiSelectTrigger>
                  <UiSelectContent>
                    <UiSelectItem value="fb">Tài khoản Facebook / Ads</UiSelectItem>
                    <UiSelectItem value="tt">Tài khoản TikTok / Ads</UiSelectItem>
                    <UiSelectItem value="code">Source Code / Software</UiSelectItem>
                    <UiSelectItem value="vps">VPS / Proxy / Server</UiSelectItem>
                    <UiSelectItem value="other">Các loại tài nguyên khác</UiSelectItem>
                  </UiSelectContent>
                </UiSelect>
              </div>

              <div class="space-y-2">
                <UiLabel for="experience" class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Mô tả kinh nghiệm / nguồn hàng</UiLabel>
                <textarea 
                  id="experience"
                  v-model="experience"
                  rows="4" 
                  placeholder="Giới thiệu ngắn gọn về nguồn hàng và cam kết bảo hành của bạn..." 
                  class="w-full bg-muted/30 border-0 rounded-xl p-4 text-sm font-medium focus:ring-1 focus:ring-primary outline-none"
                ></textarea>
                <p class="text-[10px] text-muted-foreground italic">* Thông tin này giúp Admin duyệt yêu cầu của bạn nhanh hơn.</p>
              </div>

              <div class="bg-primary/5 border border-primary/20 p-5 rounded-2xl space-y-4">
                <div class="flex items-center gap-2 text-primary font-bold text-sm">
                  <BadgeAlert class="h-4 w-4" /> Cam kết chung
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 class="h-3.5 w-3.5 text-green-500" /> Cung cấp hàng đúng như mô tả
                  </div>
                  <div class="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 class="h-3.5 w-3.5 text-green-500" /> Bảo hành lỗi theo đúng cam kết ghi trên sản phẩm
                  </div>
                  <div class="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 class="h-3.5 w-3.5 text-green-500" /> Không bán hàng copy, hàng scan lừa đảo
                  </div>
                </div>
              </div>

              <UiButton 
                type="submit" 
                class="w-full h-14 rounded-2xl font-extrabold text-lg shadow-lg shadow-primary/20 gap-3 group"
                :disabled="isLoading"
              >
                <template v-if="isLoading">
                  <span class="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Đang gửi yêu cầu...
                </template>
                <template v-else>
                  Gửi yêu cầu xét duyệt <ArrowRight class="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </template>
              </UiButton>
            </form>
          </UiCard>
        </div>

        <!-- Info Sidebar -->
        <div class="space-y-6">
          <UiCard class="p-6 border-0 shadow-sm space-y-6">
            <h3 class="font-bold text-base flex items-center gap-2">
              <HelpCircle class="h-4 w-4 text-primary" /> Tại sao nên bán hàng?
            </h3>
            <div class="space-y-4">
              <div class="flex gap-4">
                <div class="h-8 w-8 bg-blue-500/10 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <TrendingUp class="h-4 w-4" />
                </div>
                <div>
                  <p class="text-xs font-bold uppercase tracking-tighter">Phí sàn thấp</p>
                  <p class="text-[11px] text-muted-foreground mt-0.5">Sàn chỉ thu 5% hoa hồng trên mỗi đơn hàng thành công.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="h-8 w-8 bg-green-500/10 text-green-600 rounded-lg flex items-center justify-center shrink-0">
                  <History class="h-4 w-4" />
                </div>
                <div>
                  <p class="text-xs font-bold uppercase tracking-tighter">Giao hàng tự động</p>
                  <p class="text-[11px] text-muted-foreground mt-0.5">Hệ thống tự động trả hàng 24/7, bạn không cần online.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="h-8 w-8 bg-purple-500/10 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
                  <ShieldCheck class="h-4 w-4" />
                </div>
                <div>
                  <p class="text-xs font-bold uppercase tracking-tighter">Cổng thanh toán</p>
                  <p class="text-[11px] text-muted-foreground mt-0.5">Hỗ trợ đầy đủ Bank, MoMo, Crypto cho người mua.</p>
                </div>
              </div>
            </div>
          </UiCard>

          <UiCard class="p-5 bg-yellow-500/5 border border-yellow-500/10 flex gap-3">
            <AlertTriangle class="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
            <p class="text-xs text-yellow-700/80 leading-relaxed font-medium">
              Admin sẽ duyệt yêu cầu của bạn trong vòng 2-12 tiếng. Hãy đảm bảo thông tin liên hệ chính xác.
            </p>
          </UiCard>
        </div>
      </div>
    </div>

    <!-- Success View -->
    <div v-else class="max-w-xl mx-auto py-20 text-center animate-in zoom-in-95 duration-500">
      <div class="h-24 w-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-xl">
        <Send class="h-10 w-10 text-green-600" />
      </div>
      <h1 class="text-4xl font-black mb-4 tracking-tight">Gửi yêu cầu thành công!</h1>
      <p class="text-muted-foreground text-lg mb-10 font-medium">
        Cảm ơn bạn đã quan tâm. Admin đang xem xét hồ sơ gian hàng <span class="text-primary font-bold">{{ shopName }}</span> của bạn.
      </p>
      
      <div class="p-6 bg-card rounded-2xl border-2 border-dashed border-primary/20 mb-10 flex items-center gap-4 text-left">
        <div class="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
          <Clock class="h-5 w-5 text-primary" />
        </div>
        <div>
          <p class="text-sm font-bold">Thời gian chờ dự kiến: <span class="text-primary">~6 giờ</span></p>
          <p class="text-xs text-muted-foreground">Chúng tôi sẽ thông báo cho bạn ngay khi có kết quả.</p>
        </div>
      </div>
      
      <NuxtLink to="/user/dashboard">
        <UiButton size="lg" class="h-14 px-10 font-bold rounded-2xl shadow-lg shadow-primary/20">Quay lại Dashboard</UiButton>
      </NuxtLink>
    </div>
  </div>
</template>
