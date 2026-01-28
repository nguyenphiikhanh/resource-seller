<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  Menu, Search, ShoppingCart, Bell,
  User, Wallet, LayoutGrid
} from 'lucide-vue-next'
import ThemeToggle from '@/components/ThemeToggle.vue'
import {APP_NAME} from "@/constants/app";

// Menu items cho Mobile
const navItems = [
  { name: 'Trang chủ', href: '/', icon: LayoutGrid },
  { name: 'Lịch sử mua hàng', href: '/user/orders', icon: ShoppingCart },
  { name: 'Nạp tiền', href: '/user/wallet', icon: Wallet },
  { name: 'Tin tức MMO', href: '/blog', icon: Bell },
]

const { user, isLoggedIn } = useAuth()
const isMobileMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-16 items-center justify-between gap-4">

      <div class="flex items-center gap-2 md:gap-6">
        <Sheet v-model:open="isMobileMenuOpen">
          <SheetTrigger as-child>
            <button class="md:hidden h-10 w-10 flex items-center justify-center rounded-lg bg-muted/50 border shadow-sm active:scale-90 transition-all hover:bg-muted group">
              <div class="relative w-5 h-3.5 flex flex-col justify-between">
                <span class="w-full h-0.5 bg-primary rounded-full transition-all group-hover:w-3/4"></span>
                <span class="w-full h-0.5 bg-primary rounded-full transition-all group-hover:w-full"></span>
                <span class="w-full h-0.5 bg-primary rounded-full transition-all group-hover:w-1/2"></span>
              </div>
            </button>
          </SheetTrigger>
          <SheetContent side="left" class="w-[300px] p-0 border-0 shadow-2xl overflow-hidden bg-background">
            <div class="h-full flex flex-col">
              <!-- Premium Header -->
              <div class="relative overflow-hidden bg-primary p-6 pt-12 text-white">
                <div class="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
                
                <div class="relative z-10">
                  <NuxtLink to="/" class="flex items-center gap-3 font-black text-2xl tracking-tighter mb-8" @click="isMobileMenuOpen = false">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shadow-xl shadow-black/20">
                      <span class="text-lg">M</span>
                    </div>
                    <span>MMO <span class="text-white/80">{{ APP_NAME }}</span></span>
                  </NuxtLink>

                  <!-- User Info or Login Prompt -->
                  <div v-if="isLoggedIn" class="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20">
                    <div class="h-12 w-12 rounded-xl bg-white flex items-center justify-center text-primary font-black text-lg border-2 border-white/30 shadow-lg">
                      {{ user.avatar }}
                    </div>
                    <div class="min-w-0">
                      <p class="text-sm font-black leading-tight truncate uppercase">{{ user.name }}</p>
                      <p class="text-[10px] text-white/70 font-bold mt-0.5">{{ user.balance }}</p>
                    </div>
                  </div>
                  <NuxtLink to="/login" v-else @click="isMobileMenuOpen = false" class="block">
                    <div class="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
                      <div class="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <User class="h-5 w-5 text-white" />
                      </div>
                      <p class="font-black text-sm uppercase tracking-wider">Đăng nhập ngay</p>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <!-- Navigation -->
              <div class="flex-1 overflow-y-auto p-4 space-y-2 mt-4">
                <p class="px-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground italic mb-3">Khám phá</p>
                <NuxtLink
                    v-for="item in navItems"
                    :key="item.name"
                    :to="item.href"
                    class="flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-black transition-all duration-300 group"
                    active-class="bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]"
                    @click="isMobileMenuOpen = false"
                >
                  <div class="h-8 w-8 rounded-lg flex items-center justify-center transition-colors group-hover:scale-110" :class="$route.path === item.href ? 'bg-white/20' : 'bg-muted text-foreground'">
                    <component :is="item.icon" class="h-4 w-4" />
                  </div>
                  {{ item.name }}
                </NuxtLink>
              </div>

              <!-- Footer info -->
              <div class="p-6 bg-muted/20 border-t mt-auto text-center shrink-0">
                <p class="text-[9px] font-black text-muted-foreground/40 uppercase tracking-[0.2em]">Hỗ trợ kỹ thuật 24/7</p>
                <p class="text-[10px] font-bold text-primary mt-1">mmo.market.support</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-red-600 text-white shadow-lg shadow-primary/20">
            <span class="text-sm">M</span>
          </div>
          <span class="hidden sm:inline-block">MMO <span class="text-primary">{{APP_NAME}}</span></span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <NuxtLink to="/" class="hover:text-primary transition-colors">Trang chủ</NuxtLink>
          <NuxtLink to="/orders" class="hover:text-primary transition-colors">Lịch sử đơn</NuxtLink>
          <NuxtLink to="/support" class="hover:text-primary transition-colors">Khiếu nại</NuxtLink>
        </nav>
      </div>

      <div class="hidden lg:flex flex-1 max-w-md mx-auto">
        <div class="relative w-full group">
          <Search class="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
              placeholder="Tìm tài nguyên (Via, Mail, Tool...)"
              class="w-full pl-9 bg-muted/50 border-transparent focus:bg-background focus:border-primary/50 rounded-full transition-all"
          />
          <div class="absolute right-3 top-2.5 text-[10px] font-mono text-muted-foreground border px-1 rounded">CTRL+K</div>
        </div>
      </div>

      <div class="flex items-center gap-2 sm:gap-4">

        <ThemeToggle />

        <Button variant="ghost" size="icon" class="relative text-muted-foreground hover:text-foreground">
          <Bell class="h-5 w-5" />
          <span class="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-red-500 animate-pulse border border-background"></span>
        </Button>

        <div class="h-6 w-px bg-border hidden sm:block"></div>

        <NuxtLink to="/user/wallet" v-if="isLoggedIn">
          <Button variant="ghost" size="icon" class="rounded-full border border-border bg-muted/50">
            <User class="h-5 w-5" />
          </Button>
        </NuxtLink>
        <NuxtLink to="/login" v-else>
          <Button class="font-bold rounded-xl h-10 px-6 gap-2">
            <User class="h-4 w-4" /> Đăng nhập
          </Button>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>