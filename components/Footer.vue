<template>
  <footer
    class="mt-12 border-t border-gray-200 bg-white py-10 transition-colors duration-300 md:py-12 dark:border-white/5 dark:bg-dark-800"
  >
    <div class="container mx-auto grid grid-cols-2 gap-x-4 gap-y-10 px-4 md:grid-cols-4 md:gap-8">
      <div class="col-span-2 text-center md:col-span-1 md:text-left">
        <NuxtLink
          to="/"
          class="group mb-4 inline-flex items-center justify-center gap-2 md:flex md:justify-start"
        >
          <div
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-gradient-to-br from-brand-purple to-brand-cyan font-bold text-white shadow-lg transition group-hover:rotate-12"
          >
            N
          </div>
          <span class="text-xl font-bold text-gray-900 transition-colors dark:text-white"
            >MMO<span class="text-brand-cyan">DUYLON</span></span
          >
        </NuxtLink>
        <p
          class="mx-auto max-w-sm text-sm leading-relaxed text-gray-600 transition-colors md:mx-0 dark:text-gray-500"
        >
          Hệ thống cung cấp tài nguyên MMO tự động lớn nhất Việt Nam. Uy tín, Bảo mật, Tốc độ xử lý
          giao dịch realtime.
        </p>
      </div>

      <div
        class="col-span-2 flex justify-center gap-20 md:col-span-2 md:grid md:grid-cols-2 md:gap-8"
      >
        <div class="text-left">
          <h4
            class="mb-4 inline-block border-b-2 border-brand-purple/20 pb-2 text-sm font-bold uppercase tracking-wider text-gray-900 transition-colors md:block md:border-none md:pb-0 dark:text-white"
          >
            Sản Phẩm
          </h4>
          <ul class="space-y-2.5 text-sm text-gray-600 transition-colors dark:text-gray-500">
            <li>
              <a href="#" class="block py-0.5 transition hover:text-brand-cyan"
                ><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>Ads Facebook</a
              >
            </li>
            <li>
              <a href="#" class="block py-0.5 transition hover:text-brand-cyan"
                ><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>Google / YT</a
              >
            </li>
            <li>
              <a href="#" class="block py-0.5 transition hover:text-brand-cyan"
                ><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>TikTok Shop</a
              >
            </li>
            <li>
              <a href="#" class="block py-0.5 transition hover:text-brand-cyan"
                ><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>Tools MMO</a
              >
            </li>
          </ul>
        </div>

        <div class="text-left">
          <h4
            class="mb-4 inline-block border-b-2 border-brand-green/20 pb-2 text-sm font-bold uppercase tracking-wider text-gray-900 transition-colors md:block md:border-none md:pb-0 dark:text-white"
          >
            Hỗ Trợ
          </h4>
          <ul class="space-y-2.5 text-sm text-gray-600 transition-colors dark:text-gray-500">
            <li>
              <a href="#" class="block py-0.5 transition hover:text-brand-cyan"
                ><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>Nạp tiền</a
              >
            </li>
            <li>
              <a href="#" class="block py-0.5 transition hover:text-brand-cyan"
                ><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>Bảo hành</a
              >
            </li>
            <li>
              <a href="#" class="block py-0.5 transition hover:text-brand-cyan"
                ><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>Liên hệ</a
              >
            </li>
            <li>
              <a href="#" class="block py-0.5 transition hover:text-brand-cyan"
                ><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>Check UID</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div
        class="col-span-2 flex flex-col items-center text-center md:col-span-1 md:items-start md:text-left"
      >
        <h4
          class="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900 transition-colors dark:text-white"
        >
          Thanh Toán
        </h4>
        <div class="flex flex-wrap justify-center gap-2 md:justify-start">
          <div
            class="flex h-8 w-12 items-center justify-center overflow-hidden rounded border border-gray-200 bg-white shadow-sm transition hover:scale-110 dark:border-white/10 dark:shadow-none"
          >
            <img
              src="https://avatars.githubusercontent.com/u/36770798?s=200&v=4"
              class="h-full object-contain p-0.5"
              alt="Momo"
            />
          </div>

          <div
            class="flex h-8 w-12 items-center justify-center overflow-hidden rounded border border-gray-200 bg-white shadow-sm transition hover:scale-110 dark:border-white/10 dark:shadow-none"
          >
            <img
              src="https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-Vietcombank.png"
              class="h-6 object-contain"
              alt="Vietcombank"
            />
          </div>

          <div
            class="flex h-8 w-12 items-center justify-center overflow-hidden rounded border border-gray-200 bg-white shadow-sm transition hover:scale-110 dark:border-white/10 dark:shadow-none"
          >
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
              class="h-5 object-contain"
              alt="USDT"
            />
          </div>

          <div
            class="flex h-8 w-12 items-center justify-center overflow-hidden rounded border border-gray-200 bg-white shadow-sm transition hover:scale-110 dark:border-white/10 dark:shadow-none"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174861.png"
              class="h-5 object-contain"
              alt="Paypal"
            />
          </div>
        </div>
        <div
          class="mt-6 inline-flex rounded-full bg-gray-100 px-4 py-2 md:mt-4 md:flex dark:bg-white/5"
        >
          <div
            class="flex items-center gap-2 text-xs text-gray-600 transition-colors dark:text-gray-400"
          >
            <i class="fas fa-lock text-brand-green"></i>
            <span>Bảo mật <span class="font-bold">SSL 256-bit</span></span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mt-10 border-t border-gray-200 px-4 pt-8 text-center transition-colors md:mt-12 dark:border-white/5"
    >
      <p class="text-xs text-gray-500 dark:text-gray-600">
        &copy; 2026 MMODUYLON. All Rights Reserved. Designed by
        <span class="font-semibold text-brand-purple">You</span>.
      </p>
    </div>
  </footer>
</template>
