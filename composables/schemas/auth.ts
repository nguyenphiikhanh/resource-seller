// composables/schemas/auth.ts
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import {MIN_LENGH_PASSWORD, MIN_LENGTH_FULLNAME} from "~/constants/app.const";

export const useAuthSchema = () => {
    const { t } = useI18n();

    // const loginSchema = computed(() => toTypedSchema(
    //     z.object({
    //         email: z
    //             .email()
    //             .nonempty()
    //             .min(1, t('validation.required')),
    //         password: z
    //             .string({ required_error: msg('validation.required') })
    //             .min(1, { message: msg('validation.required') })
    //             .min(6, { message: msg('validation.min_length', { min: 6 }) }),
    //     })
    // ));

    const registerSchema = computed(() => toTypedSchema(
        z.object({
            email: z
                .email({ message: t('validation.auth.invalid_email') })
                .nonempty(t('validation.required')),
            fullName: z
                .string(t('validation.required'))
                .nonempty(t('validation.required'))
                .min(MIN_LENGTH_FULLNAME, t('validation.auth.min_name_length', {p: MIN_LENGTH_FULLNAME})),
            password: z
                .string(t('validation.required'))
                .nonempty(t('validation.required'))
                .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, t('validation.auth.password_regex'))
                .min(MIN_LENGH_PASSWORD, t('validation.auth.min_password_length', {p: MIN_LENGH_PASSWORD})),
            confirmPassword: z
                .string(t('validation.required'))
                .nonempty(t('validation.required'))
        }).refine((data) => data.password === data.confirmPassword, {
            message: t('validation.auth.mismatch_password'),
            path: ["confirmPassword"],
        })
    ));

    return {
        // loginSchema,
        registerSchema
    };
};