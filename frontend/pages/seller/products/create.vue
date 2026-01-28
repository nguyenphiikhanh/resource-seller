<script setup lang="ts">
import { ref } from 'vue'
import { 
  ArrowLeft, 
  Upload, 
  Save, 
  Info, 
  Plus, 
  X,
  FileText,
  Package,
  TrendingUp,
  Image as ImageIcon
} from 'lucide-vue-next'

definePageMeta({
  layout: 'member'
})

const formData = ref({
  name: '',
  category: '',
  price: '',
  description: '',
  stockType: 'list', // 'list' or 'file'
  content: '' // list of items or file path
})

const categories = [
  'Facebook Ads', 'TikTok Ads', 'Youtube / Google', 'Source Code', 'Tools / Software', 'VPS / Proxy'
]
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
    <div class="flex items-center gap-4">
      <NuxtLink to="/seller/products">
        <UiButton variant="ghost" size="icon" class="h-10 w-10 rounded-full">
          <ArrowLeft class="h-5 w-5" />
        </UiButton>
      </NuxtLink>
      <div>
        <h1 class="text-3xl font-extrabold tracking-tight">Thêm sản phẩm mới</h1>
        <p class="text-muted-foreground mt-1 text-sm font-medium">Đưa tài nguyên của bạn lên sàn để bắt đầu bán hàng.</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Form Column -->
      <div class="lg:col-span-2 space-y-6">
        <UiCard class="p-8 border-0 shadow-sm space-y-8">
          <div class="space-y-6">
            <h3 class="font-bold text-lg flex items-center gap-2 border-l-4 border-primary pl-4">
              Thông tin cơ bản
            </h3>
            
            <div class="space-y-2">
              <UiLabel class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tên sản phẩm <span class="text-primary">*</span></UiLabel>
              <UiInput v-model="formData.name" placeholder="Ví dụ: Via FB Ngoại Cổ - Đã XMDT" class="h-12 bg-muted/30 border-0 rounded-xl font-bold" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <UiLabel class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Danh mục <span class="text-primary">*</span></UiLabel>
                <UiSelect v-model="formData.category">
                  <UiSelectTrigger class="h-12 bg-muted/30 border-0 rounded-xl font-medium">
                    <UiSelectValue placeholder="Chọn danh mục" />
                  </UiSelectTrigger>
                  <UiSelectContent>
                    <UiSelectItem v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</UiSelectItem>
                  </UiSelectContent>
                </UiSelect>
              </div>
              <div class="space-y-2">
                <UiLabel class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Giá bán (VNĐ) <span class="text-primary">*</span></UiLabel>
                <div class="relative">
                  <UiInput v-model="formData.price" type="number" placeholder="0" class="h-12 bg-muted/30 border-0 rounded-xl font-bold pr-12" />
                  <span class="absolute right-4 top-3.5 text-xs text-muted-foreground font-bold">VNĐ</span>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <UiLabel class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Mô tả sản phẩm</UiLabel>
              <textarea 
                v-model="formData.description" 
                rows="5" 
                placeholder="Mô tả kỹ về sản phẩm, chính sách bảo hành, định dạng file..." 
                class="w-full bg-muted/30 border-0 rounded-xl p-4 text-sm font-medium focus:ring-1 focus:ring-primary outline-none"
              ></textarea>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="font-bold text-lg flex items-center gap-2 border-l-4 border-primary pl-4">
              Dữ liệu nhập kho (Inventory)
            </h3>

            <div class="flex p-1 bg-muted rounded-xl w-fit">
              <button 
                class="px-6 py-2 text-sm font-bold rounded-lg transition-all"
                :class="formData.stockType === 'list' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground'"
                @click="formData.stockType = 'list'"
              >
                Nhập danh sách (Raw)
              </button>
              <button 
                class="px-6 py-2 text-sm font-bold rounded-lg transition-all"
                :class="formData.stockType === 'file' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground'"
                @click="formData.stockType = 'file'"
              >
                Upload File
              </button>
            </div>

            <div v-if="formData.stockType === 'list'" class="space-y-2">
              <UiLabel class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Danh sách tài khoản (Mỗi dòng 1 acc)</UiLabel>
              <textarea 
                v-model="formData.content" 
                rows="8" 
                placeholder="User|Pass|2FA|Mail|PassMail..." 
                class="w-full bg-muted/30 border-0 rounded-xl p-4 text-xs font-mono focus:ring-1 focus:ring-primary outline-none"
              ></textarea>
              <p class="text-[10px] text-muted-foreground italic">Gợi ý: {{ formData.content.split('\n').filter(l => l.trim()).length }} sản phẩm được nhận diện.</p>
            </div>

            <div v-else class="space-y-4">
              <div class="border-2 border-dashed border-muted-foreground/20 rounded-2xl p-10 flex flex-col items-center justify-center bg-muted/10 group hover:border-primary/50 transition-colors cursor-pointer">
                <Upload class="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors mb-4" />
                <p class="font-bold text-sm">Nhấn để tải file lên hoặc kéo thả</p>
                <p class="text-[10px] text-muted-foreground mt-1">Hỗ trợ .ZIP, .XLSX, .TXT tối đa 50MB</p>
              </div>
            </div>
          </div>
        </UiCard>
      </div>

      <!-- Preview / Helper Column -->
      <div class="space-y-6">
        <UiCard class="p-6 border-0 shadow-sm space-y-6">
          <h3 class="font-bold text-sm uppercase tracking-widest text-muted-foreground">Hình ảnh sản phẩm</h3>
          <div class="aspect-square bg-muted rounded-2xl flex flex-col items-center justify-center border-2 border-dashed relative overflow-hidden group cursor-pointer">
            <ImageIcon class="h-10 w-10 text-muted-foreground group-hover:scale-110 transition-transform" />
            <p class="text-[10px] font-bold text-muted-foreground mt-2">TẢI ẢNH ĐẠI DIỆN</p>
            <!-- In real app, this would show the uploaded image -->
          </div>
          <div class="grid grid-cols-3 gap-2">
            <div class="aspect-square bg-muted rounded-lg border-2 border-dashed flex items-center justify-center cursor-pointer hover:bg-muted/80">
              <Plus class="h-4 w-4 text-muted-foreground" />
            </div>
            <div class="aspect-square bg-muted rounded-lg border-2 border-dashed"></div>
            <div class="aspect-square bg-muted rounded-lg border-2 border-dashed"></div>
          </div>
        </UiCard>

        <UiCard class="p-6 bg-primary/5 border border-primary/20 space-y-4">
          <div class="flex items-center gap-2 text-primary font-black text-xs uppercase italic">
            <TrendingUp class="h-4 w-4" /> Tip bán chạy
          </div>
          <p class="text-xs text-muted-foreground leading-relaxed">
            Sản phẩm có <b>mô tả chi tiết</b> và <b>định dạng rõ ràng</b> thường có tỷ lệ chuyển đổi cao hơn gấp 3 lần. Đừng quên ghi chú <b>thời gian bảo hành</b> nhé!
          </p>
        </UiCard>

        <div class="flex flex-col gap-3">
          <UiButton class="w-full h-14 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 gap-2">
            <Save class="h-5 w-5" /> Đăng sản phẩm
          </UiButton>
          <UiButton variant="outline" class="w-full h-14 rounded-2xl font-bold text-muted-foreground">
            Lưu nháp
          </UiButton>
        </div>
      </div>
    </div>
  </div>
</template>
