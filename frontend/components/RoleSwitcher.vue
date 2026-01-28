<script setup lang="ts">
const { user, login } = useAuth()

const roles = [
  { id: 'guest', name: 'Guest', color: 'bg-slate-500' },
  { id: 'user', name: 'User', color: 'bg-green-500' },
  { id: 'seller', name: 'Seller', color: 'bg-primary' },
  { id: 'admin', name: 'Admin', color: 'bg-indigo-600' },
]
</script>

<template>
  <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-2 p-1.5 bg-background/80 backdrop-blur-xl border-2 border-primary/20 rounded-2xl shadow-2xl scale-75 sm:scale-100 origin-bottom">
    <div class="px-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground border-r pr-4">Mock Auth</div>
    <div class="flex gap-1">
      <button 
        v-for="role in roles" 
        :key="role.id"
        @click="login(role.id)"
        class="px-4 py-2 text-xs font-bold rounded-xl transition-all hover:scale-105 active:scale-95"
        :class="user.role === role.id ? `${role.color} text-white shadow-lg shadow-${role.id}/20` : 'hover:bg-muted text-muted-foreground'"
      >
        {{ role.name }}
      </button>
    </div>
  </div>
</template>
