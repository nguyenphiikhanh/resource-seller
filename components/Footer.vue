<template>
  <footer class="bg-dark-800 border-t border-white/5 mt-12 py-12">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      
      <div>
        <NuxtLink to="/" class="flex items-center gap-2 mb-4 group">
          <div class="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-cyan rounded flex items-center justify-center text-white font-bold group-hover:rotate-12 transition">
            N
          </div>
          <span class="text-xl font-bold text-white">MMO<span class="text-brand-cyan">DUYLON</span></span>
        </NuxtLink>
        <p class="text-gray-500 text-sm leading-relaxed">
          Hệ thống cung cấp tài nguyên MMO tự động lớn nhất Việt Nam. Uy tín, Bảo mật, Tốc độ xử lý giao dịch realtime.
        </p>
      </div>

      <div>
        <h4 class="text-white font-bold mb-4 uppercase text-sm tracking-wider">Sản Phẩm</h4>
        <ul class="text-gray-500 text-sm space-y-2">
          <li><a href="#" class="hover:text-brand-cyan transition"><i class="fas fa-angle-right mr-2 text-xs"></i>Facebook Ads</a></li>
          <li><a href="#" class="hover:text-brand-cyan transition"><i class="fas fa-angle-right mr-2 text-xs"></i>Google / Youtube</a></li>
          <li><a href="#" class="hover:text-brand-cyan transition"><i class="fas fa-angle-right mr-2 text-xs"></i>TikTok Shop</a></li>
          <li><a href="#" class="hover:text-brand-cyan transition"><i class="fas fa-angle-right mr-2 text-xs"></i>Software / Tools</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-bold mb-4 uppercase text-sm tracking-wider">Hỗ Trợ</h4>
        <ul class="text-gray-500 text-sm space-y-2">
          <li><a href="#" class="hover:text-brand-cyan transition"><i class="fas fa-angle-right mr-2 text-xs"></i>Nạp tiền & Hoàn tiền</a></li>
          <li><a href="#" class="hover:text-brand-cyan transition"><i class="fas fa-angle-right mr-2 text-xs"></i>Quy định bảo hành</a></li>
          <li><a href="#" class="hover:text-brand-cyan transition"><i class="fas fa-angle-right mr-2 text-xs"></i>Liên hệ Admin</a></li>
          <li><a href="#" class="hover:text-brand-cyan transition"><i class="fas fa-angle-right mr-2 text-xs"></i>Check Live UID</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-bold mb-4 uppercase text-sm tracking-wider">Thanh Toán</h4>
        <div class="flex gap-2 flex-wrap">
          <div class="w-12 h-8 bg-white rounded flex items-center justify-center overflow-hidden border border-white/10 hover:scale-110 transition">
            <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" class="h-full object-contain p-0.5" alt="Momo">
          </div>
          <div class="w-12 h-8 bg-white rounded flex items-center justify-center overflow-hidden border border-white/10 hover:scale-110 transition">
            <img src="https://inkythuatso.com/uploads/images/2021/12/logo-vcb-inkythuatso-01-13-16-26-39.jpg" class="h-full object-contain" alt="Vietcombank">
          </div>
          <div class="w-12 h-8 bg-white rounded flex items-center justify-center overflow-hidden border border-white/10 hover:scale-110 transition">
            <img src="https://cryptologos.cc/logos/tether-usdt-logo.png" class="h-full object-contain p-1" alt="USDT">
          </div>
          <div class="w-12 h-8 bg-white rounded flex items-center justify-center overflow-hidden border border-white/10 hover:scale-110 transition">
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" class="h-full object-contain p-1" alt="Paypal">
          </div>
        </div>
        <div class="mt-4">
            <h4 class="text-white font-bold mb-2 uppercase text-xs tracking-wider">Bảo mật</h4>
            <div class="flex items-center gap-2 text-gray-500 text-xs">
                <i class="fas fa-lock text-brand-green"></i> SSL Secured 256-bit
            </div>
        </div>
      </div>

    </div>
    
    <div class="border-t border-white/5 mt-12 pt-8 text-center">
      <p class="text-gray-600 text-xs">
        &copy; 2026 MMODUYLON. All Rights Reserved. Designed by <span class="text-brand-purple">You</span>.
      </p>
    </div>
  </footer>
</template>