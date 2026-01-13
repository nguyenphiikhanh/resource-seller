<template>
  <footer class="bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-white/5 mt-12 py-10 md:py-12 transition-colors duration-300">
    <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-8">
      
      <div class="col-span-2 md:col-span-1 text-center md:text-left">
        <NuxtLink to="/" class="inline-flex md:flex items-center gap-2 mb-4 group justify-center md:justify-start">
          <div class="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-cyan rounded flex items-center justify-center text-white font-bold group-hover:rotate-12 transition shadow-lg shrink-0">
            N
          </div>
          <span class="text-xl font-bold text-gray-900 dark:text-white transition-colors">MMO<span class="text-brand-cyan">DUYLON</span></span>
        </NuxtLink>
        <p class="text-gray-600 dark:text-gray-500 text-sm leading-relaxed transition-colors max-w-sm mx-auto md:mx-0">
          Hệ thống cung cấp tài nguyên MMO tự động lớn nhất Việt Nam. Uy tín, Bảo mật, Tốc độ xử lý giao dịch realtime.
        </p>
      </div>

      <div class="col-span-2 md:col-span-2 flex justify-center md:grid md:grid-cols-2 gap-20 md:gap-8">
        <div class="text-left">
          <h4 class="text-gray-900 dark:text-white font-bold mb-4 uppercase text-sm tracking-wider transition-colors border-b-2 border-brand-purple/20 md:border-none pb-2 md:pb-0 inline-block md:block">Sản Phẩm</h4>
          <ul class="text-gray-600 dark:text-gray-500 text-sm space-y-2.5 transition-colors">
            <li><a href="#" class="hover:text-brand-cyan transition block py-0.5"><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>Ads Facebook</a></li>
            <li><a href="#" class="hover:text-brand-cyan transition block py-0.5"><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>Google / YT</a></li>
            <li><a href="#" class="hover:text-brand-cyan transition block py-0.5"><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>TikTok Shop</a></li>
            <li><a href="#" class="hover:text-brand-cyan transition block py-0.5"><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>Tools MMO</a></li>
          </ul>
        </div>

        <div class="text-left">
          <h4 class="text-gray-900 dark:text-white font-bold mb-4 uppercase text-sm tracking-wider transition-colors border-b-2 border-brand-green/20 md:border-none pb-2 md:pb-0 inline-block md:block">Hỗ Trợ</h4>
          <ul class="text-gray-600 dark:text-gray-500 text-sm space-y-2.5 transition-colors">
            <li><a href="#" class="hover:text-brand-cyan transition block py-0.5"><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>Nạp tiền</a></li>
            <li><a href="#" class="hover:text-brand-cyan transition block py-0.5"><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>Bảo hành</a></li>
            <li><a href="#" class="hover:text-brand-cyan transition block py-0.5"><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>Liên hệ</a></li>
            <li><a href="#" class="hover:text-brand-cyan transition block py-0.5"><i class="fas fa-angle-right mr-2 text-xs opacity-50"></i>Check UID</a></li>
          </ul>
        </div>
      </div>

      <div class="col-span-2 md:col-span-1 text-center md:text-left flex flex-col items-center md:items-start">
        <h4 class="text-gray-900 dark:text-white font-bold mb-4 uppercase text-sm tracking-wider transition-colors">Thanh Toán</h4>
        <div class="flex gap-2 flex-wrap justify-center md:justify-start">
          
          <div class="w-12 h-8 bg-white rounded flex items-center justify-center overflow-hidden border border-gray-200 dark:border-white/10 hover:scale-110 shadow-sm dark:shadow-none transition">
            <img src="https://avatars.githubusercontent.com/u/36770798?s=200&v=4" class="h-full object-contain p-0.5" alt="Momo">
          </div>
          
          <div class="w-12 h-8 bg-white rounded flex items-center justify-center overflow-hidden border border-gray-200 dark:border-white/10 hover:scale-110 shadow-sm dark:shadow-none transition">
            <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-Vietcombank.png" class="h-6 object-contain" alt="Vietcombank">
          </div>
          
          <div class="w-12 h-8 bg-white rounded flex items-center justify-center overflow-hidden border border-gray-200 dark:border-white/10 hover:scale-110 shadow-sm dark:shadow-none transition">
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png" class="h-5 object-contain" alt="USDT">
          </div>
          
          <div class="w-12 h-8 bg-white rounded flex items-center justify-center overflow-hidden border border-gray-200 dark:border-white/10 hover:scale-110 shadow-sm dark:shadow-none transition">
             <img src="https://cdn-icons-png.flaticon.com/512/174/174861.png" class="h-5 object-contain" alt="Paypal">
          </div>

        </div>
        <div class="mt-6 md:mt-4 bg-gray-100 dark:bg-white/5 py-2 px-4 rounded-full inline-flex md:flex">
            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-xs transition-colors">
                <i class="fas fa-lock text-brand-green"></i> 
                <span>Bảo mật <span class="font-bold">SSL 256-bit</span></span>
            </div>
        </div>
      </div>

    </div>
    
    <div class="border-t border-gray-200 dark:border-white/5 mt-10 md:mt-12 pt-8 text-center transition-colors px-4">
      <p class="text-gray-500 dark:text-gray-600 text-xs">
        &copy; 2026 MMODUYLON. All Rights Reserved. Designed by <span class="text-brand-purple font-semibold">You</span>.
      </p>
    </div>
  </footer>
</template>