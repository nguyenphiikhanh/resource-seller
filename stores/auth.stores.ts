// stores/auth.ts
import { appService } from '~/services/app.services'
import type { Database } from '~/types/database.types'
import {ROUTER_LIST} from "~/constants/router.const";

export const useAuthStore = defineStore('auth', () => {
  const { $i18n } = useNuxtApp()
  const { auth } = appService()
  const { exec } = usePromiseTracker()
  const { toastError } = useAppToast()
  const router = useRouter();

  const user = useSupabaseUser()
  const client = useSupabaseClient<Database>()
  const permissions = ref<string[]>([])

  // Action: Login
  const login = async (email: string, pass: string) => {
    return await exec(async () => {
      const { error } = await auth.login(email, pass)

      if (error) {
        // Xử lý thông báo lỗi đa ngôn ngữ
        const transKey = `auth.errors.${error.code}`
        const message = $i18n.t(transKey) === transKey ? error.message : $i18n.t(transKey)

        toastError(message)
        throw error
      }
    })
  }

  // Action: Social Login
  const loginWithProvider = async (provider: 'google' | 'facebook') => {
    return await exec(async () => {
      const { error } = await auth.loginWithProvider(provider)
      if (error) throw error
      // Lưu ý: Social login sẽ redirect trang nên code phía sau có thể không chạy ngay
    })
  }

  const fetchPermissions = async () => {
    if (!user.value) return

    const { data, error } = (await client.rpc('get_my_permissions')) as {
      data: string[] | null
      error: any
    }

    if (data && !error) {
      permissions.value = data ?? []
    }
  }

  const can = (permissionCode: string): boolean => {
    // Super Admin
    if (permissions.value.includes('*')) return true

    // Kiểm tra mã quyền cụ thể
    return permissions.value.includes(permissionCode)
  }

  // Action: Register
  const register = async ({
    email,
    password,
    fullName,
  }: {
    email: string
    password: string
    fullName: string
  }) => {
    return await exec(async () => {
      const { error, data } = await auth.signUp({
        email,
        password,
        fullName,
      })

      if (error) {
        const transKey = `auth.errors.${error.code}`
        const message = $i18n.t(transKey) === transKey ? error.message : $i18n.t(transKey)
        toastError(message)
        throw error
      }

      return data
    })
  }

  // Action: Logout
  const logout = async () => {
    return await exec(async () => {
      await auth.logout();
      clearPermissions()
      await router.push(ROUTER_LIST.LOGIN)
    })
  }

  // Reset khi logout
  const clearPermissions = () => {
    permissions.value = []
  }

  return {
    user,
    permissions,
    login,
    register,
    loginWithProvider,
    logout,
    can,
    clearPermissions,
    fetchPermissions,
  }
})
