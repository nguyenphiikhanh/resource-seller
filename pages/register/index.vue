<template>
  <div class="min-h-screen flex items-center justify-center bg-white dark:bg-dark-900 transition-colors duration-300 relative p-4">

    <NuxtLink to="/" class="absolute top-6 left-6 lg:top-8 lg:left-8 text-gray-500 dark:text-gray-400 hover:text-brand-purple transition flex items-center gap-2 text-sm font-medium z-10">
      <i class="fas fa-arrow-left"></i> <span class="hidden sm:inline">Trang chủ</span>
    </NuxtLink>

    <div class="w-full max-w-md bg-white dark:bg-dark-900 sm:bg-transparent sm:dark:bg-transparent rounded-2xl sm:shadow-none p-2 sm:p-0">
      <div class="mb-8 text-center">
        <div class="w-14 h-14 bg-gradient-to-br from-brand-purple to-brand-cyan rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg shadow-purple-500/20 mx-auto">N</div>
        <h1 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">{{$t('auth.create_account')}}</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{$t('common.join_mmo')}}</p>
      </div>

      <div class="mb-8">
        <button @click="handleSocialLogin('google')" class="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 font-medium text-sm group shadow-sm">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-5 h-5 group-hover:scale-110 transition" alt="Google">
          {{$t('auth.register_with_google')}}
        </button>
      </div>

      <div class="relative flex py-2 items-center mb-8">
        <div class="flex-grow border-t border-gray-200 dark:border-white/10"></div>
        <span class="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase font-medium tracking-wider">Hoặc đăng ký mới</span>
        <div class="flex-grow border-t border-gray-200 dark:border-white/10"></div>
      </div>

      <form @submit="onSubmit" class="space-y-5">
        <div class="space-y-1.5">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Email</label>
          <div class="relative">
            <input
                v-model="email" v-bind="emailAttrs" placeholder="name@example.com"
                class="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border text-gray-900 dark:text-white focus:outline-none focus:ring-1 transition placeholder-gray-400 dark:placeholder-gray-500 text-sm"
                :class="(errors.email && submitCount) ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-white/10 focus:border-brand-purple focus:ring-brand-purple'"
            >
            <i class="fas fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
          </div>
          <span v-if="errors.email && submitCount" class="text-xs text-red-500 ml-1 block">{{ errors.email }}</span>
        </div>

        <div class="space-y-1.5">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Họ và tên</label>
          <div class="relative">
            <input
                v-model="fullName" v-bind="fullNameAttrs" type="text" placeholder="Nguyễn Văn A"
                class="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border text-gray-900 dark:text-white focus:outline-none focus:ring-1 transition placeholder-gray-400 dark:placeholder-gray-500 text-sm"
                :class="(errors.fullName && submitCount) ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-white/10 focus:border-brand-purple focus:ring-brand-purple'"
            >
            <i class="fas fa-user absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
          </div>
          <span v-if="errors.fullName && submitCount" class="text-xs text-red-500 ml-1 block">{{ errors.fullName }}</span>
        </div>

        <div class="space-y-1.5">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Mật khẩu</label>
          <div class="relative">
            <input
                v-model="password" v-bind="passwordAttrs" :type="showPassword ? 'text' : 'password'" placeholder="••••••••"
                class="w-full pl-10 pr-10 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border text-gray-900 dark:text-white focus:outline-none focus:ring-1 transition placeholder-gray-400 dark:placeholder-gray-500 text-sm"
                :class="(errors.password && submitCount) ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-white/10 focus:border-brand-purple focus:ring-brand-purple'"
            >
            <i class="fas fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <button type="button" @click="showPassword = !showPassword" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition focus:outline-none">
              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </button>
          </div>
          <span v-if="errors.password && submitCount" class="text-xs text-red-500 ml-1 block">{{ errors.password }}</span>
        </div>

        <div class="space-y-1.5">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Nhập lại mật khẩu</label>
          <div class="relative">
            <input
                v-model="confirmPassword" v-bind="confirmPasswordAttrs" :type="showPassword ? 'text' : 'password'" placeholder="••••••••"
                class="w-full pl-10 pr-10 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border text-gray-900 dark:text-white focus:outline-none focus:ring-1 transition placeholder-gray-400 dark:placeholder-gray-500 text-sm"
                :class="(errors.confirmPassword && submitCount) ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-white/10 focus:border-brand-purple focus:ring-brand-purple'"
            >
            <i class="fas fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
          </div>
          <span v-if="errors.confirmPassword && submitCount" class="text-xs text-red-500 ml-1 block">{{ errors.confirmPassword }}</span>
        </div>

        <button type="submit" :disabled="isSubmitting"
                class="w-full py-3.5 px-4 bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wide mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
          <span v-if="isSubmitting"><i class="fas fa-spinner fa-spin mr-2"></i> Đang xử lý...</span>
          <span v-else>Đăng Ký</span>
        </button>

        <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Đã có tài khoản?
          <NuxtLink :to="ROUTER_LIST.LOGIN" class="font-bold text-brand-purple hover:text-brand-cyan transition">Đăng nhập ngay</NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useForm } from 'vee-validate';
import { ROUTER_LIST } from "~/constants/router.const.ts";

definePageMeta({
  middleware: 'guest'
})

const authStore = useAuthStore();
const showPassword = ref(false)

const { registerSchema } = useAppSchema();

const { handleSubmit, errors, defineField, isSubmitting, submitCount } = useForm({
  validationSchema: registerSchema,
});

const [fullName, fullNameAttrs] = defineField('fullName');
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword');

const onValidSubmit = async (values) => {
  try {
    await authStore.register({
      email: values.email,
      password: values.password,
      fullName: values.fullName
    });
  } catch (err) {}
};

const onSubmit = handleSubmit(onValidSubmit);

const handleSocialLogin = async (provider) => {
  try {
    await authStore.loginWithProvider(provider);
  } catch (err) {}
}
</script>