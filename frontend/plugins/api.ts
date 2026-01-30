// plugins/api.ts

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  // XSRF Cookie
  const xsrfCookie = useCookie<string | null>('XSRF-TOKEN')

  const api = $fetch.create({
    baseURL: `${config.public.apiBase}/${config.public.apiPrefix}`,
    credentials: 'include',
    onRequest({ options }) {
      const headers = new Headers(options.headers || undefined)
      headers.set('Accept', 'application/json')
      if (xsrfCookie.value) {
        headers.set('X-XSRF-TOKEN', xsrfCookie.value)
      }
      options.headers = headers
    },
  })

  return { provide: { api } }
})