export const useLoadingStore = defineStore('loading', () => {
  // Biến loading toàn cục
  const globalLoading = ref(false)

  const setGlobalLoading = (status: boolean) => {
    globalLoading.value = status
  }

  return {
    globalLoading,
    setGlobalLoading,
  }
})
