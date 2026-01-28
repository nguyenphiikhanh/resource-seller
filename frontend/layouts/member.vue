<script setup lang="ts">
import { ref } from 'vue'
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Wallet, 
  Settings, 
  Store, 
  LogOut, 
  Menu,
  Bell,
  Search,
  User,
  ChevronRight
} from 'lucide-vue-next'
import { APP_NAME } from "@/constants/app"

const { user, isSeller, logout } = useAuth()
const route = useRoute()
const isSidebarOpen = ref(false)

// Determine if we are in seller mode based on the current URL
const isSellerMode = computed(() => route.path.startsWith('/seller'))

const navigation = [
  { name: 'Dashboard', href: '/user/dashboard', icon: LayoutDashboard },
  { name: 'Đơn hàng', href: '/user/orders', icon: ShoppingBag },
  { name: 'Ví tiền', href: '/user/wallet', icon: Wallet },
  { name: 'Cài đặt', href: '/user/settings', icon: Settings },
  { name: 'Bán hàng', href: '/user/become-seller', icon: Store, divider: true },
]

const sellerNavigation = [
  { name: 'Seller Dashboard', href: '/seller/dashboard', icon: LayoutDashboard },
  { name: 'Quản lý sản phẩm', href: '/seller/products', icon: ShoppingBag },
  { name: 'Cấu hình gian hàng', href: '/seller/shop-settings', icon: Store },
  { name: 'Đơn hàng bán', href: '/seller/orders', icon: ShoppingBag },
]

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="flex min-h-screen bg-muted/20 text-slate-900 dark:text-slate-100 italic-none">
    <!-- Desktop Sidebar -->
    <aside class="hidden w-64 border-r bg-background lg:block">
      <div class="flex h-16 items-center border-b px-6">
        <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-red-600 text-white shadow-lg shadow-primary/20">
            <span class="text-sm">M</span>
          </div>
          <span>MMO <span class="text-primary">{{ APP_NAME }}</span></span>
        </NuxtLink>
      </div>
      <div class="flex flex-col gap-2 p-4">
        <!-- Dashboard / Home Link -->
        <NuxtLink 
          to="/"
          class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-black transition-all hover:bg-muted group mb-4"
        >
          <div class="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Store class="h-4 w-4" />
          </div>
          Về Trang Chủ
        </NuxtLink>

        <!-- Dynamic Navigation based on Role & Path -->
        <template v-if="isSellerMode && (user.role === 'seller' || user.role === 'admin')">
          <div class="px-2 mb-2">
            <p class="text-[10px] font-black uppercase tracking-widest text-primary italic">Kênh Người Bán</p>
          </div>
          <NuxtLink 
            v-for="item in sellerNavigation" 
            :key="item.name" 
            :to="item.href"
            class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition-all hover:bg-muted group"
            active-class="bg-primary/10 text-primary shadow-sm"
          >
            <component :is="item.icon" class="h-4 w-4 transition-transform group-hover:scale-110" />
            {{ item.name }}
          </NuxtLink>
          
          <div class="mt-6 px-2">
            <NuxtLink to="/user/dashboard" class="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <ChevronRight class="h-3 w-3 rotate-180" /> Chuyển tới Mua hàng
            </NuxtLink>
          </div>
        </template>

        <template v-else>
          <div class="px-2 mb-2">
            <p class="text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">Cá Nhân</p>
          </div>
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name" 
            :to="item.href"
            class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition-all hover:bg-muted group"
            active-class="bg-primary/10 text-primary shadow-sm"
          >
            <component :is="item.icon" class="h-4 w-4 transition-transform group-hover:scale-110" />
            {{ item.name }}
          </NuxtLink>

          <div v-if="user.role === 'seller' || user.role === 'admin'" class="mt-6 px-2">
            <NuxtLink to="/seller/dashboard" class="text-[10px] font-black uppercase tracking-widest text-primary hover:underline transition-colors flex items-center gap-2">
              Chuyển tới Bán hàng <ChevronRight class="h-3 w-3" />
            </NuxtLink>
          </div>
        </template>
      </div>
      <div class="mt-auto border-t p-4">
        <button @click="logout(); navigateTo('/login')" class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-destructive transition-colors hover:bg-destructive/10">
          <LogOut class="h-4 w-4" />
          Đăng xuất
        </button>
      </div>
    </aside>

    <!-- Mobile Sidebar (Sheet) -->
    <Sheet v-model:open="isSidebarOpen">
      <SheetContent side="left" class="w-64 p-0">
        <div class="flex h-16 items-center border-b px-6">
          <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl tracking-tighter" @click="isSidebarOpen = false">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-red-600 text-white shadow-lg shadow-primary/20">
              <span class="text-sm">M</span>
            </div>
            <span>MMO <span class="text-primary">{{ APP_NAME }}</span></span>
          </NuxtLink>
        </div>
        <div class="flex flex-col gap-2 p-4">
          <template v-if="isSellerMode && (user.role === 'seller' || user.role === 'admin')">
            <p class="mb-2 px-2 text-[10px] font-black uppercase tracking-widest text-primary italic">Kênh Người Bán</p>
            <NuxtLink 
              v-for="item in sellerNavigation" 
              :key="item.name" 
              :to="item.href"
              class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition-all hover:bg-muted"
              active-class="bg-primary/10 text-primary shadow-sm"
              @click="isSidebarOpen = false"
            >
              <component :is="item.icon" class="h-4 w-4" />
              {{ item.name }}
            </NuxtLink>
            <Separator class="my-4 opacity-50" />
            <NuxtLink to="/user/dashboard" class="px-2 text-xs font-bold text-muted-foreground hover:text-primary" @click="isSidebarOpen = false">
              ← Về mua hàng
            </NuxtLink>
          </template>

          <template v-else>
            <p class="mb-2 px-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">Người Mua</p>
            <NuxtLink 
              v-for="item in navigation" 
              :key="item.name" 
              :to="item.href"
              class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition-all hover:bg-muted"
              active-class="bg-primary/10 text-primary shadow-sm"
              @click="isSidebarOpen = false"
            >
              <component :is="item.icon" class="h-4 w-4" />
              {{ item.name }}
            </NuxtLink>
            <template v-if="user.role === 'seller' || user.role === 'admin'">
              <Separator class="my-4 opacity-50" />
              <NuxtLink to="/seller/dashboard" class="px-2 text-xs font-bold text-primary hover:underline" @click="isSidebarOpen = false">
                Chuyển tới Bán hàng →
              </NuxtLink>
            </template>
          </template>
        </div>
        <div class="mt-auto border-t p-4 px-6 absolute bottom-0 left-0 w-full">
          <button @click="logout(); navigateTo('/login'); isSidebarOpen = false" class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-destructive transition-colors hover:bg-destructive/10">
            <LogOut class="h-4 w-4" />
            Đăng xuất
          </button>
        </div>
      </SheetContent>
    </Sheet>

    <!-- Main Content Area -->
    <div class="flex flex-1 flex-col">
      <!-- Top header -->
      <header class="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-md lg:px-8">
        <div class="flex items-center gap-4">
          <button class="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors" @click="toggleSidebar">
            <Menu class="h-6 w-6" />
          </button>
          <div class="relative hidden max-w-md items-center md:flex group">
            <Search class="absolute left-3.5 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input 
              placeholder="Tìm kiếm nhanh..." 
              class="w-64 pl-10 md:w-80 h-10 border-0 bg-muted/50 focus-visible:ring-1 focus-visible:ring-primary rounded-xl"
            />
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2 rounded-xl border bg-card px-4 py-2 text-sm font-black shadow-sm">
            <Wallet class="h-4 w-4 text-primary" />
            <span>{{ user.balance }}</span>
          </div>
          
          <button class="relative rounded-xl p-2.5 hover:bg-muted transition-colors">
            <Bell class="h-5 w-5" />
            <span class="absolute top-2.5 right-2.5 flex h-2 w-2 rounded-full bg-primary ring-2 ring-background"></span>
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <button class="flex items-center gap-2 rounded-xl bg-card border px-2 py-1.5 hover:bg-muted transition-all shadow-sm">
                <Avatar class="h-8 w-8 border-2 border-primary/10">
                  <AvatarFallback class="bg-primary text-white font-black text-xs">{{ user.avatar }}</AvatarFallback>
                </Avatar>
                <div class="hidden text-left sm:block">
                  <p class="text-xs font-black leading-tight">{{ user.name }}</p>
                  <p class="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">{{ user.role }}</p>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="w-56 rounded-2xl p-2 shadow-2xl">
              <DropdownMenuLabel class="font-black text-xs uppercase tracking-widest text-muted-foreground p-3">Tài khoản</DropdownMenuLabel>
              <DropdownMenuItem class="rounded-xl py-2.5 font-bold gap-3">
                <User class="h-4 w-4 text-primary" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="rounded-xl py-2.5 font-bold gap-3">
                <Settings class="h-4 w-4 text-primary" />
                <span>Cài đặt</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator class="my-2" />
              <DropdownMenuItem @click="logout(); navigateTo('/login')" class="text-destructive focus:bg-destructive/10 focus:text-destructive rounded-xl py-2.5 font-bold gap-3">
                <LogOut class="h-4 w-4" />
                <span>Đăng xuất</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 p-4 lg:p-8">
        <div class="mx-auto max-w-7xl">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
