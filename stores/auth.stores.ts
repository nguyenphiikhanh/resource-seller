// stores/auth.ts

import {appService} from "~/services/app.services";

export const useAuthStore = defineStore('auth', () => {
    const {auth} = appService()
    const { exec } = usePromiseTracker()
    const { toastError } = useAppToast();

    // Action: Login
    const login = async (email: string, pass: string) => {
        return await exec(async () => {
            const { error } = await auth.login(email, pass)
            if (error) {
                toastError(error.message)
                throw error
            }
        })
    }

    // Action: Social Login
    const loginWithProvider = async (provider: 'google' | 'facebook') => {
        return await exec(async () => {
            const { error } = await auth.loginWithProvider(provider)
            if (error) throw error
        })
    }

    return {
        login,
        loginWithProvider
    }
})