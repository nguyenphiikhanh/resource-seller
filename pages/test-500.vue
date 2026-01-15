<script setup lang="ts">
// createError là hàm có sẵn của Nuxt
// fatal: true là BẮT BUỘC để nó ép chuyển sang trang error.vue thay vì chỉ báo lỗi console
throw createError({
  statusCode: 500,
  statusMessage: 'Kết nối Database thất bại (Giả lập)',
  fatal: true,
})
</script>

<template>
  <div>Trang này sẽ không bao giờ hiện vì code trên đã chặn rồi</div>
</template>
