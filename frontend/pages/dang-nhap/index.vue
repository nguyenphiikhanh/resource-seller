<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

// Import các UI component
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

// 2. Định nghĩa Schema Validation bằng Zod
const formSchema = toTypedSchema(z.object({
  email: z.string()
      .min(1, { message: "Vui lòng nhập email." })
      .email({ message: "Email không hợp lệ." }),
  password: z.string()
      .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự." })
}))

// 3. Khởi tạo Form
const form = useForm({
  validationSchema: formSchema,
})

// 4. Hàm xử lý Submit
const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted:', values)
  // TODO: Gọi API Login tới Laravel Backend ở đây
  // Ví dụ: await $fetch('/api/login', { method: 'POST', body: values })
})
</script>

<template>
  <Card class="border-border shadow-lg">
    <CardHeader class="space-y-1">
      <CardTitle class="text-2xl font-bold text-center">Đăng nhập</CardTitle>
      <CardDescription class="text-center">
        Nhập email và mật khẩu để truy cập hệ thống
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form @submit="onSubmit" class="space-y-4">

        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="admin@redlaravel.com" v-bind="componentField" />
            </FormControl>
            <FormMessage /> </FormItem>
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

        <Button type="submit" class="w-full font-bold">
          Đăng nhập
        </Button>
      </form>
    </CardContent>

    <CardFooter>
      <div class="text-sm text-center text-muted-foreground w-full">
        Chưa có tài khoản?
        <NuxtLink :to="ROUTER_LIST.REGISTER" class="font-semibold text-primary underline underline-offset-4 hover:opacity-80">
          Đăng ký ngay
        </NuxtLink>
      </div>
    </CardFooter>
  </Card>
</template>