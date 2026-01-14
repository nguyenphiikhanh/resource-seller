import {useAuthSchema} from "~/composables/schemas/auth";

export const useAppSchema = () => {
    const auth = useAuthSchema();

    return {
        ...auth,
    }
}