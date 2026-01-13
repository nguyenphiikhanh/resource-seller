// stores/auth.ts

import {appService} from "~/services/app.services";

export const useAuthStore = defineStore('auth', () => {
    const { $i18n} = useNuxtApp();
    const {auth} = appService()
    const { exec } = usePromiseTracker()
    const { toastError } = useAppToast();

    // Action: Login
    const login = async (email: string, pass: string) => {
        return await exec(async () => {
            const { error } = await auth.login(email, pass)
            if (error) {
                toastError($i18n.t(`auth.message.${error.code}`))
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