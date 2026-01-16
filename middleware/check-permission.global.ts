// middleware/check-permission.ts
import { ROUTER_LIST } from '~/constants/router.const'
import { PERMISSIONS } from '~/constants/authorization.const'
import {LAYOUTS} from "~/constants/app.const";

// middleware/check-permission.global.ts (Thêm .global để chạy mọi nơi)
export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore();
  const user = authStore.user
  const permissions = authStore.permissions
  const { can } = authStore

  if (user && permissions.length === 0) {
    await authStore.fetchPermissions();
  }

  const isAdminPage = to.path.startsWith(ROUTER_LIST.ADMIN) || to.meta.layout === LAYOUTS.ADMIN

  const requiredPermission =
    (to.meta.permission as string) || (isAdminPage ? PERMISSIONS.ADMIN.ACCESS : null)

  if (requiredPermission && !can(requiredPermission)) {
    return navigateTo(ROUTER_LIST.ERROR.UN_AUTHORIZED)
  }
})
