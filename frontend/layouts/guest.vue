<script setup lang="ts">
import {APP_NAME} from "@/constants/app";
</script>
<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center p-4 lg:p-8 overflow-hidden bg-background font-sans">
    <!-- MMO Digital Background Layer -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <!-- Grid Mesh -->
      <div 
        class="absolute inset-0 opacity-[0.2] dark:opacity-[0.05]" 
        style="background-image: radial-gradient(circle at 1.5px 1.5px, currentColor 1px, transparent 0); background-size: 32px 32px;"
        :class="'text-primary'"
      ></div>
      
      <!-- Digital Glow Spots -->
      <div class="absolute -top-[15%] -left-[10%] w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
      <div class="absolute top-[30%] -right-[15%] w-[40%] h-2/3 bg-red-600/10 dark:bg-red-500/5 blur-[150px] rounded-full"></div>
      <div class="absolute -bottom-[10%] left-[10%] w-[60%] h-[40%] bg-primary/10 blur-[100px] rounded-full"></div>
      
      <!-- Tech Grid Overlays -->
      <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]" :style="`background: repeating-linear-gradient(90deg, transparent, transparent 150px, currentColor 150.5px, currentColor 151px);`" :class="'text-primary'"></div>
      <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]" :style="`background: repeating-linear-gradient(0deg, transparent, transparent 150px, currentColor 150.5px, currentColor 151px);`" :class="'text-primary'"></div>
    </div>

    <!-- Main Content Container -->
    <div class="relative z-10 flex flex-col items-center w-full">
      <!-- Premium Logo Branding -->
      <div class="mb-10 flex flex-col items-center gap-3 transition-all hover:scale-105 duration-500 cursor-default">
        <div class="flex h-20 w-20 items-center justify-center rounded-[2.5rem] bg-background border-4 border-primary/20 shadow-[0_0_50px_-10px_rgba(239,68,68,0.3)] dark:shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] text-primary">
          <div class="relative flex h-10 w-10 items-center justify-center">
             <span class="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-ping"></span>
             <span class="text-4xl font-black italic tracking-tighter">M</span>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-2xl font-black tracking-tightest uppercase italic">MMO <span class="text-primary tracking-tighter">{{APP_NAME}}</span></h1>
          <p class="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground/50 mt-1">Digital Asset Exchange Center</p>
        </div>
      </div>
      
      <div class="w-full max-w-md relative group">
        <!-- Accent Glow -->
        <div class="absolute -inset-1 bg-gradient-to-br from-primary/40 to-red-600/40 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-all duration-1000"></div>
        
        <!-- Auth Card Shell -->
        <div class="relative bg-card/80 backdrop-blur-2xl border border-white/20 dark:border-white/5 rounded-[2.5rem] p-1 shadow-2xl shadow-black/10 overflow-hidden">
          <div class="p-8 md:p-10">
            <slot />
          </div>
        </div>
      </div>
      
      <!-- Premium Verification Badges -->
      <div class="mt-12 flex flex-wrap justify-center items-center gap-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <div class="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em]">
          <div class="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
          Verified Resources
        </div>
        <div class="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em]">
          <div class="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
          256-bit Secure
        </div>
        <div class="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em]">
          <div class="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
          Instant Delivery
        </div>
      </div>
    </div>
  </div>
</template>