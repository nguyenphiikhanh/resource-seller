// stores/auth.ts
import {appService} from "~/services/app.services";

export const useAuthStore = defineStore('auth', () => {
    const { $i18n } = useNuxtApp();
    const { auth } = appService();
    const { exec } = usePromiseTracker();
    const { toastError } = useAppToast();

    const user = useSupabaseUser();

    // Action: Login
    const login = async (email: string, pass: string) => {
        return await exec(async () => {
            const { error, data } = await auth.login(email, pass)

            if (error) {
                // Xử lý thông báo lỗi đa ngôn ngữ
                // Nếu không có key dịch thì hiển thị message gốc từ Supabase
                const transKey = `auth.errors.${error.code}`
                // @ts-ignore - Bỏ qua check type strict của i18n nếu cần
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

    // Action: Register
    const register = async ({ email, password, fullName }: { email: string, password: string, fullName: string }) => {
        return await exec(async () => {
            const { error, data } = await auth.signUp({
                email,
                password,
                fullName
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
        })
    }

    return {
        user,
        login,
        register,
        loginWithProvider,
        logout
    }
})