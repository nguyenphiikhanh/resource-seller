<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

// Import components
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {ROUTER_LIST} from "@/constants/routes";

// 1. Sử dụng Layout Guest
definePageMeta({
  layout: 'guest'
})

// 2. Định nghĩa Schema Validation (Có check khớp password)
const formSchema = toTypedSchema(z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự." }),
  email: z.string().email({ message: "Email không hợp lệ." }),
  password: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự." }),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Mật khẩu nhập lại không khớp.",
  path: ["confirmPassword"], // Lỗi sẽ hiện ở field confirmPassword
}))

// 3. Khởi tạo Form
const form = useForm({
  validationSchema: formSchema,
})

// 4. Hàm xử lý Submit
const onSubmit = form.handleSubmit((values) => {
  // Loại bỏ confirmPassword trước khi gửi lên API
  const { confirmPassword, ...payload } = values
  console.log('Register payload:', payload)

  // TODO: Gọi API Register tới Laravel Backend
  // await $fetch('/api/register', { method: 'POST', body: payload })
})
</script>

<template>
  <Card class="border-border shadow-lg">
    <CardHeader class="space-y-1">
      <CardTitle class="text-2xl font-bold text-center">Tạo tài khoản</CardTitle>
      <CardDescription class="text-center">
        Nhập thông tin bên dưới để bắt đầu hành trình
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form @submit="onSubmit" class="space-y-4">

        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Họ và tên</FormLabel>
            <FormControl>
              <Input placeholder="Nguyễn Văn A" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="email@example.com" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel>Mật khẩu</FormLabel>
            <FormControl>
              <Input type="password" placeholder="••••••••" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="confirmPassword">
          <FormItem>
            <FormLabel>Nhập lại mật khẩu</FormLabel>
            <FormControl>
              <Input type="password" placeholder="••••••••" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <Button type="submit" class="w-full font-bold">
          Đăng ký ngay
        </Button>
      </form>
    </CardContent>

    <CardFooter>
      <div class="text-sm text-center text-muted-foreground w-full">
        Đã có tài khoản?
        <NuxtLink :to="ROUTER_LIST.LOGIN" class="font-semibold text-primary underline underline-offset-4 hover:opacity-80">
          Đăng nhập
        </NuxtLink>
      </div>
    </CardFooter>
  </Card>
</template>