// composables/usePromise.ts
import { useAppStore } from '~/stores/app.stores'

interface PromiseOptions {
  minDuration?: number
  isGlobal?: boolean // <--- Thêm option này
}

export const usePromiseTracker = () => {
  const loading = ref(false)
  const error = ref<any>(null)

  // Gọi store bên trong composable
  const { loadingStore } = useAppStore()

  const exec = async <T>(
    fn: () => Promise<T>,
    options: PromiseOptions = {},
  ): Promise<T | undefined> => {
    const { minDuration = 300, isGlobal = true } = options

    // Bật loading (Cục bộ hoặc Toàn cục)
    if (isGlobal) loadingStore.setGlobalLoading(true)
    else loading.value = true

    error.value = null
    const start = Date.now()

    try {
      const result = await fn()
      return result
    } catch (err: any) {
      error.value = err
      throw err
    } finally {
      // Logic delay
      const elapsed = Date.now() - start
      if (minDuration > 0 && elapsed < minDuration) {
        await new Promise((r) => setTimeout(r, minDuration - elapsed))
      }

      // Tắt loading
      if (isGlobal) loadingStore.setGlobalLoading(false)
      else loading.value = false
    }
  }

  return { loading, error, exec }
}
