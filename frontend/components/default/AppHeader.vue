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
  { name: 'Trang chủ', href: '/' },
  { name: 'Lịch sử mua hàng', href: '/orders' },
  { name: 'Nạp tiền', href: '/deposit' },
  { name: 'Tin tức MMO', href: '/blog' },
]
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-16 items-center justify-between gap-4">

      <div class="flex items-center gap-2 md:gap-6">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon" class="md:hidden shrink-0">
              <Menu class="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div class="flex items-center gap-2 font-bold text-xl mb-8 text-primary">
              <LayoutGrid class="h-6 w-6" /> MMO Market
            </div>
            <nav class="flex flex-col gap-4">
              <NuxtLink
                  v-for="item in navItems"
                  :key="item.name"
                  :to="item.href"
                  class="text-base font-medium hover:text-primary transition-colors"
              >
                {{ item.name }}
              </NuxtLink>
            </nav>
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

        <Button variant="ghost" size="icon" class="relative text-muted-foreground hover:text-foreground">
          <ShoppingCart class="h-5 w-5" />
          <span class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm">
            3
          </span>
        </Button>

        <div class="h-6 w-px bg-border hidden sm:block"></div>

        <NuxtLink to="/user/wallet" v-if="user">
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