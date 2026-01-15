<script setup lang="ts">
import { ref, onMounted } from 'vue'

// QUAN TRỌNG: Khai báo sử dụng layout admin vừa tạo
definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})

const client = useSupabaseClient()
const users = ref<any[]>([])
const loading = ref(true)

// Logic fetch data giữ nguyên
const fetchUsers = async () => {
  loading.value = true
  const { data, error } = await client
    .from('users')
    .select(`*, user_groups (groups (name))`)
    .order('created_at', { ascending: false })

  if (!error && data) {
    users.value = data.map((u) => ({
      ...u,
      roles: u.user_groups.map((ug: any) => ug.groups?.name || 'Member'),
    }))
  }
  loading.value = false
}

// Logic màu badge giữ nguyên
const getRoleColor = (role: string) => {
  switch (role) {
    case 'Super Admin':
      return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800'
    case 'Admin':
      return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800'
    case 'Seller':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800'
    case 'Buyer':
      return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
    default:
      return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
  }
}

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <div>
    <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      <div
        class="rounded-2xl border border-white/20 bg-white/60 p-6 shadow-lg shadow-indigo-500/10 backdrop-blur-lg dark:border-slate-700 dark:bg-slate-800/60"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500 dark:text-slate-400">Tổng Users</p>
            <p class="mt-1 text-3xl font-bold text-gray-800 dark:text-white">{{ users.length }}</p>
          </div>
          <div class="rounded-xl bg-indigo-100 p-3 dark:bg-indigo-500/20">
            <svg
              class="h-8 w-8 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div
      class="overflow-hidden rounded-2xl border border-white/20 bg-white/70 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/70"
    >
      <div
        class="flex items-center justify-between border-b border-gray-100 p-6 dark:border-slate-700"
      >
        <h2 class="text-lg font-bold text-gray-800 dark:text-white">Danh sách thành viên</h2>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full border-collapse text-left">
          <thead>
            <tr
              class="border-b bg-gray-50/50 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-slate-700 dark:bg-slate-900/50"
            >
              <th class="px-6 py-4">User Info</th>
              <th class="px-6 py-4">Roles</th>
              <th class="px-6 py-4">Joined</th>
              <th class="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 dark:divide-slate-700">
            <tr v-if="loading">
              <td colspan="4" class="px-6 py-4 text-center">Loading...</td>
            </tr>

            <tr
              v-for="user in users"
              :key="user.id"
              class="transition-colors hover:bg-indigo-50/50 dark:hover:bg-slate-700/50"
            >
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <img
                    class="mr-3 h-10 w-10 rounded-full"
                    :src="user.avatar_url || `https://ui-avatars.com/api/?name=${user.email}`"
                  />
                  <div>
                    <div class="font-bold text-gray-700 dark:text-gray-200">
                      {{ user.full_name || 'No Name' }}
                    </div>
                    <div class="text-xs text-gray-500">{{ user.email }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <span
                  v-for="role in user.roles"
                  :key="role"
                  :class="getRoleColor(role)"
                  class="mr-1 rounded-full border px-2 py-1 text-xs font-bold"
                >
                  {{ role }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm text-gray-500">
                {{ new Date(user.created_at).toLocaleDateString('vi-VN') }}
              </td>
              <td class="px-6 py-4 text-right">
                <button class="font-medium text-indigo-600 hover:text-indigo-800">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
