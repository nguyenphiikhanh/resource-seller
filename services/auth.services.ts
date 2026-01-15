import type { RegisterAccount } from '~/types/auth.types'

export const authService = () => {
  const client = useSupabaseClient()
  const auth = {
    async login(email: string, pass: string) {
      const { data, error } = await client.auth.signInWithPassword({
        email: email,
        password: pass,
      })
      return { data, error }
    },

    async loginWithProvider(provider: 'google' | 'facebook') {
      return await client.auth.signInWithOAuth({
        provider: provider,
        options: { redirectTo: window.location.origin },
      })
    },

    async signUp({ email, password, fullName }: RegisterAccount) {
      const { error, data } = await client.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            // avatar_url: ... (nếu muốn set avatar mặc định)
          },
        },
      })
      return { data, error }
    },

    async logout() {
      await client.auth.signOut()
    },
  }

  return {
    ...auth,
  }
}
