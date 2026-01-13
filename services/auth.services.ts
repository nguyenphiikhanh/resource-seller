export const authService = () => {
    const router = useRouter();
    const client = useSupabaseClient();
    const auth = {
        async login(email: string, pass: string) {
            const {data, error} = await client.auth.signInWithPassword({
                email: email,
                password: pass
            })
            if (!error) await router.push('/') // Chuyển về trang chủ nếu thành công
            return {data, error}
        },

        async loginWithProvider(provider: 'google' | 'facebook') {
            return await client.auth.signInWithOAuth({
                provider: provider,
                options: {redirectTo: window.location.origin}
            })
        },

        async logout() {
            await client.auth.signOut()
            await router.push('/login')
        }
    }

    return {
        ...auth
    }
}