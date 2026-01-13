export const useLoadingStore = defineStore('loading', () => {
    // Biến loading toàn cục
    const globalLoading = ref(false)

    // Hàm set loading an toàn (có thể mở rộng đếm request nếu cần)
    const setGlobalLoading = (status: boolean) => {
        globalLoading.value = status
    }

    return {
        globalLoading,
        setGlobalLoading
    }
})