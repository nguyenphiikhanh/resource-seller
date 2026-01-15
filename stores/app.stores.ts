export const useAppStore = () => {
  return {
    loadingStore: useLoadingStore(),
    authStore: useAuthStore(),
  }
}
