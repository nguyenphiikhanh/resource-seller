import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

// Schema cho Login
export const loginSchema = toTypedSchema(
    z.object({
        email: z
            .string()
            .nonempty('Vui lòng nhập email')
            .email('Email không hợp lệ'),
        password: z
            .string()
            .nonempty('Vui lòng nhập mật khẩu')
            .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    })
);

// Schema cho Register
export const registerSchema = toTypedSchema(
    z.object({
        fullName: z
            .string()
            .nonempty('Vui lòng nhập họ tên')
            .min(2, 'Họ tên quá ngắn'),
        email: z
            .string()
            .nonempty('Vui lòng nhập email')
            .email('Email không hợp lệ'),
        password: z
            .string()
            .nonempty('Vui lòng nhập mật khẩu')
            .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
        confirmPassword: z
            .string()
            .nonempty('Vui lòng nhập lại mật khẩu')
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Mật khẩu nhập lại không khớp",
        path: ["confirmPassword"], // Hiển thị lỗi ở field confirmPassword
    })
);