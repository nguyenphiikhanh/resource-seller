import {useToast} from "vue-toastification";

export const useAppToast = () => {
    // Khởi tạo instance của toast
    const toast = useToast();

    const toastSuccess = (msg: string) => {
        toast.success(msg);
    };

    const toastError = (msg: string) => {
        // Nếu msg rỗng hoặc null thì báo lỗi mặc định
        toast.error(msg || "Đã có lỗi xảy ra!");
    };

    const toastWarning = (msg: string) => {
        toast.warning(msg);
    };

    return {
        toastSuccess,
        toastError,
        toastWarning,
    };
};