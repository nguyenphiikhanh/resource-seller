export const usePermission = () => {
    const authStore = useAuthStore();

    const can = (code: string) => authStore.can(code);

    // Check nếu có ÍT NHẤT 1 trong các quyền
    const canAny = (codes: string[]) => codes.some(c => authStore.can(c));

    return { can, canAny };
}