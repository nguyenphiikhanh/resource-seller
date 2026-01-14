// middleware/auth.ts
import {ROUTER_LIST} from "~/constants/router.const";

export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()

    if (!user.value) {
        return navigateTo(ROUTER_LIST.LOGIN)
    }
})