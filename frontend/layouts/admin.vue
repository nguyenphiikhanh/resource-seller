<script setup lang="ts">
import { ref } from 'vue'
import { 
  LayoutDashboard, 
  Users, 
  Store, 
  CreditCard, 
  ShieldCheck, 
  Settings, 
  LogOut, 
  Menu,
  Bell,
  Search,
  User,
  AlertCircle
} from 'lucide-vue-next'

const { user, logout } = useAuth()
const isSidebarOpen = ref(false)

const adminNavigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Duyệt Người Bán', href: '/admin/requests/sellers', icon: AlertCircle },
  { name: 'Quản lý Gian hàng', href: '/admin/shops', icon: Store },
  { name: 'Quản lý Người dùng', href: '/admin/users', icon: Users },
  { name: 'Giao dịch hệ thống', href: '/admin/transactions', icon: CreditCard },
  { name: 'Phân quyền', href: '/admin/permissions', icon: ShieldCheck },
  { name: 'Cấu hình hệ thống', href: '/admin/settings', icon: Settings },
]

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
    <!-- Desktop Sidebar -->
    <aside class="hidden w-64 border-r bg-background lg:block shadow-xl shadow-primary/5">
      <div class="flex h-16 items-center border-b px-6">
        <NuxtLink to="/" class="flex items-center gap-2 font-black text-xl tracking-tighter">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
            <span class="text-sm">A</span>
          </div>
          <span>MMO <span class="text-primary">Admin</span></span>
        </NuxtLink>
      </div>
      <div class="flex flex-col gap-1 p-4">
        <p class="mb-3 px-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground italic">Administration</p>
        <NuxtLink 
          v-for="item in adminNavigation" 
          :key="item.name" 
          :to="item.href"
          class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition-all hover:bg-primary/5 hover:text-primary group"
          active-class="bg-primary/10 text-primary shadow-sm"
        >
          <component :is="item.icon" class="h-4 w-4 transition-transform group-hover:scale-110" />
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="mt-auto border-t p-4">
        <button @click="logout(); navigateTo('/login')" class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-destructive transition-colors hover:bg-red-50">
          <LogOut class="h-4 w-4" />
          Thoát Admin
        </button>
      </div>
    </aside>

    <!-- Mobile Sidebar (Sheet) -->
    <Sheet v-model:open="isSidebarOpen">
      <SheetContent side="left" class="w-[300px] p-0 border-0 shadow-2xl overflow-hidden bg-background">
        <div class="h-full flex flex-col">
          <!-- Premium Header with Admin Profile -->
          <div class="relative overflow-hidden bg-slate-900 p-6 pt-12 text-white">
            <!-- Decorative elements -->
            <div class="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            
            <div class="relative z-10">
              <NuxtLink to="/" class="flex items-center gap-3 font-black text-2xl tracking-tighter mb-8" @click="isSidebarOpen = false">
                <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-xl shadow-primary/40">
                  <span class="text-lg">A</span>
                </div>
                <span>MMO <span class="text-primary italic">ADMIN</span></span>
              </NuxtLink>

              <div class="flex items-center gap-4 bg-white/5 p-4 rounded-2xl backdrop-blur-md border border-white/10">
                <Avatar class="h-12 w-12 border-2 border-primary/50 shadow-lg shadow-primary/20">
                  <AvatarFallback class="bg-primary text-white font-black text-sm">{{ user.avatar }}</AvatarFallback>
                </Avatar>
                <div class="min-w-0">
                  <p class="text-sm font-black leading-tight truncate uppercase tracking-tight">{{ user.name }}</p>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <p class="text-[10px] text-primary font-black uppercase tracking-tighter">System Power</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Section -->
          <div class="flex-1 overflow-y-auto p-4 space-y-2 mt-4">
            <p class="px-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground italic mb-3">Administration</p>
            <NuxtLink 
              v-for="item in adminNavigation" 
              :key="item.name" 
              :to="item.href"
              class="flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-black transition-all duration-300 group"
              active-class="bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]"
              @click="isSidebarOpen = false"
            >
              <div class="h-8 w-8 rounded-lg flex items-center justify-center transition-colors px-0 group-hover:scale-110" :class="$route.path === item.href ? 'bg-white/20' : 'bg-primary/5 text-primary'">
                <component :is="item.icon" class="h-4 w-4" />
              </div>
              {{ item.name }}
            </NuxtLink>
          </div>

          <!-- Bottom Logout Area -->
          <div class="p-6 bg-muted/20 border-t shrink-0">
            <button @click="logout(); navigateTo('/login'); isSidebarOpen = false" class="flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 px-4 py-4 text-sm font-black text-white transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/20 active:scale-95 leading-none">
              <LogOut class="h-4 w-4 text-primary" />
              THOÁT HỆ THỐNG
            </button>
            <p class="text-[10px] text-center mt-4 font-bold text-muted-foreground/40 uppercase tracking-tighter italic">Secured by Antigravity OS</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>

    <!-- Main Content Area -->
    <div class="flex flex-1 flex-col overflow-x-hidden">
      <!-- Top header -->
      <header class="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-md lg:px-8 border-primary/10">
        <div class="flex items-center gap-4">
          <button class="lg:hidden h-12 w-12 flex items-center justify-center rounded-[1rem] bg-card border shadow-sm border-primary/10 active:scale-90 transition-all hover:bg-muted group" @click="toggleSidebar">
            <div class="relative w-5 h-4 flex flex-col justify-between">
              <span class="w-full h-0.5 bg-primary rounded-full transition-all group-hover:w-3/4"></span>
              <span class="w-full h-0.5 bg-primary rounded-full transition-all group-hover:w-full"></span>
              <span class="w-full h-0.5 bg-primary rounded-full transition-all group-hover:w-1/2"></span>
            </div>
          </button>
          <div class="relative hidden max-w-md items-center md:flex group">
            <Search class="absolute left-3.5 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input 
              placeholder="Tìm kiếm hệ thống..." 
              class="w-64 pl-10 md:w-80 h-10 border-0 bg-slate-100 dark:bg-slate-900 focus-visible:ring-1 focus-visible:ring-primary rounded-xl"
            />
          </div>
        </div>

        <div class="flex items-center gap-3">
          <ThemeToggle />
          
          <button class="relative rounded-xl p-2.5 hover:bg-muted transition-colors">
            <Bell class="h-5 w-5" />
            <span class="absolute top-2.5 right-2.5 flex h-2 w-2 rounded-full bg-primary ring-2 ring-background"></span>
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <button class="flex items-center gap-2 rounded-xl bg-card border px-2 py-1.5 hover:bg-muted transition-all shadow-sm border-primary/10">
                <Avatar class="h-8 w-8 border-2 border-primary/20">
                  <AvatarFallback class="bg-primary text-white font-black text-xs">{{ user.avatar }}</AvatarFallback>
                </Avatar>
                <div class="hidden text-left sm:block">
                  <p class="text-xs font-black leading-tight">{{ user.name }}</p>
                  <p class="text-[10px] text-primary font-black uppercase tracking-tighter">System Power</p>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="w-56 rounded-2xl p-2 shadow-2xl border-primary/5">
              <DropdownMenuLabel class="font-black text-xs uppercase tracking-widest text-muted-foreground p-3">Quản trị viên</DropdownMenuLabel>
              <DropdownMenuItem class="rounded-xl py-2.5 font-bold gap-3">
                <User class="mr-2 h-4 w-4 text-primary" />
                <span>Hồ sơ</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="rounded-xl py-2.5 font-bold gap-3">
                <Settings class="mr-2 h-4 w-4 text-primary" />
                <span>Cấu hình</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator class="my-2" />
              <DropdownMenuItem @click="logout(); navigateTo('/login')" class="text-destructive focus:bg-destructive/10 focus:text-destructive rounded-xl py-2.5 font-bold gap-3">
                <LogOut class="mr-2 h-4 w-4" />
                <span>Thoát hệ thống</span>
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
