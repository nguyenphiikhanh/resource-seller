// middleware/check-permission.ts
export default defineNuxtRouteMiddleware((to) => {
    const { can } = usePermission();

    // Lấy quyền yêu cầu từ meta của page
    const requiredPermission = to.meta.permission as string;

    if (requiredPermission && !can(requiredPermission)) {
        return navigateTo('/403'); // Không có quyền
    }
});