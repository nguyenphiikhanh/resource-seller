export default defineNuxtRouteMiddleware((to) => {
    const { user } = useAuth()

    // Public pages that don't need auth
    const publicPages = ['/', '/login', '/register', '/forgot-password', '/checkout']
    const isPublic = publicPages.includes(to.path) || to.path.startsWith('/shops/')

    // 1. If not logged in and trying to access private area, go to login
    if (user.value.role === 'guest' && !isPublic) {
        return navigateTo('/login')
    }

    // 2. Admin route protection
    if (to.path.startsWith('/admin') && user.value.role !== 'admin') {
        return navigateTo('/')
    }

    // 3. Seller route protection
    if (to.path.startsWith('/seller') && !['seller', 'admin'].includes(user.value.role)) {
        return navigateTo('/user/become-seller')
    }
})
