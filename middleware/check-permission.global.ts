// middleware/check-permission.ts
import {ROUTER_LIST} from "~/constants/router.const";
import {PERMISSIONS} from "~/constants/authorization.const";

// middleware/check-permission.global.ts (Thêm .global để chạy mọi nơi)
export default defineNuxtRouteMiddleware((to) => {
    const { can } = usePermission();

    const isAdminPage = to.path.startsWith(ROUTER_LIST.ADMIN) || to.meta.layout === 'admin';

    const requiredPermission = (to.meta.permission as string) ||
        (isAdminPage ? PERMISSIONS.ADMIN.ACCESS
        : null);

    if (requiredPermission && !can(requiredPermission)) {
        return navigateTo(ROUTER_LIST.UN_AUTHORIZED);
    }
});