<script setup lang="ts">
import { 
  ShieldCheck, 
  Settings, 
  Lock, 
  Key, 
  Users, 
  CheckCircle2, 
  Info,
  MoreVertical,
  Plus
} from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

const roles = [
  { name: 'Supper Admin', permissions: 'Toàn quyền hệ thống', users: 2, color: 'bg-red-500' },
  { name: 'Moderator', permissions: 'Duyệt Seller, QL Shops', users: 3, color: 'bg-indigo-500' },
  { name: 'Support', permissions: 'Xử lý khiếu nại, Nạp tiền', users: 5, color: 'bg-green-500' },
]

const permissions = [
  { module: 'User Management', read: true, write: true, delete: true },
  { module: 'Seller Moderation', read: true, write: true, delete: false },
  { module: 'Transaction Audit', read: true, write: false, delete: false },
  { module: 'System Settings', read: true, write: true, delete: true },
]
</script>

<template>
  <div class="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-black tracking-tight flex items-center gap-3">
          Phân quyền hệ thống <Lock class="h-7 w-7 text-indigo-600" />
        </h1>
        <p class="text-muted-foreground mt-1">Quản lý các vai trò quản trị (RBAC) và giới hạn quyền truy cập.</p>
      </div>
      
      <UiButton class="bg-indigo-600 hover:bg-indigo-700 text-white font-black gap-2 h-11 px-6 rounded-xl shadow-lg shadow-indigo-500/20">
        <Plus class="h-4 w-4" /> Tạo vai trò mới
      </UiButton>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Roles List -->
      <div class="lg:col-span-1 space-y-6">
        <h2 class="font-black text-lg uppercase tracking-widest text-indigo-600 italic">Vai trò hiện có</h2>
        <div class="space-y-4">
          <div v-for="role in roles" :key="role.name" class="p-5 bg-card rounded-2xl shadow-sm border group cursor-pointer hover:border-indigo-400 transition-all border-l-4" :style="{ borderLeftColor: role.color.replace('bg-', '') }">
            <div class="flex justify-between items-start mb-4">
               <span :class="`px-3 py-1 text-[10px] font-black text-white rounded-lg ${role.color}`">{{ role.name }}</span>
               <button class="text-muted-foreground hover:text-indigo-600"><MoreVertical class="h-4 w-4" /></button>
            </div>
            <p class="text-xs font-bold text-slate-700 mb-2">{{ role.permissions }}</p>
            <div class="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-wider">
               <Users class="h-3 w-3" /> {{ role.users }} quản trị viên
            </div>
          </div>
        </div>
      </div>

      <!-- Permission Matrix -->
      <div class="lg:col-span-2 space-y-6">
        <h2 class="font-black text-lg uppercase tracking-widest text-indigo-600 italic">Chi tiết quyền hạn</h2>
        <UiCard class="border-0 shadow-md overflow-hidden">
          <UiTable>
            <UiTableHeader class="bg-indigo-50 dark:bg-slate-900 border-b">
              <UiTableRow>
                <UiTableHead>Module / Phân hệ</UiTableHead>
                <UiTableHead class="text-center">Xem (Read)</UiTableHead>
                <UiTableHead class="text-center">Ghi (Write)</UiTableHead>
                <UiTableHead class="text-center">Xóa (Delete)</UiTableHead>
              </UiTableRow>
            </UiTableHeader>
            <UiTableBody>
              <UiTableRow v-for="p in permissions" :key="p.module" class="border-b last:border-0">
                <UiTableCell class="font-bold text-sm text-slate-800 dark:text-slate-100">{{ p.module }}</UiTableCell>
                <UiTableCell class="text-center">
                  <div class="flex justify-center">
                    <CheckCircle2 v-if="p.read" class="h-5 w-5 text-green-500" />
                    <XCircle v-else class="h-5 w-5 text-red-300" />
                  </div>
                </UiTableCell>
                <UiTableCell class="text-center">
                  <div class="flex justify-center">
                    <CheckCircle2 v-if="p.write" class="h-5 w-5 text-green-500" />
                    <XCircle v-else class="h-5 w-5 text-red-300" />
                  </div>
                </UiTableCell>
                <UiTableCell class="text-center">
                  <div class="flex justify-center">
                    <CheckCircle2 v-if="p.delete" class="h-5 w-5 text-green-500" />
                    <XCircle v-else class="h-5 w-5 text-red-300" />
                  </div>
                </UiTableCell>
              </UiTableRow>
            </UiTableBody>
          </UiTable>
        </UiCard>

        <UiCard class="p-6 bg-slate-900 text-white border-0 shadow-xl relative overflow-hidden group">
          <div class="absolute -right-10 -bottom-10 h-40 w-40 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div class="flex gap-4 relative z-10">
            <ShieldCheck class="h-8 w-8 text-indigo-400 shrink-0" />
            <div>
              <h3 class="font-black uppercase tracking-tighter text-indigo-400 italic">Security Recommendation</h3>
              <p class="text-xs text-white/70 leading-relaxed mt-2">
                Tuyệt đối không cấp quyền <b>Delete</b> cho tài khoản <b>Support</b>. Chỉ có <b>Supper Admin</b> mới có quyền xóa dữ liệu nhạy cảm của người dùng.
              </p>
            </div>
          </div>
        </UiCard>
      </div>
    </div>
  </div>
</template>
