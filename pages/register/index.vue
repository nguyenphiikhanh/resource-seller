<template>
  <div
    class="relative flex min-h-screen items-center justify-center bg-white p-4 transition-colors duration-300 dark:bg-dark-900"
  >
    <NuxtLink
      to="/"
      class="absolute left-6 top-6 z-10 flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-brand-purple lg:left-8 lg:top-8 dark:text-gray-400"
    >
      <i class="fas fa-arrow-left"></i> <span class="hidden sm:inline">Trang chủ</span>
    </NuxtLink>

    <div
      class="w-full max-w-md rounded-2xl bg-white p-2 sm:bg-transparent sm:p-0 sm:shadow-none dark:bg-dark-900 sm:dark:bg-transparent"
    >
      <div class="mb-8 text-center">
        <div
          class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-cyan text-2xl font-bold text-white shadow-lg shadow-purple-500/20"
        >
          N
        </div>
        <h1 class="mb-2 text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
          {{ $t('auth.create_account') }}
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('common.join_mmo') }}</p>
      </div>

      <div class="mb-8">
        <button
          @click="handleSocialLogin('google')"
          class="group flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-dark-800 dark:text-gray-300 dark:hover:bg-white/5"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            class="h-5 w-5 transition group-hover:scale-110"
            alt="Google"
          />
          {{ $t('auth.register_with_google') }}
        </button>
      </div>

      <div class="relative mb-8 flex items-center py-2">
        <div class="flex-grow border-t border-gray-200 dark:border-white/10"></div>
        <span class="mx-4 flex-shrink-0 text-xs font-medium uppercase tracking-wider text-gray-400"
          >Hoặc đăng ký mới</span
        >
        <div class="flex-grow border-t border-gray-200 dark:border-white/10"></div>
      </div>

      <form @submit="onSubmit" class="space-y-5">
        <div class="space-y-1.5">
          <label class="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <div class="relative">
            <input
              v-model="email"
              v-bind="emailAttrs"
              placeholder="name@example.com"
              class="w-full rounded-xl border bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 transition focus:outline-none focus:ring-1 dark:bg-dark-800 dark:text-white dark:placeholder-gray-500"
              :class="
                errors.email && submitCount
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-200 focus:border-brand-purple focus:ring-brand-purple dark:border-white/10'
              "
            />
            <i
              class="fas fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400"
            ></i>
          </div>
          <span v-if="errors.email && submitCount" class="ml-1 block text-xs text-red-500">{{
            errors.email
          }}</span>
        </div>

        <div class="space-y-1.5">
          <label class="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">Họ và tên</label>
          <div class="relative">
            <input
              v-model="fullName"
              v-bind="fullNameAttrs"
              type="text"
              placeholder="Nguyễn Văn A"
              class="w-full rounded-xl border bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 transition focus:outline-none focus:ring-1 dark:bg-dark-800 dark:text-white dark:placeholder-gray-500"
              :class="
                errors.fullName && submitCount
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-200 focus:border-brand-purple focus:ring-brand-purple dark:border-white/10'
              "
            />
            <i
              class="fas fa-user absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400"
            ></i>
          </div>
          <span v-if="errors.fullName && submitCount" class="ml-1 block text-xs text-red-500">{{
            errors.fullName
          }}</span>
        </div>

        <div class="space-y-1.5">
          <label class="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">Mật khẩu</label>
          <div class="relative">
            <input
              v-model="password"
              v-bind="passwordAttrs"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              class="w-full rounded-xl border bg-gray-50 py-3 pl-10 pr-10 text-sm text-gray-900 placeholder-gray-400 transition focus:outline-none focus:ring-1 dark:bg-dark-800 dark:text-white dark:placeholder-gray-500"
              :class="
                errors.password && submitCount
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-200 focus:border-brand-purple focus:ring-brand-purple dark:border-white/10'
              "
            />
            <i
              class="fas fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400"
            ></i>
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600 focus:outline-none dark:hover:text-gray-200"
            >
              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </button>
          </div>
          <span v-if="errors.password && submitCount" class="ml-1 block text-xs text-red-500">{{
            errors.password
          }}</span>
        </div>

        <div class="space-y-1.5">
          <label class="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >Nhập lại mật khẩu</label
          >
          <div class="relative">
            <input
              v-model="confirmPassword"
              v-bind="confirmPasswordAttrs"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              class="w-full rounded-xl border bg-gray-50 py-3 pl-10 pr-10 text-sm text-gray-900 placeholder-gray-400 transition focus:outline-none focus:ring-1 dark:bg-dark-800 dark:text-white dark:placeholder-gray-500"
              :class="
                errors.confirmPassword && submitCount
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-200 focus:border-brand-purple focus:ring-brand-purple dark:border-white/10'
              "
            />
            <i
              class="fas fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400"
            ></i>
          </div>
          <span
            v-if="errors.confirmPassword && submitCount"
            class="ml-1 block text-xs text-red-500"
            >{{ errors.confirmPassword }}</span
          >
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-[1.02] hover:shadow-purple-500/50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span v-if="isSubmitting"><i class="fas fa-spinner fa-spin mr-2"></i> Đang xử lý...</span>
          <span v-else>Đăng Ký</span>
        </button>

        <p class="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Đã có tài khoản?
          <NuxtLink
            :to="ROUTER_LIST.LOGIN"
            class="font-bold text-brand-purple transition hover:text-brand-cyan"
            >Đăng nhập ngay</NuxtLink
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useForm } from 'vee-validate'
import { ROUTER_LIST } from '~/constants/router.const.ts'

definePageMeta({
  middleware: 'guest',
})

const authStore = useAuthStore()
const showPassword = ref(false)

const { registerSchema } = useAppSchema()

const { handleSubmit, errors, defineField, isSubmitting, submitCount } = useForm({
  validationSchema: registerSchema,
})

const [fullName, fullNameAttrs] = defineField('fullName')
const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword')

const onValidSubmit = async (values) => {
  try {
    await authStore.register({
      email: values.email,
      password: values.password,
      fullName: values.fullName,
    })
  } catch {}
}

const onSubmit = handleSubmit(onValidSubmit)

const handleSocialLogin = async (provider) => {
  try {
    await authStore.loginWithProvider(provider)
  } catch {}
}
</script>
