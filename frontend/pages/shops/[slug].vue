<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'nuxt/app'
import { 
  Store, 
  Star, 
  Calendar, 
  ShieldCheck, 
  ShoppingBag, 
  Info, 
  Eye, 
  CheckCircle2,
  Package,
  ArrowRight,
  TrendingUp,
  AlertTriangle
} from 'lucide-vue-next'

const route = useRoute()
const slug = route.params.slug

// --- MOCK SHOP DATA ---
const shop = {
  name: 'MMO Master Store',
  slug: 'mmo-master',
  logo: 'https://cdn-icons-png.flaticon.com/512/3665/3665923.png',
  banner: 'https://images.unsplash.com/photo-1614850523296-e8c041df43a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  rating: 4.9,
  reviewsCount: 1250,
  joinedDate: 'Jan 2024',
  isVerified: true,
  slogan: 'Cung cấp tài nguyên MMO uy tín, chất lượng số 1 Việt Nam.',
  announcement: '🔥 Giảm giá ngay 10% cho đơn hàng đầu tiên! Chào mừng bạn đến với MMO Master Store.',
}

// --- MOCK PRODUCTS ---
const products = [
  {
    id: 'p1',
    name: 'Via Facebook Ngoại Cổ - Đã XMDT',
    price: 120000,
    stock: 25,
    description: 'Via ngoại quốc (US, UK, DE) reg cổ từ 2010-2015. Đã xác minh danh tính, trust cực cao, bao add ads. Định dạng: UID|Pass|2FA|Mail|PassMail',
    details: [
      'Năm reg: 2010-2015',
      'Xác minh danh tính: Có',
      'Bảo hành: Login 24h',
      'Khuyến nghị: Thay pass và logout thiết bị lạ ngay khi nhận'
    ],
    category: 'Facebook'
  },
  {
    id: 'p2',
    name: 'TikTok Ads US - Business Center (BC)',
    price: 350000,
    stock: 12,
    description: 'Tài khoản quảng cáo TikTok US. BC 500$, trust cao, hỗ trợ nạp tiền qua cổng crypto hoặc bank. Thích hợp cho ae Dropshipping, POD.',
    details: [
      'Loại tài khoản: Business Center',
      'Quốc gia: United States',
      'Bảo hành: 1-1 nếu lỗi login',
      'Limit: 500$/ngày'
    ],
    category: 'TikTok'
  },
  {
    id: 'p3',
    name: 'Youtube Channel BKT - 1k Subs',
    price: 3500000,
    stock: 3,
    description: 'Kênh Youtube đã bật kiếm tiền, 1000 sub thật, đã nối GA. Sẵn sàng đăng video earn money ngay. Không gậy, không vi phạm chính sách.',
    details: [
      'Subscribers: 1000+',
      'Watch time: 4000h+',
      'Bật kiếm tiền: Có',
      'Bảo hành: 7 ngày gậy community'
    ],
    category: 'Youtube'
  },
  {
    id: 'p4',
    name: 'Gmail Cổ 2012-2014 - Ngâm Sẵn',
    price: 15000,
    stock: 500,
    description: 'Gmail reg từ 10 năm trước, đã ngâm trên IP sạch. Trust cực cao, dùng reg acc game, tool, mxh không bao giờ die.',
    details: [
      'Năm reg: 2012-2014',
      'Mail khôi phục: Có',
      'Bảo hành: Sai pass 1 đổi 1',
      ' Định dạng: User|Pass|MailKP'
    ],
    category: 'Google'
  }
]

const selectedProductId = ref(products[0].id)
const selectedProduct = computed(() => products.find(p => p.id === selectedProductId.value))

const isDetailModalOpen = ref(false)
const productToView = ref(null)

const openQuickView = (product) => {
  productToView.value = product
  isDetailModalOpen.value = true
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
}
</script>

<template>
  <div class="min-h-screen bg-muted/10 pb-20">
    <!-- Shop Header Section -->
    <div class="relative">
      <!-- Banner -->
      <div class="h-48 md:h-64 w-full overflow-hidden">
        <img :src="shop.banner" class="h-full w-full object-cover" alt="Shop Banner" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <!-- Shop Info Card -->
      <div class="container relative -mt-16 z-10">
        <Card class="p-6 md:p-8 shadow-xl border-t-4 border-t-primary">
          <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <Avatar class="h-24 w-24 md:h-32 md:w-32 border-4 border-background shadow-lg rounded-2xl">
              <AvatarImage :src="shop.logo" />
              <AvatarFallback>{{ shop.name.charAt(0) }}</AvatarFallback>
            </Avatar>
            
            <div class="flex-1 space-y-2">
              <div class="flex items-center gap-2">
                <h1 class="text-2xl md:text-3xl font-extrabold tracking-tight">{{ shop.name }}</h1>
                <CheckCircle2 v-if="shop.isVerified" class="h-6 w-6 text-blue-500 fill-blue-500/10" />
              </div>
              <p class="text-muted-foreground font-medium">{{ shop.slogan }}</p>
              
              <div class="flex flex-wrap gap-4 pt-2">
                <div class="flex items-center gap-1.5 text-sm font-semibold bg-muted px-3 py-1 rounded-full">
                  <Star class="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  {{ shop.rating }} <span class="text-muted-foreground font-normal">({{ shop.reviewsCount }} đánh giá)</span>
                </div>
                <div class="flex items-center gap-1.5 text-sm font-semibold bg-muted px-3 py-1 rounded-full text-muted-foreground">
                  <Calendar class="h-4 w-4" />
                  Tham gia: {{ shop.joinedDate }}
                </div>
                <div class="flex items-center gap-1.5 text-sm font-semibold bg-green-500/10 text-green-600 px-3 py-1 rounded-full">
                  <ShieldCheck class="h-4 w-4" />
                  Uy tín đảm bảo
                </div>
              </div>
            </div>
            
            <div class="hidden lg:flex flex-col gap-2 items-end">
              <div class="text-right">
                <p class="text-sm text-muted-foreground">Tỷ lệ hoàn thành</p>
                <p class="text-2xl font-bold font-mono text-primary">99.8%</p>
              </div>
              <Button variant="outline" class="gap-2">
                <TrendingUp class="h-4 w-4" /> Báo cáo vi phạm
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>

    <div class="container py-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left: Product Selection Expansion -->
        <div class="lg:col-span-2 space-y-6">
          <Alert class="bg-primary/5 border-primary/20 text-primary mb-6">
            <Info class="h-4 w-4" />
            <AlertTitle class="font-bold">Lưu ý từ Người Bán</AlertTitle>
            <AlertDescription>
              {{ shop.announcement }}
            </AlertDescription>
          </Alert>

          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-bold flex items-center gap-2">
              <Package class="h-5 w-5 text-primary" /> Danh sách sản phẩm
            </h2>
            <div class="text-sm text-muted-foreground">
              Sẵn có: <span class="font-bold text-foreground">{{ products.length }}</span> loại sản phẩm
            </div>
          </div>

          <!-- Radio Cards for Products -->
          <RadioGroup v-model="selectedProductId" class="grid gap-4">
            <template v-for="product in products" :key="product.id">
              <div 
                class="relative border-2 rounded-2xl p-4 md:p-6 transition-all duration-200 cursor-pointer group"
                :class="selectedProductId === product.id ? 'border-primary bg-primary/5 shadow-md shadow-primary/5' : 'border-border hover:border-primary/50 bg-card hover:shadow-sm'"
                @click="selectedProductId = product.id"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1 space-y-2">
                    <div class="flex items-center gap-3">
                      <RadioGroupItem :value="product.id" :id="product.id" class="sr-only" />
                      <div class="h-5 w-5 rounded-full border-2 flex items-center justify-center" :class="selectedProductId === product.id ? 'border-primary' : 'border-muted-foreground'">
                        <div v-if="selectedProductId === product.id" class="h-2.5 w-2.5 rounded-full bg-primary"></div>
                      </div>
                      <h3 class="font-bold text-lg">{{ product.name }}</h3>
                    </div>
                    
                    <p class="text-sm text-muted-foreground line-clamp-2 md:pl-8">
                      {{ product.description }}
                    </p>

                    <div class="flex flex-wrap gap-2 pt-2 md:pl-8">
                      <Badge variant="secondary" class="text-[10px] uppercase font-bold tracking-wider">
                        {{ product.category }}
                      </Badge>
                      <Badge variant="outline" class="text-[10px] uppercase font-bold">
                        Còn: {{ product.stock }}
                      </Badge>
                    </div>
                  </div>

                  <div class="flex flex-col items-end gap-4 ml-4">
                    <div class="text-right">
                      <p class="text-xl font-extrabold text-primary">{{ formatCurrency(product.price) }}</p>
                      <p class="text-[10px] text-muted-foreground uppercase font-bold">Giá bán lẻ</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      class="h-8 gap-1.5 text-xs font-bold"
                      @click.stop="openQuickView(product)"
                    >
                      <Eye class="h-3.5 w-3.5" /> Xem chi tiết
                    </Button>
                  </div>
                </div>
              </div>
            </template>
          </RadioGroup>
        </div>

        <!-- Right: Checkout Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-24 space-y-6">
            <Card class="overflow-hidden border-2 border-primary/20 shadow-lg">
              <div class="bg-primary p-4 text-white">
                <h3 class="font-bold text-lg flex items-center gap-2">
                  <ShoppingBag class="h-5 w-5" /> Thông tin đơn hàng
                </h3>
              </div>
              <CardContent class="p-6 space-y-6">
                <div v-if="selectedProduct" class="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <p class="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-bold text-[10px]">Tài nguyên đã chọn</p>
                  <h4 class="font-bold text-lg">{{ selectedProduct.name }}</h4>
                  
                  <div class="mt-4 space-y-3">
                    <div class="flex justify-between text-sm py-2 border-b border-dashed">
                      <span class="text-muted-foreground">Đơn giá</span>
                      <span class="font-bold">{{ formatCurrency(selectedProduct.price) }}</span>
                    </div>
                    <div class="flex justify-between text-sm py-2 border-b border-dashed">
                      <span class="text-muted-foreground">Số lượng</span>
                      <span class="font-bold">1</span>
                    </div>
                  </div>

                  <div class="mt-8">
                    <div class="flex justify-between items-baseline mb-6">
                      <span class="text-lg font-bold">Tổng thanh toán</span>
                      <span class="text-3xl font-extrabold text-primary">{{ formatCurrency(selectedProduct.price) }}</span>
                    </div>
                    
                    <NuxtLink to="/checkout" class="block">
                      <Button class="w-full h-14 text-lg font-bold gap-3 rounded-2xl shadow-lg shadow-primary/20">
                        Mua ngay <ArrowRight class="h-5 w-5" />
                      </Button>
                    </NuxtLink>
                    
                    <p class="text-[11px] text-center text-muted-foreground mt-4 leading-relaxed px-4">
                      Bằng cách nhấn "Mua ngay", bạn đồng ý với <a href="#" class="text-primary hover:underline underline-offset-2">Điều khoản dịch vụ</a> của hệ thống.
                    </p>
                  </div>
                </div>
                <div v-else class="text-center py-10 text-muted-foreground">
                  <ShoppingBag class="h-12 w-12 mx-auto mb-4 opacity-20" />
                  Vui lòng chọn sản phẩm bạn muốn mua
                </div>
              </CardContent>
            </Card>

            <Card class="p-4 bg-yellow-500/5 border-yellow-500/10">
              <div class="flex gap-3">
                <AlertTriangle class="h-5 w-5 text-yellow-600 shrink-0" />
                <div>
                  <h5 class="font-bold text-sm text-yellow-800">Quy định bảo hành</h5>
                  <p class="text-xs text-yellow-700/80 mt-1 leading-relaxed">
                    Mọi giao dịch đều được bảo đảm trong 24h đối với lỗi login lần đầu. Hãy đọc kỹ mô tả trước khi mua.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Detail Modal -->
    <Dialog v-model:open="isDetailModalOpen">
      <DialogContent class="sm:max-w-[600px] p-0 overflow-hidden rounded-3xl">
        <div v-if="productToView" class="animate-in zoom-in-95 duration-200">
          <div class="bg-muted p-8 text-center relative">
            <div class="h-20 w-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
              <Package class="h-10 w-10 text-primary" />
            </div>
            <h2 class="text-2xl font-bold tracking-tight">{{ productToView.name }}</h2>
            <Badge class="mt-2 bg-primary/20 text-primary hover:bg-primary/30 border-0">{{ productToView.category }}</Badge>
          </div>
          
          <div class="p-8 space-y-6">
            <div>
              <h3 class="font-bold mb-3 flex items-center gap-2">
                <Info class="h-4 w-4 text-primary" /> Mô tả chi tiết
              </h3>
              <p class="text-muted-foreground leading-relaxed">
                {{ productToView.description }}
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 class="font-bold mb-3 text-sm text-muted-foreground uppercase tracking-wider">Thông số kỹ thuật</h3>
                <ul class="space-y-2">
                  <li v-for="(detail, i) in productToView.details" :key="i" class="flex items-center gap-2 text-sm">
                    <CheckCircle2 class="h-4 w-4 text-green-500" />
                    {{ detail }}
                  </li>
                </ul>
              </div>
              <div class="bg-muted/50 p-4 rounded-2xl flex flex-col justify-center items-center">
                <p class="text-sm text-muted-foreground mb-1">Giá bán</p>
                <p class="text-3xl font-extrabold text-primary">{{ formatCurrency(productToView.price) }}</p>
                <p class="text-xs text-muted-foreground mt-2">Sẵn trong kho: {{ productToView.stock }}</p>
              </div>
            </div>

            <Button class="w-full h-12 font-bold text-base" @click="selectedProductId = productToView.id; isDetailModalOpen = false">
              Chọn mua sản phẩm này
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>

  </div>
</template>

<style scoped>
/* Standard styles ignored in favor of Tailwind, but we can add micro-animations */
.container {
  max-width: 1280px;
}
</style>
