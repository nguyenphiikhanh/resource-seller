<script setup lang="ts">
import { ref } from 'vue'
import { 
  CreditCard, 
  Wallet, 
  ShieldCheck, 
  ShoppingBag, 
  ChevronRight, 
  CheckCircle2,
  Lock,
  Info,
  ArrowRight
} from 'lucide-vue-next'

const paymentMethods = [
  { id: 'wallet', name: 'Số dư ví hệ thống', icon: Wallet, description: 'Trừ trực tiếp từ số dư tài khoản của bạn', balance: '0đ' },
  { id: 'bank', name: 'Chuyển khoản ngân hàng', icon: CreditCard, description: 'Chuyển khoản qua mã QR tự động', available: true },
  { id: 'momo', name: 'Ví MoMo', icon: CreditCard, description: 'Thanh toán qua app MoMo cực nhanh', available: true },
]

const selectedPayment = ref('wallet')

const order = {
  id: 'ORD-8829-X1',
  product: 'Via Facebook Ngoại Cổ - Đã XMDT',
  shop: 'MMO Master Store',
  price: 120000,
  fee: 0,
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
}

const isProcessing = ref(false)
const isSuccess = ref(false)

const handleCheckout = () => {
  isProcessing.value = true
  // Simulate API call
  setTimeout(() => {
    isProcessing.value = false
    isSuccess.value = true
  }, 2000)
}
</script>

<template>
  <div class="min-h-screen bg-muted/10 py-10 md:py-20">
    <div class="container max-w-5xl">
      
      <div v-if="!isSuccess" class="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div class="flex items-center gap-3 mb-8">
          <NuxtLink to="/shops/mmo-master" class="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
            <ShoppingBag class="h-4 w-4" /> Cửa hàng
          </NuxtLink>
          <ChevronRight class="h-4 w-4 text-muted-foreground" />
          <span class="font-bold">Thanh toán</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left: Order & Payment -->
          <div class="lg:col-span-2 space-y-6">
            <UiCard class="p-6 md:p-8 space-y-8">
              <div>
                <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div class="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 class="h-5 w-5 text-primary" />
                  </div>
                  Xác nhận đơn hàng
                </h2>
                
                <div class="bg-muted/50 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div class="h-16 w-16 bg-background rounded-xl flex items-center justify-center border-2 border-primary/20 shrink-0">
                    <ShoppingBag class="h-8 w-8 text-primary" />
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-lg leading-tight">{{ order.product }}</h3>
                    <p class="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                      <Store class="h-3.5 w-3.5" /> {{ order.shop }}
                    </p>
                  </div>
                  <div class="text-right shrink-0">
                    <p class="text-xl font-extrabold text-primary">{{ formatCurrency(order.price) }}</p>
                    <p class="text-[10px] text-muted-foreground font-bold uppercase">x1 sản phẩm</p>
                  </div>
                </div>
              </div>

              <UiSeparator />

              <div>
                <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div class="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CreditCard class="h-5 w-5 text-primary" />
                  </div>
                  Phương thức thanh toán
                </h2>
                
                <div class="grid gap-4">
                  <template v-for="method in paymentMethods" :key="method.id">
                    <div 
                      class="relative border-2 rounded-2xl p-5 cursor-pointer transition-all duration-200"
                      :class="selectedPayment === method.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30 bg-card'"
                      @click="selectedPayment = method.id"
                    >
                      <div class="flex items-center gap-4">
                        <div class="h-6 w-6 rounded-full border-2 flex items-center justify-center" :class="selectedPayment === method.id ? 'border-primary' : 'border-muted-foreground'">
                          <div v-if="selectedPayment === method.id" class="h-3 w-3 rounded-full bg-primary animate-in fade-in zoom-in duration-200"></div>
                        </div>
                        <div class="flex-1 flex items-center justify-between">
                          <div>
                            <p class="font-bold text-base">{{ method.name }}</p>
                            <p class="text-xs text-muted-foreground mt-0.5">{{ method.description }}</p>
                          </div>
                          <div class="text-right">
                            <span v-if="method.balance" class="text-sm font-bold bg-muted px-2 py-1 rounded-md">{{ method.balance }}</span>
                            <component :is="method.icon" class="h-6 w-6 text-muted-foreground opacity-50" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </UiCard>
          </div>

          <!-- Right: Summary & Action -->
          <div class="lg:col-span-1">
            <div class="sticky top-24 space-y-6">
              <UiCard class="overflow-hidden shadow-2xl border-2 border-primary/20">
                <div class="bg-primary p-5 text-white">
                  <h3 class="font-bold text-lg flex items-center gap-2">
                    <Lock class="h-5 w-5" /> Thanh toán an toàn
                  </h3>
                </div>
                <UiCardContent class="p-6 space-y-6">
                  <div class="space-y-4">
                    <div class="flex justify-between text-sm">
                      <span class="text-muted-foreground">Giá sản phẩm</span>
                      <span class="font-bold">{{ formatCurrency(order.price) }}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-muted-foreground">Phí thanh toán (0%)</span>
                      <span class="font-bold">0đ</span>
                    </div>
                    <NuxtLink to="/user/wallet" class="flex items-center gap-2 text-primary font-bold text-xs hover:underline decoration-2 underline-offset-4">
                      <Info class="h-3.5 w-3.5" /> Nạp thêm tiền vào ví?
                    </NuxtLink>
                  </div>

                  <UiSeparator />

                  <div>
                    <div class="flex justify-between items-baseline mb-8">
                      <span class="text-lg font-bold">Tổng tiền</span>
                      <span class="text-3xl font-extrabold text-primary">{{ formatCurrency(order.price) }}</span>
                    </div>
                    
                    <UiButton 
                      class="w-full h-14 text-lg font-bold gap-3 rounded-2xl shadow-lg shadow-primary/20"
                      :disabled="isProcessing"
                      @click="handleCheckout"
                    >
                      <template v-if="isProcessing">
                        <span class="flex h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                        Đang xử lý...
                      </template>
                      <template v-else>
                        Thanh toán ngay <ArrowRight class="h-5 w-5" />
                      </template>
                    </UiButton>
                  </div>
                </UiCardContent>
              </UiCard>

              <div class="flex items-center justify-center gap-4 opacity-50 grayscale">
                <div class="h-8 w-12 bg-white border rounded"></div>
                <div class="h-8 w-12 bg-white border rounded"></div>
                <div class="h-8 w-12 bg-white border rounded"></div>
              </div>

              <div class="flex gap-3 text-center">
                <div class="p-3 rounded-xl bg-green-500/5 border border-green-500/10 flex-1">
                  <ShieldCheck class="h-5 w-5 text-green-600 mx-auto mb-1" />
                  <p class="text-[10px] font-bold text-green-700">Giao hàng ngay</p>
                </div>
                <div class="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 flex-1">
                  <Lock class="h-5 w-5 text-blue-600 mx-auto mb-1" />
                  <p class="text-[10px] font-bold text-blue-700">SSL Bảo mật</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Success View -->
      <div v-else class="max-w-2xl mx-auto text-center py-20 px-4 animate-in zoom-in-95 fade-in duration-500">
        <div class="h-24 w-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <CheckCircle2 class="h-16 w-16 text-green-500 animate-in bounce-in duration-700" />
          <div class="absolute inset-0 bg-green-500/10 rounded-full animate-ping h-full w-full"></div>
        </div>
        
        <h1 class="text-4xl font-extrabold tracking-tight mb-4">Thanh toán thành công!</h1>
        <p class="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          Cảm ơn bạn đã tin tưởng dịch vụ tại <span class="text-primary font-bold">MMO DUYLON</span>. Đơn hàng của bạn đã sẵn sàng để sử dụng.
        </p>
        
        <UiCard class="bg-card p-6 border-2 border-dashed border-primary/20 mb-10">
          <div class="flex justify-between items-center text-sm mb-4">
            <span class="text-muted-foreground">Mã đơn hàng:</span>
            <span class="font-mono font-bold">{{ order.id }}</span>
          </div>
          <div class="flex justify-between items-center text-sm">
            <span class="text-muted-foreground">Thời gian:</span>
            <span class="font-medium">28/01/2026 09:58</span>
          </div>
        </UiCard>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/user/orders">
            <UiButton size="lg" class="w-full sm:w-auto font-bold h-14 px-8 rounded-2xl gap-2">
              Xem đơn hàng mua <ArrowRight class="h-5 w-5" />
            </UiButton>
          </NuxtLink>
          <NuxtLink to="/">
            <UiButton variant="outline" size="lg" class="w-full sm:w-auto font-bold h-14 px-8 rounded-2xl">
              Tiếp tục mua sắm
            </UiButton>
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
@keyframes bounce-in {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
}

.animate-in.bounce-in {
  animation: bounce-in 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}
</style>
